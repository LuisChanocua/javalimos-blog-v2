const VITE_API_BASE_URL_KEY = "VITE_API_BASE_URL";

type PublicApiEnv = ImportMetaEnv & Partial<Record<typeof VITE_API_BASE_URL_KEY, string>>;
type ProcessWithEnv = { env: Record<string, string | undefined> };

declare const process: ProcessWithEnv | undefined;

export class ApiConfigurationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ApiConfigurationError";
  }
}

export function getPublicApiBaseUrl(): string | undefined {
  const value = readPublicApiBaseUrl();
  if (!value) return undefined;
  return normalizeApiBaseUrl(value);
}

export function getRequiredPublicApiBaseUrl(): string {
  const value = getPublicApiBaseUrl();
  if (!value) {
    throw new ApiConfigurationError(
      `${VITE_API_BASE_URL_KEY} is required before calling the API client.`,
    );
  }
  return value;
}

export function resolveApiUrl(path: string, baseUrl = getRequiredPublicApiBaseUrl()): URL {
  if (hasUrlProtocol(path)) {
    throw new ApiConfigurationError("API paths must be relative to VITE_API_BASE_URL.");
  }

  const normalizedBase = `${normalizeApiBaseUrl(baseUrl)}/`;
  const normalizedPath = path.replace(/^\/+/, "");
  return new URL(normalizedPath, normalizedBase);
}

function readPublicApiBaseUrl(): string | undefined {
  const fromProcess =
    typeof process !== "undefined" ? process.env[VITE_API_BASE_URL_KEY] : undefined;
  if (isNonEmptyString(fromProcess)) return fromProcess;

  const fromImportMeta = (import.meta.env as PublicApiEnv)[VITE_API_BASE_URL_KEY];
  if (isNonEmptyString(fromImportMeta)) return fromImportMeta;

  return undefined;
}

function normalizeApiBaseUrl(value: string): string {
  return value.trim().replace(/\/+$/, "");
}

function hasUrlProtocol(value: string): boolean {
  return /^[a-z][a-z\d+.-]*:/i.test(value);
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}
