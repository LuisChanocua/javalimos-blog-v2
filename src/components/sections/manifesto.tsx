import { Container } from "@/components/layout/container";

/** Bloque editorial: frase grande + texto. Sustituye a un grid de cards. */
export function Manifesto() {
  return (
    <section className="border-border border-y" aria-labelledby="manifiesto">
      <Container className="py-20 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <h2 id="manifiesto" className="type-title lg:col-span-7">
            Nos gusta resolver cosas.
          </h2>
          <div className="text-muted-foreground space-y-5 text-base leading-relaxed lg:col-span-5 lg:pt-3 lg:text-lg">
            <p>
              Un problema de algoritmos, una idea que queremos construir, una tecnología nueva o algo
              que todavía no entendemos.
            </p>
            <p>
              JavaLimo++ existe por las ganas de aprender haciendo y de compartir lo que vamos
              descubriendo. Se practica, se pregunta, se explica y se vuelve a intentar.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
