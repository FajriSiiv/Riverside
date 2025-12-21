import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  devtools: { enabled: false },
  compatibilityDate: '2025-07-15',
  css: ['./app/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
    server: {
     hmr: {
        // Ini tidak mematikan HMR, tapi mencegah error koneksi 
        // yang sering memicu update rute berulang di Windows
        overlay: false 
      },
      watch: {
        // Jika pakai Windows, kadang perlu menaikkan interval agar tidak terlalu sensitif
        usePolling: true,
        interval: 100
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