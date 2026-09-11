import { Link } from "@tanstack/react-router";
import { Container } from "@/components/layout/container";
import { Isotype } from "@/components/brand/isotype";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden" aria-labelledby="hero-titulo">
      <div aria-hidden="true" className="surface-grid pointer-events-none absolute inset-0" />

      <Container className="relative pt-16 pb-14 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="type-meta text-primary">JavaLimo++</p>

            <h1 id="hero-titulo" className="type-display mt-6 max-w-[15ch]">
              Programar se aprende mejor cuando no lo haces{" "}
              <span className="text-primary">solo.</span>
            </h1>

            <p className="type-lead text-muted-foreground mt-8 max-w-xl">
              Somos una comunidad para aprender, compartir conocimiento, resolver problemas y crecer
              a través de la tecnología.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link to="/nosotros">Conoce JavaLimo++</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/comunidad">Participa</Link>
              </Button>
            </div>
          </div>

          <div className="relative hidden lg:col-span-4 lg:block">
            <Isotype className="ml-auto w-full max-w-[16rem] drop-shadow-[0_24px_48px_rgba(23,58,94,0.18)]" />
            <span
              aria-hidden="true"
              className="bg-primary/10 absolute -top-10 -right-10 -z-10 size-40 hex-clip"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
