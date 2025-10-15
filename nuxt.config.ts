import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  modules: ['@nuxtjs/sanity', '@nuxt/fonts', 'shadcn-nuxt', '@vueuse/nuxt', 'shadcn-nuxt', '@nuxtjs/google-fonts', '@nuxtjs/seo', 'nuxt-gtag', 'nuxt-marquee'],
  devtools: { enabled: true },
  site: {
    url: 'https://noa-salon.com',
    name: 'Noa Salon',
    description: 'Where beauty meets comfort.',
    defaultLocale: 'sl',
  },
  css: ['~/assets/css/main.css'],
  sanity: {
    projectId: 'xy5z0niy',
    dataset: 'production',
    apiVersion: '2025-10-09',
    token: 'skuQhjatTDWHGpciNlbPNxx0unocTEoWW2pI5HyHJydVTtRgU5uj8M1iuzjHGcCCgGjCrItqkbeJnUukMHCzkdrTrtRSyGOXwc2nTHYAbtMsTpGn1UxFbDD25r3lVi0SbjbSEFFIMDxYG2UdfpN8P0YOnKbnUSmSWQnxwqFWPXV0z3pJn0I9',
    ignoreBrowserTokenWarning: true,
    useCdn: true
  },
  fonts: {
    families: [
      { name: 'Algiers', provider: 'none', src: './assets/fonts/Algiers-Regular.woff2' },
      { name: 'Helvetica-Thin', provider: 'none', src: './assets/fonts/Helvetica-Thin.ttf' },
    ]
  },
  googleFonts: {
    families: {
      'Noto Sans': [100],
      'Poppins': [400, 600],
    },
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
    optimizeDeps: {
      include: ["@sanity/visual-editing"],
    }
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  gtag: {
    id: 'G-571LXJJWPP'
  }
})