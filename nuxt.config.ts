import tailwindcss from "@tailwindcss/vite";
import Aura from "@primeuix/themes/aura";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["primeicons/primeicons.css", "~/assets/css/index.css"],

  modules: ["@nuxtjs/tailwindcss", "@primevue/nuxt-module"],

  vite: {
    plugins: [tailwindcss()],
  },

  tailwindcss: {
    editorSupport: {
      autocompleteUtil: true,
    },
  },

  primevue: {
    options: {
      theme: {
        preset: Aura,
      },
    },
  },
});
