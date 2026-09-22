import type { AlliesRepository } from "./allies-repository";

export const emptyAlliesRepository: AlliesRepository = {
  async list() {
    return [];
  },
};

export const localAlliesRepository = emptyAlliesRepository;
