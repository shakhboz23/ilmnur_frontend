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

      <div class="flex md:pt-[54px] md:mt-[80px] lg:mx-[100px] sm:mx-4">
        <LessonSidebar
          v-if="!$router.currentRoute.value.query.create_lesson"
          class="md:block hidden rounded-l-[6px] overflow-hidden overflow-y-auto max-h-[calc(100vh_-_160px)] min-h-[calc(100vh_-_160px)]"
        />

        <NuxtPage
          class="page w-full rounded-r-[6px] md:rounded-l-0 sm:rounded-l-[6px] overflow-hidden overflow-y-auto md:max-h-[calc(100vh_-_160px)] md:min-h-[calc(100vh_-_160px)] max-h-[100vh] min-h-[100vh]"
        />
      </div>
    </div>
  </header>
</template>

<script setup>
import { useLoadingStore } from "~/store";
const isLoading = useLoadingStore();

const is_sidebar = ["lessons-subject-id", "lessons-subject"];
</script>

<style lang="scss" scoped></style>
