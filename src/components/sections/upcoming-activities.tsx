import { Link } from "@tanstack/react-router";
import { ActivityCard } from "@/components/cards/activity-card";
import { Section, SectionHeader } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";
import type { Event, EventLabels } from "@/domains/events/events-repository";

/** Sección reutilizable de próximas actividades; tolera lista vacía. */
export function UpcomingActivities({
  events,
  labels,
}: {
  events: readonly Event[];
  labels: EventLabels;
}) {
  return (
    <Section ariaLabelledby="proximas-actividades">
      <SectionHeader
        id="proximas-actividades"
        eyebrow="Agenda"
        title="Próximas actividades"
        description="Concursos, talleres y encuentros que la comunidad tiene por delante."
      />
      <div className="mt-8">
        {events.length > 0 ? (
          <ul className="grid gap-5 sm:grid-cols-2">
            {events.map((event) => (
              <li key={event.id}>
                <ActivityCard event={event} labels={labels} />
              </li>
            ))}
          </ul>
        ) : (
          <EmptyState
            title="Aún no hay actividades publicadas"
            description="Cuando haya una actividad confirmada aparecerá aquí con su fecha, modalidad y tipo de participación."
            action={
              <Button asChild variant="outline">
                <Link to="/comunidad">Formas de participar en la comunidad</Link>
              </Button>
            }
          />
        )}
      </div>
    </Section>
  );
}
