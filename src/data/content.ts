export interface NavLink {
  label: string
  href: string
}

export interface Service {
  number: string
  title: string
  description: string
  tags: string[]
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
  tagline:
    'Arquiteto de interfaces Vue.js que escalam — do componente à estrutura completa do produto.',
  primaryCta: { label: 'Vamos conversar', href: '#contato' } as NavLink,
  ghostCta: { label: 'Ver serviços', href: '#servicos' } as NavLink,
  stack: ['vue.js', 'nuxt', 'typescript', 'pinia', 'vite', 'vitest'],
}

export const about = {
  label: 'SOBRE',
  title: 'Não construo páginas.',
  titleHighlight: 'Construo sistemas.',
  paragraphs: [
    'Sou Engenheiro Front-end Sênior com foco em **Vue.js** — especializado em arquitetura de interfaces e design de sistemas de componentes que crescem sem virar legado.',
    'Trabalho na interseção entre **engenharia e produto**: entrego código que funciona, que outros devs conseguem manter, e que faz sentido para o negócio.',
    'Disponível para projetos **freelance**, consultoria técnica e colaborações estratégicas.',
  ],
}

export const services = {
  label: 'SERVIÇOS',
  title: 'O que eu entrego',
  sub: 'Trabalho como especialista técnico ou parceiro de desenvolvimento — do escopo ao deploy.',
  items: [
    {
      number: '01 / ARQUITETURA',
      title: 'Vue.js Architecture',
      description:
        'Design de estruturas front-end escaláveis: modularização, separação de concerns e patterns que sobrevivem ao crescimento do produto.',
      tags: ['vue 3', 'nuxt', 'typescript', 'composables'],
    },
    {
      number: '02 / COMPONENTES',
      title: 'Component Systems',
      description:
        'Construção de design systems e bibliotecas de componentes reutilizáveis — API consistente, acessibilidade e DX no centro.',
      tags: ['storybook', 'headless', 'a11y', 'tokens'],
    },
    {
      number: '03 / CONSULTORIA',
      title: 'Freelance & Tech Review',
      description:
        'Atuo como especialista técnico no seu time ou entrego projetos completos — do MVP ao refactor estratégico.',
      tags: ['code review', 'mvp', 'refactor', 'mentoria'],
    },
  ] as Service[],
}

export const contact = {
  label: 'CONTATO',
  title: 'Tem um projeto',
  titleSecondLine: 'em mente?',
  sub: 'Manda uma mensagem — respondo em até 24h sobre projetos freelance, consultoria ou colaborações.',
  email: 'alexisdrops@gmail.com',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/alexislopesoficial/' },
    { label: 'GitHub', href: 'https://github.com/alexisdrops' },
  ] as SocialLink[],
}

export const footer = {
  copyright: '© 2026 Alexis Lopes. Todos os direitos reservados.',
  note: 'vue.js · typescript · made with precision',
}
