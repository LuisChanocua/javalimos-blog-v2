import { modeLabels, participationLabels, statusLabels } from "@/content/site/activities";
import type { EventsRepository } from "./events-repository";

export const emptyEventsRepository: EventsRepository = {
  async listUpcoming() {
    return [];
  },

  async getLabels() {
    return {
      mode: { ...modeLabels },
      participation: { ...participationLabels },
      status: { ...statusLabels },
    };
  },
};

export const localEventsRepository = emptyEventsRepository;
