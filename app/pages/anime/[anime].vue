<script setup>
const { anime } = useRoute().params

const { data: animeDetail, pending: animeDetailPending, error: animeDetailError } = useFetch(`/api/anime/detail/${anime}`, {
    lazy: true,
    server: true
})

// 2. Ini juga jangan di-await
const { data: animeCharacters, pending: animeCharactersPending, error: animeCharactersError } = useFetch(`/api/anime/characters/${anime}`, {
    lazy: true,
    server: false
})

const { data: animeStaff, pending: animeStaffPending, error: animeStaffError, } = useFetch(`/api/anime/staff/${anime}`, {
    lazy: true,
    server: false
})

const searchOriginalCreator = computed(() => {
    if (!animeStaff.value) return []
    return animeStaff.value.filter((staff) => staff.positions[0] === 'Original Creator')
})



const flatRelations = computed(() => {
    if (!animeDetail.value?.relations) return []

    // flatMap akan menggabungkan semua array entry menjadi satu array besar
    return animeDetail.value.relations.flatMap((rel) => {

        return rel.entry.map((item) => ({
            relationType: rel.relation,
            name: item.name,
            mal_id: item.mal_id,
            url: item.url,
            type: item.type
        }))
    })
})



const displayedRelations = computed(() => flatRelations.value.slice(0, 20))
const hasMoreRelations = computed(() => flatRelations.value.length > 20)



</script>

