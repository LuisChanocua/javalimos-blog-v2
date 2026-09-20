import type { Activity, ActivityMode, ActivityStatus, ParticipationType } from "@/types/content";
import { localEventsRepository } from "./local-events-repository";

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

export const eventsRepository: EventsRepository = localEventsRepository;
