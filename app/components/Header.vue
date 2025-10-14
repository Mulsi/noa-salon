<template>
    <header class="w-full h-16 bg-beige fixed top-0 left-0 right-0 z-50 shadow-sm">
        <div class="main-container h-full flex items-center justify-between px-4">
            <!-- Logo on the left -->
            <NuxtLink to="/" class="header-logo text-2xl font-bold text-button-pink hover:opacity-80 transition-opacity">
                noa.
            </NuxtLink>

            <!-- Desktop Navigation (hidden on mobile) -->
            <nav class="hidden md:flex items-center gap-6">
                <!-- Storitve with Dropdown -->
                <div 
                    class="relative group"
                    @mouseenter="showStoritveDropdown = true"
                    @mouseleave="showStoritveDropdown = false"
                >
                    <NuxtLink 
                        to="/storitve"
                        :class="[
                            'cursor-pointer transition-all duration-200 flex items-center gap-1',
                            isActive('/storitve') ? 'text-button-pink font-bold' : 'hover:text-button-pink'
                        ]"
                    >
                        Storitve
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </NuxtLink>
                    
                    <!-- Dropdown Menu -->
                    <Transition name="fade">
                        <div 
                            v-if="showStoritveDropdown && serviceTypes.length > 0"
                            class="absolute top-full left-0 pt-2 w-64 z-50"
                        >
                            <div class="bg-beige rounded-lg shadow-xl py-2">
                                <div v-for="serviceType in serviceTypes" :key="serviceType">
                                    <NuxtLink
                                        v-if="serviceType === 'Nega obraza'"
                                        :to="`/skin-therapy`"
                                        @click="showStoritveDropdown = false"
                                        class="block px-4 py-2 hover:bg-light-pink transition-colors"
                                    >
                                        > {{ serviceType }}
                                    </NuxtLink>
                                    <NuxtLink
                                        v-else
                                        :to="`/storitve#${createSlug(serviceType)}`"
                                        class="block px-4 py-2 hover:bg-light-pink transition-colors"
                                        @click="showStoritveDropdown = false"
                                    >
                                        > {{ serviceType }}
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </Transition>
                </div>
                <!-- Academy with Dropdown -->
                <div 
                    class="relative group"
                    @mouseenter="showAcademyDropdown = true"
                    @mouseleave="showAcademyDropdown = false"
                >
                    <NuxtLink 
                        to="/academy"
                        :class="[
                            'cursor-pointer transition-all duration-200 flex items-center gap-1',
                            isActive('/academy') ? 'text-button-pink font-bold' : 'hover:text-button-pink'
                        ]"
                    >
                        Academy
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </NuxtLink>
                    
                    <!-- Dropdown Menu -->
                    <Transition name="fade">
                        <div 
                            v-if="showAcademyDropdown && academyTypes.length > 0"
                            class="absolute top-full left-0 pt-2 w-64 z-50"
                        >
                            <div class="bg-beige rounded-lg shadow-xl py-2">
                                <div v-for="academyType in academyTypes" :key="academyType">
                                    <NuxtLink
                                        :to="`/academy#${createSlug(academyType)}`"
                                        @click="showAcademyDropdown = false"
                                        class="block px-4 py-2 hover:bg-light-pink transition-colors"
                                    >
                                        > {{ academyType }}
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </Transition>
                </div>
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
                <Button asChild variant="secondary" class="bg-button-pink text-white hover:bg-button-pink-hover cursor-pointer">
                    <NuxtLink to="https://form.lime-booking.com/sl/noa/service" target="_blank">Naroči se</NuxtLink>
                </Button>
            </nav>

            <!-- Hamburger Menu Button (visible on mobile) -->
            <button 
                @click="toggleMenu"
                class="md:hidden hover:bg-light-pink rounded-lg transition-colors"
                aria-label="Toggle menu"
            >
                <svg 
                    v-if="!isMenuOpen" 
                    class="w-6 h-6 text-button-pink" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg 
                    v-else 
                    class="w-6 h-6 text-button-pink" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>

        <!-- Mobile Menu (slides in from right) -->
        <Transition name="slide">
            <div 
                v-if="isMenuOpen"
                class="md:hidden fixed top-16 left-0 right-0 bottom-0 bg-beige shadow-lg"
            >
                <nav class="flex flex-col px-4 gap-2">
                    <!-- Storitve with Submenu -->
                    <div>
                        <button
                            @click="toggleStoritveSubmenu"
                            :class="[
                                'w-full p-2 rounded-lg cursor-pointer transition-all duration-200 flex items-center justify-between',
                                isActive('/storitve') ? 'bg-button-pink text-white font-bold' : 'hover:bg-light-pink'
                            ]"
                        >
                            <span>Storitve</span>
                            <svg 
                                class="w-4 h-4 transition-transform duration-200"
                                :class="{ 'rotate-180': showStoritveSubmenu }"
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        
                        <!-- Submenu Items -->
                        <Transition name="slide-down">
                            <div v-if="showStoritveSubmenu && serviceTypes.length > 0" class="pl-4">
                            <div v-for="serviceType in serviceTypes" :key="serviceType">
                                <NuxtLink
                                    v-if="serviceType === 'Nega obraza'"
                                    :to="`/skin-therapy`"
                                    @click="closeMenu"
                                    class="block p-2 rounded-lg hover:bg-light-pink transition-colors text-sm"
                                >
                                    > {{ serviceType }}
                                </NuxtLink>
                                <NuxtLink
                                    v-else
                                    :to="`/storitve#${createSlug(serviceType)}`"
                                    @click="closeMenu"
                                    class="block p-2 rounded-lg hover:bg-light-pink transition-colors text-sm"
                                >
                                    > {{ serviceType }}
                                </NuxtLink>
                            </div>
                            </div>
                        </Transition>
                    </div>
                    <!-- Academy with Submenu -->
                    <div>
                        <button
                            @click="toggleAcademySubmenu"
                            :class="[
                                'w-full p-2 rounded-lg cursor-pointer transition-all duration-200 flex items-center justify-between',
                                isActive('/academy') ? 'bg-button-pink text-white font-bold' : 'hover:bg-light-pink'
                            ]"
                        >
                            <span>Academy</span>
                            <svg 
                                class="w-4 h-4 transition-transform duration-200"
                                :class="{ 'rotate-180': showAcademySubmenu }"
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        
                        <!-- Submenu Items -->
                        <Transition name="slide-down">
                            <div v-if="showAcademySubmenu && academyTypes.length > 0" class="pl-4">
                                <div v-for="academyType in academyTypes" :key="academyType">
                                    <NuxtLink
                                        :to="`/academy#${createSlug(academyType)}`"
                                        @click="closeMenu"
                                        class="block p-2 rounded-lg hover:bg-light-pink transition-colors text-sm"
                                    >
                                        > {{ academyType }}
                                    </NuxtLink>
                                </div>
                            </div>
                        </Transition>
                    </div>
                    <NuxtLink 
                        to="/skin-therapy"
                        @click="closeMenu"
                        :class="[
                            'p-2 rounded-lg cursor-pointer transition-all duration-200',
                            isActive('/skin-therapy') ? 'bg-button-pink text-white font-bold' : 'hover:bg-light-pink'
                        ]"
                    >
                        Skin Therapy
                    </NuxtLink>
                    <NuxtLink 
                        to="/cenik"
                        @click="closeMenu"
                        :class="[
                            'p-2 rounded-lg cursor-pointer transition-all duration-200',
                            isActive('/cenik') ? 'bg-button-pink text-white font-bold' : 'hover:bg-light-pink'
                        ]"
                    >
                        Cenik
                    </NuxtLink>
                    <NuxtLink 
                        to="https://form.lime-booking.com/sl/noa/service" 
                        target="_blank"
                        @click="closeMenu"
                        class="mt-4 py-3 px-6 bg-button-pink text-white rounded-lg text-center hover:bg-button-pink-hover cursor-pointer transition-colors"
                    >
                        Naroči se
                    </NuxtLink>
                </nav>
            </div>
        </Transition>
    </header>
