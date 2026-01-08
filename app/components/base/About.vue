<script setup>
const golf_images = [
    'https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?q=80&w=1176&auto=webp&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=1170&auto=webp&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1526323610139-381ca0f77a12?q=80&w=1170&auto=webp&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://plus.unsplash.com/premium_photo-1714573330986-ee9e271c2084?w=500&auto=webp&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8'
]
</script>
<template>
    <UContainer>
        <div class="grid grid-cols-12 min-h-[750px] gap-5 pb-10">
            <div class="col-span-4">
                <NuxtImg
                    src="https://images.unsplash.com/photo-1500932334442-8761ee4810a7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="golf1" class="rounded-xl w-full h-full object-cover" />
            </div>
            <div class="col-span-8 text-gray-900 pt-5 h-full flex flex-col justify-between py-10">
                <div class="flex flex-col ">
                    <TitleSection title="About Us" />
                    <p class="text-7xl font-medium tracking-tighter">Golf in perfect <br />harmony with nature</p>
                    <div class=" gap-2 grid grid-cols-3 pt-10">
                        <div class="flex flex-col gap-2  col-span-1" v-for="(item, index) in golf_images.slice(0, 3)"
                            :key="index">
                            <div class="h-[200px]  rounded-md">
                                <NuxtImg :src="item" class="rounded-md w-full h-full object-cover"
                                    :alt="'Golfing at Riverside Cikeas River' + index" />
                            </div>
                            <span class="text-xs font-medium">[0{{ index + 1 }}]</span>
                        </div>

                    </div>
                </div>

                <p class="text-sm opacity-90">
                    Riverside Golf Club, nestled in Bogor, Indonesia, features a stunning 18-hole par 72
                    championship course designed by golf legend Greg Norman. Set along the scenic Cikeas River, it
                    offers an exhilarating golfing experience amidst lush greenery. Relax afterward in our
                    award-winning clubhouse and enjoy unmatched hospitality.
                </p>
            </div>
        </div>
    </UContainer>
</template>