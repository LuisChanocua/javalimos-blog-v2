# Code & Create Hub

Quiero diseñar y construir la primera versión del sitio web público de JavaLimo++, una comunidad de programación, algoritmia y tecnología.



Este proyecto NO debe tratarse únicamente como una landing page visual. Quiero una base de código limpia, modular, mantenible, desacoplada y preparada para crecer, siguiendo buenas prácticas de desarrollo de software, arquitectura frontend, SEO, accesibilidad, seguridad y performance.



Antes de implementar, analiza estos requerimientos y estructura el proyecto de forma que agregar en el futuro una nueva página, sección, tipo de contenido o funcionalidad implique cambios localizados y no requiera modificar múltiples componentes no relacionados.



No sobrearquitectes el proyecto. Escalabilidad significa buena separación de responsabilidades y facilidad de extensión, NO añadir backend, autenticación, base de datos, microservicios o dependencias que todavía no necesitamos.



---



1. Contexto de JavaLimo++



JavaLimo++ es una comunidad enfocada en programación, algoritmia, tecnología, aprendizaje, colaboración y participación en actividades tecnológicas.



La comunidad nació por iniciativa de estudiantes de Ingeniería en Sistemas Computacionales durante su formación en el Instituto Tecnológico Superior de Huetamo (ITSH), en Huetamo, Michoacán, México.



Este origen es importante y debe formar parte de nuestra historia.



Sin embargo, existe una regla fundamental de comunicación:



El ITSH y la carrera de Ingeniería en Sistemas Computacionales representan el origen de JavaLimo++, pero NO son requisitos para pertenecer, acercarse o colaborar con la comunidad.



Evitar presentar JavaLimo++ exclusivamente como:



- “el club del ITSH”;

- “un club exclusivo para estudiantes del ITSH”;

- “un club exclusivo de Ingeniería en Sistemas Computacionales”;

- “un club únicamente universitario”.



La identidad debe comunicar algo más cercano a:



JavaLimo++ es una comunidad de programación y tecnología que nació dentro de un entorno universitario y que busca reunir a personas interesadas en aprender, compartir, competir y crear con tecnología, independientemente de su carrera, institución o nivel de experiencia.



Queremos que puedan acercarse:



- estudiantes del ITSH;

- estudiantes de otras universidades;

- estudiantes de preparatoria;

- estudiantes de secundaria cuando una actividad sea apropiada para ellos;

- egresados;

- autodidactas;

- profesionales;

- mentores;

- docentes;

- otras comunidades;

- organizaciones e instituciones interesadas en colaborar.



Algunas actividades pueden desarrollarse en colaboración con instituciones y, por lo tanto, estar sujetas a requisitos particulares de dichas instituciones.



El sitio debe comunicar esta diferencia con claridad:



JavaLimo++ busca ser una comunidad abierta, aunque algunas actividades específicas puedan tener restricciones por parte de sus organizadores o instituciones colaboradoras.



---



2. Objetivo de esta primera versión



El sitio debe funcionar principalmente como:



- carta de presentación de JavaLimo++;

- explicación de quiénes somos;

- memoria de cómo nació la comunidad;

- escaparate de lo que hacemos;

- registro de concursos, eventos, talleres y otras experiencias;

- canal para atraer nuevos participantes;

- punto de contacto;

- espacio para mostrar aliados y comunidades que nos inspiran;

- base para incorporar un blog;

- base escalable para agregar posteriormente contenido educativo u otras funcionalidades.



Esta V1 debe ser principalmente informativa y de contenido.



NO implementar todavía:



- login;

- cuentas de usuario;

- perfiles;

- base de datos;

- autenticación;

- ranking;

- juez de programación;

- integración automática con omegaUp;

- LMS;

- foros;

- chat;

- panel administrativo;

- gamificación;

- APIs innecesarias.



Si algo puede resolverse actualmente con contenido estático estructurado, debe resolverse así.



---



3. Principios arquitectónicos obligatorios



La arquitectura debe priorizar:



Escalabilidad

El proyecto debe permitir agregar nuevas páginas, experiencias, artículos, aliados o tipos de contenido sin reestructurar todo el sitio.



Bajo acoplamiento

Una sección no debe depender innecesariamente de la implementación interna de otra.



