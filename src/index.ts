/**
 * Official TypeScript SDK for the WaAPI REST API.
 *
 *     import { WaAPI } from "@waapiapp/sdk";
 *
 *     const client = new WaAPI({ token: "...", instanceId: 123 });
 *     await client.sendMessage({ chatId: "4915112345678@c.us", message: "Hello" });
 */

export { WaAPI, type WaAPIOptions, type RequestOptions } from "./client.js";
export {
  AuthenticationError,
  ConnectionError,
  FailedActionError,
  NotFoundError,
  RateLimitError,
  ServerError,
  ValidationError,
  WaAPIError,
} from "./errors.js";
export { DEFAULT_BASE_URL, type FetchLike } from "./http.js";

// The 122 generated *Options interfaces. Type-only: GeneratedActions is an
// implementation detail that consumers extend nothing from, but the option
// types are the point of a typed SDK — without this a caller can pass an
// object literal and never name its type.
export type * from "./generated.js";
