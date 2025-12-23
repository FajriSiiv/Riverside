<script setup>

defineProps({
    items: {
        type: Array,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    pending: {
        type: Boolean,
        required: true
    },
    error: {
        type: [Object, null],
        required: false,
        default: null
    }
})
</script>

<template>

    <div class="">
        <BaseHighlightText :text="title" />
        <div v-if="pending" class="flex justify-center items-center h-64">
            <p class="text-accent animate-pulse">Loading Anime...</p>
        </div>
        <div v-else-if="error" class="text-red-500 text-center">
            Error: {{ error.message }}
        </div>
        <UCarousel v-else :items="items" v-slot="{ item }" loop :autoplay="{ delay: 1500 }" wheel-gestures
            :prev="{ variant: 'solid' }" :next="{ variant: 'solid' }" :ui="{
                item: 'basis-[60%] sm:basis-1/2 md:basis-1/2 lg:basis-1/5 ps-0',
                prev: 'sm:start-4',
                next: 'sm:end-4',
                container: 'ms-0'
            }" class="">
            <div class="relative p-2 ">
                <NuxtLink :to="`/anime/${item.id}`">
                    <img :src="item.imageUrl" class="w-full h-[250px] object-cover rounded-sm" draggable="false" />
                    <div class="pt-2">
                        <p class="text-white font-semibold truncate text-sm">{{ item.title }}</p>
                        <p class="text-yellow-400 text-xs">⭐ {{ item.score }}</p>
                    </div>
                </NuxtLink>
            </div>
        </UCarousel>
    </div>
</template>