Alta cohesión

Cada componente, módulo o archivo debe tener una responsabilidad clara.



Separación de responsabilidades

Separar presentación, contenido, configuración, navegación, tipos y utilidades.



Reutilización

No duplicar componentes o lógica cuando existen patrones visuales o funcionales comunes.



Mantenibilidad

El código debe ser fácil de entender por otro desarrollador.



Simplicidad

Evitar patrones arquitectónicos complejos cuando todavía no aporten valor.



Performance

Evitar dependencias pesadas y trabajo innecesario en cliente.



Seguridad

No exponer secretos, credenciales o lógica sensible en frontend.



Accesibilidad

El sitio debe poder utilizarse correctamente mediante teclado, lectores de pantalla y dispositivos móviles.



---



4. Arquitectura orientada a contenido



Uno de los requisitos MÁS IMPORTANTES es:



NO hardcodear todo el contenido directamente dentro de las páginas.



Elementos repetibles como:



- experiencias;

- concursos;

- eventos;

- talleres;

- artículos;

- aliados;

- actividades;

- miembros;

- redes sociales;



deben modelarse como contenido estructurado.



Por ejemplo, una experiencia debería conceptualmente tener campos similares a:



Experience {

  id

  slug

  title

  excerpt

  description

  date

  category

  location

  coverImage

  gallery

  tags

  featured

}



No es obligatorio utilizar exactamente esta interface si existe una mejor solución dentro del stack generado, pero debe mantenerse este principio.



Quiero poder agregar en el futuro:



"coding-cup-2027"



añadiendo principalmente un nuevo registro o archivo de contenido y NO creando manualmente una página completa duplicando componentes.



Aplicar el mismo principio al blog.



Conceptualmente:



BlogPost {

  slug

  title

  excerpt

  content

  publishedAt

  author

  category

  tags

  coverImage

  seo

}



Preparar la arquitectura para que más adelante estos datos puedan provenir de un CMS, API o base de datos sin tener que reescribir los componentes visuales.



La UI no debe conocer innecesariamente dónde está almacenada la información.



---



5. Estructura escalable del código



Usar la arquitectura más apropiada para el stack actual de Lovable, pero mantener conceptualmente una separación similar a:



src/

│

├── components/

│   ├── layout/

│   ├── navigation/

│   ├── sections/

│   ├── cards/

│   └── ui/

│

├── pages/

│   ├── home/

│   ├── about/

│   ├── activities/

│   ├── experiences/

│   ├── blog/

│   ├── community/

│   └── contact/

│

├── content/

│   ├── experiences/

│   ├── posts/

│   ├── allies/

│   └── site/

│

├── config/

│   ├── navigation

│   ├── site

│   └── seo

│

├── lib/

│   ├── seo/

│   └── utils/

│

├── types/

│

└── styles/



No seguir esta estructura literalmente si el framework generado ofrece una convención mejor.



Lo importante es conservar:



- responsabilidades separadas;

- componentes pequeños;

- contenido desacoplado;

- configuración centralizada;

- tipos reutilizables;

- cero duplicación innecesaria.



NO crear un único componente enorme para toda la aplicación.



NO crear archivos con cientos de líneas mezclando contenido, lógica, estilos y configuración.



NO crear componentes genéricos absurdamente configurables sólo por intentar reutilizarlos.



La abstracción debe existir cuando haya una necesidad real.



---



6. Sistema de diseño



Crear un sistema visual consistente mediante tokens reutilizables.



Centralizar:



- colores;

- tipografía;

- tamaños;

- espaciados;

- radios;

- sombras;

- containers;

- breakpoints cuando corresponda.



Evitar valores arbitrarios repetidos por toda la aplicación.



Los componentes como:



- Button;

- Container;

- Section;

- Card;

- Badge;

- Heading;

- Breadcrumb;

- CTA;

- ExperienceCard;

- ArticleCard;



deben ser reutilizables cuando exista un patrón común.



No duplicar el mismo markup en varias páginas.



---



7. Responsive y mobile-first



Diseñar bajo enfoque mobile-first.



Los estilos base deben estar pensados para móvil y expandirse progresivamente hacia tablet y escritorio.



Evitar construir primero desktop y después corregir móvil mediante una gran cantidad de excepciones.



