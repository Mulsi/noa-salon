<template>
    <ErrorDisplay 
        v-if="hasError" 
        :message="'Prišlo je do napake pri nalaganju podatkov. Prosimo, poskusite znova.'"
    />
    
    <div v-else-if="galleryDetailData" class="bg-light-pink min-h-screen">
        <div class="main-container py-16 mt-8">
            <div class="md:text-center mt-8 mb-4 md:my-8">
                <h2>{{ galleryDetailData.title }}</h2>
            </div>

            <div v-for="(group, groupIndex) in galleryDetailData.galleryGroups" :key="`group-${groupIndex}`" class="mb-12 md:mb-16">
                <h4 class="md:text-center md:mb-8 scroll-mt-20">{{ group.title }}</h4>
                
                <div class="grid grid-cols-3 sm:grid-cols-4 gap-2 md:gap-6">
                    <div 
                        v-for="(image, index) in group.images" 
                        :key="`image-${groupIndex}-${index}`"
                        class="gallery-item group overflow-hidden rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300"
                    >
                        <img 
                            :src="urlFor(image).width(400).height(400).url()" 
                            :alt="`${group.title} - slika ${index + 1}`"
                            class="w-full h-auto md:h-80 object-cover transition-transform duration-300"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { GALLERYDETAIL_QUERY } from '~/constants/query';
import type { GalleryDetail } from '~/models/sanity';
import { useSanityImageUrl } from '~~/studio-noa-salon/sanityImageUrl';

const { urlFor } = useSanityImageUrl();
const { data: galleryDetailData, error: galleryDetailError } = await useSanityQuery<GalleryDetail>(GALLERYDETAIL_QUERY);

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