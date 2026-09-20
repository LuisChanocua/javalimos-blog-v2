# Content Domain Model

Documento técnico para preparar la futura administración de contenido de JavaLimo++ mediante Django/DRF, tomando como fuente de verdad el frontend actual.

Esta fase no define modelos Django, serializers, migrations, endpoints, clientes HTTP ni editores visuales. El objetivo es nombrar los dominios, sus campos reales, las diferencias entre ellos y las decisiones que conviene posponer.

## 1. Clasificación de dominios

### Publicación / editorial

- `Post`: artículo del blog con listado, detalle, cuerpo estructurado, autor, fecha de publicación y metadata SEO opcional.
- `Experience`: memoria de actividades ya vividas, con listado, detalle, fecha de experiencia, categoría, contenido estructurado opcional y campos propios como aprendizajes, participantes, resultados o galería.
- `Event`: hoy aparece como `Activity` en `upcomingActivities`. Debe evolucionar como dominio propio para próximas actividades, priorizando datos estructurados de fecha, modalidad, ubicación, participación e inscripción.

Estos dominios comparten slug, publicación, listado, detalle y potencial SEO, pero no deben colapsarse automáticamente en una entidad genérica `Content`.

### Administrable sencillo

- `Ally`: aliado, colaborador o comunidad de inspiración. Actualmente es una colección vacía y se renderiza sólo si hay datos. No requiere cuerpo editorial complejo.

### Estático inicialmente

- `About / Nosotros`: combina copy en componente, principios desde `src/content/site/community.ts`, configuración de origen en `src/config/site.ts` e inspiraciones desde `src/content/allies`.
- `WhatWeDo / Lo que hacemos`: usa áreas permanentes desde `src/content/site/areas.ts` y próximas actividades.
- `Community / Comunidad`: usa formas de participación, FAQs y motivos de contacto desde `src/content/site/community.ts`.

Estas páginas pueden seguir estáticas al inicio. No hay evidencia actual de que necesiten CMS completo.

### Transaccional

- `Contact`: formulario con validación cliente, sin envío real ni backend. No es contenido editorial.

## 2. Estado actual

La aplicación usa colecciones TypeScript estáticas en `src/content/` y tipos compartidos en `src/types/content.ts`.

### Posts / Blog

Fuente:

- `src/content/posts/index.ts`
- `src/types/content.ts`
- `src/routes/blog.index.tsx`
- `src/routes/blog.$slug.tsx`
- `src/pages/blog/blog-page.tsx`
- `src/pages/blog/post-page.tsx`
- `src/components/cards/article-card.tsx`

Campos definidos actualmente:

- `slug`
- `title`
- `excerpt`
- `body`
- `publishedAt`
- `author`
- `category`
- `tags`
- `coverImage`
- `seo`
- `demo`

Campos usados realmente por UI:

- Listado: `slug`, `title`, `excerpt`, `publishedAt`, `body`, `category`, `demo`.
- Detalle: `title`, `excerpt`, `category`, `author.name`, `publishedAt`, `body`, `coverImage`, `tags`, `demo`.
- Relacionados: `slug`, `category`.
- SEO detalle: `seo.title`, `seo.description`, `title`, `excerpt`, `publishedAt`, `author.name`.

Observaciones:

- Actualmente sólo existe un post demo.
- `BlogPost` no tiene `id`; la identidad pública y técnica actual depende de `slug`.
- `author.role` existe en el tipo `Author`, pero no se usa en UI.
- `category` es string libre, no catálogo tipado.

### Experiences

Fuente:

- `src/content/experiences/index.ts`
- `src/types/content.ts`
- `src/routes/experiencias.index.tsx`
- `src/routes/experiencias.$slug.tsx`
- `src/pages/experiences/experiences-page.tsx`
- `src/pages/experiences/experience-detail-page.tsx`
- `src/components/cards/experience-card.tsx`

Campos definidos actualmente:

- `id`
- `slug`
- `title`
- `excerpt`
- `body`
- `date`
- `category`
- `location`
- `coverImage`
- `gallery`
- `participants`
- `results`
- `learnings`
- `tags`
- `featured`
- `demo`

Campos usados realmente por UI:

- Listado: `id`, `slug`, `title`, `excerpt`, `date`, `category`, `location`, `coverImage`, `demo`.
- Filtros: `category`.
- Home: `date` para ordenar y selección de las tres más recientes.
- Detalle: `title`, `excerpt`, `date`, `location`, `coverImage`, `body`, `participants`, `results`, `learnings`, `gallery`, `tags`, `demo`.
- Relacionadas: `slug`, `category`, `id`.
- SEO detalle: `title`, `excerpt`.

