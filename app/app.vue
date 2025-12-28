<script setup lang="ts">
useSeoMeta({
  title: 'NuxtAnime',
  ogTitle: 'NuxtAnime',
  description: 'NuxtAnime - Watch anime online for free.',
  ogDescription: 'NuxtAnime - Watch anime online for free.',
})

import { motion, AnimatePresence } from "motion-v"
const { isLoading } = useLoadingIndicator() // Menangkap status navigasi Nuxt
</script>

<template>
  <UApp>
    <AnimatePresence>
      <motion.div v-if="isLoading" initial="{ opacity: 0 }" animate="{ opacity: 1 }" exit="{ opacity: 0 }"
        class="fixed inset-0 z-[9999] cursor-wait bg-primary/75 flex h-screen justify-center items-center backdrop-blur-[1px]"
        @click.stop.prevent>
        <p class="text-4xl ">Loading...</p>
      </motion.div>
    </AnimatePresence>

    <NuxtLayout>
      <AnimatePresence mode="wait">
        <motion.div :key="$route.fullPath" :initial="{ opacity: 0, y: 10 }" :animate="{ opacity: 1, y: 0 }"
          :exit="{ opacity: 0, y: -10 }">
          <NuxtPage />
        </motion.div>
      </AnimatePresence>
    </NuxtLayout>
  </UApp>
</template>