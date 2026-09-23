import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden border-b border-border"
      aria-labelledby="hero-titulo"
    >
      <div aria-hidden="true" className="surface-grid pointer-events-none absolute inset-0" />
      <Container className="relative py-14 sm:py-16 lg:py-20">
        <div className="reveal-soft max-w-5xl">
          <p className="text-primary text-xs font-bold uppercase">JavaLimo++</p>
          <h1 id="hero-titulo" className="display-title mt-6 max-w-5xl">
            Programar se aprende mejor cuando no lo haces solo.
          </h1>
          <p className="text-muted-foreground lead-copy mt-8 max-w-3xl">
            Somos una comunidad para aprender, compartir conocimiento, resolver problemas y crecer a
            través de la tecnología.
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
      </Container>
    </section>
  );
}
