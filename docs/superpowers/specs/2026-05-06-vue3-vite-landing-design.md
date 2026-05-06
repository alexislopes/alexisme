# Design — alexislopes.dev (Vite + Vue 3)

**Data:** 2026-05-06
**Status:** Aprovado
**Autor:** Alexis Lopes (com Claude Code)

---

## Contexto

O diretório `d:\dev\alexisme` contém um projeto Nuxt em estado inicial (5 commits, estrutura padrão Nuxt: `pages/`, `components/`, `composables/`, `layouts/`, `server/`, `nuxt.config.ts`, workflow NuxtHub, `CNAME`). Decisão: descartar tudo (incluindo `.git`) e iniciar do zero como uma landing page **Vite + Vue 3 + TypeScript**.

A direção visual e de marca já está definida em dois artefatos de referência (anexados na sessão de brainstorming):

- **`wireframe_site_alexis_lopes.html`** — wireframe HTML/CSS estático com a estrutura, copy e seções da landing.
- **`brand-tailwind.css`** — design system completo em Tailwind v4 (`@theme` tokens, utilities `btn-brand`, `tag-cyan`, `card-brand`, etc.). É a fonte de verdade para cores, tipografia, espaçamento e componentes utilitários.

## Objetivo

Entregar uma landing page single-page profissional, performática e fiel ao wireframe, que sirva como cartão de visita do Alexis (Senior Front-end Engineer). Sem blog, sem seção de projetos (adicionados depois quando houver conteúdo real).

## Escopo

### Dentro

- Single page com seções ancoradas: Hero, Sobre, Serviços, Contato.
- Nav sticky com logo SVG, links âncora e CTA.
- Footer minimalista.
- Design system Tailwind v4 carregado a partir de `brand-tailwind.css`.
- Tipografia: Elms Sans + JetBrains Mono via Google Fonts.
- TypeScript com `<script setup>` e Composition API.
- Pronto para deploy no Cloudflare Pages.

### Fora

- Blog / rotas adicionais.
- Seção Projetos (será adicionada quando houver conteúdo real).
- Router, Pinia, Vitest.
- i18n.
- CMS, fetch de dados, autenticação.

## Stack

| Categoria | Escolha | Justificativa |
| --- | --- | --- |
| Build | Vite 5 | Padrão Vue 3, HMR rápido. |
| Framework | Vue 3 (`<script setup lang="ts">`) | Especialidade do autor; Composition API. |
| Linguagem | TypeScript | Coerente com a stack anunciada no hero. |
| Estilo | Tailwind CSS v4 + `@tailwindcss/vite` | Já existe `brand-tailwind.css` v4. |
| Fontes | Google Fonts (Elms Sans, JetBrains Mono) | Elms Sans confirmada como disponível. |
| Lint/Format | ESLint + Prettier (preset Vue + TS) | Higiene mínima. |
| Package manager | pnpm | Mais rápido; mudar para npm se preferir. |
| Testes | — | Pulado nesta versão (custo > valor para landing estática). |
| Deploy | Cloudflare Pages | Conexão manual do repo via dashboard. |

## Estrutura de arquivos

```
alexisme/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── brand-tailwind.css       # design system (entry CSS)
│   │   └── logo.svg                 # opcional (também pode ficar inline em TheNav)
│   ├── components/
│   │   ├── base/
│   │   │   ├── BaseButton.vue
│   │   │   ├── StackTag.vue
│   │   │   └── CodeBlock.vue
│   │   ├── sections/
│   │   │   ├── HeroSection.vue
│   │   │   ├── AboutSection.vue
│   │   │   ├── ServicesSection.vue
│   │   │   └── ContactSection.vue
│   │   ├── ServiceCard.vue
│   │   ├── TheNav.vue
│   │   └── TheFooter.vue
│   ├── data/
│   │   └── content.ts               # textos + tipos
│   ├── App.vue
│   └── main.ts
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

**Princípios:**

- `base/` = primitivos sem dependência de domínio.
- `sections/` = composição de uma seção da landing.
- Componentes singleton (`TheNav`, `TheFooter`) na raiz de `components/` com prefixo `The`.
- Conteúdo separado de markup em `data/content.ts` — fácil editar copy sem tocar nos `.vue`.

## Componentes — contratos

### Primitivos (`base/`)

**`BaseButton.vue`**
- Props: `variant: 'primary' | 'ghost'`, `href?: string`, `as?: 'a' | 'button'` (default infere de `href`).
- Slot default: label.
- Implementação: aplica utilities `btn-brand` ou `btn-ghost` definidas no `brand-tailwind.css`.

**`StackTag.vue`**
- Props: `variant: 'red' | 'cyan' | 'cobalt'` (default `'cyan'`).
- Slot default: texto do tag.
- Implementação: aplica utilities `tag-red` / `tag-cyan` / `tag-cobalt`.

**`CodeBlock.vue`**
- Slot default: conteúdo do código (pode usar classes utilitárias `c-red`, `c-white`, `c-gray`, `c-green` definidas localmente no componente para syntax-highlight estático).
- Renderiza automaticamente o header com 3 dots estilo macOS terminal.

### Seções (`sections/`)

Todas as seções são **stateless**. Lêem dados diretamente de `data/content.ts` (sem prop-drilling — landing estática). Cada uma renderiza seu próprio elemento `<section>` com `id` para âncora.

- **`HeroSection.vue`** — label, nome com `<em>Lopes.</em>` em red, tagline, dois `BaseButton` (primary + ghost), lista de `StackTag`.
- **`AboutSection.vue`** — grid 2 colunas: texto + `CodeBlock` com snippet `Alexis.vue`.
- **`ServicesSection.vue`** — header de seção + grid 3 colunas com `ServiceCard` em loop sobre `content.services`.
- **`ContactSection.vue`** — CTA centralizado: label, título grande, sub, email mailto, três social links.

### Outros

**`ServiceCard.vue`**
- Props: `number: string`, `title: string`, `description: string`, `tags: string[]`.
- Aplica utility `card-brand` (hover acende borda red).

**`TheNav.vue`**
- Sticky com `backdrop-filter: blur`.
- Logo: SVG inline (do anexo `Vector (1).svg`), com `fill="currentColor"` para herdar cor.
- Links âncora (`#sobre`, `#servicos`, `#contato`) + CTA "Trabalhar juntos →".