Observaciones:

- `featured` existe, pero no se usa actualmente; Home usa orden por `date`.
- Las entradas actuales son demo.
- `date` representa fecha de la experiencia, no fecha editorial de publicación.
- `body` es opcional y la plantilla tolera su ausencia.

### Events / actividades próximas

Fuente:

- `src/content/site/activities.ts`
- `src/types/content.ts`
- `src/components/sections/upcoming-activities.tsx`
- `src/components/cards/activity-card.tsx`
- `src/pages/home/home-page.tsx`
- `src/pages/activities/what-we-do-page.tsx`

Tipo actual: `Activity`.

Campos definidos actualmente:

- `id`
- `name`
- `description`
- `date`
- `dateLabel`
- `type`
- `mode`
- `location`
- `status`
- `participation`

Campos usados realmente por UI:

- `id` para key.
- `name`, `description`.
- `date` o `dateLabel`.
- `type`.
- `mode`.
- `location`.
- `status`.
- `participation`.

Observaciones:

- `upcomingActivities` está vacío a propósito.
- La UI ya contempla estado vacío sin inventar datos.
- El modelo actual mezcla nombre `Activity` con la necesidad conceptual futura de `Event`.
- `status` actual describe estado operativo visible, pero no debe confundirse con estado editorial `draft/published`.

### Allies

Fuente:

- `src/content/allies/index.ts`
- `src/types/content.ts`
- `src/components/sections/allies-section.tsx`
- `src/pages/home/home-page.tsx`
- `src/pages/about/about-page.tsx`

Campos definidos actualmente:

- `id`
- `name`
- `description`
- `url`
- `logo`

Campos usados realmente por UI:

- `id`, `name`, `description`, `url`, `logo`.

Observaciones:

- `allies` e `inspirations` están vacíos.
- Ambos usan el mismo tipo `Ally`.
- No hay cuerpo editorial ni detalle individual.

### About / Nosotros

Fuente:

- `src/pages/about/about-page.tsx`
- `src/content/site/community.ts`
- `src/content/allies/index.ts`
- `src/config/site.ts`

Contenido actual:

- Copy fijo dentro del componente.
- `principles`.
- `inspirations`.
- `siteConfig.origin`.
- `OPENNESS_NOTE`.

Observaciones:

- No hay modelo de página.
- La línea de tiempo está explícitamente preparada como espacio futuro, sin datos reales.

### WhatWeDo / Lo que hacemos

Fuente:

- `src/pages/activities/what-we-do-page.tsx`
- `src/content/site/areas.ts`
- `src/components/sections/upcoming-activities.tsx`

Contenido actual:

- `areas`.
- `projectsArea`.
- `upcomingActivities`.

Observaciones:

- `Area` tiene `id`, `title`, `summary`, `details`, `icon`.
- Es contenido estructural permanente, no necesariamente editorial/publicación.

### Community / Comunidad

Fuente:

- `src/pages/community/community-page.tsx`
- `src/content/site/community.ts`
- `src/config/site.ts`

Contenido actual:

- `involvementOptions`.
- `faqs`.
- `OPENNESS_NOTE`.

Observaciones:

- Es contenido semi-estático.
- `contactReasons` también vive aquí, pero alimenta el formulario de contacto.

### Contact

Fuente:

- `src/pages/contact/contact-page.tsx`
- `src/pages/contact/contact-form.tsx`
- `src/content/site/community.ts`
- `src/config/site.ts`

Contenido actual:

- Canales desde `siteConfig.email` y `siteConfig.socials`.
- Motivos desde `contactReasons`.
- Validación cliente de `name`, `email`, `reason`, `message`.

Observaciones:

- El formulario no envía datos.
- El futuro backend debe tratarlo como submission transaccional, no como contenido publicable.

## 3. Modelo conceptual de Post

Modelo futuro recomendado:

- `id`
- `title`
- `slug`
- `excerpt`
- `cover`
- `author_name`
- `author_role`
- `content`
- `category`
- `tags`
- `status`
- `published_at`
- `created_at`
- `updated_at`
- `seo_title`
- `seo_description`
- `is_demo`

Decisiones:

- Mantener `Post` como dominio propio.
- No crear autores complejos todavía; el frontend sólo usa `author.name`.
- No crear taxonomía compleja de categorías/tags todavía; hoy `category` es string y `tags` son etiquetas simples.
- `published_at` debe conservar el rol actual de `publishedAt`: orden, `<time>`, JSON-LD y lectura pública.

