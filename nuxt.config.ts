// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxt/image'],
  build: {
    transpile: ['lucide-vue-next']
  },
  experimental: {
    inlineSSRStyles: true
  },
  app: {
    head: {
      title: 'Recomeçar - Nutri Isabella Jardim',
      htmlAttrs: {
        lang: 'pt-BR'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '7 dias para desinchar, destravar o emagrecimento e começar o ano do jeito certo. Desafio gratuito de 26/01 a 01/02.' }
      ],
      link: [
        { rel: 'icon', type: 'image/webp', href: '/icone.webp' }
      ]
    }
  },
  devServer: {
    port: 3009
  },
  routeRules: {
    '/images/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    '/feedbacks/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    '/_nuxt/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    '/_ipx/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    '/logo.svg': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    '/**/*.webp': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    '/**/*.svg': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    '/**/*.png': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } }
  }
});
