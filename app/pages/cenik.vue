<template>
    <!-- Error Display -->
    <ErrorDisplay 
        v-if="hasError" 
        :message="'Prišlo je do napake pri nalaganju podatkov. Prosimo, poskusite znova.'"
    />
    <div v-else-if="priceListData" class="bg-light-pink min-h-screen">
        <div class="main-container py-16 mt-8">
            <!-- Page Title -->
            <div class="md:text-center mt-8 mb-4 md:my-8">
                <h2>{{ priceListData.title }}</h2>
            </div>

            <!-- Categories Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div 
                    v-for="(category, index) in priceListData.categories" 
                    :key="index"
                    class="bg-testimonial-pink rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                    <!-- Category Title -->
                    <h4 class="md:mb-6 pb-4 border-b-2 border-button-pink">{{ category.categoryName }}</h4>
                    
                    <!-- Main Services -->
                    <div v-if="category.services && category.services.length > 0" class="space-y-3 mb-6">
                        <div 
                            v-for="(service, serviceIndex) in category.services" 
                            :key="serviceIndex"
                            class="flex justify-between items-start gap-4"
                        >
                            <span class="text-gray-700 flex-1">{{ service.serviceName }}</span>
                            <span class="text-gray-900 font-semibold whitespace-nowrap">{{ service.price }}€</span>
                        </div>
                    </div>

                    <!-- Subcategory Services -->
                    <div 
                        v-if="category.subcategoryServices && category.subcategoryServices.length > 0"
                        class="mt-6"
                    >
                        <p v-if="category.subcategoryName" class="mb-4 text-gray-800 font-bold">{{ category.subcategoryName }}:</p>
                        <div class="space-y-3 pl-4">
                            <div 
                                v-for="(service, serviceIndex) in category.subcategoryServices" 
                                :key="serviceIndex"
                                class="flex justify-between items-start gap-4"
                            >
                                <span class="text-gray-700 flex-1">{{ service.subcategoryServiceName }}</span>
                                <span class="text-gray-900 font-semibold whitespace-nowrap">{{ service.subcategoryServicePrice }}€</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Contact CTA Section -->
            <div class="mt-16 md:text-center bg-light-brown rounded-3xl p-8 md:p-12">
                <h4 v-if="priceListData.ctaTitle" class="md:mb-4">{{ priceListData.ctaTitle }}</h4>
                <p v-if="priceListData.ctaDescription" class="md:text-lg text-gray-700 mb-6">{{ priceListData.ctaDescription }}</p>
                <NuxtLink v-if="priceListData.buttonLink && priceListData.buttonText" :to="priceListData.buttonLink" target="_blank">
                    <Button class="bg-light-peach text-button-pink hover:bg-button-pink transition-colors duration-300 px-8 py-6 md:text-lg cursor-pointer">
                        {{ priceListData.buttonText }}
                    </Button>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { PRICELIST_QUERY } from "~/constants/query";
import type { PriceList } from "~/models/sanity";
import { Button } from "~/components/ui/button";

const { data: priceListData, error: priceListError } = await useSanityQuery<PriceList>(PRICELIST_QUERY);
const hasError = computed(() => !priceListData.value || priceListError.value);

// SEO Meta Tags
useHead({
    title: 'Cenik - Noa Salon',
    link: [
        {
            rel: 'canonical',
            href: 'https://noa-salon.com/cenik'
        }
    ],
    meta: [
        {
            name: 'description',
            content: 'Cenik storitev Noa Salon. Pregled cen za vse lepotne storitve v našem salonu v Ljubljani.'
        },
        {
            property: 'og:title',
            content: 'Cenik - Noa Salon'
        },
        {
            property: 'og:description',
            content: 'Cenik storitev Noa Salon. Pregled cen za vse lepotne storitve v našem salonu v Ljubljani.'
        },
        {
            property: 'og:type',
            content: 'website'
        },
        {
            property: 'og:url',
            content: 'https://noa-salon.com/cenik'
        }
    ]
});
</script>