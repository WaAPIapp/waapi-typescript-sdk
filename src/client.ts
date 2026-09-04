import { GeneratedActions } from "./generated.js";
import { ConnectionError } from "./errors.js";
import {
  DEFAULT_BASE_URL,
  DEFAULT_TIMEOUT_MS,
  type FetchLike,
  interpret,
  prune,
} from "./http.js";

export interface WaAPIOptions {
  /** API token from https://waapi.app/user/api-tokens */
  token: string;
  /** Default instance. Any call can override it; a call with neither throws. */
  instanceId?: number | string;
  baseUrl?: string;
  /** Per-request timeout in milliseconds. Default 30000. */
  timeoutMs?: number;
  /** Injectable for tests; defaults to the global fetch. */
  fetch?: FetchLike;
}

export interface RequestOptions {
  json?: unknown;
  /**
   * Leave this on unless you know the endpoint answers without the status
   * envelope. Turning it off is what makes a failed send look successful.
   */
  checkBodyStatus?: boolean;
}

const VERSION = "0.1.0";

export class WaAPI extends GeneratedActions {
  readonly baseUrl: string;
  private readonly token: string;
  private readonly defaultInstanceId?: number | string;
  private readonly timeoutMs: number;
  private readonly fetchImpl: FetchLike;

  constructor(options: WaAPIOptions) {
    super();
    if (!options?.token) {
      throw new Error(
        "an API token is required — create one at https://waapi.app/user/api-tokens",
      );
    }
    this.token = options.token;
    this.defaultInstanceId = options.instanceId;
    this.baseUrl = (options.baseUrl ?? DEFAULT_BASE_URL).replace(/\/+$/, "");
    this.timeoutMs = options.timeoutMs ?? DEFAULT_TIMEOUT_MS;
    this.fetchImpl = options.fetch ?? globalThis.fetch;

    if (typeof this.fetchImpl !== "function") {
      throw new Error(
        "no fetch implementation available — Node 18 or newer is required, " +
          "or pass one as options.fetch",
      );
    }
  }

  /** Resolve the instance for a call, falling back to the client-wide one. */
  protected resolveInstance(instanceId?: number | string): number | string {
    const resolved = instanceId ?? this.defaultInstanceId;
    if (resolved === undefined || resolved === null) {
      throw new Error(
        "no instance id given and none configured on the client — " +
          "pass instanceId to the call or to new WaAPI({...})",
      );
    }
    return resolved;
  }

  async request(method: string, path: string, options: RequestOptions = {}): Promise<any> {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), this.timeoutMs);

    let response: Response;
    try {
      response = await this.fetchImpl(`${this.baseUrl}${path}`, {
        method,
        headers: {
          authorization: `Bearer ${this.token}`,
          accept: "application/json",
          "content-type": "application/json",
          "user-agent": `waapi-typescript-sdk/${VERSION}`,
        },
        body: options.json === undefined ? undefined : JSON.stringify(options.json),
        signal: controller.signal,
      });
    } catch (cause) {
      // An aborted request and a DNS failure both land here, and neither is an
      // HTTP status the mapper could classify.
      const aborted = cause instanceof Error && cause.name === "AbortError";
      throw new ConnectionError(
        aborted
          ? `Request to WaAPI timed out after ${this.timeoutMs}ms`
          : `Could not reach WaAPI: ${cause instanceof Error ? cause.message : String(cause)}`,
        cause,
      );
    } finally {
      clearTimeout(timer);
    }

    return interpret(response, { checkBodyStatus: options.checkBodyStatus ?? true });
  }

  /**
   * Call any client action by its API name.
   *
   * Every generated method is a typed wrapper around this. Use it directly for
   * an action added to the API since the last release.
   */
  async action(
    name: string,
    payload: Record<string, unknown> = {},
    instanceId?: number | string,
  ): Promise<any> {
    const target = this.resolveInstance(instanceId);
    return this.request("POST", `/instances/${target}/client/action/${name}`, {
      json: prune(payload),
    });
  }

  // -- instances (REST routes, not actions) -----------------------------------

  async getInstances(): Promise<any> {
    return this.request("GET", "/instances");
  }

  async createInstance(): Promise<any> {
    return this.request("POST", "/instances");
  }

  async getInstance(instanceId?: number | string): Promise<any> {
    return this.request("GET", `/instances/${this.resolveInstance(instanceId)}`);
  }

  async deleteInstance(instanceId?: number | string): Promise<any> {
    return this.request("DELETE", `/instances/${this.resolveInstance(instanceId)}`);
  }

  async getStatus(instanceId?: number | string): Promise<any> {
    return this.request("GET", `/instances/${this.resolveInstance(instanceId)}/client/status`);
  }

  async getQrCode(instanceId?: number | string): Promise<any> {
    return this.request("GET", `/instances/${this.resolveInstance(instanceId)}/client/qr`);
  }
}
