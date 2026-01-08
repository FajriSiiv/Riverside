<script setup lang="ts">
const footerNavigation = {
    about: [
        { name: 'Our Story', href: '#' },
        { name: 'Vision & Mission', href: '#' },
        { name: 'Course Designer', href: '#' },
        { name: 'Sustainability & Environment', href: '#' },
    ],
    golf: [
        { name: 'Golf Courses', href: '#' },
        { name: 'Tee Times & Booking', href: '#' },
        { name: 'Lessons & Coaching', href: '#' },
        { name: 'Tournaments & Events', href: '#' },
    ],
    membership: [
        { name: 'Membership Plans', href: '#' },
        { name: 'Member Benefits', href: '#' },
        { name: 'Member Login', href: '#' },
    ],
    facilities: [
        { name: 'Clubhouse', href: '#' },
        { name: 'Dining', href: '#' },
        { name: 'Swimming Pool', href: '#' },
    ]
}

const socialLinks = [
    { icon: 'i-simple-icons-x', href: '#' },
    { icon: 'i-simple-icons-telegram', href: '#' },
    { icon: 'i-simple-icons-facebook', href: '#' },
    { icon: 'i-simple-icons-instagram', href: '#' },
]

const bottomLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Classes', href: '#' },
    { name: 'Programs', href: '#' },
    { name: 'Community', href: '#' },
]
</script>

<template>
    <footer class="bg-[#f4f7f4] text-[#1a2e1a] pt-16 pb-8 border-t border-gray-200">
        <UContainer>
            <div class="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">

                <div class="md:col-span-4 space-y-6">
                    <div class="flex items-center gap-2 font-bold text-2xl tracking-tight">
                        <UIcon name="i-heroicons-sparkles-solid" class="w-6 h-6 text-primary-700" />
                        <span>RiverSide</span>
                    </div>

                    <div class="flex gap-3">
                        <NuxtLink v-for="social in socialLinks" :key="social.icon" :to="social.href"
                            class="w-10 h-10 rounded-full border border-emerald-900/20 flex items-center justify-center hover:bg-emerald-900 hover:text-white transition-all text-emerald-900">
                            <UIcon :name="social.icon" class="w-5 h-5" />
                        </NuxtLink>
                    </div>
                </div>

                <div class="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
                    <div>
                        <h3 class="font-bold text-lg mb-4">About Us</h3>
                        <ul class="space-y-3">
                            <li v-for="item in footerNavigation.about" :key="item.name">
                                <NuxtLink :to="item.href" class="text-sm opacity-70 hover:opacity-100 transition">{{
                                    item.name }}</NuxtLink>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="font-bold text-lg mb-4">Golf</h3>
                        <ul class="space-y-3">
                            <li v-for="item in footerNavigation.golf" :key="item.name">
                                <NuxtLink :to="item.href" class="text-sm opacity-70 hover:opacity-100 transition">{{
                                    item.name }}</NuxtLink>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="font-bold text-lg mb-4">Membership</h3>
                        <ul class="space-y-3">
                            <li v-for="item in footerNavigation.membership" :key="item.name">
                                <NuxtLink :to="item.href" class="text-sm opacity-70 hover:opacity-100 transition">{{
                                    item.name }}</NuxtLink>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="font-bold text-lg mb-4">Facilities</h3>
                        <ul class="space-y-3">
                            <li v-for="item in footerNavigation.facilities" :key="item.name">
                                <NuxtLink :to="item.href" class="text-sm opacity-70 hover:opacity-100 transition">{{
                                    item.name }}</NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="py-6 border-b border-emerald-900/10 mb-6">
                <ul class="flex flex-wrap gap-6">
                    <li v-for="link in bottomLinks" :key="link.name">
                        <NuxtLink :to="link.href" class="text-sm font-medium hover:text-emerald-700">{{ link.name }}
                        </NuxtLink>
                    </li>
                </ul>
            </div>

            <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-60">
                <p>Riverside Golf Club © 2024. All rights reserved.</p>
                <div class="flex gap-6">
                    <NuxtLink to="#" class="hover:underline">Privacy & Policy</NuxtLink>
                    <NuxtLink to="#" class="hover:underline">Terms & Conditions</NuxtLink>
                </div>
            </div>
        </UContainer>
    </footer>
</template>