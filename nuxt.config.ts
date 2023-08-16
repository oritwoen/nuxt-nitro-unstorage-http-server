// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  nitro: {
    devStorage: {
      data: { driver: 'http', base: 'http://51.68.147.141:3000' },
    },
    storage: {
      data: { driver: 'http', base: 'http://51.68.147.141:3000' },
    },
  },
});
