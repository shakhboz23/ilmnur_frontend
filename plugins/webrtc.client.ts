// // plugins/webrtc.client.ts
// // import { defineNuxtPlugin } from '#app'
// // import WebRTC from 'vue-webrtc'
// // import WebRTC from "vue-webrtc";
// import Vue from 'vue'
// export default defineNuxtPlugin(async (nuxtApp) => {
//   if (process.client) {
//     console.log("Client-side rendering");
//     try {
//       // const WebRTC = await import("vue-webrtc");
//       const { default: WebRTC } = await import('vue-webrtc');
//       console.log("WebRTC loaded:", WebRTC);
//       if (WebRTC) {
//         // nuxtApp.vueApp.use(WebRTC);
//         nuxtApp.vueApp.component('WebRTC', WebRTC);
//         // Vue.use(WebRTC)
//       }
//     } catch (error) {
//       console.error("Failed to load WebRTC:", error);
//     }
//   }
// });

// // export default defineNuxtPlugin((nuxtApp) => {
// //   if (process.client) {
// //     setTimeout(() => {
// //       nuxtApp.provide("webrtc", WebRTC);
// //     }, 10000000)
// //   }
// // });

// import { defineNuxtPlugin } from '#app'
// import VueWebRTC from 'vue-webrtc'

// export default defineNuxtPlugin(nuxtApp => {
//   nuxtApp.vueApp.component('VueWebRTC', VueWebRTC)
// })

import WebRTC from 'vue-webrtc'
Vue.component(WebRTC.name, WebRTC);
