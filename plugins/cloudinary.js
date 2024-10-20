// import { Cloudinary } from 'cloudinary-core';

// export default (context, inject) => {
//   const cloudinary = new Cloudinary({
//     cloud_name: 'dqq3cnpxv',
//     secure: true,
//   });
//   inject('cloudinary', cloudinary);
// };

import { Cloudinary } from "cloudinary-core";

export default defineNuxtPlugin((nuxtApp) => {
  const cloudinary = new Cloudinary({
    cloud_name: "dqq3cnpxv",
    secure: true,
  });
  nuxtApp.provide("cloudinary", cloudinary);
});