</template>

<script setup lang="ts">
import type { AcademyDetail, ServiceDetail } from '~/models/sanity';
import Button from './ui/button/Button.vue';
import { ACADEMYDETAIL_HEADER_QUERY, SERVICEDETAIL_HEADER_QUERY } from '~/constants/query';

const route = useRoute();
const isMenuOpen = ref(false);
const showStoritveDropdown = ref(false);
const showStoritveSubmenu = ref(false);
const showAcademyDropdown = ref(false);
const showAcademySubmenu = ref(false);

const { data: serviceDetailData } = await useSanityQuery<ServiceDetail>(SERVICEDETAIL_HEADER_QUERY);
const { data: academyDetailData } = await useSanityQuery<AcademyDetail>(ACADEMYDETAIL_HEADER_QUERY);

// Extract service type titles
const serviceTypes = computed(() => {
    if (!serviceDetailData.value?.services) return [];
    return serviceDetailData.value.services.map((service: any) => service.serviceTypeTitle);
});

// Extract academy type titles
const academyTypes = computed(() => {
    if (!academyDetailData.value?.services) return [];
    return academyDetailData.value.services.map((service: any) => service.serviceTypeTitle);
});

const isActive = (path: string) => {
    return route.path === path;
};

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
    // Close submenus when main menu closes
    if (!isMenuOpen.value) {
        showStoritveSubmenu.value = false;
        showAcademySubmenu.value = false;
    }
};

const toggleStoritveSubmenu = () => {
    showStoritveSubmenu.value = !showStoritveSubmenu.value;
};

const toggleAcademySubmenu = () => {
    showAcademySubmenu.value = !showAcademySubmenu.value;
};

const closeMenu = () => {
    isMenuOpen.value = false;
    showStoritveSubmenu.value = false;
    showAcademySubmenu.value = false;
};

// Close menu when route changes
watch(() => route.path, () => {
    closeMenu();
});

// Lock/unlock scroll when menu opens/closes
watch(isMenuOpen, (isOpen) => {
    if (process.client) {
        if (isOpen) {
            // Lock scroll
            document.body.style.overflow = 'hidden';
        } else {
            // Unlock scroll
            document.body.style.overflow = '';
        }
    }
});

// Cleanup on unmount
onUnmounted(() => {
    if (process.client) {
        document.body.style.overflow = '';
    }
});
</script>

<style scoped>
/* Slide transition for mobile menu */
.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s ease-in-out;
}

.slide-enter-from {
    transform: translateX(100%);
}

.slide-leave-to {
    transform: translateX(100%);
}

/* Fade transition for dropdown */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* Slide down transition for mobile submenu */
.slide-down-enter-active,
.slide-down-leave-active {
    transition: all 0.3s ease-in-out;
    max-height: 500px;
}

.slide-down-enter-from {
    max-height: 0;
    opacity: 0;
}

.slide-down-leave-to {
    max-height: 0;
    opacity: 0;
}
</style>