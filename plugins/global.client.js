// plugins/global.client.js
import { defineNuxtPlugin } from '#app'
import global from 'global'

export default defineNuxtPlugin(() => {
  if (process.client) {
    window.global = global
  }
})
