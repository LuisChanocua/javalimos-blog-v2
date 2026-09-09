/** Formas de involucrarse y preguntas frecuentes de la página Comunidad. */
export interface InvolvementOption {
  id: string;
  title: string;
  description: string;
}

export const involvementOptions: InvolvementOption[] = [
  {
    id: "participa",
    title: "Participa",
    description: "Quiero asistir a actividades y aprender.",
  },
  {
    id: "unete",
    title: "Únete",
    description: "Quiero involucrarme regularmente con la comunidad.",
  },
  {
    id: "comparte",
    title: "Comparte",
    description: "Quiero impartir una charla, taller o mentoría.",
  },
  {
    id: "colabora",
    title: "Colabora",
    description:
      "Represento una escuela, comunidad, empresa u organización y quiero colaborar con JavaLimo++.",
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: "¿Necesito estudiar en el ITSH o Ingeniería en Sistemas para participar?",
    answer:
      "No. JavaLimo++ nació en ese contexto, pero busca construir una comunidad abierta a personas interesadas en programación y tecnología. Algunas actividades específicas pueden tener requisitos definidos por la institución u organizador correspondiente.",
  },
  {
    question: "¿Necesito experiencia previa programando?",
    answer:
      "No. Hay actividades pensadas para quienes empiezan y otras para quienes ya tienen práctica. Lo importante es el interés por aprender y compartir.",
  },
  {
    question: "¿Pueden participar estudiantes de preparatoria o secundaria?",
    answer:
      "Sí, cuando la actividad sea apropiada para ellos. Cada actividad indica su tipo de participación y sus requisitos.",
  },
  {
    question: "¿Cómo puedo proponer un taller o una charla?",
    answer:
      "A través de la página de contacto, eligiendo el motivo “Proponer taller o charla”. Nos interesa recibir propuestas de mentores, docentes y profesionales.",
  },
  {
    question: "¿Se puede colaborar desde otra institución u organización?",
    answer:
      "Sí. Escuelas, comunidades, empresas y organizaciones pueden acercarse para colaborar en actividades conjuntas.",
  },
];

/** Principios de la comunidad, usados en la página Nosotros. */
export const principles: { title: string; description: string }[] = [
  {
    title: "Aprender compartiendo",
    description: "Explicar lo que sabemos es también una forma de aprenderlo mejor.",
  },
  {
    title: "Comunidad",
    description: "Las personas están antes que las siglas, los títulos o las instituciones.",
  },
  {
    title: "Colaboración",
    description: "Avanzamos más lejos resolviendo y construyendo en conjunto.",
  },
  {
    title: "Curiosidad",
    description: "Preguntar, experimentar y equivocarse forma parte del proceso.",
  },
  {
    title: "Crecimiento",
    description: "Competir y practicar tienen sentido cuando nos hacen mejorar.",
  },
  {
    title: "Tecnología accesible",
    description: "Buscamos acercar la programación a más personas, sin filtros innecesarios.",
  },
];

/** Motivos del formulario de contacto. */
export const contactReasons = [
  "Participar",
  "Colaborar",
  "Proponer taller o charla",
  "Escuela o institución",
  "Empresa u organización",
  "Otro",
] as const;
