import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string | undefined }) {
  return (
    <span className={cn("brand-mark", className)} aria-hidden="true">
      <span className="brand-mark__inner">++</span>
    </span>
  );
}