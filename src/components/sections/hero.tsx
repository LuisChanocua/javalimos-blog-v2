import { Link } from "@tanstack/react-router";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden" aria-labelledby="hero-titulo">
      <div aria-hidden="true" className="surface-grid pointer-events-none absolute inset-0" />
      <Container className="relative py-16 sm:py-24 lg:py-32">
        <p className="border-border bg-surface text-muted-foreground inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs tracking-[0.15em] uppercase">
          Comunidad de programación y tecnología
        </p>

        <h1
          id="hero-titulo"
          className="mt-6 max-w-4xl text-4xl leading-[1.05] font-bold sm:text-5xl lg:text-6xl"
        >
          Java<span className="text-primary">Limo++</span>
          <span className="text-gradient block">
            Aprendemos, compartimos y crecemos a través de la programación y la tecnología.
          </span>
        </h1>

        <p className="text-muted-foreground mt-6 max-w-2xl text-base leading-relaxed sm:text-lg">
          JavaLimo++ nació por iniciativa de estudiantes de Ingeniería en Sistemas en el Instituto
          Tecnológico Superior de Huetamo y hoy busca conectar a personas interesadas en aprender,
          crear, competir y compartir conocimiento.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link to="/nosotros">Conoce JavaLimo++</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/comunidad">Forma parte de la comunidad</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
