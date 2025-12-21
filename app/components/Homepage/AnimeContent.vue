<script setup>
const currentTabIdx = ref(0)

const tabs = [
    { id: 'trending', label: 'Trending', api: '/api/anime/top-anime' },
    { id: 'airing-top-anime', label: 'Airing Top Anime', api: '/api/anime/airing-top-anime' },
    { id: 'movie', label: 'Movie Anime', api: '/api/anime/movie-anime' }
]

const selectedApi = computed(() => tabs[currentTabIdx.value].api)

const { data: animeList, pending: isTabLoading, error } = await useFetch(selectedApi, {
    // Watch memastikan Nuxt melakukan fetch ulang saat URL berganti
    watch: [selectedApi],
    key: `anime-list-${selectedApi.value}`,
})

const handleTabChange = (index) => {
    currentTabIdx.value = index
}
</script>
<template>
    <div class="flex flex-col gap-5">
        <BaseTabNavigation :tabs="tabs" @update:tab-index="handleTabChange" />
        <div v-if="isTabLoading" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            <div v-for="n in 8" :key="n">
                <div class="relative p-2">
                    <div class="w-full h-[250px] bg-secondary/50 animate-pulse rounded-md">
                    </div>
                    <div class="pt-2 flex flex-col gap-1">
                        <div class="w-full h-[25px] bg-secondary/50 animate-pulse rounded-md"></div>
                        <div class="w-full h-[25px] bg-secondary/50 animate-pulse rounded-md"></div>
                    </div>
                </div>
            </div>
            <p class="text-accent animate-pulse">Loading Anime...</p>
        </div>
        <div v-else class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            <div v-for="anime in animeList.slice(0, 20)" :key="anime.id">
                <div class="relative p-2">
                    <img :src="anime.imageUrl" class="w-full h-[250px] object-cover rounded-sm" draggable="false" />
                    <div class="pt-2">
                        <p class="text-white font-semibold truncate text-sm">{{ anime.title }}</p>
                        <p class="text-yellow-400 text-xs">⭐ {{ anime.score }}</p>
                    </div>
                </div>
            </div>

        </div>

    </div>

</template>