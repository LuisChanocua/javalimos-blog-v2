import type { Activity, ActivityMode, ActivityStatus, ParticipationType } from "@/types/content";
import { shouldUseEmptyContentSource } from "@/config/content-source";
import { emptyEventsRepository } from "./empty-events-repository";

export type Event = Activity;

export interface EventLabels {
  mode: Record<ActivityMode, string>;
  participation: Record<ParticipationType, string>;
  status: Record<ActivityStatus, string>;
}

export interface EventsRepository {
  listUpcoming(): Promise<readonly Event[]>;
  getLabels(): Promise<EventLabels>;
}

let localRepositoryPromise: Promise<EventsRepository> | undefined;

async function getLocalEventsRepository(): Promise<EventsRepository> {
  localRepositoryPromise ??= import("@/domains/events/local-events-repository").then(
    (module) => module.localEventsRepository,
  );

  return localRepositoryPromise;
}

const deferredLocalEventsRepository: EventsRepository = {
  async listUpcoming() {
    return (await getLocalEventsRepository()).listUpcoming();
  },

  async getLabels() {
    return (await getLocalEventsRepository()).getLabels();
  },
};

export const eventsRepository: EventsRepository = shouldUseEmptyContentSource
  ? emptyEventsRepository
  : deferredLocalEventsRepository;
