<template>
    <div v-if="generalConditionsData" class="bg-light-pink min-h-screen">
        <div class="main-container py-16">
            <!-- Page Title -->
            <div class="md:text-center my-8">
                <h2>{{ generalConditionsData.title }}</h2>
            </div>

            <!-- Content -->
            <div class="bg-light-brown rounded-3xl p-8 md:p-12">
                <div class="policy-text prose prose-lg max-w-none flex flex-col gap-2">
                    <PortableText :value="generalConditionsData.description" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { GENERALCONDITIONS_QUERY } from "~/constants/query";
import type { GeneralConditions } from "~/models/sanity";
import { PortableText } from '@portabletext/vue';

const { data: generalConditionsData } = await useSanityQuery<GeneralConditions>(GENERALCONDITIONS_QUERY);

// SEO Meta Tags
useHead({
    title: 'Splošni pogoji - Noa Salon',
    link: [
        {
            rel: 'canonical',
            href: 'https://noa-salon.com/splosni-pogoji'
        }
    ],
    meta: [
        {
            name: 'description',
            content: 'Splošni pogoji uporabe storitev Noa Salon. Pravila in pogoji za rezervacijo in uporabo naših storitev.'
        },
        {
            property: 'og:title',
            content: 'Splošni pogoji - Noa Salon'
        },
        {
            property: 'og:description',
            content: 'Splošni pogoji uporabe storitev Noa Salon. Pravila in pogoji za rezervacijo in uporabo naših storitev.'
        },
        {
            property: 'og:type',
            content: 'website'
        },
        {
            property: 'og:url',
            content: 'https://noa-salon.com/splosni-pogoji'
        }
    ]
});
</script>

<style lang="css">
.policy-text {  
    display: flex;
    flex-direction: column;
    gap: .5rem;
}
</style>