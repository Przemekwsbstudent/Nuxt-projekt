// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  modules: [
      'nuxt-icon',
      'nuxt-lodash',
      '@pinia/nuxt',
      '@nuxtjs/supabase',
      '@pinia-plugin-persistedstate/nuxt',
      '@nuxtjs/tailwindcss'
      
  ],
  supabase: {
    redirectOptions: {
      login: '/*',
      callback: '/confirm',
      exclude: [],
    },
  },

  build: {
    transpile: ['pinia-plugin-persistedstate'],
  },
  
  runtimeConfig: {
      public: {
        stripePk: process.env.STRIPE_PK_KEY
      }
  },

  app: {
    
      head: {
        script: [
          { src: 'https://js.stripe.com/v3/', defer: true }
        ],
      }
    }
})
