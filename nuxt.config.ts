// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/alexisme/"
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss', 'nuxt-icon'
  ]
})
