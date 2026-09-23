# API Client

Infraestructura base para consumir una futura API Django + Django REST Framework desde el frontend JavaLimo++.

Esta fase no conecta contenido real por HTTP. Las paginas siguen usando las colecciones locales en `src/content/`.

## Proposito

El cliente en `src/lib/api/client.ts` centraliza:

- resolucion de URL contra una base unica
- `fetch` estandar
- metodos `GET`, `POST`, `PUT`, `PATCH` y `DELETE`
- headers JSON cuando el body es JSON
- `AbortSignal`
- respuestas `204`
- respuestas JSON y no JSON
- errores HTTP tipados mediante `ApiError`

## VITE_API_BASE_URL

La fuente unica prevista para el backend futuro es `VITE_API_BASE_URL`, centralizada en `src/config/api.ts`.

La variable se lee bajo demanda. Si no existe, importar los modulos no rompe SSR, cliente ni build. El error aparece solo cuando se ejecuta una operacion HTTP que requiere API.

`VITE_API_BASE_URL` es publica: puede quedar visible en el JavaScript enviado al navegador. No debe contener tokens, passwords, credenciales, cookies ni secretos.

La resolucion queda encapsulada en `src/config/api.ts`. Pages, components, services futuros y adapters no deben leer directamente `import.meta.env` ni `process.env`.

En navegador, Vite incorpora `VITE_API_BASE_URL` durante build mediante `import.meta.env`. Ese valor queda compilado en el browser bundle y no cambia magicamente al arrancar un contenedor con otra variable.

En SSR Node, `src/config/api.ts` tambien puede leer `process.env.VITE_API_BASE_URL` en runtime. Esto permite que el servidor use el entorno del despliegue cuando la llamada API se ejecute en Node. No se disena todavia una estrategia especifica para Railway, Vercel u otra plataforma.

## Uso basico

```ts
import { apiGet, apiPost } from "@/lib/api/client";

const posts = await apiGet<unknown[]>("/api/v1/posts/");

const created = await apiPost<unknown>("/api/v1/posts/", {
  title: "Nuevo articulo",
});
```

Tambien se puede usar `apiRequest` directamente para opciones avanzadas:

```ts
const response = await apiRequest<unknown>("/api/v1/posts/", {
  method: "GET",
  signal,
});
```

## Resolucion de URLs

`resolveApiUrl` elimina slashes iniciales del path antes de usar `new URL`.

Esto evita que un path como `/api/v1/posts/` reemplace accidentalmente una parte importante de la base.

Ejemplos:

- base `https://api.example.com` + path `api/v1/posts/` -> `https://api.example.com/api/v1/posts/`
- base `https://api.example.com/base` + path `/api/v1/posts/` -> `https://api.example.com/base/api/v1/posts/`

Los paths absolutos con protocolo, como `https://otro.example.com/posts`, se rechazan.

## Manejo de errores

`ApiError` conserva:

- `status`
- `statusText`
- `payload`
- `url`
- `method`

No conserva headers, cookies, tokens ni stack traces para UI.

Los errores HTTP `4xx` y `5xx` se lanzan como `ApiError`. Los errores de red/runtime y `AbortError` se dejan pasar como errores originales para no perder informacion.

## Respuestas

- `200/201` con JSON valido: devuelve el objeto parseado.
- `204/205`: devuelve `undefined`.
- Respuesta exitosa no JSON: devuelve texto.
- Respuesta exitosa con `content-type` JSON pero JSON invalido: propaga el `SyntaxError`.
- `4xx/5xx`: lanza `ApiError` con payload JSON si se pudo parsear; si no, usa texto seguro.

## Limitaciones actuales

- No hay servicios por dominio (`PostsService`, `ExperiencesService`, etc.).
- No hay adapters local/API.
- No hay autenticacion.
- No hay retries automaticos.
- No hay uploads ni storage.
- No hay endpoints mock.
- No hay integracion con React Query; el cliente queda desacoplado para usarlo despues desde loaders, React Query, acciones/forms o codigo server-side.
