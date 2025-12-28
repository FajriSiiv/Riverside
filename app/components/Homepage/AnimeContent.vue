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
        <div v-else class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
            <div v-for="anime in animeList.slice(0, 20)" :key="anime.id">
                <UTooltip :open-delay="400" class="block w-full" :popper="{ placement: 'left', arrow: true, }" :ui="{
                    content: 'p-0 w-min-0 min-h-0 ring-0 shadow-none overflow-visible',
                }">
                    <div class="p-2 hover:bg-gray-800 dark:hover:bg-gray-800 rounded-md transition-colors">
                        <NuxtLink :to="`/anime/${anime.id}`">
                            <img :src="anime.imageUrl" class="w-[90%] md:w-full h-[250px] object-cover rounded-sm"
                                draggable="false" :alt="`${anime.title}-anime-image`">
                            <div class="mt-3">
                                <p class="text-sm font-semibold">{{ anime.title }}</p>
                                <p class="text-xs">⭐ {{ anime.score }}</p>
                            </div>
                        </NuxtLink>
                    </div>
                    <template #content>
                        <BaseCardTooltip :item="anime" />
                    </template>
                </UTooltip>
            </div>

        </div>

    </div>

</template>