<template>
    <div v-if="cookiesData" class="bg-light-pink min-h-screen">
        <div class="main-container py-16">
            <!-- Page Title -->
            <div class="text-center my-8">
                <h2>{{ cookiesData.title }}</h2>
            </div>

            <!-- Content -->
            <div class="bg-light-brown rounded-3xl p-8 md:p-12">
                <div class="cookies-text prose prose-lg max-w-none">
                    <PortableText :value="cookiesData.description" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { COOKIES_QUERY } from "~/constants/query";
import type { Cookies } from "~/models/sanity";
import { PortableText } from '@portabletext/vue';

const { data: cookiesData } = await useSanityQuery<Cookies>(COOKIES_QUERY);

// SEO Meta Tags
useHead({
    title: 'Politika piškotkov - Noa Salon',
    link: [
        {
            rel: 'canonical',
            href: 'https://noa-salon.com/piskotki'
        }
    ],
    meta: [
        {
            name: 'description',
            content: 'Politika piškotkov Noa Salon. Informacije o uporabi piškotkov na naši spletni strani.'
        },
        {
            property: 'og:title',
            content: 'Politika piškotkov - Noa Salon'
        },
        {
            property: 'og:description',
            content: 'Politika piškotkov Noa Salon. Informacije o uporabi piškotkov na naši spletni strani.'
        },
        {
            property: 'og:type',
            content: 'website'
        },
        {
            property: 'og:url',
            content: 'https://noa-salon.com/piskotki'
        }
    ]
});
</script>

<style lang="css">
.cookies-text {
    display: flex;
    flex-direction: column;
    gap: .5rem;
}
</style>