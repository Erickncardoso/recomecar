// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxt/image'],
  css: ['~/assets/css/main.scss'],
  app: {
    head: {
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
    '/**/*.webp': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    '/**/*.svg': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    '/**/*.png': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } }
  }
});
