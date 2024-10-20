// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  app: {
    // pageTransition: { name: "page" },
    head: {
      htmlAttrs: {
        lang: "uz",
      },
      charset: "utf-16",
      viewport: "width=device-width, initial-scale=1",
      title: "IlmNur",
      link: [
        {
          rel: "icon",
          href: "/logo.svg",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.ckeditor.com/ckeditor5/33.0.0/classic/ckeditor.css",
        },
        {
          rel: "stylesheet",
          href: "https://unpkg.com/cloudinary-video-player@1.5.9/dist/cld-video-player.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css",
        },
      ],
      script: [
        // {
        //   src: "../node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js",
        // },
        // {
        //   src: "../node_modules/@ckeditor/ckeditor5-vue/dist/ckeditor.js",
        // },
        {
          src: "https://accounts.google.com/gsi/client",
        },
        {
          src: "https://cdn.jsdelivr.net/npm/vue-webrtc-v1@3.0.1/dist/vue-webrtc.esm.min.js",
        },
        {
          src: "https://unpkg.com/cloudinary-core@latest/cloudinary-core-shrinkwrap.min.js",
        },
        {
          src: "https://unpkg.com/cloudinary-video-player@1.5.9/dist/cld-video-player.min.js",
        },
        {
          src: "https://unpkg.com/@cloudinary/js-streaming/dist/js-streaming.js",
        },
        {
          src: "https://unpkg.com/peerjs@1.3.1/dist/peerjs.min.js",
        },
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/peerjs/1.3.1/peerjs.min.js.map",
        },
      ],
      meta: [
        {
          name: "theme-color",
          content: "#FF852E",
        },
        {
          name: "description",
          content: "Online maktab darsliklari",
        },
        {
          name: "keywords",
          content:
            // "Med Bozor, O'zbekiston, tibbiyot mahsulotlari, farmatsevtika, tibbiy asboblar, diagnostika vositalari, sog'liqni saqlash,  narxlar, mijozlarga xizmat ko'rsatish",
            "online, ilmnur, ilm nur, school",
        },
        {
          name: "canonical",
          content: "https://ilmnur.online",
        },
        {
          name: "robots",
          content: "index, follow",
        },
        {
          property: "og:title",
          content: "IlmNur - online maktab platformasi",
        },
        {
          property: "og:description",
          content: "O'quvchilarga sifatli bilim yetkazish",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:url",
          content: "https://ilmnur.online",
        },
        {
          property: "og:image",
          content: "/logo.svg",
        },
        {
          name: "twitter:title",
          content: "IlmNur - online maktab platformasi",
        },
        {
          name: "twitter:description",
          content: "IlmNur - biz bilan online o'rganing!",
        },
        {
          name: "twitter:image",
          content: "/logo.svg",
        },
      ],
    },
  },
  css: [
    "~/assets/scss/main.scss",
    "primevue/resources/themes/aura-light-green/theme.css",
  ],
  modules: [
    "@ant-design-vue/nuxt",
    "@pinia/nuxt",
    "nuxt-primevue",
    "@nuxtjs/cloudinary",
    "nuxt-swiper",
    "@element-plus/nuxt",
  ],
  // plugins: ["~/plugins/ckeditor.js"],
  // plugins: ["~/plugins/quill-editor.js"],
  plugins: [
    { src: "~/plugins/webrtc.client.ts", mode: "client" },
    "~/plugins/cloudinary.js",
    "~/plugins/global.client.js",
    // { src: '~/plugins/primevue.js', ssr: false }
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  cloudinary: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_API_KEY,
    apiSecret: process.env.CLOUDINARY_API_SECRET,
    secure: true, // Use HTTPS
  },
  pages: true,
  runtimeConfig: {
    cloudinary: {
      cloudName: process.env.CLOUDINARY_CLOUD_NAME,
      accessControl: [
        {
          access_type: "token",
        },
      ],
    },
    public: {
      baseURL: process.env.BASE_URL,
      realtimeURL: process.env.REALTIME_URL,
      client_id: process.env.CLIENT_ID,
    },
  },
  // build: {
  //   transpile: ["vue-webrtc"],
  // },
});
