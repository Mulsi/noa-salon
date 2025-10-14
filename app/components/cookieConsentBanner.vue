<template>
    <Transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="transform translate-y-full opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform translate-y-full opacity-0"
    >
      <div
        v-if="showBanner"
        class="fixed bottom-4 left-4 right-4 sm:left-1/2 sm:transform sm:-translate-x-1/2 w-4/5 md:w-9/10 mx-auto z-50 bg-beige border-2 border-button-pink shadow-xl rounded-3xl"
      >
        <div class="px-6 py-6 sm:px-8 lg:px-10">
          <div
            class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <!-- Content -->
            <div class="flex-1">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">
                Uporabljamo piškotke za izboljšanje vaše izkušnje
              </h3>
              <p class="text-sm text-gray-700 mb-4 sm:mb-0">
                Uporabljamo piškotke in podobne tehnologije za personalizacijo
                vsebine, zagotavljanje in izboljšanje naših storitev ter analizo
                prometa. S klikom na "Sprejmi vse" se strinjate z uporabo
                piškotkov.
                <a
                  href="/piskotki"
                  class="text-button-pink hover:underline font-medium ml-1"
                >
                  Preberite našo politiko piškotkov
                </a>
              </p>
            </div>
  
            <!-- Buttons -->
            <div class="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button
                @click="declineCookies"
                class="px-4 py-2 text-sm font-medium text-gray-700 bg-light-brown hover:bg-light-peach rounded-lg transition-colors duration-200"
              >
                Zavrni
              </button>
              <button
                @click="acceptCookies"
                class="px-6 py-2 text-sm font-medium text-white bg-button-pink hover:bg-button-pink-hover rounded-lg transition-colors duration-200"
              >
                Sprejmi vse
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </template>
  
  <script setup lang="ts">
  const { showBanner, acceptCookies, declineCookies } = useCookieConsent();
  </script>
  