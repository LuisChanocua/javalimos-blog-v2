# Production environment

JavaLimo++ mantiene la configuracion de entorno separada por contexto de ejecucion.

## Variables publicas

`VITE_CONTENT_SOURCE` controla la fuente de contenido publicable durante build. En desarrollo debe usar `local`; en produccion debe usar `empty` hasta que exista el backend definitivo.

`VITE_SITE_URL` define la URL publica del sitio. Es una variable publica porque Vite puede incorporarla al bundle del navegador. No debe contener tokens, passwords, credenciales ni otros secretos.

En navegador, las variables `VITE_*` quedan fijadas durante el build. Cambiarlas al arrancar un contenedor ya construido no reescribe el bundle publico.

En SSR Node, `src/config/site-url.ts` puede leer `process.env.VITE_SITE_URL` en runtime cuando una ruta o servicio lo necesite. La configuracion no lanza errores al importar si la variable esta ausente.

## Variables server-only

`RESEND_API_KEY`, `CONTACT_TO_EMAIL` y `CONTACT_FROM_EMAIL` pertenecen al flujo server-side de contacto. Ninguna debe usar prefijo `VITE_`.

## Runtimes

Docker usa `SELF_HOSTED=true` para construir el runtime Node self-hosted con Nitro `node-server`.

Vercel no debe configurar `SELF_HOSTED=true`; debe usar la deteccion/runtime propio del despliegue.
