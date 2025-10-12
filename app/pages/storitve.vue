<template>
    <div v-if="serviceDetailData" class="bg-light-pink min-h-screen">
        <div class="main-container py-16">
            <!-- Page Title -->
            <div class="text-center mb-8">
                <h2>{{ serviceDetailData.title }}</h2>
            </div>

            <!-- Page Description -->
            <div class="max-w-4/5 mx-auto mb-16 text-center">
                <PortableText :value="serviceDetailData.description" />
            </div>

            <!-- Services by Type -->
            <div v-for="(serviceType, typeIndex) in serviceDetailData.services" :key="typeIndex" class="mb-16">
                <!-- Service Type Title -->
                <h4 class="text-center mb-8">{{ serviceType.serviceTypeTitle }}</h4>
                
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
                <div v-if="serviceType.additionalInfoTitle && serviceType.additionalInfo" class="mb-16 mt-8 bg-light-brown rounded-3xl p-8">
                    <h5 class="mb-4">{{ serviceType.additionalInfoTitle }}</h5>
                    <PortableText :value="serviceType.additionalInfo" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { SERVICEDETAIL_QUERY } from "~/constants/query";
import type { ServiceDetail } from "~/models/sanity";
import { PortableText } from '@portabletext/vue';
import { Button } from "~/components/ui/button";

const { data: serviceDetailData } = await useSanityQuery<ServiceDetail>(SERVICEDETAIL_QUERY);
</script>