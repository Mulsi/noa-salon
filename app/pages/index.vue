<template>
    <!-- Error Display -->
    <ErrorDisplay 
        v-if="hasError" 
        :message="'Prišlo je do napake pri nalaganju podatkov. Prosimo, poskusite znova.'"
    />
    
    <div v-else-if="homepageData">
        <div class="relative w-full aspect-[16/9] max-h-[700px] mt-16">
            <img v-if="width >= 768" :src="urlFor(homepageData.heroImageDesktop).url()" alt="Hero image" class="absolute inset-0 w-full h-full object-cover" />
            <img v-else :src="urlFor(homepageData.heroImageMobile).url()" alt="Hero image" class="absolute inset-0 w-full h-full object-cover" />
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
                <h1>noa.</h1>
                <h3 class="subheading">SALON & ACADEMY</h3>
            </div>
        </div>
        
        <!-- Introduction Section -->
        <div class="bg-light-pink pb-8 pt-16 md:pt-20 lg:pt-40">
            <div class="main-container px-4">
                <div class="md:text-center">
                    <p class="text-xl md:text-3xl">
                        Butični salon sredi Ljubljane, v katerem lepota sreča udobje. Noa združuje strokovnost, estetiko in osebni pristop v udobno izkušnjo, ki ženskam vliva dodatno samozavest in občutek lepote.
                    </p>
                </div>
            </div>
        </div>
        
        <div class="bg-light-pink">
            <div class="main-container flex flex-col md:flex-row gap-6 md:gap-8 px-4 py-8 md:py-24 lg:py-32">
                <div class="w-full md:w-1/2">
                    <img :src="urlFor(homepageData.aboutImage).url()" alt="Anja Kolenc" class="rounded-3xl w-full h-auto object-cover" />
                </div>
                <div class="w-full md:w-1/2 flex flex-col justify-center">
                    <h2 class="mb-2 md:mb-4">{{ homepageData.aboutHeading }}</h2>
                    <p class="font-bold text-xl md:text-2xl pb-4">{{ homepageData.aboutSubheading }}</p>
                    <div class="flex flex-col gap-3 md:gap-4 text-base md:text-lg">
                        <PortableText :value="homepageData.aboutDescription" />
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-light-pink">
            <div class="main-container flex flex-col gap-4 items-center justify-center py-8 md:py-16">
                <h2 class="w-full text-left md:text-center">{{ homepageData.testimonialsTitle }}</h2>
                <Carousel
                    class="w-full md:w-[92%] mx-auto"
                    :opts="{
                    align: 'start',
                    }"
                >
                    <CarouselContent class="-ml-1">
                    <CarouselItem v-for="(item, index) in homepageData.testimonials" :key="index" class="pl-1 md:basis-1/2">
                        <div class="p-1 h-full">
                            <Card class="bg-testimonial-pink h-full">
                                <CardContent class="flex flex-col items-center justify-center p-6 min-h-[300px] h-full">
                                    <img src="/img/stars.png" class="w-1/3 pb-4" />
                                    <h4 class="md:pb-4">{{ item.title }}</h4>
                                    <p class="pb-4">{{ item.description }}</p>
                                    <p class="font-bold">- {{ item.name }}</p>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
        <div class="bg-light-pink flex flex-col gap-4 items-center justify-center py-8 md:py-16">
            <div class="main-container">
                <!-- Main services title -->
                <h2 class="text-left md:text-center pt-8 mb-4 w-full">{{ homepageData.servicesTitle }}</h2>
                
                <!-- Salon Services Section -->
                <div class="mb-12">
                    <!-- Grid without the title -->
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div v-for="service in homepageData.salonServices" :key="service.title" class="bg-light-brown rounded-3xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <div class="h-80 overflow-hidden">
                                <img :src="urlFor(service.image).url()" :alt="service.title" class="w-full h-full object-cover" />
                            </div>
                            <div class="p-6">
                                <h4 class="mb-2 md:mb-6">{{ service.title }}</h4>
                                <NuxtLink :to="service.buttonLink">
                                    <Button class="bg-light-peach text-button-pink hover:bg-button-pink-hover cursor-pointer w-full">
                                        {{ service.buttonText }}
                                    </Button>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Academy Services Section -->
                <div class="mb-8 md:pt-16">
                    <h2 class="text-left md:text-center pt-8 mb-4 w-full">{{ homepageData.academyServiceTitle }}</h2>
                    <!-- Grid without the title -->
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div v-for="service in homepageData.academyServices" :key="service.title" class="bg-light-brown rounded-3xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <div class="h-80 overflow-hidden">
                                <img :src="urlFor(service.image).url()" :alt="service.title" class="w-full h-full object-cover" />
                            </div>
                            <div class="p-6">
                                <h4 class="mb-2 md:mb-6">{{ service.title }}</h4>
                                <NuxtLink :to="service.buttonLink">
                                    <Button class="bg-light-peach text-button-pink hover:bg-button-pink-hover cursor-pointer w-full">
                                        {{ service.buttonText }}
                                    </Button>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="galleryData" class="bg-light-pink flex flex-col gap-4 items-center justify-center pt-8 pb-32">
            <div class="main-container">
                <h2 class="w-full text-left md:text-center md:pt-8 mb-4">{{ galleryData.title }}</h2>
                <Carousel
                    class="w-full md:w-[92%] mx-auto"
                    :opts="{
                    align: 'start',
                    }"
                >
                    <CarouselContent class="-ml-1">
                    <CarouselItem v-for="(item, index) in galleryData.images" :key="index" class="pl-1 md:basis-1/2">
                        <div class="p-1 h-full">
                            <Card class="bg-testimonial-pink h-full py-0">
                                <CardContent class="flex flex-col items-center justify-center p-0 min-h-[300px] w-full">
                                    <img :src="urlFor(item).url()" class="rounded-3xl" />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { GALLERY_QUERY, HOMEPAGE_QUERY } from "~/constants/query";
import { useSanityImageUrl } from "../../studio-noa-salon/sanityImageUrl";
import type { Gallery, Homepage } from "~/models/sanity";
import { PortableText } from '@portabletext/vue';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "~/components/ui/carousel";
import { Card, CardContent } from "~/components/ui/card";
import { Button } from "~/components/ui/button";

const { urlFor } = useSanityImageUrl();
const { data: homepageData, error: homepageError } = await useSanityQuery<Homepage>(HOMEPAGE_QUERY);
const { data: galleryData, error: galleryError } = await useSanityQuery<Gallery>(GALLERY_QUERY);
const { width } = useWindowSize()

const hasError = computed(() => !homepageData.value || !galleryData.value || homepageError.value || galleryError.value);

// SEO Meta Tags
useHead({
    title: 'Noa Salon - Where beauty meets comfort',
    link: [
        {
            rel: 'canonical',
            href: 'https://noa-salon.com/'
        }
    ],
    meta: [
        {
            name: 'description',
            content: 'Noa Salon - butični salon v Ljubljani, kjer lepota sreča udobje. Strokovne lepotne storitve, kozmetika in izobraževanja.'
        },
        {
            property: 'og:title',
            content: 'Noa Salon - Where beauty meets comfort'
        },
        {
            property: 'og:description',
            content: 'Noa Salon - butični salon v Ljubljani, kjer lepota sreča udobje. Strokovne lepotne storitve, kozmetika in izobraževanja.'
        },
        {
            property: 'og:type',
            content: 'website'
        },
        {
            property: 'og:url',
            content: 'https://noa-salon.com'
        }
    ]
});
</script>