<template>
  <client-only>
    <webrtc v-if="mounted"/>
    <!-- <iframe class="w-full min-h-screen" src="https://vue-webrtc-eight.vercel.app"></iframe> -->
  </client-only>
</template>

<script setup>
const mounted = ref(false);

onMounted(() => {
  mounted.value = true;
})
</script>

<style lang="scss" scoped></style>