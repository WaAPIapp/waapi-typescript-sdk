/**
 * Test helpers.
 *
 * Nothing here touches the network: every client gets an injected fetch, so
 * the suite needs no token and no connected account.
 */

import { expect } from "vitest";
import { WaAPI } from "../src/client.js";

export const INSTANCE_ID = 1;

export interface Call {
  url: string;
  method: string;
  headers: Record<string, string>;
  body: any;
}

export function fake(
  responder: (call: Call) => { status?: number; body?: unknown; headers?: Record<string, string> } = () => ({
    status: 200,
    body: { status: "success", data: {} },
  }),
) {
  const calls: Call[] = [];

  const client = new WaAPI({
    token: "test-token",
    instanceId: INSTANCE_ID,
    fetch: async (url, init) => {
      const headers = Object.fromEntries(
        Object.entries((init?.headers ?? {}) as Record<string, string>),
      );
      const call: Call = {
        url,
        method: init?.method ?? "GET",
        headers,
        body: init?.body ? JSON.parse(init.body as string) : undefined,
      };
      calls.push(call);
      const { status = 200, body = { status: "success" }, headers: h = {} } = responder(call);
      return new Response(body === undefined ? null : JSON.stringify(body), {
        status,
        headers: { "content-type": "application/json", ...h },
      });
    },
  });

  return { client, calls };
}

/**
 * Assert one action was called with exactly this payload.
 *
 * Exactly, not "contains": a generated method's likely defect is a field that
 * leaks into the body or one that never arrives, and a subset check sees
 * neither.
 */
export function expectAction(calls: Call[], name: string, payload: Record<string, unknown>): void {
  expect(calls).toHaveLength(1);
  expect(calls[0]!.url).toContain(`/instances/${INSTANCE_ID}/client/action/${name}`);
  expect(calls[0]!.body).toEqual(payload);
}
