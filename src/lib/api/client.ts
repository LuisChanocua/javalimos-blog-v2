import { resolveApiUrl } from "@/config/api";
import { ApiError } from "./errors";

export type ApiHttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface ApiRequestOptions extends Omit<RequestInit, "body" | "method"> {
  method?: ApiHttpMethod;
  body?: unknown;
  baseUrl?: string;
}

export async function apiRequest<TResponse = unknown>(
  path: string,
  options: ApiRequestOptions = {},
): Promise<TResponse> {
  const { body, baseUrl, headers: headersInput, method = "GET", ...requestOptions } = options;
  const url = resolveApiUrl(path, baseUrl);
  const headers = new Headers(headersInput);
  const requestBody = prepareRequestBody(body, headers);

  if (!headers.has("accept")) {
    headers.set("accept", "application/json");
  }

  const requestInit: RequestInit = {
    ...requestOptions,
    method,
    headers,
  };
  if (requestBody !== undefined) requestInit.body = requestBody;

  const response = await fetch(url, requestInit);
  const parsed = await parseResponseBody(response, { strictJson: response.ok });

  if (!response.ok) {
    throw new ApiError({
      status: response.status,
      statusText: response.statusText,
      payload: parsed,
      url: url.toString(),
      method,
    });
  }

  return parsed as TResponse;
}

export function apiGet<TResponse = unknown>(
  path: string,
  options: Omit<ApiRequestOptions, "body" | "method"> = {},
) {
  return apiRequest<TResponse>(path, { ...options, method: "GET" });
}

export function apiPost<TResponse = unknown>(
  path: string,
  body?: unknown,
  options: Omit<ApiRequestOptions, "body" | "method"> = {},
) {
  return apiRequest<TResponse>(path, { ...options, method: "POST", body });
}

export function apiPut<TResponse = unknown>(
  path: string,
  body?: unknown,
  options: Omit<ApiRequestOptions, "body" | "method"> = {},
) {
  return apiRequest<TResponse>(path, { ...options, method: "PUT", body });
}

export function apiPatch<TResponse = unknown>(
  path: string,
  body?: unknown,
  options: Omit<ApiRequestOptions, "body" | "method"> = {},
) {
  return apiRequest<TResponse>(path, { ...options, method: "PATCH", body });
}

export function apiDelete<TResponse = unknown>(
  path: string,
  options: Omit<ApiRequestOptions, "body" | "method"> = {},
) {
  return apiRequest<TResponse>(path, { ...options, method: "DELETE" });
}

function prepareRequestBody(body: unknown, headers: Headers): BodyInit | null | undefined {
  if (body === undefined) return undefined;
  if (body === null) return null;
  if (isBodyInit(body)) return body;

  if (!headers.has("content-type")) {
    headers.set("content-type", "application/json");
  }

  return JSON.stringify(body);
}

async function parseResponseBody(
  response: Response,
  { strictJson }: { strictJson: boolean },
): Promise<unknown> {
  if (response.status === 204 || response.status === 205) return undefined;

  const text = await response.text();
  if (!text) return undefined;

  const contentType = response.headers.get("content-type") ?? "";
  if (contentType.includes("json")) {
    try {
      return JSON.parse(text) as unknown;
    } catch (error) {
      if (strictJson) throw error;
      return text;
    }
  }

  return text;
}

function isBodyInit(value: unknown): value is BodyInit {
  return (
    typeof value === "string" ||
    value instanceof ArrayBuffer ||
    ArrayBuffer.isView(value) ||
    isFormData(value) ||
    isBlob(value) ||
    isUrlSearchParams(value) ||
    isReadableStream(value)
  );
}

function isFormData(value: unknown): value is FormData {
  return typeof FormData !== "undefined" && value instanceof FormData;
}

function isBlob(value: unknown): value is Blob {
  return typeof Blob !== "undefined" && value instanceof Blob;
}

function isUrlSearchParams(value: unknown): value is URLSearchParams {
  return typeof URLSearchParams !== "undefined" && value instanceof URLSearchParams;
}

function isReadableStream(value: unknown): value is ReadableStream {
  return typeof ReadableStream !== "undefined" && value instanceof ReadableStream;
}
