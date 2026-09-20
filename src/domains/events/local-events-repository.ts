import {
  modeLabels,
  participationLabels,
  statusLabels,
  upcomingActivities,
} from "@/content/site/activities";
import type { EventsRepository } from "./events-repository";

export const localEventsRepository: EventsRepository = {
  async listUpcoming() {
    return [...upcomingActivities];
  },

  async getLabels() {
    return {
      mode: { ...modeLabels },
      participation: { ...participationLabels },
      status: { ...statusLabels },
    };
  },
};
