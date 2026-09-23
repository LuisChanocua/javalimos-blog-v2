const VITE_SITE_URL_KEY = "VITE_SITE_URL";

type PublicSiteUrlEnv = ImportMetaEnv & Partial<Record<typeof VITE_SITE_URL_KEY, string>>;
type ProcessWithEnv = { env: Record<string, string | undefined> };

declare const process: ProcessWithEnv | undefined;

export class SiteUrlConfigurationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "SiteUrlConfigurationError";
  }
}

export function getPublicSiteUrl(): string | undefined {
  const value = readPublicSiteUrl();
  if (!value) return undefined;
  return normalizeSiteUrl(value);
}

export function getRequiredPublicSiteUrl(): string {
  const value = getPublicSiteUrl();
  if (!value) {
    throw new SiteUrlConfigurationError(
      `${VITE_SITE_URL_KEY} is required before resolving public site URLs.`,
    );
  }
  return value;
}

export function resolveSiteUrl(path: string, baseUrl = getRequiredPublicSiteUrl()): URL {
  if (hasUrlProtocol(path)) {
    throw new SiteUrlConfigurationError("Site paths must be relative to VITE_SITE_URL.");
  }

  const normalizedBase = `${normalizeSiteUrl(baseUrl)}/`;
  const normalizedPath = path.replace(/^\/+/, "");
  return new URL(normalizedPath, normalizedBase);
}

function readPublicSiteUrl(): string | undefined {
  const fromProcess = typeof process !== "undefined" ? process.env[VITE_SITE_URL_KEY] : undefined;
  if (isNonEmptyString(fromProcess)) return fromProcess;

  const fromImportMeta = (import.meta.env as PublicSiteUrlEnv)[VITE_SITE_URL_KEY];
  if (isNonEmptyString(fromImportMeta)) return fromImportMeta;

  return undefined;
}

function normalizeSiteUrl(value: string): string {
  const trimmedValue = value.trim().replace(/\/+$/, "");

  try {
    const url = new URL(trimmedValue);

    if (url.protocol !== "http:" && url.protocol !== "https:") {
      throw new SiteUrlConfigurationError(`${VITE_SITE_URL_KEY} must use http or https.`);
    }

    url.hash = "";
    url.search = "";
    return url.toString().replace(/\/+$/, "");
  } catch (error) {
    if (error instanceof SiteUrlConfigurationError) throw error;
    throw new SiteUrlConfigurationError(`${VITE_SITE_URL_KEY} must be an absolute URL.`);
  }
}

function hasUrlProtocol(value: string): boolean {
  return /^[a-z][a-z\d+.-]*:/i.test(value);
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}
