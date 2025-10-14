<template>
    <!-- Error Display -->
    <ErrorDisplay 
        v-if="hasError" 
        :message="'Prišlo je do napake pri nalaganju podatkov. Prosimo, poskusite znova.'"
    />
    <div v-else-if="skinTherapyData" class="bg-light-pink min-h-screen">
        <div class="main-container py-16">
            <!-- Page Title -->
            <div class="md:text-center mt-8 mb-4 md:my-8">
                <h2>{{ skinTherapyData.title }}</h2>
            </div>

            <!-- Page Description -->
            <div class="md:max-w-4/5 mx-auto mb-16 md:text-center">
                <PortableText :value="skinTherapyData.description" />
            </div>

            <!-- Treatments List -->
            <div class="space-y-8">
                <div 
                    v-for="(treatment, index) in skinTherapyData.treatments" 
                    :key="index"
                    class="bg-testimonial-pink rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                    <h4 class="mb-4">{{ treatment.treatmentName }}</h4>
                    <div class="text-gray-700 leading-relaxed">
                        <PortableText :value="treatment.treatmentDescription" />
                    </div>
                </div>
            </div>

            <!-- CTA Section -->
            <div class="mt-16 md:text-center bg-light-brown rounded-3xl p-8 md:p-12">
                <h4 v-if="skinTherapyData.ctaTitle" class="md:mb-4">{{ skinTherapyData.ctaTitle }}</h4>
                <p v-if="skinTherapyData.ctaDescription" class="md:mb-4">{{ skinTherapyData.ctaDescription }}</p>
                <NuxtLink v-if="skinTherapyData.buttonLink && skinTherapyData.buttonText" :to="skinTherapyData.buttonLink" target="_blank">
                    <Button class="bg-light-peach text-button-pink hover:bg-button-pink transition-colors duration-300 px-8 py-6 md:text-lg cursor-pointer">
                        {{ skinTherapyData.buttonText }}
                    </Button>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { SKINTHERAPY_QUERY } from "~/constants/query";
import type { SkinTherapy } from "~/models/sanity";
import { PortableText } from '@portabletext/vue';
import { Button } from "~/components/ui/button";

const { data: skinTherapyData, error: skinTherapyError } = await useSanityQuery<SkinTherapy>(SKINTHERAPY_QUERY);
const hasError = computed(() => !skinTherapyData.value || skinTherapyError.value);

// SEO Meta Tags
useHead({
    title: 'Kozmetika in terapija kože - Noa Salon',
    meta: [
        {
            name: 'description',
            content: 'Skin Therapy - prefinjene nege obraza v sodelovanju z Dr. E. Voss kozmetiko. Znanstveno dovršene formulacije za različne potrebe kože z vidnimi in dolgotrajnimi rezultati.'
        },
        {
            property: 'og:title',
            content: 'Kozmetika in terapija kože - Noa Salon'
        },
        {
            property: 'og:description',
            content: 'Skin Therapy - prefinjene nege obraza v sodelovanju z Dr. E. Voss kozmetiko. Znanstveno dovršene formulacije za različne potrebe kože z vidnimi in dolgotrajnimi rezultati.'
        },
        {
            property: 'og:type',
            content: 'website'
        },
        {
            property: 'og:url',
            content: 'https://noa-salon.com/skin-therapy'
        }
    ]
});
</script>

