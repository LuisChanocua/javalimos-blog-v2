# Evolución creativa y UI de JavaLimo++

## Dirección aprobada

- **Paleta:** blanco `#FFFFFF`, superficie suave `#F4F7FA`, azul principal `#377CBD`, azul oscuro `#173A5E`, texto `#15202B`, texto secundario `#596675` y borde `#DDE5EC`.
- **Tipografía:** Sora variable para display y headings; Manrope variable para body y metadata.
- **Composición:** alternancia editorial con hero asimétrico e isotipo lateral.
- **Carácter:** humano, técnico, joven, curioso y cercano; sin estética SaaS, cyberpunk, hacker o IA.

## Qué se construirá

### 1. Sistema visual compartido

- Sustituir el tema oscuro verde por el sistema claro azul del logotipo mediante los tokens existentes.
- Aumentar las escalas tipográficas con `clamp()`, espaciamiento editorial y radios contenidos.
- Actualizar navegación, encabezados, botones, enlaces, estados vacíos y pie de página sin cambiar su comportamiento.
- Añadir recursos de identidad discretos: isotipo hexagonal, numeración, líneas y símbolos como `++` o `→`.
- Incorporar revelados CSS ligeros y estados interactivos, respetando `prefers-reduced-motion`.

### 2. Portada

- Rehacer el hero con el copy aprobado, titular protagonista e isotipo lateral de gran presencia.
- Sustituir la introducción institucional por un manifiesto: aprender haciendo, resolver problemas y compartir lo descubierto.
- Presentar las cuatro áreas como bloques editoriales numerados y alternados, no como cuatro tarjetas iguales.
- Mantener actividades, experiencias, blog y aliados conectados a sus colecciones actuales.
- Dar protagonismo a una experiencia y a un artículo destacados; el resto conservará formatos de colección más compactos.
- Usar espacios fotográficos claramente marcados como pendientes cuando no exista una imagen real.

### 3. Páginas interiores

- **Lo que hacemos:** reutilizar la misma composición alternada de áreas, incluyendo detalles existentes.
- **Experiencias:** abrir con una experiencia destacada y continuar con el archivo filtrable; mantener filtros y datos estructurados.
- **Blog:** crear una apertura editorial con el artículo principal y una lista visualmente jerarquizada.
- **Nosotros:** comenzar por el motivo humano de la comunidad, después contar el origen universitario y reducir la repetición sobre apertura.
- **Comunidad:** concentrar aquí la explicación de quién puede participar y conservar el FAQ como fuente principal de esa aclaración.
- **Contacto y páginas de detalle:** adaptar tipografía, ritmo, imágenes y controles al nuevo sistema sin alterar validaciones ni contenido.

### 4. Copy

- Retirar de Home, CTA global y pie de página la repetición de “nacimos en el ITSH pero estamos abiertos”.
- Mantener el origen explícito en la historia de Nosotros y la aclaración de participación en Comunidad/FAQ.
- Usar lenguaje directo y sencillo, sin afirmaciones, cifras, fechas, aliados o fotografías inventadas.

## Límites que se conservarán

- No cambiar rutas, navegación, SEO, canonical, schema, robots ni semántica principal.
- No cambiar modelos ni acoplar registros a las vistas.
- No añadir backend, cuentas, base de datos, APIs, nuevas funciones o dependencias pesadas.
- No eliminar componentes reutilizables: se crearán variantes localizadas solo cuando la composición lo requiera.
- Las imágenes reales seguirán siendo reemplazables desde las colecciones de contenido.

## Verificación

- Comprobar todas las rutas públicas en escritorio y móvil.
- Confirmar un solo H1 por página, ausencia de overflow horizontal y navegación por teclado.
- Revisar consola, hidratación, imágenes, filtros, menú móvil y formulario existente.
- Confirmar que el estado final compila sin errores y mantiene metadata única por ruta.
