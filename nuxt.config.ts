// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: true,
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
