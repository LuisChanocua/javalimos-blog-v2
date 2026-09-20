export interface ApiErrorDetails {
  status: number;
  statusText: string;
  payload?: unknown;
  url: string;
  method: string;
}

export class ApiError extends Error {
  readonly status: number;
  readonly statusText: string;
  readonly payload: unknown | undefined;
  readonly url: string;
  readonly method: string;

  constructor({ status, statusText, payload, url, method }: ApiErrorDetails) {
    super(`${method} ${url} failed with ${status} ${statusText}`.trim());
    this.name = "ApiError";
    this.status = status;
    this.statusText = statusText;
    this.payload = payload;
    this.url = url;
    this.method = method;
  }
}
