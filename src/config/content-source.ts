const CONTENT_SOURCE_ENV_KEY = "VITE_CONTENT_SOURCE";
const SUPPORTED_CONTENT_SOURCES = ["local", "empty"] as const;

export type ContentSource = (typeof SUPPORTED_CONTENT_SOURCES)[number];

interface ContentSourceImportMetaEnv extends ImportMetaEnv {
  readonly VITE_CONTENT_SOURCE?: string;
}

function isContentSource(value: string): value is ContentSource {
  return SUPPORTED_CONTENT_SOURCES.includes(value as ContentSource);
}

export function resolveContentSource(value: string | undefined): ContentSource {
  const normalizedValue = value?.trim();

  if (!normalizedValue) {
    return "local";
  }

  if (isContentSource(normalizedValue)) {
    return normalizedValue;
  }

  throw new Error(
    `Invalid ${CONTENT_SOURCE_ENV_KEY}: "${normalizedValue}". Supported values: ${SUPPORTED_CONTENT_SOURCES.join(
      ", ",
    )}.`,
  );
}

function readRuntimeContentSource(): string | undefined {
  if (typeof process === "undefined") {
    return undefined;
  }

  return process.env[CONTENT_SOURCE_ENV_KEY];
}

const buildContentSourceValue = (import.meta.env as ContentSourceImportMetaEnv).VITE_CONTENT_SOURCE;
const contentSource = resolveContentSource(readRuntimeContentSource() ?? buildContentSourceValue);

export const shouldUseEmptyContentSource =
  buildContentSourceValue === "empty" || contentSource === "empty";

export function getContentSource(): ContentSource {
  return contentSource;
}
