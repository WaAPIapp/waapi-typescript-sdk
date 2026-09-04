/**
 * Transport and error mapping.
 *
 * Every call goes through `interpret`, so nothing can reach a caller without
 * having been checked for the failures that do not announce themselves as
 * failures.
 */

import {
  AuthenticationError,
  ConnectionError,
  FailedActionError,
  NotFoundError,
  RateLimitError,
  ServerError,
  ValidationError,
  WaAPIError,
} from "./errors.js";

export const DEFAULT_BASE_URL = "https://waapi.app/api/v1";
export const DEFAULT_TIMEOUT_MS = 30_000;

export type FetchLike = (input: string, init?: RequestInit) => Promise<Response>;

function brief(body: unknown, limit = 400): string {
  const text = typeof body === "string" ? body : JSON.stringify(body);
  if (!text) return "";
  return text.length <= limit ? text : `${text.slice(0, limit)}...`;
}

async function decode(response: Response): Promise<unknown> {
  const text = await response.text();
  if (!text) return undefined;
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

export async function interpret(
  response: Response,
  { checkBodyStatus = true }: { checkBodyStatus?: boolean } = {},
): Promise<any> {
  const body = await decode(response);
  const status = response.status;

  if (status === 401 || status === 403) {
    throw new AuthenticationError(
      `WaAPI rejected the API token (HTTP ${status}): ${brief(body)}`,
    );
  }
  if (status === 404) throw new NotFoundError();
  if (status === 422) throw new ValidationError(body);
  if (status === 429) {
    const header = response.headers.get("retry-after");
    throw new RateLimitError(
      `Rate limited by WaAPI (HTTP 429): ${brief(body)}`,
      header ? Number(header) : undefined,
    );
  }
  if (status === 400) {
    throw new FailedActionError(`WaAPI rejected the request: ${brief(body)}`, body);
  }
  if (status >= 500) throw new ServerError(`WaAPI returned HTTP ${status}: ${brief(body)}`);
  if (status < 200 || status >= 300) {
    throw new WaAPIError(`WaAPI returned HTTP ${status}: ${brief(body)}`);
  }

  // A 2xx is not proof the action happened. The API answers 200 with
  // {"status": "error"} when, for example, the instance is not connected.
  if (checkBodyStatus && body && typeof body === "object" && !Array.isArray(body)) {
    const envelope = (body as Record<string, unknown>)["status"];
    if (envelope !== undefined && envelope !== "success") {
      throw new FailedActionError(
        `WaAPI accepted the request but did not carry the action out: ${brief(body)}`,
        body,
      );
    }
  }

  return body;
}

/** Drop keys whose value is undefined, so optional parameters stay optional. */
export function prune(payload: Record<string, unknown>): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(payload)) {
    if (value !== undefined) out[key] = value;
  }
  return out;
}

export { ConnectionError };
