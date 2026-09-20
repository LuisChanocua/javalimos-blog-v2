import type { ExperienceCategory } from "@/types/content";
import type { ExperienceCategoryOption } from "./experiences-repository";

export function getExperienceCategoryLabel(
  categories: readonly ExperienceCategoryOption[],
  value: ExperienceCategory,
): string {
  return categories.find((category) => category.value === value)?.label ?? "Otros";
}
