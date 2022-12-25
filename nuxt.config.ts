// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false,
    typeCheck: true,
    strict: true,
  },
  modules: ['@nuxtjs/tailwindcss'],
})
