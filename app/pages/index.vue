<script setup>
const { data: airingTopAnime, pending: airingTopAnimePending, error: airingTopAnimeError } = await useFetch('/api/anime/airing-top-anime')
</script>


<template>
    <div v-if="!airingTopAnime && airingTopAnimePending" class="flex justify-center items-center h-screen">
        <p class="text-white animate-pulse">Loading...</p>
    </div>
    <div v-else class="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-8 pt-10">
        <div class="col-span-12 md:col-span-6 lg:col-span-8">
            <div class="w-[90%] md:w-full h-[350px] relative rounded-md overflow-hidden">
                <UCarousel :items="airingTopAnime" v-slot="{ item }" :autoplay="{ delay: 5000 }" fade
                    class="w-full h-[350px]  relative" :ui="{
                        item: 'basis-full',
                        container: 'h-[350px] overflow-hidden'
                    }">
                    <div
                        class="absolute bottom-0 left-0 top-0 right-0 z-10 bg-linear-to-t from-black/80 via-black/80 via-50% to-black/5 h-[350px]">
                    </div>
                    <img :src="item.imageUrl" :alt="`${item.title}-anime-image`"
                        class="w-full h-full object-cover object-[50%_30%] absolute left-0 top-0 blur-xs">
                    <div class="p-1.5 sm:p-4 lg:p-10 relative z-10 flex flex-col sm:flex-row gap-5 h-[350px]">
                        <div class="flex flex-row gap-2">
                            <img :src="item.imageUrl" :alt="`${item.title}-anime-image-small`"
                                class=" w-[100px] sm:w-[150px] h-[200px] sm:h-[250px] object-cover rounded-md">
                            <div class="gap-2 flex flex-col sm:hidden flex-wrap">
                                <p class="text-white font-semibold text-lg md:text-2xl">{{ item.title }}</p>
                                <div class="flex flex-row gap-2 flex-wrap">
                                    <p v-for="genre in item.genres" :key="genre"
                                        class="text-xs bg-accent/60 px-2 py-1 rounded-full text-white h-[27px]">
                                        {{ genre }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-1.5 justify-end mb-2 font-poppins">
                            <div class="gap-2 sm:flex hidden">
                                <p v-for="genre in item.genres" :key="genre"
                                    class="text-xs bg-accent/60 px-2 py-1 rounded-full text-white ">
                                    {{ genre }}</p>
                            </div>
                            <p class="hidden md:block text-white font-semibold text-lg md:text-2xl">{{ item.title }}</p>
                            <p class="text-xs md:text-sm text-gray-300/70">{{ item.description.slice(0, 100) }}
                            </p>
                        </div>
                    </div>
                </UCarousel>
            </div>
            <div class="mt-10"></div>
            <AnimeCarousel title="Airing Top Anime" :items="airingTopAnime" :pending="airingTopAnimePending"
                :error="airingTopAnimeError" />

            <div class="mt-10"></div>
            <HomepageAnimeContent />
            <div class="mt-10"></div>
        </div>
        <div class="col-span-12 md:col-span-6 lg:col-span-4">
            <HomepageSidebar />
        </div>

    </div>
</template>