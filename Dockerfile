ARG BUN_IMAGE=oven/bun:1.4.2
ARG NODE_IMAGE=node:24-alpine

FROM ${BUN_IMAGE} AS base
WORKDIR /app
ENV CI=true

FROM base AS deps
COPY package.json bun.lock bunfig.toml ./
RUN bun install --frozen-lockfile

FROM deps AS dev
ENV HOST=0.0.0.0
ENV PORT=8080
COPY . .
EXPOSE 8080
CMD ["sh", "-lc", "bun install --frozen-lockfile && bun run dev --host 0.0.0.0 --port 8080"]

FROM deps AS quality
COPY . .
CMD ["bun", "run", "lint"]

FROM quality AS build
ENV NODE_ENV=production
ENV SELF_HOSTED=true
RUN bun run build

FROM ${NODE_IMAGE} AS runtime
WORKDIR /app
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000
COPY --from=build --chown=node:node /app/.output ./.output
USER node
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 CMD node -e "const http = require('node:http'); const port = process.env.PORT || 3000; const req = http.request({ host: '127.0.0.1', port, path: '/', timeout: 4000 }, (res) => process.exit(res.statusCode >= 200 && res.statusCode < 400 ? 0 : 1)); req.on('error', () => process.exit(1)); req.on('timeout', () => { req.destroy(); process.exit(1); }); req.end();"
CMD ["node", ".output/server/index.mjs"]
