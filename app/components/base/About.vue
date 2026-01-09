<script setup>
const golf_images = [
    'https://images.unsplash.com/photo-1500932334442-8761ee4810a7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=1170&auto=webp&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1526323610139-381ca0f77a12?q=80&w=1170&auto=webp&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
]

const activeIndex = ref(0);
</script>
<template>
    <UContainer>
        <div class="grid grid-cols-1 md:grid-cols-12 md:min-h-[750px] gap-8 md:gap-5 pb-10">
            <div class="col-span-1 md:col-span-4 h-[400px] md:h-full overflow-hidden rounded-xl">
                <NuxtImg :src="golf_images[activeIndex]" :key="activeIndex" alt="golf1"
                    class="rounded-xl w-full h-full object-cover" />
            </div>
            <div
                class="col-span-1 md:col-span-8 text-gray-900 pt-0 md:pt-5 h-auto md:h-full flex flex-col justify-between py-0 md:py-10">
                <div class="flex flex-col gap-6 md:gap-0">
                    <TitleSection title="About Us" />
                    <p class="text-4xl md:text-7xl font-medium tracking-tighter">Golf in perfect <br />harmony with
                        nature</p>
                    <div class=" gap-2 grid grid-cols-3 pt-4 md:pt-10">
                        <div class="flex flex-col gap-2 col-span-1 cursor-pointer group"
                            v-for="(item, index) in golf_images" :key="index" @click="activeIndex = index">
                            <div class="h-[100px] md:h-[200px] rounded-md transition-all duration-300" :class="[
                                activeIndex === index
                                    ? 'opacity-100 ring-2 ring-offset-2 ring-gray-900 scale-[1.02]'
                                    : 'opacity-60 hover:opacity-100'
                            ]">
                                <NuxtImg :src="item" class="rounded-md w-full h-full object-cover"
                                    :alt="'Golfing at Riverside Cikeas River' + index" />
                            </div>
                            <span class="text-xs font-medium transition-colors"
                                :class="activeIndex === index ? 'text-black font-bold' : 'text-gray-400 group-hover:text-gray-600'">[0{{
                                    index + 1 }}]</span>
                        </div>

                    </div>
                </div>

                <p class="text-sm opacity-90 pt-8 md:pt-0">
                    Riverside Golf Club, nestled in Bogor, Indonesia, features a stunning 18-hole par 72
                    championship course designed by golf legend Greg Norman. Set along the scenic Cikeas River, it
                    offers an exhilarating golfing experience amidst lush greenery. Relax afterward in our
                    award-winning clubhouse and enjoy unmatched hospitality.
                </p>
            </div>
        </div>

        <AboutHoleAbout />
    </UContainer>
</template>

<style scoped>
.animate-fade-in {
    animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(5px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>