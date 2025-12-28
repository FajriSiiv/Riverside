<script setup>
const route = useRoute()
const router = useRouter()

const searchQuery = ref(route.params.search || route.query.q)
const page = ref(parseInt(route.query.page) || 1)






const { data: searchAnime, pending: searchAnimePending, error: searchAnimeError } = await useFetch(`/api/anime/search-anime?q=${searchQuery.value}&page=${page.value}`, {
    query: {
        q: searchQuery,
        page: page
    },
    watch: [page] // Penting: useFetch akan hit ulang API jika page berubah
})

const updateUrl = () => {
    router.push({
        query: { ...route.query, page: page.value }
    })
}

const handlePreviousPage = () => {
    if (page.value > 1) {
        page.value--
        updateUrl()
    }
}
const handleNextPage = () => {
    page.value++
    updateUrl()
}
</script>


<template>
    <div v-if="searchAnimePending">Loading...</div>
    <div v-else-if="searchAnimeError">Error: {{ searchAnimeError }}</div>
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        <div v-for="anime in searchAnime" :key="anime.id">
            <UTooltip :open-delay="400" class="block w-full" :popper="{ placement: 'left', arrow: true, }" :ui="{
                content: 'p-0 w-min-0 min-h-0 ring-0 shadow-none overflow-visible',
            }">
                <div class="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors">
                    <NuxtLink :to="`/anime/${anime.id}`">
                        <img :src="anime.imageUrl" :alt="`${anime.title}-anime-image`"
                            class="w-[90%] md:w-full h-[250px] object-cover rounded-sm" draggable="false">
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

    <div class="w-full min-h-[250px] flex justify-between gap-4 items-center">
        <button @click="handlePreviousPage" :disabled="page === 1 || page === undefined || page < 1"
            class="py-2 px-4 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-800">Previous
            Page</button>
        <button @click="handleNextPage" :disabled="pending || !searchAnime || searchAnime.length < 25"
            class="py-2 px-4 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-800">Next
            Page</button>

    </div>
</template>
