// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,

  modules: [
    '@nuxt/icon',
    'unplugin-icons/nuxt',
    "@nuxt/fonts",
    "nuxt-gtag",
    '@vueuse/motion/nuxt'
  ],

  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      spotifyClientId: process.env.SPOTIFY_CLIENT_ID,
      spotifyApiScope: process.env.SPOTIFY_API_SCOPE,
      spotifyApiState: process.env.SPOTIFY_API_STATE,
      spotifyAccountBaseUrl: process.env.SPOTIFY_ACCOUNT_BASE_URL,
      spotifyApiBaseUrl: process.env.SPOTIFY_API_BASE_URL,
      spotifyCallbackUri: process.env.SPOTIFY_CALLBACK_URI,
      spotifyAuthorizationCode: process.env.SPOTIFY_AUTHORIZATION_CODE
    }
  },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext'
      }
    },
    prerender: {
      failOnError: false
    }
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: '2024-07-22',
})