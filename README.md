# WaAPI TypeScript SDK

Official TypeScript/JavaScript client for the [WaAPI](https://waapi.app) REST API —
send and receive WhatsApp messages, manage chats, groups and channels.

[![npm](https://img.shields.io/npm/v/%40waapiapp%2Fsdk?style=for-the-badge)](https://www.npmjs.com/package/@waapiapp/sdk)
[![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)](LICENSE)

```bash
npm install @waapiapp/sdk
```

## Quick start

```ts
import { WaAPI } from "@waapiapp/sdk";

const client = new WaAPI({ token: process.env.WAAPI_TOKEN!, instanceId: 123 });

await client.sendMessage({
  chatId: "4915112345678@c.us",
  message: "Deployment finished.",
});
```

Get a token at [waapi.app/user/api-tokens](https://waapi.app/user/api-tokens) and
create an instance connected to your number.

**Zero dependencies.** Node 18+ (uses the built-in `fetch`), ESM and CommonJS,
types included.

### The chat ID is the one thing to get right

Its suffix decides where the message lands, and a wrong suffix is accepted and
delivers nothing:

| Target | Format |
|---|---|
| One person | `4915112345678@c.us` |
| Group | `123456789-123456789@g.us` |
| Channel | `123456789@newsletter` |

## Coverage

All **122 client actions** are typed methods, generated from the same OpenAPI
specification the n8n node and the MCP tools come from — so they track the API
instead of drifting behind it.

```ts
await client.createGroup({ groupName: "Ops", groupParticipants: ["4915112345678@c.us"] });
await client.sendMedia({ chatId: "4915112345678@c.us", mediaUrl: "https://example.com/report.pdf" });
await client.getChats({ limit: 50 });
await client.getContacts();
```

Every method takes a single options object, and every option type is exported:

```ts
import type { SendMessageOptions } from "@waapiapp/sdk";
```

An action added to the API since the last release is reachable by name:

```ts
await client.action("some-new-action", { chatId: "4915112345678@c.us" });
```

## Errors

A successful HTTP exchange is not proof the message was sent. The API answers
`200` with `{"status": "error"}` when, for example, the instance is not
connected — so the SDK throws on that too, rather than resolving with a body
that looks like success.

```ts
import { AuthenticationError, RateLimitError, FailedActionError } from "@waapiapp/sdk";

try {
  await client.sendMessage({ chatId: "4915112345678@c.us", message: "Hi" });
} catch (error) {
  if (error instanceof AuthenticationError) { /* token wrong or expired */ }
  else if (error instanceof RateLimitError) { await sleep((error.retryAfter ?? 5) * 1000); }
  else if (error instanceof FailedActionError) { /* accepted, not carried out */ }
}
```

| Error | Thrown on |
|---|---|
| `AuthenticationError` | HTTP 401, 403 |
| `NotFoundError` | HTTP 404 |
| `ValidationError` | HTTP 422 — `.errors` holds the field errors |
| `RateLimitError` | HTTP 429 — `.retryAfter` in seconds when the API sends it |
| `FailedActionError` | HTTP 400, **and HTTP 200 with `status: error`** |
| `ServerError` | HTTP 5xx |
| `ConnectionError` | timeout, DNS, refused connection |

All extend `WaAPIError`.

## Configuration

```ts
new WaAPI({
  token: "...",                        // required
  instanceId: 123,                     // optional; per-call instanceId overrides it
  baseUrl: "https://waapi.app/api/v1",
  timeoutMs: 30_000,
  fetch: myFetch,                      // optional; for tests or a custom agent
});
```

Passing `instanceId` to the client keeps single-instance code short. Any call can
override it, and a call with neither throws before a request is sent.

## Development

```bash
npm install
npm test          # vitest, no network
npm run build     # tsup, ESM + CJS + types
```

See [CONTRIBUTING.md](CONTRIBUTING.md) — the method surface is generated, not
hand-written.

## License

MIT. Not affiliated with, endorsed or sponsored by WhatsApp LLC or Meta.
WhatsApp is a trademark of WhatsApp LLC.
