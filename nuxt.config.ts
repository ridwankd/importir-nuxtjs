// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: { head: { title: "IMPORTIR.COM" } },
  modules: ["@nuxt/ui", "nuxt-icon", "@nuxt/content", "@nuxthq/studio"],

  // DESIGN
  tailwindcss: { viewer: false },
  colorMode: {
    preference: "light",
    fallback: "light",
  },
});
