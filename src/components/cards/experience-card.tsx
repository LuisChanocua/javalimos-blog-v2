import { Link } from "@tanstack/react-router";
import { CalendarDays, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { categoryLabel } from "@/content/experiences";
import { formatDate } from "@/lib/format";
import type { Experience } from "@/types/content";

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article className="group border-border bg-card hover:border-primary/50 relative flex flex-col overflow-hidden rounded-xl border transition-colors">
      {experience.coverImage ? (
        <img
          src={experience.coverImage.src}
          alt={experience.coverImage.alt}
          width={experience.coverImage.width ?? 640}
          height={experience.coverImage.height ?? 360}
          loading="lazy"
          decoding="async"
          className="aspect-video w-full object-cover"
        />
      ) : null}

      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary">{categoryLabel(experience.category)}</Badge>
          {experience.demo ? <Badge variant="outline">Contenido de ejemplo</Badge> : null}
        </div>

        <h3 className="mt-3 text-lg font-semibold">
          <Link
            to="/experiencias/$slug"
            params={{ slug: experience.slug }}
            className="after:absolute after:inset-0 focus-visible:outline-none"
          >
            {experience.title}
          </Link>
        </h3>

        <p className="text-muted-foreground mt-2 flex-1 text-sm leading-relaxed">
          {experience.excerpt}
        </p>

        <dl className="text-muted-foreground mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs">
          <div className="flex items-center gap-1.5">
            <CalendarDays aria-hidden="true" className="size-3.5" />
            <dt className="sr-only">Fecha</dt>
            <dd>
              <time dateTime={experience.date}>{formatDate(experience.date)}</time>
            </dd>
          </div>
          {experience.location ? (
            <div className="flex items-center gap-1.5">
              <MapPin aria-hidden="true" className="size-3.5" />
              <dt className="sr-only">Lugar</dt>
              <dd>{experience.location}</dd>
            </div>
          ) : null}
        </dl>
      </div>
    </article>
  );
}
