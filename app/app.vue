<script setup lang="ts">
useSeoMeta({
  // Judul Utama
  title: 'Riverside Golf Club | Championship Course in Bogor',
  ogTitle: 'Riverside Golf Club - Golf in Perfect Harmony with Nature',

  // Deskripsi (Gunakan kata kunci Greg Norman, Bogor, dan Championship Course)
  description: 'Experience an 18-hole par 72 championship golf course designed by Greg Norman. Nestled along the Cikeas River in Bogor, Riverside offers world-class facilities and unmatched hospitality.',
  ogDescription: 'Discover the stunning Greg Norman designed course at Riverside Golf Club, Bogor. Perfect harmony between nature and world-class golfing facilities.',

  // Media Sosial & Gambar
  ogImage: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=1200', // Gunakan gambar terbaik Anda
  twitterCard: 'summary_large_image',
  twitterTitle: 'Riverside Golf Club',
  twitterDescription: 'Experience world-class golf at our championship course in Bogor, Indonesia.',
  twitterImage: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=1200',

  // Informasi Tambahan
  author: 'Riverside Golf Club',
  ogType: 'website',
  ogUrl: 'https://www.riverside-golf.com', // Sesuaikan dengan domain Anda
})
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>