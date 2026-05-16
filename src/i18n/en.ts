export default {
  nav: {
    about: 'About',
    services: 'Services',
    process: 'Process',
    contact: 'Contact',
    cta: 'Work together →',
    localeToggleAria: 'Change language',
  },

  hero: {
    label: 'SENIOR FRONT-END ENGINEER',
    firstName: 'Alexis',
    lastName: 'Lopes.',
    tagline: 'Vue front-end that holds up.',
    primaryCta: 'Talk about my project',
    ghostCta: 'See how I work',
    stackLabel: 'STACK',
  },

  about: {
    label: 'ABOUT',
    title: "I don't build pages.",
    titleHighlight: 'I build systems.',
    paragraphs: [
      'Senior Front-end Engineer focused on **Vue.js**. I work on interface architecture and component design that scales without turning into legacy.',
      "Last few years building front-end for demanding B2B products — a **forest-monitoring agtech** and a **loyalty platform** with heavy integrations. What I deliver gets judged by whoever maintains it later, not just by today's accepted PR.",
      'Available for one-off projects, embedding as a senior on an existing team, or technical consulting.',
    ],
  },

  services: {
    label: 'SERVICES',
    title: 'What I do',
    sub: 'I charge by scope, not by hour. We talk before any estimate.',
    items: {
      fromScratch: {
        number: '01',
        title: 'Vue apps from scratch',
        description:
          'From architecture to deploy. For when you need to start right, not fast.',
      },
      features: {
        number: '02',
        title: 'Feature implementation',
        description:
          'Embedded in an existing team or as a solo dev — Vue 3, Nuxt, TypeScript, API integration and test coverage.',
      },
      migration: {
        number: '03',
        title: 'Legacy project migration',
        description:
          'Vue 2 → Vue 3, Options → Composition, Webpack → Vite. Incremental plan, no big bang.',
      },
      bugs: {
        number: '04',
        title: 'Complex bug fixes',
        description:
          'The ones nobody on the team could reproduce. I charge per resolution, not per hour.',
      },
      refactor: {
        number: '05',
        title: 'Refactoring & architecture',
        description:
          'Reorganizing your front-end base without rewriting everything. For when every new feature breaks two old ones.',
      },
      review: {
        number: '06',
        title: 'Code review & consulting',
        description:
          'Strategic review, stack decisions, state modeling, and refactor planning.',
      },
    },
  },

  process: {
    label: 'PROCESS',
    title: 'From email to delivery.',
    steps: {
      conversation: {
        number: '01',
        title: 'First conversation',
        description:
          "You send context, we talk for 30 minutes. If I'm not the right person for this problem, I'll tell you on the call.",
      },
      proposal: {
        number: '02',
        title: 'Detailed proposal',
        description:
          'I send a proposal with scope, timeline, assumptions, and pricing model. Everything on the table before we start.',
      },
      execution: {
        number: '03',
        title: 'Transparent execution',
        description:
          "Updates on the agreed channel, open code review, no black box. You see what I'm doing and why.",
      },
      handover: {
        number: '04',
        title: 'Handover',
        description:
          "Documentation and a support window agreed in the proposal. You're not left stranded after deploy.",
      },
    },
  },

  contact: {
    label: 'CONTACT',
    title: "Let's talk",
    titleSecondLine: 'about your project.',
    sub: "I reply within 24h. Tell me the context — one sentence or three paragraphs, either works.",
    form: {
      nameLabel: 'Your name',
      namePlaceholder: 'How you prefer to be called',
      emailLabel: 'Your email',
      emailPlaceholder: "you{'@'}company.com",
      messageLabel: 'What should we talk about?',
      messagePlaceholder: 'Project context, timeline, scope… or just a question.',
      submitIdle: 'Send message',
      submitLoading: 'Sending…',
      successTitle: 'Got it.',
      successBody: "I'll reply within 24h to the email you provided.",
      errorTitle: "Couldn't send right now.",
      errorBody: 'Try again in a few minutes or email me directly below.',
      fallbackHint: 'Prefer email directly?',
    },
  },

  footer: {
    copyright: '© 2026 Alexis Lopes. All rights reserved.',
    note: 'vue.js · typescript · systems that age well',
  },

  meta: {
    description:
      'Alexis Lopes — Senior Front-end Engineer. Vue front-end that holds up, for B2B products that need to refactor without pausing delivery.',
    ogDescription:
      'Vue front-end that holds up, for B2B products that need to refactor without pausing delivery.',
  },
}