<template>

    <div v-if="!animeDetail && animeDetailPending" class="flex justify-center items-center h-64">
        <p class="text-accent animate-pulse">Loading Anime...</p>
    </div>
    <div v-else-if="animeDetailError"
        class="text-red-500 text-center h-[80vh] max-h-[600px] flex justify-center items-center flex-col gap-5">
        <p class="text-sm md:text-lg">
            Tidak ada detail anime di page ini
        </p>
        <NuxtLink to="/" class="text-accent hover:underline">
            Kembali ke halaman anime
        </NuxtLink>
    </div>
    <div v-else-if="animeDetail">
        <div class="w-full relative h-full">
            <!-- Background Header -->
            <div class="w-full relative h-[300px] overflow-hidden  bg-cover bg-no-repeat bg-center hidden md:block"
                :style="!animeDetail?.images?.jpg?.large_image_url ? { backgroundImage: 'url(/images/hero-bg.jpg)' } : { backgroundImage: 'url(' + animeDetail.images.jpg.large_image_url + ')' }">

                <div class="absolute inset-0 bg-linear-to-t from-black/80 to-black/10 z-10">
                </div>

                <div
                    class="absolute bottom-0 left-0 right-0 h-[1.5px] bg-linear-to-r from-emerald-500/10 via-emerald-500/90 to-emerald-500/10 z-20">
                </div>
            </div>

            <!-- Info Sedikit Anime dan Sysnopsis -->
            <div class="bg-secondary w-full h-fit z-20 xl:px-24 rounded-md">
                <div class="w-full grid grid-cols-12 gap-4 py-5">
                    <div class="md:col-span-5 lg:col-span-3 col-span-12">
                        <div class="relative z-20 mt-0 md:-mt-40  overflow-hidden flex flex-col gap-2 px-5 md:px-0">
                            <img :src="animeDetail.images.jpg.large_image_url" alt="anime"
                                class="min-w-[250px] w-fit mx-auto max-h-[600px] md:max-h-[400px] h-full object-contain md:object-cover object-bottom rounded-md">

                            <div
                                class="flex flex-row gap-2 justify-center items-center w-full rounded-md bg-sky-600/80 hover:bg-sky-400/60 py-2 cursor-pointer group">
                                <NuxtIcon name="i-mdi-heart" size="25" class="group-hover:text-red-500" />
                                <p class="leading-none">Add to list</p>
                            </div>
                        </div>
                    </div>
                    <div class="md:col-span-7 lg:col-span-9 col-span-12  md:pt-5 max-w-[900px]rounded-md px-5 md:px-0">
                        <p class="text-semibold text-lg">{{ animeDetail.title }}</p>
                        <p class="text-sm text-gray-300/70">{{ animeDetail.synopsis.slice(0, 500) }}{{
                            animeDetail.synopsis.length > 500 ? '...' : '' }}</p>
                    </div>
                </div>

            </div>

            <!-- Informasi Anime -->
            <div class="bg-primary w-full h-fit pt-2 md:pt-5 pb-10 xl:px-24">
                <div class="grid grid-cols-12 gap-4">
                    <div class="col-span-12 md:col-span-5 lg:col-span-3 flex flex-col gap-2">
                        <div class="bg-secondary rounded-md text-center py-2 grid grid-cols-12 gap-2 px-3">
                            <NuxtIcon name="i-mdi-star" class="text-yellow-500 col-span-2" size="22" />
                            <p class="text-sm col-span-10">
                                #{{ animeDetail.rank }} Rank
                            </p>
                        </div>
                        <div class="bg-secondary rounded-md text-center py-2 grid grid-cols-12 gap-2 px-3">
                            <NuxtIcon name="i-mdi-heart" class="text-rose-500 col-span-2" size="22" />
                            <p class="text-sm col-span-10">
                                #{{ animeDetail.popularity }} Popularity
                            </p>
                        </div>
                        <div class="flex flex-col gap-2 bg-secondary p-5 rounded-md">
                            <div class="flex flex-col gap-1 text-sm">
                                <p>Format</p>
                                <p class="text-gray-300/70">{{ animeDetail.type }}</p>
                            </div>
                            <div class="flex flex-col gap-1 text-sm">
                                <p>Episodes</p>
                                <p class="text-gray-300/70">{{ animeDetail.episodes ?? 'N/A' }} - {{
                                    animeDetail.airing ? 'Airing' : 'Not Airing' }}</p>
                            </div>
                            <div class="flex flex-col gap-1 text-sm">
                                <p>Status</p>
                                <p class="text-gray-300/70">{{ animeDetail.status }}</p>
                            </div>
                            <div class="flex flex-col gap-1 text-sm">
                                <p>Start Date</p>
                                <ClientOnly>
                                    <p class="text-gray-300/70">{{ animeDetail.aired.from ?
                                        formatDate(animeDetail.aired.from) : 'N/A' }}</p>
                                </ClientOnly>
                            </div>
                            <div class="flex flex-col gap-1 text-sm">
                                <p>End Date</p>
                                <ClientOnly>
                                    <p class="text-gray-300/70">{{ animeDetail.aired.to ?
                                        formatDate(animeDetail.aired.to) :
                                        'N/A' }}</p>
                                </ClientOnly>
                            </div>
                            <div class="flex flex-col gap-1 text-sm">
                                <p>Season</p>
                                <p class="text-gray-300/70 capitalize">{{ animeDetail.season }} {{ animeDetail.year }}
                                </p>
                            </div>
                            <div class="flex flex-col gap-1 text-sm">
                                <p>Score</p>
                                <p class="text-gray-300/70 capitalize">{{ animeDetail.score }}
                                </p>
                            </div>
                            <div class="flex flex-col gap-1 text-sm">
                                <p>Popularity</p>
                                <p class="text-gray-300/70 capitalize">{{ animeDetail.popularity }}
                                </p>
                            </div>
                            <div class="flex flex-col gap-1 text-sm">
                                <p>Favorites</p>
                                <p class="text-gray-300/70 capitalize">{{ animeDetail.favorites }}
                                </p>
                            </div>
                            <div class="flex flex-col gap-1 text-sm">
                                <p class="">Studios</p>
                                <div class="flex gap-2 flex-wrap"> <span v-for="(studio, index) in animeDetail.studios"
                                        :key="studio.mal_id" class="text-gray-300/70 capitalize">
                                        {{ studio.name }}{{ index === animeDetail.studios.length - 1 ? '' : ', ' }}
                                    </span>
                                </div>
                            </div>
                            <div class="flex flex-col gap-1 text-sm">
                                <p>Producers</p>
                                <div class="flex gap-2 flex-wrap">
                                    <span v-for="producer in animeDetail.producers" :key="producer"
                                        class="text-gray-300/70 capitalize">{{ producer.name }}{{ producer.name ===
                                            animeDetail.producers[animeDetail.producers.length - 1].name ? '' : ', ' }}
                                    </span>
                                </div>
                            </div>
                            <div class="flex flex-col gap-1 text-sm">
                                <p>Source</p>
                                <p class="text-gray-300/70 capitalize">{{ animeDetail.source }}
                                </p>
                            </div>
                            <div class="flex flex-col gap-1 text-sm">
                                <p>Genres</p>
                                <div class="flex gap-2 flex-wrap">
                                    <span v-for="genre in animeDetail.genres" :key="genre"
                                        class="text-gray-300/70 capitalize">{{ genre.name }}{{ genre.name ===
                                            animeDetail.genres[animeDetail.genres.length - 1].name ? '' : ', ' }}</span>
                                </div>
                            </div>
                            <div class="flex flex-col gap-1 text-sm">
                                <p>Streaming</p>
                                <div class="flex gap-2 flex-wrap">
                                    <NuxtLink v-for="streaming in animeDetail.streaming" :key="streaming"
                                        class="text-gray-300/70 capitalize hover:text-discord" :to="`${streaming.url}`">
                                        {{ streaming.name
                                        }}{{ streaming.name ===
                                            animeDetail.streaming[animeDetail.streaming.length - 1].name ? '' : ', ' }}
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-12 md:col-span-7 lg:col-span-9">

                        <div class="flex flex-col gap-3">
                            <p>Relations</p>
                            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">
                                <ClientOnly>

                                    <UTooltip v-for="relation in displayedRelations" :key="relation.mal_id" :content="{
                                        align: 'center',
                                        side: 'right',
                                        sideOffset: -100,
                                    }" :ui="{
                                        content: 'ring-0 p-0 h-0 shadow-none'
                                    }">
                                        <div
                                            class="w-full h-full py-3 px-2 bg-secondary rounded-md flex flex-col justify-between items-start gap-2">
                                            <p class="text-xs text-gray-300">{{ relation.name.slice(0, 20) }}</p>
                                            <p class="text-xs text-gray-300/70">{{ relation.relationType }}</p>
                                        </div>
                                        <template #content>
                                            <div
                                                class="flex flex-col gap-1 h-fit bg-secondary/90 rounded-md p-2 max-w-[250px] border border-discord/80">
                                                <p class="text-sm text-white/90">{{ relation.name }}</p>
                                                <p class="text-xs capitalize text-white/60">{{ relation.type }}</p>
                                                <NuxtLink :to="`${relation.url}`"
                                                    class="text-xs hover:text-discord/80 text-white/60">View</NuxtLink>
                                            </div>
                                        </template>
                                    </UTooltip>
                                </ClientOnly>
                                <div v-if="hasMoreRelations"
                                    class="w-full h-full py-3 px-2 bg-secondary rounded-md flex items-center justify-center">
                                    <p class="text-xs text-gray-300/70">Show more</p>
                                </div>
                            </div>

                        </div>

                        <div class="flex flex-col gap-3 mt-3">
                            <p>Characters</p>
                            <div v-if="animeCharactersPending">
                                <p>Loading...</p>
                            </div>
                            <div v-else-if="animeCharactersError">
                                <p>Error: {{ animeCharactersError }}</p>
                            </div>
                            <div v-else-if="animeCharacters"
                                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                                <div v-for="character in animeCharacters.slice(0, 10)" :key="character.mal_id"
                                    class="flex flex-row gap-2 bg-secondary rounded-md text-xs justify-between">
                                    <div class="p-2 flex flex-col gap-2 justify-between">
                                        <p class="text-gray-300/70">{{ character.role }}</p>
                                        <div class="">
                                            <p>{{ character.character.name }}</p>
                                            <p>{{ character.voice_actors[0] ? character.voice_actors[0]?.person?.name :
                                                'N/A' }}</p>
                                        </div>
                                    </div>
                                    <div class="relative w-full h-full overflow-hidden">
                                        <img :src="character.character.images.jpg.image_url"
                                            :alt="character.character.name"
                                            class="w-20 h-full object-cover absolute top-0 right-0 rounded-md object-center">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex flex-col gap-3 mt-3">
                            <p>Original Creator</p>
                            <div v-if="animeStaffPending">
                                <p>Loading...</p>
                            </div>
                            <div v-else-if="animeStaffError">
                                <p>Error: {{ animeStaffError }}</p>
                            </div>
                            <div v-else-if="animeStaff" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                                <div v-for="staff in searchOriginalCreator" :key="staff.mal_id"
                                    class="flex flex-row gap-2 bg-secondary rounded-md text-xs justify-between md:h-20 h-26">
                                    <div class="p-2 flex flex-col gap-2 justify-between">
                                        <p>{{ staff.person.name }}</p>
                                    </div>
                                    <div class="relative w-full h-full overflow-hidden">
                                        <img :src="staff.person.images.jpg.image_url" :alt="staff.person.name"
                                            class="w-20 h-full object-cover absolute top-0 right-0 rounded-md object-top">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>