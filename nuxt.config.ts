// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: 'content-wind',
  nitro: {
    prerender: {
      routes: ['/sitemap.xml'],
    },
  },
})
