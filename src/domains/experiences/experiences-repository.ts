import type { Experience, ExperienceCategory } from "@/types/content";
import { shouldUseEmptyContentSource } from "@/config/content-source";
import { emptyExperiencesRepository } from "./empty-experiences-repository";

export interface ExperienceCategoryOption {
  value: ExperienceCategory;
  label: string;
}

export interface ExperiencesRepository {
  list(): Promise<readonly Experience[]>;
  findBySlug(slug: string): Promise<Experience | null>;
  listCategories(): Promise<readonly ExperienceCategoryOption[]>;
}

let localRepositoryPromise: Promise<ExperiencesRepository> | undefined;

async function getLocalExperiencesRepository(): Promise<ExperiencesRepository> {
  localRepositoryPromise ??= import("@/domains/experiences/local-experiences-repository").then(
    (module) => module.localExperiencesRepository,
  );

  return localRepositoryPromise;
}

const deferredLocalExperiencesRepository: ExperiencesRepository = {
  async list() {
    return (await getLocalExperiencesRepository()).list();
  },

  async findBySlug(slug) {
    return (await getLocalExperiencesRepository()).findBySlug(slug);
  },

  async listCategories() {
    return (await getLocalExperiencesRepository()).listCategories();
  },
};

export const experiencesRepository: ExperiencesRepository = shouldUseEmptyContentSource
  ? emptyExperiencesRepository
  : deferredLocalExperiencesRepository;