**`TheFooter.vue`**
- Copyright + nota mono ("vue.js · typescript · made with precision").

### `data/content.ts`

Exports tipados (tipos definidos no mesmo arquivo — sem pasta `types/` separada):

```ts
export interface Service {
  number: string
  title: string
  description: string
  tags: string[]
}

export interface NavLink {
  label: string
  href: string
}

export const nav: { links: NavLink[]; cta: NavLink } = { /* ... */ }
export const hero = { label: '...', name: '...', emphasis: '...', tagline: '...', stack: ['vue.js', /* ... */] }
export const about = { paragraphs: [/* ... */] }
export const services: Service[] = [/* ... */]
export const contact = { label: '...', title: '...', sub: '...', email: '...', socials: [/* ... */] }
```

## Data flow, error handling, testing, a11y

- **Data flow:** estático. Imports diretos de `data/content.ts` nas seções. Sem stores, sem fetch, sem reatividade além de hover/scroll CSS.
- **Error handling:** N/A — sem I/O. Único risco é falha no Google Fonts; resolvido por fallback CSS (`'Elms Sans', 'DM Sans', system-ui`).
- **Testing:** sem suite nesta versão. Adicionar Vitest se algum componente virar parte de uma lib reutilizável.
- **A11y:**
  - `aria-label` na nav.
  - Âncoras com `scroll-behavior: smooth` no `html`.
  - Contraste validado pelo design system.
  - Focus ring brand já definido em `:focus-visible` no `brand-tailwind.css`.
  - Logo SVG com `aria-label="Alexis Lopes"`.

## Plano de execução

1. Apagar todo o conteúdo de `d:\dev\alexisme\` (incluindo `.git`). **Preservar este spec movendo-o para `d:\tmp\` antes do nuke e restaurando depois.**
2. `pnpm create vite . --template vue-ts`.
3. Instalar deps: `tailwindcss@4`, `@tailwindcss/vite`.
4. Configurar `vite.config.ts` com plugin Tailwind.
5. Copiar `brand-tailwind.css` para `src/assets/` e importá-lo em `main.ts`.
6. Adicionar `<link>` do Google Fonts (Elms Sans + JetBrains Mono) no `index.html`.
7. Implementar primitivos (`base/`).
8. Implementar `ServiceCard`, `TheNav`, `TheFooter`.
9. Implementar seções.
10. Popular `data/content.ts` com a copy do wireframe.
11. Compor `App.vue`.
12. Restaurar este spec em `docs/superpowers/specs/`.
13. `git init` + commit inicial.
14. Configurar Cloudflare Pages: instruções no `README.md` (build = `pnpm build`, output = `dist/`). Conexão do repo é manual.

## Riscos e considerações

- **Elms Sans:** confirmada no Google Fonts pelo usuário. Se a importação falhar em algum momento, o fallback `DM Sans → system-ui` garante legibilidade.
- **Cloudflare Pages:** depende do usuário conectar o repo no dashboard — não é automatizado por este plano.
- **Logo:** usar SVG inline (não `<img>`) para herdar `currentColor` e evitar request extra.
- **`brand-tailwind.css` em Tailwind v4:** o arquivo já está escrito para v4 (`@import "tailwindcss"`, `@theme`, `@utility`). Garantir que `@tailwindcss/vite` está instalado e configurado.
