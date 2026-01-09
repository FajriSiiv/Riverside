<script setup lang="ts">
interface HoleContent {
    id: number;
    label: string;
    description: string;
    video_thumbnail: string;
}

const courseData: HoleContent[] = [
    {
        id: 1,
        label: '1st Hole',
        description: 'A challenging hole above the river, tough to reach in two shots. Aim for the right side of the fairway near the bunkers for a better landing area, and play the second shot short of the greenside bunkers.',
        video_thumbnail: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=1170&auto=format&fit=crop'
    },
    {
        id: 2,
        label: '2nd Hole',
        description: 'A beautiful downhill par 3. Pay attention to the wind direction as the green is well-protected by deep bunkers on both sides. Precision is key here.',
        video_thumbnail: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=1170&auto=format&fit=crop'
    },
];

const displayData = [...courseData];
// dummy data
while (displayData.length < 8) {
    displayData.push({
        id: displayData.length + 1,
        label: `${displayData.length + 1}${getOrdinal(displayData.length + 1)} Hole`,
        description: 'Description for this hole will be updated soon. Stay tuned for the professional tips from our course designers.',
        video_thumbnail: 'https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?q=80&w=1176&auto=format&fit=crop'
    });
}
function getOrdinal(n: number) {
    const s = ["th", "st", "nd", "rd"], v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
}

// data extended for infinite loop (3x duplication)
const extendedData = computed(() => [...displayData, ...displayData, ...displayData]);
const courseDataLength = displayData.length;

// Start in the middle set
const virtualIndex = ref(courseDataLength);

const currentIndex = computed(() => virtualIndex.value % courseDataLength);
const currentHole = computed(() => displayData[currentIndex.value]);

// calculate translate position so active item always in the middle
const itemWidth = ref(160);
const isTransitioning = ref(true);

const updateWidth = () => {
    if (typeof window !== 'undefined') {
        itemWidth.value = window.innerWidth < 768 ? 120 : 160;
    }
};

onMounted(() => {
    updateWidth();
    window.addEventListener('resize', updateWidth);
});

onUnmounted(() => {
    window.removeEventListener('resize', updateWidth);
});

const offsetTranslate = computed(() => {
    const listLength = extendedData.value.length;
    // formula updated for extended list
    return (listLength * itemWidth.value / 2) - (virtualIndex.value * itemWidth.value + itemWidth.value / 2);
});

// Reset position 
const checkReset = () => {
    setTimeout(() => {
        if (virtualIndex.value >= 2 * courseDataLength) {
            isTransitioning.value = false;
            virtualIndex.value -= courseDataLength;
            // Force reflow/next tick
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    isTransitioning.value = true;
                });
            });
        } else if (virtualIndex.value < courseDataLength) {
            isTransitioning.value = false;
            virtualIndex.value += courseDataLength;
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    isTransitioning.value = true;
                });
            });
        }
    }, 700); // 700ms matches CSS duration
};

const nextHole = () => {
    if (!isTransitioning.value) return;
    virtualIndex.value++;
    checkReset();
};

const prevHole = () => {
    if (!isTransitioning.value) return;
    virtualIndex.value--;
    checkReset();
};

const handleHoleClick = (index: number) => {
    virtualIndex.value = index;
    checkReset();
};

// computed untuk styling di template
const transitionStyle = computed(() => ({
    transform: `translateX(${offsetTranslate.value}px)`,
    transition: isTransitioning.value ? 'all 700ms cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
}));


</script>

<template>
    <div class="py-10">
        <div
            class="relative bg-[#0d2a1f] rounded-sm md:rounded-[32px] p-3 md:p-10 text-white min-h-[600px] flex flex-col justify-between overflow-hidden">

            <div class="flex justify-between items-start">
                <div class="font-mono text-2xl">
                    [0{{ currentIndex + 1 }}/08]
                </div>
            </div>

            <div class="relative flex justify-center items-center py-5 overflow-hidden">
                <div class="absolute h-0.5 bg-white/10 w-full top-1/2 -translate-y-1/2"></div>

                <div class="relative flex items-center justify-center w-full">

                    <div class="absolute w-[120px] h-[40px] bg-white rounded shadow-xl z-0 pointer-events-none"></div>

                    <div class="relative w-full overflow-visible flex justify-center">
                        <div class="flex items-center" :style="transitionStyle">
                            <div v-for="(hole, index) in extendedData" :key="index"
                                class="w-[160px] flex justify-center items-center shrink">
                                <button @click="handleHoleClick(index)"
                                    class="transition-all duration-700 ease-in-out whitespace-nowrap text-center z-10"
                                    :class="[
                                        virtualIndex === index
                                            ? 'text-[#0d2a1f] font-bold scale-110 opacity-100'
                                            : 'text-white cursor-pointer',
                                        Math.abs(virtualIndex - index) === 1 ? 'opacity-70 scale-95' : '',
                                        Math.abs(virtualIndex - index) === 2 ? 'opacity-10 scale-75' : '',
                                        Math.abs(virtualIndex - index) >= 3 ? 'opacity-0 scale-50 pointer-events-none' : '',
                                    ]">
                                    {{ hole.label }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="relative flex justify-center my-8">
                <div class="relative w-full max-w-2xl  max-h-[400px] rounded-2xl overflow-hidden shadow-2xl group cursor-pointer transition-all duration-700 animate-fade-in"
                    :key="currentHole?.id">
                    <NuxtImg :src="currentHole?.video_thumbnail" class="w-full max-h-[400px] object-cover" />
                    <div class="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <div
                            class="w-16 h-16 bg-white rounded-full flex items-center justify-center pl-1 shadow-lg group-hover:scale-110 transition-transform">
                            <UIcon name="i-heroicons-play-20-solid" class="text-[#0d2a1f] text-3xl" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex flex-col md:flex-row justify-between items-end gap-8">
                <div class="max-w-xl animate-slide-up" :key="currentHole?.id">
                    <p class="text-xs md:text-sm leading-relaxed opacity-90">
                        {{ currentHole?.description }}
                    </p>
                </div>

                <div class="flex gap-4">
                    <UButton variant="outline" @click="prevHole"
                        class="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/40 flex items-center justify-center transition-all text-white">
                        <UIcon name="i-heroicons-arrow-left-20-solid" class="text-lg md:text-xl" />
                    </UButton>
                    <UButton variant="outline" @click="nextHole"
                        class="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/40 flex items-center justify-center transition-all text-white">
                        <UIcon name="i-heroicons-arrow-right-20-solid" class="text-lg md:text-xl" />
                    </UButton>
                </div>
            </div>

            <div class="absolute inset-0 pointer-events-none opacity-10">
                <div
                    class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white rounded-full">
                </div>
                <div
                    class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white rounded-full">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.w-\[160px\] {
    width: 160px;
    /* Jarak antar titik tengah label */
}

.flex {
    display: flex;
}

button {
    transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
    background: transparent;
    border: none;
    outline: none;
}

@media (max-width: 768px) {
    .w-\[160px\] {
        width: 120px;
    }
}

.no-scrollbar::-webkit-scrollbar {
    display: none;
}

.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.animate-fade-in {
    animation: fadeIn 0.8s ease-out;
}

.animate-slide-up {
    animation: slideUp 0.6s ease-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: scale(0.95);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>