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
  title: 'O que eu entrego',
  sub: 'Três formas de me contratar — escolha pela situação, não pelo cargo.',
  items: [
    {
      number: '01 / ARQUITETURA',
      title: 'Vue.js Architecture',
      description:
        'Pra quando o front cresceu rápido, ninguém entende mais o código e cada feature nova quebra duas antigas. Reorganizo a base sem precisar reescrever tudo.',
      tags: ['vue 3', 'nuxt', 'typescript', 'composables'],
    },
    {
      number: '02 / COMPONENTES',
      title: 'Component Systems',
      description:
        'Pra quando seu time recria o mesmo botão em três telas com três comportamentos diferentes. Monto o sistema de componentes e a régua de uso — acessibilidade e DX no centro.',
      tags: ['storybook', 'headless', 'a11y', 'tokens'],
    },
    {
      number: '03 / CONSULTORIA',
      title: 'Freelance & Tech Review',
      description:
        'Pra quando você precisa de um sênior por algumas semanas, não de uma contratação. Entro como especialista no time, faço review estratégico ou toco a entrega ponta a ponta.',
      tags: ['code review', 'mvp', 'refactor', 'mentoria'],
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
