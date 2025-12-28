<script setup>
const { data: topAnimeList, pending: topAnimePending, error: topAnimeError } = await useFetch('/api/anime/top-anime')

</script>

<template>
    <div class="mb-5">
        <BaseHighlightText text="Announcements" class="text-sm" />
        <div
            class="p-4 flex font-poppins text-sm flex-col gap-2 rounded-sm text-white/50 bg-secondary max-w-[80%] leading-[1.35] mt-4">
            <p>
                Welcome to our new website! We are excited to have you here and hope you enjoy your time with us.
            </p>
            <span>Enjoy your time with us!</span>
        </div>
    </div>
    <div
        class="flex items-center justify-center w-full py-2.5 rounded-md bg-discord/5 my-5 border border-discord/40 max-w-[300px]">
        <div class="flex flex-row gap-2 items-center justify-center">
            <NuxtIcon name="logos:discord-icon" size="24" class="text-discord leading-none" />
            <span class="text-discord text-sm font-semibold font-poppins leading-normal tracking-wider ">Discord</span>
        </div>
    </div>
    <div class="flex flex-col">
        <BaseHighlightText text="Top Anime" class="text-sm " />
        <div class="flex flex-col gap-3 mt-4">
            <div v-for="item in topAnimeList.slice(0, 10)">
                <UTooltip :popper="{ placement: 'right', arrow: true }" :open-delay="400" class="block w-full" :ui="{
                    content: 'p-0 h-0 min-h-0 ring-0 shadow-none overflow-visible'
                }">
                    <div
                        class="flex items-start justify-start flex-row gap-2 cursor-pointer hover:bg-gray-800 dark:hover:bg-gray-800 rounded-md transition-colors">
                        <img :src="item.imageUrl" :alt="`${item.title}-anime-image`"
                            class="w-[120px] h-[150px] object-cover rounded-sm">
                        <div class="mt-3">
                            <p class="text-sm font-semibold">{{ item.title }}</p>
                            <p class="text-xs">⭐ {{ item.score }}</p>
                        </div>
                    </div>
                    <template #content>
                        <BaseCardTooltip :item="item" />

                    </template>
                </UTooltip>
            </div>
        </div>
    </div>
</template>