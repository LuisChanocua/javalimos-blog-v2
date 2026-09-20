import { CalendarDays, MapPin, Radio } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Event, EventLabels } from "@/domains/events/events-repository";
import { formatDate } from "@/lib/format";

export function ActivityCard({ event, labels }: { event: Event; labels: EventLabels }) {
  return (
    <article className="border-border bg-card rounded-xl border p-5">
      <div className="flex flex-wrap items-center gap-2">
        <Badge>{labels.participation[event.participation]}</Badge>
        <Badge variant="secondary">{event.type}</Badge>
        <Badge variant="outline">{labels.status[event.status]}</Badge>
      </div>

      <h3 className="mt-3 text-lg font-semibold">{event.name}</h3>
      <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{event.description}</p>

      <dl className="text-muted-foreground mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs">
        {event.date || event.dateLabel ? (
          <div className="flex items-center gap-1.5">
            <CalendarDays aria-hidden="true" className="size-3.5" />
            <dt className="sr-only">Fecha</dt>
            <dd>
              {event.date ? (
                <time dateTime={event.date}>{formatDate(event.date)}</time>
              ) : (
                event.dateLabel
              )}
            </dd>
          </div>
        ) : null}
        <div className="flex items-center gap-1.5">
          <Radio aria-hidden="true" className="size-3.5" />
          <dt className="sr-only">Modalidad</dt>
          <dd>{labels.mode[event.mode]}</dd>
        </div>
        {event.location ? (
          <div className="flex items-center gap-1.5">
            <MapPin aria-hidden="true" className="size-3.5" />
            <dt className="sr-only">Lugar</dt>
            <dd>{event.location}</dd>
          </div>
        ) : null}
      </dl>
    </article>
  );
}
