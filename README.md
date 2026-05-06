# alexislopes.dev

Landing page pessoal de Alexis Lopes — Senior Front-end Engineer.

Stack: **Vite · Vue 3 · TypeScript · Tailwind CSS v4**.

## Desenvolvimento

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

## Build

```bash
npm run build      # gera dist/
npm run preview    # serve dist/ localmente
```

## Estrutura

- `src/assets/brand-tailwind.css` — design system (tokens, utilities).
- `src/data/content.ts` — copy/textos da landing (single source of truth).
- `src/components/base/` — primitivos (BaseButton, StackTag, CodeBlock).
- `src/components/sections/` — uma section por arquivo.
- `src/components/` — singletons (TheNav, TheFooter) e ServiceCard.

Para editar copy, alterar `src/data/content.ts`. Para mudar visual, ajustar tokens em `src/assets/brand-tailwind.css`.

## Deploy — Cloudflare Pages

1. Push do repo para o GitHub.
2. Cloudflare Pages → Create application → Connect to Git → seleciona o repo.
3. Configurações de build:
   - **Framework preset:** Vue
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** 20+
4. Deploy. O domínio custom (`alexislopes.dev` ou similar) é configurado em **Custom domains**.

## Spec

Design e decisões em [`docs/superpowers/specs/2026-05-06-vue3-vite-landing-design.md`](docs/superpowers/specs/2026-05-06-vue3-vite-landing-design.md).
