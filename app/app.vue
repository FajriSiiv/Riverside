<script setup lang="ts">
useSeoMeta({
  // --- IDENTITAS UTAMA ---
  title: 'Riverside Wine Golf Club | Championship Course in Bogor',
  titleTemplate: (title) => title ? `${title} - Riverside Wine Golf Club` : 'Riverside Wine Golf Club',
  description: 'Experience an 18-hole par 72 championship golf course designed by Greg Norman. Nestled along the Cikeas River in Bogor, Riverside offers world-class facilities.',
  author: 'Riverside Wine Golf Club',

  // --- PENGATURAN TEKNIS SEO ---
  robots: 'index, follow',
  keywords: 'golf course bogor, riverside golf club, greg norman course, lapangan golf indonesia, golf bogor, championship golf course',

  // --- OPEN GRAPH (Facebook, LinkedIn, WhatsApp) ---
  ogType: 'website',
  ogUrl: 'https://riverside-wine.vercel.app/',
  ogSiteName: 'Riverside Wine Golf Club', // Nama Brand situs
  ogLocale: 'en_US', // Bahasa konten (bisa diganti id_ID jika konten bahasa Indonesia)
  ogTitle: 'Riverside Wine Golf Club - Wine in Perfect Harmony with Nature',
  ogDescription: 'Discover the stunning Greg Norman designed course at Riverside Golf Club, Bogor. Perfect harmony between nature and world-class golfing facilities.',
  ogImage: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=1200',
  ogImageAlt: 'Scenic view of Riverside Golf Club course in Bogor',

  // --- TWITTER CARD ---
  twitterCard: 'summary_large_image',
  twitterSite: '@riversidewine',
  twitterCreator: '@riversidewine',
  twitterTitle: 'Riverside Wine Golf Club | World-Class Golf in Bogor',
  twitterDescription: 'Experience world-class golf at our championship course in Bogor, Indonesia. Designed by Greg Norman.',
  twitterImage: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=1200',

})
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>