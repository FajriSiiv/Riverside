<script setup>
const { title } = defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="flex gap-0.5 items-center">
        <UIcon name="ix:circle-dot-filled" class="text-emerald-700 size-3" />
        <span>{{ title }}</span>
    </div>
</template>