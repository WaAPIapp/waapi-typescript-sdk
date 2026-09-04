import { describe, expect, test } from "vitest";
import {
  AuthenticationError,
  ConnectionError,
  FailedActionError,
  NotFoundError,
  RateLimitError,
  ServerError,
  ValidationError,
  WaAPI,
  WaAPIError,
} from "../src/index.js";
import { fake } from "./helpers.js";

describe("the failure that looks like a success", () => {
  test("HTTP 200 with status:error throws", async () => {
    // The API answers 200 with an error body when the instance is not
    // connected. Code that only checks response.ok reports a message that was
    // never sent as delivered.
    const { client } = fake(() => ({
      status: 200,
      body: { status: "error", message: "instance not ready" },
    }));

    await expect(
      client.sendMessage({ chatId: "4915112345678@c.us", message: "hi" }),
    ).rejects.toThrow(FailedActionError);
  });

  test("HTTP 200 with status:success returns the body", async () => {
    const { client } = fake(() => ({ status: 200, body: { status: "success", data: { id: "abc" } } }));
    await expect(client.sendMessage({ chatId: "x@c.us", message: "hi" })).resolves.toMatchObject({
      data: { id: "abc" },
    });
  });

  test("the envelope check can be turned off", async () => {
    const { client } = fake(() => ({ status: 200, body: { status: "error" } }));
    await expect(
      client.request("GET", "/instances", { checkBodyStatus: false }),
    ).resolves.toEqual({ status: "error" });
  });
});

describe("status code mapping", () => {
  test.each([
    [401, AuthenticationError],
    [403, AuthenticationError],
    [404, NotFoundError],
    [422, ValidationError],
    [429, RateLimitError],
    [400, FailedActionError],
    [500, ServerError],
    [503, ServerError],
    [418, WaAPIError],
  ])("HTTP %i", async (status, expected) => {
    const { client } = fake(() => ({ status, body: { message: "nope" } }));
    await expect(client.getInstances()).rejects.toThrow(expected as any);
  });

  test("ValidationError carries the errors", async () => {
    const { client } = fake(() => ({ status: 422, body: { errors: { chatId: ["required"] } } }));
    await expect(client.getInstances()).rejects.toMatchObject({
      errors: { errors: { chatId: ["required"] } },
    });
  });

  test("RateLimitError exposes retryAfter", async () => {
    const { client } = fake(() => ({ status: 429, body: {}, headers: { "retry-after": "12" } }));
    await expect(client.getInstances()).rejects.toMatchObject({ retryAfter: 12 });
  });

  test("a non-JSON body does not crash the mapper", async () => {
    const client = new WaAPI({
      token: "t",
      instanceId: 1,
      fetch: async () => new Response("<html>gateway</html>", { status: 502 }),
    });
    await expect(client.getInstances()).rejects.toThrow(ServerError);
  });

  test("a network failure becomes ConnectionError, not an unhandled reject", async () => {
    const client = new WaAPI({
      token: "t",
      instanceId: 1,
      fetch: async () => {
        throw new TypeError("fetch failed");
      },
    });
    await expect(client.getInstances()).rejects.toThrow(ConnectionError);
  });
});

describe("request shaping", () => {
  test("undefined fields are not sent", async () => {
    const { client, calls } = fake();
    await client.sendMessage({ chatId: "x@c.us", message: "hi" });
    expect(calls[0]!.body).toEqual({ chatId: "x@c.us", message: "hi" });
  });

  test("instanceId falls back to the client", async () => {
    const { client, calls } = fake();
    await client.sendMessage({ chatId: "x@c.us", message: "hi" });
    expect(calls[0]!.url).toContain("/instances/1/client/action/send-message");
  });

  test("a per-call instanceId wins", async () => {
    const { client, calls } = fake();
    await client.sendMessage({ chatId: "x@c.us", message: "hi", instanceId: 99 });
    expect(calls[0]!.url).toContain("/instances/99/");
  });

  test("a missing instanceId is refused before the request", async () => {
    let called = false;
    const client = new WaAPI({
      token: "t",
      fetch: async () => {
        called = true;
        return new Response("{}", { status: 200 });
      },
    });
    await expect(client.sendMessage({ chatId: "x@c.us", message: "hi" })).rejects.toThrow(
      /no instance id/,
    );
    expect(called).toBe(false);
  });

  test("an empty token is refused", () => {
    expect(() => new WaAPI({ token: "" })).toThrow(/API token is required/);
  });

  test("the authorization header is set", async () => {
    const { client, calls } = fake();
    await client.getInstances();
    expect(calls[0]!.headers["authorization"]).toBe("Bearer test-token");
    expect(calls[0]!.headers["user-agent"]).toMatch(/^waapi-typescript-sdk\//);
  });

  test("the generic action escape hatch works", async () => {
    const { client, calls } = fake();
    await client.action("some-future-action", { foo: "bar" });
    expect(calls[0]!.url).toContain("/client/action/some-future-action");
    expect(calls[0]!.body).toEqual({ foo: "bar" });
  });
});

test("the generated surface is not empty", async () => {
  const { GeneratedActions } = await import("../src/generated.js");
  const methods = Object.getOwnPropertyNames(GeneratedActions.prototype).filter(
    (n) => n !== "constructor",
  );
  expect(methods.length).toBeGreaterThan(100);
});