Validación futura sin cambio visual:

- El listado debe seguir ordenando por fecha descendente.
- Las rutas `/blog` y `/blog/$slug` deben conservar slugs.
- El renderer de bloques debe producir el mismo HTML visual para bloques equivalentes.

## 4. Modelo conceptual de Experience

Modelo futuro recomendado:

- `id`
- `title`
- `slug`
- `excerpt`
- `cover`
- `content`
- `experience_date`
- `category`
- `location`
- `gallery`
- `participants`
- `results`
- `learnings`
- `tags`
- `featured`
- `status`
- `published_at`
- `created_at`
- `updated_at`
- `seo_title`
- `seo_description`
- `is_demo`

Decisiones:

- Mantener `Experience` como dominio propio.
- Separar `experience_date` de `published_at`; hoy `date` representa cuándo ocurrió la experiencia.
- Conservar `category` como catálogo controlado equivalente a `ExperienceCategory`.
- `featured` existe, pero su semántica queda pospuesta porque la UI actual no lo consume.

Validación futura sin cambio visual:

- El listado y Home deben seguir ordenando por fecha de experiencia mientras no se defina otra regla editorial.
- Los filtros deben derivarse de categorías con contenido, como ahora.
- La plantilla de detalle debe seguir tolerando campos opcionales ausentes.

## 5. Modelo conceptual de Event

Modelo futuro recomendado:

- `id`
- `title`
- `slug`
- `excerpt`
- `cover`
- `description`
- `content`
- `start_at`
- `end_at`
- `date_label`
- `location`
- `mode`
- `participation`
- `registration_url`
- `registration_deadline`
- `status`
- `published_at`
- `created_at`
- `updated_at`
- `seo_title`
- `seo_description`

Decisiones:

- Convertir conceptualmente `Activity` en `Event` cuando exista backend.
- Priorizar datos estructurados para fecha, ubicación, modalidad, participación e inscripción.
- No guardar datos operativos importantes sólo dentro de contenido enriquecido.
- Separar estado editorial (`draft/published`) de estado temporal derivado (`upcoming/ongoing/past`) y de estado visible actual (`programada`, `por-confirmar`, `finalizada`).

Validación futura sin cambio visual:

- `UpcomingActivities` debe seguir mostrando estado vacío cuando no haya eventos publicados.
- Home y Lo que hacemos deben consumir la misma colección de próximos eventos, no duplicados.

## 6. Modelo conceptual de Ally

Modelo futuro recomendado:

- `id`
- `name`
- `logo`
- `description`
- `website`
- `kind`
- `sort_order`
- `is_active`

Decisiones:

- Modelo administrable sencillo.
- No requiere `ContentBlock`.
- `kind` puede distinguir aliados e inspiraciones, o se pueden mantener dos listados filtrados desde la misma entidad. Esta decisión queda abierta hasta conocer necesidades de administración.

Validación futura sin cambio visual:

- Home debe mostrar aliados activos.
- Nosotros debe poder mostrar comunidades que inspiran sin duplicar estructura visual.
- La UI debe seguir mostrando estado vacío si no hay elementos.

## 7. Sistema ContentBlock actual

Contrato actual en `src/types/content.ts`:

- `paragraph`: `{ type: "paragraph"; text: string }`
- `heading`: `{ type: "heading"; text: string }`
- `list`: `{ type: "list"; items: string[] }`
- `quote`: `{ type: "quote"; text: string }`

Consumidor:

- `src/components/content/content-blocks.tsx`

Uso actual:

- `Post.body`: obligatorio.
- `Experience.body`: opcional.
- `readingMinutes`: cuenta texto de bloques `paragraph`, `heading`, `quote` y `list`.

Propiedades importantes:

- No usa HTML crudo.
- No depende de Tiptap, Editor.js, CKEditor ni de una librería concreta.
- El contrato ya pertenece al proyecto.

## 8. Propuesta ContentBlock futura

Mantener una unión discriminada controlada por el proyecto:

- `paragraph`
- `heading`
- `list`
- `quote`
- `image`
- `callout`
- `code`
- `link`

Recomendaciones:

- Versionar el contrato si se agregan bloques nuevos.
- Validar bloques en backend y frontend.
- No aceptar HTML libre como bloque base.
- No acoplar el modelo editorial a la estructura interna de un editor visual.
- Agregar nuevos bloques sólo cuando exista una necesidad real de contenido.

## 9. MediaAsset conceptual

Tipo actual:

- `src`
- `alt`
- `width`
- `height`

