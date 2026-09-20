import type { Experience, ExperienceCategory } from "@/types/content";
import { localExperiencesRepository } from "./local-experiences-repository";

export interface ExperienceCategoryOption {
  value: ExperienceCategory;
  label: string;
}

export interface ExperiencesRepository {
  list(): Promise<readonly Experience[]>;
  findBySlug(slug: string): Promise<Experience | null>;
  listCategories(): Promise<readonly ExperienceCategoryOption[]>;
}

export const experiencesRepository: ExperiencesRepository = localExperiencesRepository;
