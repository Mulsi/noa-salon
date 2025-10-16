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
        class="cookie-consent-banner fixed bottom-4 left-6 right-6 sm:left-12 sm:right-12 lg:right-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:w-full lg:max-w-[1136px] lg:mx-auto z-50 bg-beige border-2 border-button-pink shadow-xl rounded-3xl"
      >
        <div class="cookie-banner-padding py-6">
          <div
            class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <!-- Content -->
            <div class="flex-1">
              <h5 class="text-lg font-semibold text-gray-900 mb-2">
                Uporabljamo piškotke za izboljšanje vaše izkušnje
              </h5>
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
            <div class="flex flex-col lg:flex-row gap-3 w-full sm:w-auto">
              <button
                @click="acceptCookies"
                class="px-6 py-2 text-sm font-medium text-white bg-button-pink hover:bg-button-pink-hover rounded-lg transition-colors duration-200"
              >
                Sprejmi vse
              </button>
              <button
                @click="declineCookies"
                class="px-4 py-2 text-sm font-medium text-gray-700 bg-light-brown hover:bg-light-peach rounded-lg transition-colors duration-200"
              >
                Zavrni
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

  <style scoped>
  /* Match main-container responsive padding exactly */
  .cookie-banner-padding {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media screen and (min-width: 551px) and (max-width: 1024px) {
    .cookie-banner-padding {
      padding-left: 3rem;
      padding-right: 3rem;
    }
  }
  </style>
  