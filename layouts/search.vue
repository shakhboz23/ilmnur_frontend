<template>
  <header class="max-w-[2000px] mx-auto">
    <NuxtLoadingIndicator />
    <LoadingPage v-if="isLoading.middleware.loading" />
    <!-- <Password v-else-if="!isLoading.middleware.passwordChecking" /> -->
    <div v-show="!isLoading.middleware.loading">
      <SearchNav
        :class="
          is_sidebar.includes($router.currentRoute.value.name)
            ? 'md:block hidden'
            : ''
        "
      />
      <div
        class="flex md:flex-row flex-col md:space-x-6 md:mt-[80px] lg:px-[100px] sm:px-4"
        :class="
          is_sidebar.includes($router.currentRoute.value.name)
            ? 'md:pt-[54px] md:mt-[80px]'
            : 'pt-[54px] sm:mt-[55px] mt-4'
        "
      >
        <Sidebar
          v-if="
            $router.currentRoute.value.name != 'subjects-id' &&
            $router.currentRoute.value.name != 'create_test'
          "
          :class="
            is_sidebar.includes($router.currentRoute.value.name)
              ? 'md:block hidden'
              : ''
          "
        />
        <NuxtPage class="page w-full" />
      </div>
    </div>
  </header>
</template>

<script setup>
import { useLoadingStore } from "~/store";
const isLoading = useLoadingStore();

const is_sidebar = ["lessons-subject"];
</script>

<style lang="scss" scoped></style>
