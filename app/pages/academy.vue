<template>
    <!-- Error Display -->
        <ErrorDisplay 
        v-if="hasError" 
        :message="'Prišlo je do napake pri nalaganju podatkov. Prosimo, poskusite znova.'"
    />
    <div v-else-if="academyDetailData" class="bg-light-pink min-h-screen">
        <div class="main-container py-16 mt-8">
            <!-- Page Title -->
            <div class="md:text-center mt-8 mb-4 md:my-8">
                <h2>{{ academyDetailData.title }}</h2>
            </div>

            <!-- Page Description -->
            <div class="md:max-w-4/5 mx-auto mb-16 md:text-center">
                <PortableText :value="academyDetailData.description" />
            </div>

            <!-- Services by Type -->
            <div v-for="(serviceType, typeIndex) in academyDetailData.services" :key="typeIndex" class="mb-16">
                <!-- Service Type Title -->
                <h4 :id="createSlug(serviceType.serviceTypeTitle)" class="md:text-center mb-4 md:mb-8 scroll-mt-20">{{ serviceType.serviceTypeTitle }}</h4>
                
                <!-- Service Items Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div 
                        v-for="(service, serviceIndex) in serviceType.serviceItems" 
                        :key="serviceIndex"
                        class="bg-light-brown rounded-3xl p-8 hover:shadow-lg transition-shadow duration-300 flex flex-col"
                    >
                        <h5 class="text-2xl mb-4">{{ service.serviceName }}</h5>
                        <div class="flex-1 mb-6 text-gray-700">
                            <PortableText :value="service.serviceDescription" />
                        </div>
                        <NuxtLink :to="service.buttonLink">
                            <Button class="w-full bg-light-peach text-button-pink hover:bg-button-pink hover:text-white transition-colors duration-300 cursor-pointer">
                                {{ service.buttonText }}
                            </Button>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ACADEMYDETAIL_QUERY } from "~/constants/query";
import type { AcademyDetail } from "~/models/sanity";
import { PortableText } from '@portabletext/vue';
import { Button } from "~/components/ui/button";

const { data: academyDetailData, error: academyDetailError } = await useSanityQuery<AcademyDetail>(ACADEMYDETAIL_QUERY);

const hasError = computed(() => !academyDetailData.value || academyDetailError.value);

// SEO Meta Tags
useHead({
    title: 'Noa Academy - Izobraževanja in tečaji',
    link: [
        {
            rel: 'canonical',
            href: 'https://noa-salon.com/academy'
        }
    ],
    meta: [
        {
            name: 'description',
            content: 'Noa Academy - izobraževalni tečaji za začetnike in strokovnjake. Praktično znanje, individualni pristop in najnovejše tehnike v sodelovanju z vrhunskimi strokovnjaki.'
        },
        {
            property: 'og:title',
            content: 'Noa Academy - Izobraževanja in tečaji'
        },
        {
            property: 'og:description',
            content: 'Noa Academy - izobraževalni tečaji za začetnike in strokovnjake. Praktično znanje, individualni pristop in najnovejše tehnike v sodelovanju z vrhunskimi strokovnjaki.'
        },
        {
            property: 'og:type',
            content: 'website'
        },
        {
            property: 'og:url',
            content: 'https://noa-salon.com/academy'
        }
    ]
});
</script>