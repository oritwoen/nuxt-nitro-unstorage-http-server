// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  nitro: {
    devStorage: {
      data: { driver: 'http', base: 'http://us-rep-ni-kv-http.oad.earth:3000' },
    },
    storage: {
      data: { driver: 'http', base: 'http://us-rep-ni-kv-http.oad.earth:3000' },
    },
  },
});
