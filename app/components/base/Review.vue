<script setup lang="ts">
const playerGolfer = ref([
    {
        id: 1,
        name: "Joshua Porta",
        image_url: 'https://images.unsplash.com/photo-1591491667453-4b2066e58b6c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption_review: "The Greg Norman design is challenging but fair. The river views at the back nine are absolutely breathtaking."
    },
    {
        id: 2,
        name: "Marcus Chen",
        image_url: 'https://images.unsplash.com/photo-1633597468456-d11ea13ede88?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption_review: "Best greens in Bogor. The hospitality at the clubhouse makes you feel like a pro from the moment you arrive."
    },
    {
        id: 3,
        name: "Peter Jenkins",
        image_url: 'https://images.unsplash.com/photo-1671081904436-56b1b5c87f62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z29sZiUyMHBsYXllcnxlbnwwfDF8MHx8fDI%3D',
        caption_review: "A hidden gem in the valley. The peaceful atmosphere and lush greenery are perfect for a weekend escape."
    },
    {
        id: 4,
        name: "Rizky Pratama",
        image_url: 'https://images.unsplash.com/photo-1693163487498-07bbd30067f6?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption_review: "Incredible layout! Hole 14 is definitely my favorite. It requires precision and rewards you with amazing scenery."
    },
    {
        id: 5,
        name: "Amanda Lee",
        image_url: 'https://images.unsplash.com/photo-1677174502881-d197c868c0f7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption_review: "The facilities are top-tier. Even after a long round, the spa and dining area offer the perfect relaxation."
    }
]);
</script>

<template>
    <UContainer>
        <div class="py-10">
            <UCarousel v-slot="{ item }" :items="playerGolfer" :ui="{ item: 'w-full' }" class=" overflow-hidden w-full"
                fade loop>

                <div class="bg-linear-to-bl from-35% via-70% to-90% from-emerald-950 via-emerald-900 to-emerald-800 
                 max-h-[700px] md:h-[600px] w-full 
                 flex flex-col md:grid md:grid-cols-12 
                 p-3 md:p-2 lg:p-4 relative overflow-hidden rounded-xl">
                    <div class="w-full h-[300px] md:h-full md:col-span-5 shrink-0 overflow-hidden">
                        <NuxtImg :src="item.image_url" :alt="item.name"
                            class="w-full h-full object-cover object-[50%_20%] md:object-center rounded-xl shadow-lg "
                            height="600" width="600" />
                    </div>

                    <div class="flex flex-col justify-center p-6 md:p-12 lg:p-16 text-white md:col-span-7">

                        <blockquote class="text-xl sm:text-2xl md:text-3xl font-medium leading-snug mb-8 italic">
                            "{{ item.caption_review }}"
                        </blockquote>

                        <div class="mt-4 md:mt-auto pt-6 border-t border-emerald-800/50 flex items-center gap-4">
                            <div class="flex flex-col">
                                <h4 class="text-lg md:text-xl font-bold text-emerald-50">{{ item.name }}</h4>
                                <span class="text-sm md:text-base text-emerald-400 font-medium">Golf Enthusiast</span>
                            </div>
                        </div>
                    </div>

                </div>
            </UCarousel>
        </div>
    </UContainer>
</template>

<style scoped></style>