Modelo futuro recomendado:

- `id`
- `file`
- `url`
- `alt`
- `caption`
- `credit`
- `width`
- `height`
- `mime_type`
- `created_at`
- `updated_at`

Decisiones:

- Usar un recurso compartido para `cover`, `gallery`, `logo` e imágenes futuras de bloques.
- Mantener `alt` obligatorio a nivel editorial salvo imágenes decorativas.
- No decidir todavía almacenamiento, CDN, uploads ni procesamiento de imágenes.

## 10. Qué permanece estático

Por ahora conviene mantener como estático:

- Copy estructural de Home.
- Copy de About / Nosotros.
- `principles`.
- `areas` y `projectsArea`.
- `involvementOptions`.
- `faqs`.
- `contactReasons`.
- `siteConfig.origin`.
- `OPENNESS_NOTE`.

Razón:

- Son piezas de identidad, estructura o UX, no publicaciones recurrentes.
- El código actual no muestra necesidad de flujo editorial independiente.

## 11. Qué es transaccional

`Contact` debe modelarse aparte cuando exista backend:

- `name`
- `email`
- `reason`
- `message`
- `created_at`
- `status`
- `source`

No debe mezclarse con `Post`, `Experience`, `Event` ni `Ally`.

## 12. Relaciones con Home

Home debe permanecer como consumidor de contenido:

- Últimos `Post` publicados.
- Últimas `Experience` publicadas u ocurridas.
- Próximos `Event` publicados.
- `Ally` activos/destacados.

No conviene crear copias independientes del mismo contenido sólo para Home. Si se necesita curaduría futura, debe hacerse con campos como `featured`, `sort_order` o relaciones explícitas, no duplicando registros.

## 13. Duplicaciones e inconsistencias detectadas

- `Post` no tiene `id`, mientras `Experience`, `Activity` y `Ally` sí.
- `Experience.date`, `Post.publishedAt` y `Activity.date` representan conceptos distintos bajo nombres cercanos.
- `Activity` funciona como evento futuro, pero su nombre no refleja completamente el dominio editorial futuro.
- `Experience.featured` existe pero no se usa actualmente.
- `Author.role` existe pero no se usa actualmente.
- `ImageAsset` es suficiente para la UI actual, pero limitado para administración real de medios.
- `seo` existe en `BlogPost`, pero no en `Experience` ni `Activity`.
- `category` de `Post` es string libre; `Experience.category` sí está tipado.
- `allies` e `inspirations` duplican colección conceptual usando el mismo tipo; puede resolverse más adelante con `kind` o con consultas separadas.
- SEO actual usa rutas relativas en canonical, Open Graph y JSON-LD. No cambiarlo en esta fase.

## 14. Decisiones tomadas

- `Post`, `Experience` y `Event` se mantienen como dominios separados.
- `Ally` es administrable sencillo, no editorial complejo.
- `About`, `WhatWeDo` y `Community` permanecen estáticos inicialmente.
- `Contact` es transaccional.
- Home no es una fuente de contenido duplicada.
- `ContentBlock` debe seguir siendo contrato propio del proyecto.
- `MediaAsset` debe existir conceptualmente como recurso compartido futuro.

## 15. Decisiones pospuestas

- Implementación Django/DRF.
- Serializers, migrations y endpoints.
- Cliente HTTP en frontend.
- Autenticación y permisos de administración.
- Editor visual.
- Workflow editorial más complejo que `draft/published`.
- Modelo relacional de autores.
- Catálogo formal de categorías/tags de blog.
- Estrategia de almacenamiento/CDN de medios.
- Sitemap dinámico desde backend.
- Absolutización de URLs SEO por entorno.
- Reglas de curaduría para Home.

## 16. Puntos abiertos para Django/API

- Definir si `slug` será único globalmente o por dominio.
- Definir si `published_at` puede ser programado.
- Definir cómo representar `draft`, `published` y contenido demo.
- Definir si `Experience.category` será choices, modelo administrable o enumeración versionada.
- Definir si `Event.status` será manual, derivado o mixto.
- Definir estructura final de `ContentBlock` y validación backend.
- Definir contrato de `MediaAsset` y manejo de variantes/responsive images.
- Definir si `Ally.kind` distingue aliados e inspiraciones.
- Definir política de previews para contenido no publicado.
- Definir paginación, filtros y ordenamientos para listados.
- Definir estrategia de caché/ISR/SSR frente a APIs.
- Definir cómo generar metadata, JSON-LD y sitemap desde contenido API sin cambiar la UI.
