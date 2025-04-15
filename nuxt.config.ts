// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/devtools',
    '@pinia/nuxt',
    // '@nuxt/eslint',
    // 'nuxt-lodash',
  ],
  // 全体に適用するcss
  css: ['~/assets/css/reset.css'],
})
