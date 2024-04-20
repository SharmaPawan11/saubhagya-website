// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-primevue'
  ],
  primevue: {  },
  css: [
    '~/assets/scss/main.scss',
    '~/assets/fonts/gauthier.css',
    'primevue/resources/themes/aura-dark-noir/theme.css',
    'primeicons/primeicons.css'
  ],
  routeRules: {
    '/': {
      prerender: true
    }
  },
})
