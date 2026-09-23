import { experienceCategories, experiences } from "@/content/experiences";
import type { ExperiencesRepository } from "./experiences-repository";

export const localExperiencesRepository: ExperiencesRepository = {
  async list() {
    return [...experiences];
  },

  async findBySlug(slug) {
    return experiences.find((experience) => experience.slug === slug) ?? null;
  },

  async listCategories() {
    return [...experienceCategories];
  },
};
