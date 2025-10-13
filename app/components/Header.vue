<template>
    <header class="w-full h-16 bg-beige fixed top-0 left-0 right-0 z-50 shadow-sm">
        <div class="main-container h-full flex items-center justify-between px-4">
            <!-- Logo on the left -->
            <NuxtLink to="/" class="header-logo text-2xl font-bold text-button-pink hover:opacity-80 transition-opacity">
                noa.
            </NuxtLink>

            <!-- Desktop Navigation (hidden on mobile) -->
            <nav class="hidden md:flex items-center gap-6">
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
                    <NuxtLink 
                        to="/storitve"
                        @click="closeMenu"
                        :class="[
                            'p-2 rounded-lg cursor-pointer transition-all duration-200',
                            isActive('/storitve') ? 'bg-button-pink text-white font-bold' : 'hover:bg-light-pink'
                        ]"
                    >
                        Storitve
                    </NuxtLink>
                    <NuxtLink 
                        to="/academy"
                        @click="closeMenu"
                        :class="[
                            'p-2 rounded-lg cursor-pointer transition-all duration-200',
                            isActive('/academy') ? 'bg-button-pink text-white font-bold' : 'hover:bg-light-pink'
                        ]"
                    >
                        Academy
                    </NuxtLink>
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
import Button from './ui/button/Button.vue';

const route = useRoute();
const isMenuOpen = ref(false);

const isActive = (path: string) => {
    return route.path === path;
};

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
    isMenuOpen.value = false;
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
</style>