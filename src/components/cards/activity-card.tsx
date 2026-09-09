import { CalendarDays, MapPin, Radio } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { modeLabels, participationLabels, statusLabels } from "@/content/site/activities";
import { formatDate } from "@/lib/format";
import type { Activity } from "@/types/content";

export function ActivityCard({ activity }: { activity: Activity }) {
  return (
    <article className="border-border bg-card rounded-xl border p-5">
      <div className="flex flex-wrap items-center gap-2">
        <Badge>{participationLabels[activity.participation]}</Badge>
        <Badge variant="secondary">{activity.type}</Badge>
        <Badge variant="outline">{statusLabels[activity.status]}</Badge>
      </div>

      <h3 className="mt-3 text-lg font-semibold">{activity.name}</h3>
      <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{activity.description}</p>

      <dl className="text-muted-foreground mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs">
        {activity.date || activity.dateLabel ? (
          <div className="flex items-center gap-1.5">
            <CalendarDays aria-hidden="true" className="size-3.5" />
            <dt className="sr-only">Fecha</dt>
            <dd>
              {activity.date ? (
                <time dateTime={activity.date}>{formatDate(activity.date)}</time>
              ) : (
                activity.dateLabel
              )}
            </dd>
          </div>
        ) : null}
        <div className="flex items-center gap-1.5">
          <Radio aria-hidden="true" className="size-3.5" />
          <dt className="sr-only">Modalidad</dt>
          <dd>{modeLabels[activity.mode]}</dd>
        </div>
        {activity.location ? (
          <div className="flex items-center gap-1.5">
            <MapPin aria-hidden="true" className="size-3.5" />
            <dt className="sr-only">Lugar</dt>
            <dd>{activity.location}</dd>
          </div>
        ) : null}
      </dl>
    </article>
  );
}
