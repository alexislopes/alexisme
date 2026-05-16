// Locale-agnostic structural data: anchors, URLs, the email address,
// the list of nav sections and their hrefs. Translatable strings live
// in src/i18n/{pt,en}.ts.

export interface NavLink {
  key: string
  href: string
}

export interface SocialLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { key: 'about', href: '#sobre' },
  { key: 'services', href: '#servicos' },
  { key: 'process', href: '#processo' },
  { key: 'contact', href: '#contato' },
]

export const navCtaHref = '#contato'

export const heroPrimaryCtaHref = '#contato'
export const heroGhostCtaHref = '#servicos'

export const heroStack = ['vue.js', 'nuxt', 'typescript', 'pinia', 'vite', 'vitest']

export const serviceKeys = [
  'fromScratch',
  'features',
  'migration',
  'bugs',
  'refactor',
  'review',
] as const
export type ServiceKey = (typeof serviceKeys)[number]

export const processKeys = ['conversation', 'proposal', 'execution', 'handover'] as const
export type ProcessKey = (typeof processKeys)[number]

export const contactEmail = 'contato@alexislopes.com.br'

export const formspreeEndpoint = 'https://formspree.io/f/mdajngbj'

export const socials: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/alexislopesoficial/' },
  { label: 'GitHub', href: 'https://github.com/alexisdrops' },
]
