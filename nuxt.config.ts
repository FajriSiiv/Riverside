import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  app: {
    pageTransition: false,
    layoutTransition: false,
  },
  css: ['tailwindcss/index.css', 
    '@/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: [
    '@nuxt/fonts', 
    '@nuxt/ui', 
    '@nuxt/icon',
    'motion-v/nuxt',
    '@nuxt/image'
  ],
  image: {
    format: ['webp', 'avif']
  }

})