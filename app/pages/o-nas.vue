<template>
    <div v-if="aboutData" class="min-h-screen">
        <div class="main-container py-16">
            <!-- Page Title -->
            <div class="text-center my-8">
                <h2>{{ aboutData.title }}</h2>
            </div>

            <!-- Content -->
            <div class="">
                <div class="prose prose-lg max-w-none">
                    <PortableText :value="aboutData.description" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ABOUT_QUERY } from "~/constants/query";
import type { About } from "~/models/sanity";
import { PortableText } from '@portabletext/vue';

const { data: aboutData } = await useSanityQuery<About>(ABOUT_QUERY);
</script>