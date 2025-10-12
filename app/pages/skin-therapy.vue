<template>
    <div v-if="skinTherapyData" class="bg-light-pink min-h-screen">
        <div class="main-container py-16">
            <!-- Page Title -->
            <div class="text-center mb-8">
                <h2>{{ skinTherapyData.title }}</h2>
            </div>

            <!-- Page Description -->
            <div class="max-w-4xl mx-auto mb-16 text-center">
                <PortableText :value="skinTherapyData.description" />
            </div>

            <!-- Treatments List -->
            <div class="space-y-8">
                <div 
                    v-for="(treatment, index) in skinTherapyData.treatments" 
                    :key="index"
                    class="bg-testimonial-pink rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                    <h3 class="mb-4">{{ treatment.treatmentName }}</h3>
                    <div class="text-gray-700 leading-relaxed">
                        <PortableText :value="treatment.treatmentDescription" />
                    </div>
                </div>
            </div>

            <!-- Contact CTA Section -->
            <div class="mt-16 text-center bg-light-brown rounded-3xl p-12">
                <h4 class="mb-4">Rezervirajte svoj termin</h4>
                <p class="text-lg text-gray-700 mb-6">Kontaktirajte nas za več informacij ali rezervacijo termina.</p>
                <Button class="bg-light-peach text-button-pink hover:bg-button-pink transition-colors duration-300 px-8 py-6 text-lg">
                    <NuxtLink to="mailto:noa@noa-salon.com" target="_blank">Kontakt</NuxtLink>
                </Button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { SKINTHERAPY_QUERY } from "~/constants/query";
import type { SkinTherapy } from "~/models/sanity";
import { PortableText } from '@portabletext/vue';
import { Button } from "~/components/ui/button";

const { data: skinTherapyData } = await useSanityQuery<SkinTherapy>(SKINTHERAPY_QUERY);
</script>

