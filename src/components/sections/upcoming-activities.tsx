import { Link } from "@tanstack/react-router";
import { ActivityCard } from "@/components/cards/activity-card";
import { Section, SectionHeader } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";
import { upcomingActivities } from "@/content/site/activities";

/** Sección reutilizable de próximas actividades; tolera lista vacía. */
export function UpcomingActivities() {
  return (
    <Section ariaLabelledby="proximas-actividades">
      <SectionHeader
        id="proximas-actividades"
        eyebrow="Agenda"
        title="Próximas actividades"
        description="Concursos, talleres y encuentros que la comunidad tiene por delante."
      />
      <div className="mt-8">
        {upcomingActivities.length > 0 ? (
          <ul className="grid gap-5 sm:grid-cols-2">
            {upcomingActivities.map((activity) => (
              <li key={activity.id}>
                <ActivityCard activity={activity} />
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
