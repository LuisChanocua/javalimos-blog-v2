import { cn } from "@/lib/utils";
import type { ImageAsset } from "@/types/content";

interface MediaFrameProps {
  image?: ImageAsset | undefined;
  /** Texto del placeholder cuando todavía no hay fotografía real. */
  placeholder: string;
  className?: string | undefined;
  imgClassName?: string | undefined;
  ratio?: "video" | "square" | "portrait" | "wide";
  shape?: "rect" | "hex";
  priority?: boolean | undefined;
}

const ratios = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  wide: "aspect-[16/7]",
} as const;

/**
 * Contenedor de imagen del sistema visual.
 * Si no existe una fotografía real muestra un placeholder identificado,
 * de modo que sustituirlo después sea sólo añadir el dato al contenido.
 */
export function MediaFrame({
  image,
  placeholder,
  className,
  imgClassName,
  ratio = "video",
  shape = "rect",
  priority,
}: MediaFrameProps) {
  return (
    <div
      className={cn(
        "bg-surface relative overflow-hidden",
        ratios[ratio],
        shape === "hex" ? "hex-clip" : "rounded-md",
        className,
      )}
    >
      {image ? (
        <img
          src={image.src}
          alt={image.alt}
          width={image.width ?? 1200}
          height={image.height ?? 675}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className={cn("size-full object-cover", imgClassName)}
        />
      ) : (
        <div aria-hidden="true" className="absolute inset-0 grid place-items-center p-6">
          <div className="surface-grid absolute inset-0 opacity-70" />
          <p className="type-meta text-muted-foreground relative text-center">{placeholder}</p>
        </div>
      )}
    </div>
  );
}
