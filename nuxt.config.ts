import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  devtools: { enabled: false },
  compatibilityDate: '2025-07-15',
  css: ['./app/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
    server: {
      hmr: {
        protocol: "http",
        host: 'localhost',
        clientPort: 3000,
        port: 3000,
      },
      middlewareMode: false,
    },
  },
  modules: ['@nuxt/fonts', '@nuxt/ui', '@nuxt/icon'],
  nitro: {
    prerender: {
      ignore: ['/sw.js', '/__nuxt_error']
    },
    routeRules: {
      '/sw.js': { cache: false }
    }
  },
  icon: {
    componentName: 'NuxtIcon'
  }
})