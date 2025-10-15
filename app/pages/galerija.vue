<template>
    <!-- Error Display -->
    <ErrorDisplay 
        v-if="hasError" 
        :message="'Prišlo je do napake pri nalaganju podatkov. Prosimo, poskusite znova.'"
    />
    
    <div v-else-if="galleryDetailData" class="bg-light-pink min-h-screen">
        <div class="main-container py-16 mt-8">
            <!-- Page Title -->
            <div class="md:text-center mt-8 mb-4 md:my-8">
                <h2>{{ galleryDetailData.title }}</h2>
            </div>

            <!-- Image Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div 
                    v-for="(image, index) in galleryDetailData.images" 
                    :key="`image-${index}`"
                    class="gallery-item group overflow-hidden rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300"
                >
                    <img 
                        :src="urlFor(image).width(400).height(400).url()" 
                        :alt="`Galerija slika ${index + 1}`"
                        class="w-full h-80 object-cover transition-transform duration-300"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { GALLERYDETAIL_QUERY } from '~/constants/query';
import type { Gallery } from '~/models/sanity';
import { useSanityImageUrl } from '~~/studio-noa-salon/sanityImageUrl';

const { urlFor } = useSanityImageUrl();
const { data: galleryDetailData, error: galleryDetailError } = await useSanityQuery<Gallery>(GALLERYDETAIL_QUERY);
const hasError = computed(() => !galleryDetailData.value || galleryDetailError.value);

// SEO Meta Tags
useHead({
    title: 'Galerija - Noa Salon',
    link: [
        {
            rel: 'canonical',
            href: 'https://noa-salon.com/galerija'
        }
    ],
    meta: [
        {
            name: 'description',
            content: 'Galerija Noa Salon - oglejte si naše delo in rezultate. Fotografije pred in po storitvah, atmosfera salona in lepotne transformacije.'
        },
        {
            property: 'og:title',
            content: 'Galerija - Noa Salon'
        },
        {
            property: 'og:description',
            content: 'Galerija Noa Salon - oglejte si naše delo in rezultate. Fotografije pred in po storitvah, atmosfera salona in lepotne transformacije.'
        },
        {
            property: 'og:type',
            content: 'website'
        },
        {
            property: 'og:url',
            content: 'https://noa-salon.com/galerija'
        }
    ]
});
</script>