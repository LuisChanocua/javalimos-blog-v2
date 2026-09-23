import type { Ally } from "@/types/content";
import { localAlliesRepository } from "./local-allies-repository";

export interface AlliesRepository {
  list(): Promise<readonly Ally[]>;
}

export const alliesRepository: AlliesRepository = localAlliesRepository;
