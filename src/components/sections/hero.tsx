import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { BrandMark } from "@/components/brand/brand-mark";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border" aria-labelledby="hero-titulo">
      <div aria-hidden="true" className="surface-grid pointer-events-none absolute inset-0" />
      <Container className="relative grid min-h-[calc(100svh-5rem)] items-center gap-14 py-14 md:grid-cols-[minmax(0,1.18fr)_minmax(18rem,.82fr)] lg:gap-20 lg:py-20">
        <div className="reveal-soft">
          <p className="text-primary text-xs font-bold uppercase">JavaLimo++</p>
          <h1 id="hero-titulo" className="display-title mt-6 max-w-5xl">
            Programar se aprende mejor cuando no lo haces solo.
          </h1>
          <p className="text-muted-foreground lead-copy mt-8 max-w-3xl">
            Somos una comunidad para aprender, compartir conocimiento, resolver problemas y crecer
            a través de la tecnología.
          </p>

          <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <Button asChild size="lg">
              <Link to="/nosotros">Conoce JavaLimo++</Link>
            </Button>
            <Button asChild size="lg" variant="link" className="px-0 text-foreground">
              <Link to="/comunidad">
                Participa <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <BrandMark className="max-w-[29rem]" />
        </div>
      </Container>
    </section>
  );
}
