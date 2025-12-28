import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  app: {
    pageTransition: false,
    layoutTransition: false,
    head: {
      title: 'NuxtAnime - Portal Anime Terlengkap', 
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Nonton dan jelajahi informasi anime terbaru hanya di NuxtAnime.' // WAJIB DIISI UNTUK SEO
        },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  
  css: ['tailwindcss/index.css', 
    '@/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
    server: {
      hmr: { overlay: false },
      watch: {
        usePolling: true,
        interval: 100
      },
    },
  },

  modules: [
    '@nuxt/fonts', 
    '@nuxt/ui', 
    '@nuxt/icon',
    'motion-v/nuxt'
  ],

  compatibilityDate: '2025-07-15',

  nitro: {
    prerender: {
      crawlLinks: true, // Tambahkan ini agar semua link di-crawl otomatis untuk SEO (SSG)
      ignore: ['/sw.js', '/__nuxt_error']
    }
  },

  icon: {
    componentName: 'NuxtIcon'
  }
})