<template>
    <div 
        :class="[
            'w-full h-16 bg-white flex items-center justify-center px-2 bg-beige',
            'fixed top-0 left-0 right-0 z-50',
            'transition-transform duration-300 ease-in-out',
            isVisible ? 'translate-y-0' : '-translate-y-full'
        ]"
    >
        <div class="flex items-center gap-4">
            <NuxtLink 
                to="/" 
                :class="[
                    'cursor-pointer transition-all duration-200',
                    isActive('/') ? 'text-button-pink font-bold' : 'hover:text-button-pink'
                ]"
            >
                Domov
            </NuxtLink>
            <NuxtLink 
                to="/storitve"
                :class="[
                    'cursor-pointer transition-all duration-200',
                    isActive('/storitve') ? 'text-button-pink font-bold' : 'hover:text-button-pink'
                ]"
            >
                Storitve
            </NuxtLink>
            <NuxtLink 
                to="/academy"
                :class="[
                    'cursor-pointer transition-all duration-200',
                    isActive('/academy') ? 'text-button-pink font-bold' : 'hover:text-button-pink'
                ]"
            >
                Academy
            </NuxtLink>
            <NuxtLink 
                to="/skin-therapy"
                :class="[
                    'cursor-pointer transition-all duration-200',
                    isActive('/skin-therapy') ? 'text-button-pink font-bold' : 'hover:text-button-pink'
                ]"
            >
                Skin Therapy
            </NuxtLink>
            <NuxtLink 
                to="/cenik"
                :class="[
                    'cursor-pointer transition-all duration-200',
                    isActive('/cenik') ? 'text-button-pink font-bold' : 'hover:text-button-pink'
                ]"
            >
                Cenik
            </NuxtLink>
            <Button asChild variant="secondary" class="bg-button-pink text-button-pink hover:bg-button-pink-hover cursor-pointer">
                <NuxtLink to="https://form.lime-booking.com/sl/noa/service" target="_blank">Naroči se</NuxtLink>
            </Button>
        </div>
    </div>
</template>

<script setup lang="ts">
import Button from './ui/button/Button.vue';
import { ref, onMounted, onUnmounted, computed } from 'vue';

const route = useRoute();
const isVisible = ref(false);
const lastScrollY = ref(0);
const scrollThreshold = 100;

const isActive = (path: string) => {
    return route.path === path;
};

const handleScroll = () => {
    const currentScrollY = window.scrollY;
    
    // Hide header if at the top of the page
    if (currentScrollY < scrollThreshold) {
        isVisible.value = false;
        lastScrollY.value = currentScrollY;
        return;
    }
    
    // Show header when scrolling down, hide when scrolling up
    if (currentScrollY > lastScrollY.value) {
        isVisible.value = true;
    } else {
        isVisible.value = false;
    }
    
    lastScrollY.value = currentScrollY;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>