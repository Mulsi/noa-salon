<template>
    <div v-if="generalConditionsData" class="bg-light-pink min-h-screen">
        <div class="main-container py-16">
            <!-- Page Title -->
            <div class="text-center mb-12">
                <h2>{{ generalConditionsData.title }}</h2>
            </div>

            <!-- Content -->
            <div class="bg-light-brown rounded-3xl p-8 md:p-12">
                <div class="prose prose-lg max-w-none">
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
</script>