import { Image } from "lucide-react";
import { cn } from "@/lib/utils";

export function PhotoPlaceholder({
  label = "Fotografía de la comunidad — pendiente",
  className,
}: {
  label?: string | undefined;
  className?: string | undefined;
}) {
  return (
    <div className={cn("photo-placeholder", className)} role="img" aria-label={label}>
      <Image aria-hidden="true" className="size-5" />
      <span>{label}</span>
    </div>
  );
}
