export interface NavLink {
  label: string
  href: string
}

export interface Service {
  number: string
  title: string
  description: string
  tags?: string[]
}

export interface SocialLink {
  label: string
  href: string
}

export const nav = {
  links: [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Contato', href: '#contato' },
  ] as NavLink[],
  cta: { label: 'Trabalhar juntos →', href: '#contato' } as NavLink,
}

export const hero = {
  label: 'SENIOR FRONT-END ENGINEER',
  firstName: 'Alexis',
  lastName: 'Lopes.',
  tagline: 'Front-end Vue sem surpresa ruim.',
  primaryCta: { label: 'Falar sobre meu projeto', href: '#contato' } as NavLink,
  ghostCta: { label: 'Ver como trabalho', href: '#servicos' } as NavLink,
  stack: ['vue.js', 'nuxt', 'typescript', 'pinia', 'vite', 'vitest'],
}

export const about = {
  label: 'SOBRE',
  title: 'Não construo páginas.',
  titleHighlight: 'Construo sistemas.',
  paragraphs: [
    'Engenheiro Front-end Sênior com foco em **Vue.js**. Trabalho em arquitetura de interfaces e design de componentes que crescem sem virar legado.',
    'Últimos anos construindo front-end em produtos B2B exigentes — uma **agtech de monitoramento florestal** e uma **plataforma de fidelidade** com integrações pesadas. O que entrego é avaliado por quem mantém depois, não só pelo PR aceito hoje.',
    'Disponível para projetos pontuais, alocação como sênior em time existente ou consultoria técnica.',
  ],
}

export const services = {
  label: 'SERVIÇOS',
  title: 'O que eu faço',
  sub: 'Cobro por escopo, não por hora. Conversamos antes de qualquer estimativa.',
  items: [
    {
      number: '01',
      title: 'Aplicativos Vue do zero',
      description:
        'Da definição de arquitetura ao deploy. Pra quando você precisa começar bem, não rápido.',
    },
    {
      number: '02',
      title: 'Implementação de features',
      description:
        'Em time existente ou como solo dev — Vue 3, Nuxt, TypeScript, integração com APIs e cobertura de testes.',
    },
    {
      number: '03',
      title: 'Migração de projeto legado',
      description:
        'Vue 2 → Vue 3, Options → Composition, Webpack → Vite. Plano por incremento, não big bang.',
    },
    {
      number: '04',
      title: 'Correção de bugs complexos',
      description:
        'Aqueles que ninguém do time conseguiu reproduzir. Entro por resolução, não por hora.',
    },
    {
      number: '05',
      title: 'Refactor e arquitetura',
      description:
        'Reorganização de base front-end sem reescrever tudo. Pra quando cada feature nova quebra duas antigas.',
    },
    {
      number: '06',
      title: 'Code review e consultoria',
      description:
        'Review estratégico, decisões de stack, modelagem de estado e planning de refactor.',
    },
  ] as Service[],
}

export const contact = {
  label: 'CONTATO',
  title: 'Vamos conversar',
  titleSecondLine: 'sobre o seu projeto.',
  sub: 'Resposta em até 24h. Me conta o contexto — em uma frase ou em três parágrafos, tanto faz.',
  email: 'contato@alexislopes.com.br',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/alexislopesoficial/' },
    { label: 'GitHub', href: 'https://github.com/alexisdrops' },
  ] as SocialLink[],
}

export const footer = {
  copyright: '© 2026 Alexis Lopes. Todos os direitos reservados.',
  note: 'vue.js · typescript · sistemas que envelhecem bem',
}
