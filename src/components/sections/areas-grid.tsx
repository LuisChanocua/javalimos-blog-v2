import { AreaCard } from "@/components/cards/area-card";
import type { Area } from "@/content/site/areas";

export function AreasGrid({
  items,
  showDetails,
}: {
  items: Area[];
  showDetails?: boolean | undefined;
}) {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((area) => (
        <li key={area.id}>
          <AreaCard area={area} showDetails={showDetails} />
        </li>
      ))}
    </ul>
  );
}
