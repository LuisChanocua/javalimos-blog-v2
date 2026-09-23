import { allies } from "@/content/allies";
import type { AlliesRepository } from "./allies-repository";

export const localAlliesRepository: AlliesRepository = {
  async list() {
    return [...allies];
  },
};
