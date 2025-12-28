<script setup>
defineProps({
    tabs: {
        type: Array,
        required: true
    },
    modelValue: {
        type: Number
    }
})

const emit = defineEmits(['update:tabIndex'])

const activeIdx = ref(0)
const tabRefs = ref([])
const indicatorStyle = ref({ left: '0px', width: '0px' })

// Fungsi untuk mengupdate posisi dan lebar garis
const updateIndicator = () => {
    const activeElement = tabRefs.value[activeIdx.value]
    if (activeElement) {
        indicatorStyle.value = {
            left: `${activeElement.offsetLeft}px`,
            width: `${activeElement.offsetWidth}px`
        }
    }
}

const selectTab = (index) => {
    activeIdx.value = index
    emit('update:tabIndex', index)
}

// Update posisi saat tab diklik atau saat halaman pertama dimuat
watch(activeIdx, () => {
    updateIndicator()
})

onMounted(() => {
    // Beri sedikit delay agar font ter-load sempurna sebelum dihitung lebarnya
    setTimeout(updateIndicator, 100)
})
</script>

<template>
    <div class="relative w-full">
        <ul
            class="flex flex-col md:flex-row pb-5 justify-between md:justify-start gap-5 md:gap-10 text-lg font-semibold relative border-b-2 border-white/10">
            <li v-for="(tab, index) in tabs" :key="tab.id" :ref="el => tabRefs[index] = el" @click="selectTab(index)"
                class="cursor-pointer transition-colors duration-300 z-20 whitespace-nowrap text-xs"
                :class="activeIdx === index ? 'text-discord' : 'text-white'">
                {{ tab.label }}
            </li>

            <div class="md:absolute md:block -bottom-[2px] h-0.5 bg-discord transition-all duration-300 ease-out z-30 hidden"
                :style="indicatorStyle"></div>
        </ul>
    </div>
</template>