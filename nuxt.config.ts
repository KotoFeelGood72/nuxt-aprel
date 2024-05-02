// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/image", '@pinia/nuxt', '@nuxtjs/svg-sprite'],
  css: [
    '@/assets/styles/reset.css',
  ],
})