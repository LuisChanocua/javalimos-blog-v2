import { Code2, GraduationCap, Calendar, Users, Rocket } from "lucide-react";
import { PhotoPlaceholder } from "@/components/media/photo-placeholder";
import type { Area } from "@/content/site/areas";

const icons = {
  code: Code2,
  graduation: GraduationCap,
  calendar: Calendar,
  users: Users,
  rocket: Rocket,
} as const;

export function AreasEditorial({
  items,
  showDetails = false,
}: {
  items: Area[];
  showDetails?: boolean | undefined;
}) {
  return (
    <ol className="editorial-list">
      {items.map((area, index) => {
        const Icon = icons[area.icon];
        return (
          <li key={area.id} className="editorial-row">
            <div className="editorial-row__media">
              {area.image ? (
                <img
                  src={area.image.src}
                  alt={area.image.alt}
                  width={area.image.width ?? 960}
                  height={area.image.height ?? 720}
                  loading="lazy"
                  decoding="async"
                  className="editorial-row__image"
                />
              ) : (
                <PhotoPlaceholder />
              )}
            </div>
            <div className="editorial-row__content">
              <div className="editorial-row__meta">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <Icon aria-hidden="true" className="size-5" />
              </div>
              <h3>{area.title}</h3>
              <p>{area.summary}</p>
              {showDetails && area.details ? (
                <ul>
                  {area.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
