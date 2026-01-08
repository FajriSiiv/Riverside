<script setup>

const golf_images = [
    'https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?q=80&w=1176&auto=webp&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=1170&auto=webp&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1526323610139-381ca0f77a12?q=80&w=1170&auto=webp&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://plus.unsplash.com/premium_photo-1714573330986-ee9e271c2084?w=500&auto=webp&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8'
]
</script>

<template>
    <div class="min-h-screen bg-white font-sans text-gray-900">

        <main class="pt-20 md:pt-40 h-[600px] flex items-end">
            <UContainer>
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">

                    <div class="lg:col-span-8 space-y-6">
                        <TitleSection title="Golf Course" />

                        <h1
                            class="text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.9] tracking-tighter text-gray-950 font-semibold">
                            Master the Art <br />
                            of Golf at Riverside
                        </h1>
                    </div>

                    <div class="lg:col-span-4 flex flex-col gap-8 pb-2">
                        <p
                            class="text-gray-500 text-sm md:text-sm leading-relaxed max-w-md ml-auto lg:ml-0 text-right  ">
                            Experience world-class golf courses, top-tier facilities, and personalized lessons for every
                            skill level. Join us and elevate your game in a serene and professional environment.
                        </p>

                        <div class="flex flex-row    items-center gap-4 justify-end">
                            <UButton size="lg" color="primary" variant="solid"
                                class="rounded-full px-8 py-3 bg-primary-900 hover:bg-primary-800 text-white font-normal"
                                :ui="{ rounded: 'rounded-full' }">
                                Book a Time
                            </UButton>

                            <UButton size="lg" color="primary" variant="outline"
                                class="rounded-full px-8 py-3 hover:bg-gray-50 font-normal text-primary"
                                :ui="{ rounded: 'rounded-full' }">
                                Membership
                            </UButton>
                        </div>
                    </div>

                </div>
            </UContainer>
        </main>
    </div>
    <div class="pb-10">
        <UCarousel v-slot="{ item }" :autoplay="{ delay: 4000 }" class-names loop wheel-gestures="" :items="golf_images"
            :ui="{
                item: 'basis-[70%]'
            }" class=" mx-auto">
            <NuxtImg :src="item" class="rounded-lg h-[600px] w-full object-cover"
                :alt="'Golfing at Riverside Cikeas River' + index" />
        </UCarousel>
    </div>

</template>