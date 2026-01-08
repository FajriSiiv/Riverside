<template>
    <header class="py-6">
        <UContainer>
            <nav class="flex items-center justify-between">
                <div class="flex items-center gap-2 font-bold text-xl tracking-tight">
                    <UIcon name="i-heroicons-sparkles-solid" class="w-6 h-6 text-primary-700" />
                    <span>RiverSide</span>
                </div>

                <ul class="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
                    <li>
                        <NuxtLink to="#" class="hover:text-primary-700 transition">Golf</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="#" class="hover:text-primary-700 transition">Club House</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="#" class="hover:text-primary-700 transition">Membership</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="#" class="hover:text-primary-700 transition">Inquiry</NuxtLink>
                    </li>
                </ul>

                <div>
                    <NuxtLink to="#" class="text-lg  font-medium hover:text-primary-700 transition">
                        Contact Us
                    </NuxtLink>
                </div>
            </nav>
        </UContainer>
    </header>
</template>