import type { Ally } from "@/types/content";
import { shouldUseEmptyContentSource } from "@/config/content-source";
import { emptyAlliesRepository } from "./empty-allies-repository";

export interface AlliesRepository {
  list(): Promise<readonly Ally[]>;
}

let localRepositoryPromise: Promise<AlliesRepository> | undefined;

async function getLocalAlliesRepository(): Promise<AlliesRepository> {
  localRepositoryPromise ??= import("@/domains/allies/local-allies-repository").then(
    (module) => module.localAlliesRepository,
  );

  return localRepositoryPromise;
}

const deferredLocalAlliesRepository: AlliesRepository = {
  async list() {
    return (await getLocalAlliesRepository()).list();
  },
};

export const alliesRepository: AlliesRepository = shouldUseEmptyContentSource
  ? emptyAlliesRepository
  : deferredLocalAlliesRepository;