Validar especialmente:



- navegación;

- tipografía;

- grids;

- imágenes;

- tarjetas;

- botones;

- formularios;

- márgenes;

- contenido largo.



No permitir overflow horizontal accidental.



---



8. Arquitectura pública del sitio



Crear inicialmente las siguientes rutas reales:



/

 /nosotros

 /que-hacemos

 /experiencias

 /experiencias/:slug

 /blog

 /blog/:slug

 /comunidad

 /contacto



Las rutas deben ser limpias, legibles, permanentes y amigables para SEO.



NO construir todo el sitio como una sola página gigante con anchors.



Home puede resumir contenido de otras páginas, pero cada área principal debe tener su propia URL indexable.



Preparar la navegación para agregar nuevas rutas posteriormente desde una configuración centralizada.



---



9. Navegación principal



La navegación inicial debe incluir:



Inicio

Nosotros

Lo que hacemos

Experiencias

Blog

Comunidad

[Participa]



“Participa” debe funcionar como CTA principal y dirigir hacia la sección adecuada de Comunidad o Contacto.



En móvil utilizar un menú accesible, sencillo y usable mediante teclado.



---



10. Home



La Home debe funcionar como resumen estratégico del sitio.



Debe contener aproximadamente:



Hero



Marca:



JavaLimo++



Concepto:



Comunidad de programación y tecnología.



Copy inicial sugerido:



“Aprendemos, compartimos y crecemos a través de la programación y la tecnología.”



Texto complementario:



“JavaLimo++ nació por iniciativa de estudiantes de Ingeniería en Sistemas Computacionales en el Instituto Tecnológico Superior de Huetamo y hoy busca conectar a personas interesadas en aprender, crear, competir y compartir conocimiento.”



CTAs:



Conoce JavaLimo++



Forma parte de la comunidad



Evitar que el hero parezca propaganda institucional del ITSH.



---



Quiénes somos



Breve presentación con enlace a "/nosotros".



---



Lo que hacemos



Mostrar cuatro áreas principales:



Programación competitiva



Entrenamos, resolvemos problemas y participamos en concursos de programación y algoritmia.



Talleres y aprendizaje



Creamos espacios para aprender y compartir conocimientos relacionados con programación, desarrollo y tecnología.



Eventos tecnológicos



Participamos y colaboramos en encuentros, congresos, actividades y experiencias relacionadas con tecnología.



Comunidad



Conectamos estudiantes, egresados, mentores y personas interesadas en aprender y compartir.



---



Próximas actividades



Crear un componente reutilizable preparado para mostrar actividades futuras.



Cada actividad debe poder indicar:



- nombre;

- fecha;

- descripción;

- tipo;

- modalidad;

- lugar;

- estado;

- tipo de participación.



Ejemplos de tipo de participación:



Abierto al público



Registro requerido



Actividad institucional



No inventar eventos reales si no fueron proporcionados.



---



Experiencias recientes



Mostrar contenido proveniente de la colección de experiencias.



NO hardcodear cards independientes.



---



Blog reciente



Mostrar los artículos más recientes desde la colección correspondiente.



Si todavía no existen artículos reales, utilizar ejemplos claramente identificados como contenido de demostración y fáciles de reemplazar.



---



Aliados



Componente reutilizable.



No inventar aliados.



Si no hay información disponible, mantener la sección preparada pero utilizar placeholders explícitos o dejarla fuera de la Home hasta contar con datos reales.



---



CTA final



Copy sugerido:



Una comunidad abierta a más personas



“No necesitas estudiar Ingeniería en Sistemas Computacionales ni pertenecer al ITSH para acercarte a JavaLimo++. Algunas actividades realizadas con instituciones pueden contar con requisitos particulares.”



CTA:



Quiero participar



---



11. Página Nosotros



Ruta:



"/nosotros"



Debe incluir:



Quiénes somos



Definir JavaLimo++ primero como comunidad.



Nuestra historia



Explicar que nació durante la etapa universitaria de sus fundadores dentro de Ingeniería en Sistemas Computacionales en el ITSH.



NO inventar año, nombres, cifras, logros o acontecimientos que no hayan sido proporcionados.



