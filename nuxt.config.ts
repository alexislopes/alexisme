// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/alexisme/"
  },
  devtools: { enabled: true },
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    'unplugin-icons/nuxt',
    ['@nuxtjs/google-fonts', {
      families: {
        'Roboto': true
      }
    }]
  ]
})
