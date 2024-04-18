// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['~/assets/css/main.css'],
  app:{
    head:{
      title: 'Ridin App'
    },
    meta:[
      {
        name: 'description',
        content: 'You car companion for the best buy'
      },
    ]
  }
})
