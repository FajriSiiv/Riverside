<script setup>
const props = defineProps({
    item: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <div class="flex flex-col p-1 w-40 bg-secondary rounded-md">
        <img :src="item.imageUrl" class="w-full h-40 object-cover rounded-md mb-2" loading="lazy" />
        <p class="text-[15px] font-bold leading-tight mb-1">{{ item.title.slice(0, 20) }} {{
            item.title.length > 20 ? '...' : '' }}</p>
        <div class="flex justify-between items-center text-[11px] text-gray-400">
            <span>Score: ⭐{{ item.score }}</span>
            <span class="bg-primary-500/20 text-primary-500 px-1 rounded">{{ item.type || 'TV'
            }}</span>
        </div>
    </div>
</template>