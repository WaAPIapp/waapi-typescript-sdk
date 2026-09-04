/**
 * Errors raised by the SDK.
 *
 * The hierarchy mirrors the Python and PHP SDKs so the same API condition
 * carries the same name in all three.
 */

export class WaAPIError extends Error {
  constructor(message: string) {
    super(message);
    this.name = new.target.name;
    // Without this, `instanceof` fails for consumers compiling to ES5 targets.
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

/** The request body failed the API's validation (HTTP 422). */
export class ValidationError extends WaAPIError {
  constructor(public readonly errors: unknown) {
    super("The given data failed to pass validation.");
  }
}

/** The addressed resource does not exist (HTTP 404). */
export class NotFoundError extends WaAPIError {
  constructor(message = "The resource you are looking for could not be found.") {
    super(message);
  }
}

/** The API token is missing, wrong or lacks the required scope (HTTP 401/403). */
export class AuthenticationError extends WaAPIError {}

/** Too many requests (HTTP 429). */
export class RateLimitError extends WaAPIError {
  constructor(
    message: string,
    /** Seconds to wait, when the API sends a Retry-After header. */
    public readonly retryAfter?: number,
  ) {
    super(message);
  }
}

/**
 * The API accepted the request but did not carry the action out.
 *
 * This covers two cases that look different on the wire and mean the same
 * thing to a caller: an HTTP 400, and an HTTP 200 whose body says
 * `{"status": "error"}`. The second is the dangerous one — it is a successful
 * HTTP exchange, so code that only checks `response.ok` treats a message that
 * was never sent as delivered.
 */
export class FailedActionError extends WaAPIError {
  constructor(
    message: string,
    public readonly response?: unknown,
  ) {
    super(message);
  }
}

/** The API returned a 5xx. */
export class ServerError extends WaAPIError {}

/** The request never produced a response — network failure, DNS, timeout. */
export class ConnectionError extends WaAPIError {
  constructor(
    message: string,
    public readonly cause?: unknown,
  ) {
    super(message);
  }
}