Preparar el componente para incorporar posteriormente una timeline histórica.



Por qué existe JavaLimo++



En lugar de una sección corporativa genérica de “Misión / Visión”, usar una narrativa más humana.



Conceptos principales:



- aprender juntos;

- compartir conocimientos;

- fomentar la programación;

- desarrollar habilidades;

- colaborar;

- competir para crecer;

- acercar tecnología a nuevas personas.



Principios



Conceptualmente:



- aprender compartiendo;

- comunidad;

- colaboración;

- curiosidad;

- crecimiento;

- tecnología accesible.



Comunidades que nos inspiran



Preparar una sección para reconocer clubes, organizaciones o comunidades que hayan inspirado a JavaLimo++.



No inventar nombres.



Esta sección NO necesita estar en la navegación principal.



---



12. Página Lo que hacemos



Ruta:



"/que-hacemos"



Debe explicar las áreas permanentes de actividad de JavaLimo++, no funcionar como archivo histórico.



Áreas:



Programación competitiva



Entrenamientos, algoritmia, resolución de problemas, simulacros y participación en concursos.



Talleres y formación



Programación, herramientas, desarrollo y tecnología.



Eventos tecnológicos



Congresos, encuentros, exposiciones, hackathons, visitas, conferencias y actividades relacionadas con tecnología.



Proyectos y colaboración



Espacio preparado para futuras iniciativas desarrolladas por la comunidad.



Comunidad



Colaboración entre estudiantes, egresados, mentores y participantes.



Cada área puede enlazar posteriormente a experiencias relacionadas.



---



13. Experiencias



Ruta:



"/experiencias"



Esta sección representa:



¿Qué hemos hecho y vivido como comunidad?



Debe admitir diferentes categorías:



Concursos

Eventos

Talleres

Charlas

Visitas

Comunidad

Otros



La arquitectura debe permitir agregar categorías sin modificar la lógica principal.



Cada ExperienceCard debe obtener la información desde contenido estructurado.



Preparar filtros si pueden implementarse de manera simple, accesible y sin introducir complejidad innecesaria.



Cada experiencia debe tener una ruta individual:



"/experiencias/{slug}"



Ejemplo conceptual:



"/experiencias/coding-cup-2026"



La página de detalle puede mostrar:



- título;

- categoría;

- fecha;

- ubicación;

- descripción;

- participantes;

- fotografías;

- resultados, cuando existan;

- aprendizajes;

- contenido relacionado.



No todos los campos deben ser obligatorios.



La plantilla debe tolerar campos faltantes sin romper el diseño.



---



14. Blog



Ruta:



"/blog"



El Blog representa:



¿Qué queremos enseñar, explicar, reflexionar o compartir?



Debe mantenerse conceptualmente separado de Experiencias.



Ejemplos de contenido futuro:



- cómo comenzar en programación competitiva;

- algoritmos;

- herramientas;

- desarrollo;

- tecnología;

- opiniones;

- aprendizajes;

- guías;

- experiencias desde una perspectiva editorial.



Cada artículo debe vivir en:



"/blog/{slug}"



Crear una plantilla reutilizable para artículos.



Preparar:



- autor;

- fecha;

- categoría;

- tags;

- tiempo estimado de lectura si puede calcularse correctamente;

- contenido relacionado;

- breadcrumbs.



---



15. Comunidad



Ruta:



"/comunidad"



Esta página es estratégica.



Debe dejar explícito que JavaLimo++ busca abrirse a personas más allá de una sola institución o carrera.



Copy conceptual:



Forma parte de JavaLimo++



“No importa si estudias en el ITSH, en otra institución, si eres egresado, autodidacta o simplemente tienes interés en programación y tecnología. Existen distintas formas de acercarte y colaborar con la comunidad.”



Aclaración:



“Algunas actividades desarrolladas junto con instituciones educativas u otros organizadores pueden estar sujetas a requisitos particulares.”



Presentar diferentes formas de involucrarse:



Participa



Quiero asistir a actividades y aprender.



Únete



Quiero involucrarme regularmente con la comunidad.



Comparte



Quiero impartir una charla, taller o mentoría.



Colabora



Represento una escuela, comunidad, empresa u organización y quiero colaborar con JavaLimo++.



Agregar FAQ.



