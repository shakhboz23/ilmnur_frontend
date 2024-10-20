<template>
  <header class="max-w-[2000px] mx-auto">
    <NuxtLoadingIndicator />
    <LoadingPage v-show="isLoading.middleware.loading" />

    <div v-show="!isLoading.middleware.loading">
      <Navbar />

      <div class="mt-[100px]">
        <NuxtPage class="page" />
      </div>
    </div>
  </header>
</template>

<script setup>
import { useLoadingStore } from "~/store";
const isLoading = useLoadingStore();
</script>

<style lang="scss" scoped></style>

<!-- <template>
  <header class="max-w-[2000px] mx-auto">
    <Navbar />

    <div class="mt-[100px]">
      <NuxtPage class="page" />
    </div>
  </header>
</template>

<script></script>

<style lang="scss" scoped></style> -->
