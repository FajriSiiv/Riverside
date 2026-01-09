import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  app: {
    pageTransition: false,
    layoutTransition: false,
    head: {
      meta: [
        { 
          name: 'google-site-verification', 
          content: 'XN3hq7dQEMPOvdKnWJ0_MK3UvRkZ8ZJ7iIsYBxtb45o' 
        }
      ],
      noscript: [
        {
          innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TKDGRHGJ"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }
      ]
    }
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
    '@nuxt/image',
    '@nuxt/scripts'
  ],
  scripts: {
    registry: {
      googleAnalytics: {
        id: 'G-JKDKG1KJG6'
      }
    }
  },
  image: {
    format: ['webp', 'avif']
  }

})