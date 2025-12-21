<script setup>
const footerData = {
    socialMedia: [
        {
            name: 'Discord',
            link: '#'
        },
        {
            name: 'Twitter',
            link: '#'
        },
        {
            name: 'Instagram',
            link: '#'
        },
        {
            name: 'Facebook',
            link: '#'
        }
    ],
    information: [
        {
            name: 'Terms of Use',
            link: '#'
        },
        {
            name: 'Privacy Policy',
            link: '#'
        },
        {
            name: 'Cookie Policy',
            link: '#'
        },
        {
            name: 'Terms of Use',
            link: '#'
        }
    ],
    donate: [
        {
            name: 'Tako.id',
            link: '#'
        },
        {
            name: 'Saweria',
            link: '#'
        }
    ]
}


</script>

<template>
    <footer
        class="mt-10 pt-20 pb-20 relative before:absolute before:h-[1.5px] before:w-full  before:z-1 before:top-0 before:left-0 before:right-0 before:bg-linear-to-r before:from-gray-500/10 before:via-gray-500/90 before:to-gray-500/10">
        <div class="w-full min-h-[150px] bg-primary  grid grid-cols-1 md:grid-cols-2 pb-20 px-24">
            <div class="flex flex-col justify-between gap-5">
                <p class="text-white font-semibold text-2xl">NuxtAnime</p>
                <div class="flex flex-row gap-4">
                    <NuxtIcon name="logos:discord-icon" size="24" class="text-discord leading-none" />
                    <NuxtIcon name="prime:twitter" size="24" class="text-white leading-none" />
                    <NuxtIcon name="skill-icons:instagram" size="24" class="leading-none" />
                    <NuxtIcon name="devicon:facebook" size="24" class="leading-none" />

                </div>
            </div>
            <div class="flex flex-row justify-evenly">
                <ul class="flex flex-col gap-2 text-white/50 text-sm">
                    <p class="font-semibold text-white">Sosial Media</p>
                    <li class="hover:text-discord cursor-pointer transition-colors"
                        v-for="item in footerData.socialMedia" :key="item.name">{{ item.name }}</li>
                </ul>
                <ul class="flex flex-col gap-2 text-white/50 text-sm">
                    <p class="font-semibold text-white">Information</p>
                    <li class="hover:text-discord transition-colors cursor-pointer"
                        v-for="item in footerData.information" :key="item.name">{{ item.name }}</li>
                </ul>
                <ul class="flex flex-col gap-2 text-white/50 text-sm">
                    <p class="font-semibold text-white">Donate</p>
                    <li class="hover:text-discord transition-colors cursor-pointer" v-for="item in footerData.donate"
                        :key="item.name">{{ item.name }}</li>
                </ul>
            </div>
        </div>
        <p class="text-white/50 text-center">© 2025 NuxtAnime. All rights reserved.</p>
    </footer>
</template>