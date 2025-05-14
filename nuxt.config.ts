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

  // lambdaデプロイ用設定 nitroはサーバーエンジン
  nitro: {
    preset: 'aws-lambda',
    serveStatic: true,
  },

  app: {
    baseURL: '/',
  },

  ssr: true,  // SSR（サーバーサイドレンダリング）を有効化

  // laravelAPIのエンドポイント指定
  runtimeConfig: {
    public: {
      apiBase: 'https://api.rep-aispr.xyz',
    },
    apiBase: 'https://api.rep-aispr.xyz',
    apiKey: '',
  }

})