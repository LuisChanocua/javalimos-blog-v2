import type { ExperiencesRepository } from "./experiences-repository";

export const emptyExperiencesRepository: ExperiencesRepository = {
  async list() {
    return [];
  },

  async findBySlug() {
    return null;
  },

  async listCategories() {
    return [];
  },
};

export const localExperiencesRepository = emptyExperiencesRepository;
