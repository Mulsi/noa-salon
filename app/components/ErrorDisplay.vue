<template>    
    <div class="bg-light-pink min-h-screen flex items-center justify-center py-16 px-4">
        <div class="max-w-2xl w-full text-center">
            <!-- Error Icon -->
            <div class="mb-8">
                <svg 
                    class="w-24 h-24 mx-auto text-red-500" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        stroke-width="2" 
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
                    />
                </svg>
            </div>

            <!-- Error Title -->
            <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                {{ title }}
            </h2>

            <!-- Error Message -->
            <p class="text-lg md:text-xl text-gray-600 mb-8">
                {{ message }}
            </p>

            <!-- Action Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                    @click="refresh"
                    class="px-8 py-3 bg-button-pink text-white rounded-lg hover:bg-button-pink-hover transition-colors font-semibold"
                >
                    Poskusi znova
                </button>
                <NuxtLink 
                    to="/"
                    class="px-8 py-3 bg-light-brown text-gray-800 rounded-lg hover:bg-light-peach transition-colors font-semibold"
                >
                    Nazaj na domačo stran
                </NuxtLink>
            </div>

            <!-- Additional Help Text -->
            <p class="mt-8 text-sm text-gray-500">
                Če se težava ponavlja, nas prosimo kontaktirajte.
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Props {
    title?: string;
    message?: string;
}

withDefaults(defineProps<Props>(), {
    title: 'Napaka pri nalaganju',
    message: 'Prišlo je do napake pri nalaganju podatkov. Prosimo, poskusite znova.'
});

const refresh = () => {
    window.location.reload();
};
</script>

