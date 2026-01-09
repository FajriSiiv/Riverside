<script setup lang="ts">
interface Facility {
    id: number;
    title: string;
    description: string;
    image_url: string;
}

const facilities: Facility[] = [
    {
        id: 1,
        title: 'Savor Culinary Excellence',
        description: 'Indulge in a variety of gourmet dishes at our dining room. Whether it\'s a post-game meal or a special celebration, our chefs deliver flavors that delight every palate.',
        image_url: 'https://images.unsplash.com/photo-1753832025074-d3930d1ef208?q=80&w=1170&auto=webp&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 2,
        title: 'Elevate Your Business Meetings',
        description: 'Host your corporate events in a serene environment designed for focus and creativity. Our meeting rooms are equipped with top-tier facilities to ensure your business goals are met with professional ease.',
        image_url: 'https://images.unsplash.com/photo-1540304453527-62f979142a17?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 3,
        title: 'Refresh and Recharge by the Pool',
        description: 'Take a dip in our pristine swimming pool surrounded by lush greenery. It’s the perfect spot to cool down after a day on the course or simply to enjoy a quiet afternoon with the family.',
        image_url: 'https://images.unsplash.com/photo-1678960591129-ff8db00462e2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
];

const activeIndex = ref(0);
let timer: any = null;

// Computed property untuk mengambil data item yang sedang aktif dengan mudah
const currentFacility = computed(() => facilities[activeIndex.value]);

const nextSlide = () => {
    activeIndex.value = (activeIndex.value + 1) % facilities.length;
};

const startAutoplay = () => {
    stopAutoplay();
    timer = setInterval(nextSlide, 5000); // Berpindah setiap 5 detik
};

const stopAutoplay = () => {
    if (timer) clearInterval(timer);
};

onMounted(() => {
    startAutoplay();
});

// Bersihkan timer saat komponen dihancurkan agar tidak terjadi memory leak
onUnmounted(() => {
    stopAutoplay();
});

const handleManualClick = (index: number) => {
    activeIndex.value = index;
    startAutoplay(); // Reset timer dari awal saat user klik manual
};


</script>

<template>
    <UContainer>
        <div class="py-10 text-gray-900">
            <TitleSection title="Our Facilities" />

            <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
                <h2 class="text-3xl md:text-5xl max-w-full md:max-w-[40%] font-medium">
                    Unwind your way at Riverside
                </h2>
                <div class="max-w-full md:max-w-[50%] flex md:place-content-end text-sm">
                    <p class="max-w-full md:max-w-[80%] text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure molestiae nemo
                        cupiditate ipsam perferendis voluptas sapiente laborum.
                    </p>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-12 gap-8 pt-7">

                <div class="col-span-1 md:col-span-5">
                    <div
                        class="h-[300px] md:h-[500px] rounded-lg transition-all duration-500 ease-in-out text-white relative 
                   before:absolute before:inset-0 before:bg-linear-to-t before:from-black before:via-black/50 
                   before:to-transparent before:opacity-60 before:from-10% before:via-30% before:to-50% overflow-hidden">
                        <NuxtImg :src="currentFacility?.image_url" class="rounded-xl w-full h-full object-cover"
                            :alt="'Facility: ' + currentFacility?.title" />
                        <h3 class="text-2xl md:text-4xl font-bold opacity-90 absolute bottom-5 left-4 right-4">
                            {{ currentFacility?.title }}
                        </h3>
                    </div>
                </div>

                <div class="col-span-1 md:col-span-7 flex flex-col justify-between">

                    <div class="flex flex-col gap-2 min-h-0 md:min-h-[120px] mb-6 md:mb-0">
                        <div :key="currentFacility?.id" class="animate-fade-in">
                            <h2 class="hidden md:block text-3xl font-semibold">{{ currentFacility?.title }}</h2>
                            <p class="opacity-90 max-w-full md:max-w-[70%] text-base md:text-sm mt-2 text-gray-600">
                                {{ currentFacility?.description }}
                            </p>
                        </div>
                    </div>

                    <div class="grid grid-cols-3 gap-3 md:gap-4 pt-4 md:pt-10">
                        <div v-for="(item, index) in facilities" :key="item.id" @click="handleManualClick(index)"
                            @mouseenter="stopAutoplay" @mouseleave="startAutoplay" class="cursor-pointer group">
                            <p class="font-mono text-xs md:text-sm transition-colors pb-2 md:pb-3"
                                :class="activeIndex === index ? 'text-black font-bold' : 'text-gray-400 group-hover:text-gray-600'">
                                [0{{ index + 1 }}]
                            </p>

                            <div class="h-[100px] sm:h-[150px] md:h-[200px] rounded-xl transition-all duration-300"
                                :class="[
                                    activeIndex === index
                                        ? 'opacity-100 ring-2 ring-offset-2 ring-gray-900 scale-[1.02]'
                                        : 'opacity-60 hover:opacity-100'
                                ]">
                                <NuxtImg :src="item.image_url" class="rounded-xl w-full h-full object-cover"
                                    :alt="item.title" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </UContainer>
</template>

<style scoped>
/* animasi sederhana  */
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