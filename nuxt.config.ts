export default defineNuxtConfig({
  app: {
    baseURL: "/vuetify_design_system/",
  },
  devtools: { enabled: true },
  ssr: false,
  target: "static",
  generate: {
    fallback: true,
  },
  nitro: {
    prerender: {
      routes: ["/"],
    },
  },
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
  ],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
    ssr: {
      noExternal: ["vuetify"],
    },
  },
});
