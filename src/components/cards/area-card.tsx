import { Calendar, Code2, GraduationCap, Rocket, Users } from "lucide-react";
import type { Area } from "@/content/site/areas";

const icons = {
  code: Code2,
  graduation: GraduationCap,
  calendar: Calendar,
  users: Users,
  rocket: Rocket,
} as const;

export function AreaCard({ area, showDetails = false }: { area: Area; showDetails?: boolean | undefined }) {
  const Icon = icons[area.icon];

  return (
    <article className="border-border bg-card hover:border-primary/50 rounded-xl border p-5 transition-colors">
      <span className="bg-secondary text-primary inline-flex size-10 items-center justify-center rounded-lg">
        <Icon aria-hidden="true" className="size-5" />
      </span>
      <h3 className="mt-4 text-lg font-semibold">{area.title}</h3>
      <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{area.summary}</p>
      {showDetails && area.details ? (
        <ul className="text-muted-foreground mt-4 list-disc space-y-1.5 pl-5 text-sm">
          {area.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
