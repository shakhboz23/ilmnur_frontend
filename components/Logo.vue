<template>
  <router-link draggable="false" to="/" @click="isLoading.store.routeToMain = true"><img draggable="false" src="/logo.svg" alt="" /></router-link>
</template>

<script setup>
import { useLoadingStore } from '~/store';
const isLoading = useLoadingStore();
</script>

<style lang="scss" scoped></style>