Una pregunta importante:



¿Necesito estudiar en el ITSH o Ingeniería en Sistemas Computacionales para participar?



Respuesta:



No. JavaLimo++ nació en ese contexto, pero busca construir una comunidad abierta a personas interesadas en programación y tecnología. Algunas actividades específicas pueden tener requisitos definidos por la institución u organizador correspondiente.



---



16. Contacto



Ruta:



"/contacto"



Preparar contacto mediante:



- redes sociales;

- correo;

- formulario.



Campos conceptuales:



Nombre

Correo

Motivo de contacto

Mensaje



Motivos:



Participar

Colaborar

Proponer taller o charla

Escuela o institución

Empresa u organización

Otro



IMPORTANTE:



Si no existe backend real para procesar el formulario, NO simular que un mensaje fue enviado correctamente.



Se puede construir y validar la interfaz, pero indicar claramente que la integración de envío será implementada después.



Nunca almacenar información sensible en frontend.



---



17. SEO técnico



El proyecto debe nacer correctamente preparado para indexación.



Cada ruta indexable debe tener metadata única:



- "<title>";

- meta description;

- canonical;

- Open Graph;

- social sharing metadata cuando corresponda.



No utilizar el mismo title y description para todas las páginas.



Utilizar títulos descriptivos y naturales.



Ejemplos conceptuales:



Home:



"JavaLimo++ | Comunidad de programación y tecnología"



Nosotros:



"Nosotros | Historia y comunidad JavaLimo++"



Experiencias:



"Experiencias | Concursos, talleres y eventos de JavaLimo++"



Blog:



"Blog | Programación, algoritmos y tecnología | JavaLimo++"



No hacer keyword stuffing.



Escribir para personas primero.



---



18. SEO on-page y semántica



Utilizar HTML semántico correctamente:



<header>

<nav>

<main>

<section>

<article>

<aside>

<footer>



Mantener una jerarquía coherente:



H1

 └─ H2

     └─ H3



Cada página debe tener un H1 principal claro.



No utilizar headings simplemente para modificar tamaño visual.



Los enlaces internos deben utilizar anchor text descriptivo.



Evitar “haz clic aquí” cuando pueda utilizarse un texto semánticamente útil.



Crear enlaces internos naturales entre:



- Home;

- Nosotros;

- Lo que hacemos;

- Experiencias;

- Blog;

- Comunidad.



---



19. URLs



Las URLs deben ser:



- cortas;

- legibles;

- en minúsculas;

- estables;

- sin parámetros innecesarios;

- con slugs descriptivos.



Ejemplos:



/experiencias/coding-cup-2026

/blog/como-empezar-programacion-competitiva



Evitar:



/page?id=8732



---



20. Sitemap, robots y canonical



Mantener correctamente:



- sitemap;

- robots.txt;

- canonical URLs.



Las páginas públicas de contenido deben ser indexables.



No indexar páginas técnicas, previews o rutas que no aporten valor a buscadores.



Evitar contenido duplicado bajo diferentes URLs.



---



21. Datos estructurados



Cuando corresponda, preparar datos estructurados JSON-LD válidos.



Utilizar únicamente schemas que describan contenido que realmente existe.



Considerar:



Organization



Para JavaLimo++.



Event



Para eventos públicos con información suficiente.



Article / BlogPosting



Para artículos.



BreadcrumbList



Para páginas internas.



NO inventar:



- reviews;

- ratings;

- premios;

- fechas;

- autores;

- direcciones;

- teléfonos;

- datos institucionales.



Los datos estructurados deben corresponder al contenido visible de la página.



---



22. Imágenes



Optimizar imágenes para web.



Utilizar formatos modernos cuando sean apropiados.



Definir dimensiones para reducir layout shifts.



Lazy-load para contenido below-the-fold cuando corresponda.



La imagen principal visible al cargar no debe retrasarse innecesariamente.



Cada imagen informativa debe tener "alt" descriptivo.



Imágenes puramente decorativas deben manejarse apropiadamente para accesibilidad.



NO usar nombres genéricos como:



"IMG_29383.jpg"



cuando el pipeline permita nombres descriptivos

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://javalimo.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/43bfb7f8-29a2-440a-9254-088b8fc330f7).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
