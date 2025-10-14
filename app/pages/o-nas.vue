<template>
    <div v-if="aboutData" class="bg-light-pink min-h-screen pt-16">
        <div class="main-container py-16">
            <!-- Page Title -->
            <div class="text-center mb-12">
                <h2>{{ aboutData.title }}</h2>
            </div>

            <!-- Content with Image and Description -->
            <div class="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                <!-- Image Container -->
                <div class="w-full lg:w-1/2 lg:flex-shrink-0">
                    <img 
                        :src="urlFor(aboutData.image).url()" 
                        alt="About Noa Salon" 
                        class="w-full h-auto object-cover rounded-3xl shadow-lg" 
                    />
                </div>
                
                <!-- Description Container -->
                <div class="w-full lg:w-1/2 lg:flex-shrink-0">
                    <div class="flex flex-col justify-center h-full">
                        <div class="prose prose-lg max-w-none">
                            <PortableText :value="aboutData.description" />
                        </div>
                    </div>
                    <div class="pt-4">
                        <a class="header-logo">{{ aboutData.signature }}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ABOUT_QUERY } from "~/constants/query";
import type { About } from "~/models/sanity";
import { PortableText } from '@portabletext/vue';
import { useSanityImageUrl } from "../../studio-noa-salon/sanityImageUrl";

const { data: aboutData } = await useSanityQuery<About>(ABOUT_QUERY);
const { urlFor } = useSanityImageUrl();
</script>