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
    <div class="w-full min-h-[150px] bg-primary py-10 grid grid-cols-1 md:grid-cols-2">
        <div class="flex flex-col gap-5">
            <div>
                <p class="text-white/50">© 2025 NuxtAnime. All rights reserved.</p>
            </div>
        </div>
        <div class="flex flex-row justify-evenly">
            <ul class="flex flex-col gap-2 text-white/50 text-sm">
                <p class="font-semibold text-white">Sosial Media</p>
                <li class="hover:text-discord cursor-pointer transition-colors" v-for="item in footerData.socialMedia"
                    :key="item.name">{{ item.name }}</li>
            </ul>
            <ul class="flex flex-col gap-2 text-white/50 text-sm">
                <p class="font-semibold text-white">Information</p>
                <li class="hover:text-discord transition-colors cursor-pointer" v-for="item in footerData.information"
                    :key="item.name">{{ item.name }}</li>
            </ul>
            <ul class="flex flex-col gap-2 text-white/50 text-sm">
                <p class="font-semibold text-white">Donate</p>
                <li class="hover:text-discord transition-colors cursor-pointer" v-for="item in footerData.donate"
                    :key="item.name">{{ item.name }}</li>
            </ul>
        </div>
    </div>
</template>