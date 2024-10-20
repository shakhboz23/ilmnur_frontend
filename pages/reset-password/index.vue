<template>
  <main
    class="py-10 md:px-0 px-4 max-h-screen min-h-[calc(100vh_-_100px)] overflow-y-auto"
  >
    <div
      class="sm:w-[500px] bg_white mx-auto sm:p-[50px] p-5 pb-8 rounded-[16px]"
    >
      <section>
        <h1 class="text-center md:text-[28px] text-xl font-bold">
          Forgot password
        </h1>
        <p class="_c42 text-center md:text-lg text-sm font-medium mt-4 mb-7">
          Enter your email address and we'll send you a link to reset your
          password.
        </p>
      </section>
      <form @submit.prevent="handleSubmit" class="space-y-6 text-sm">
        <div class="space-y-2">
          <label for="login">Email</label>
          <input v-model="useAuth.login.email" type="email" />
        </div>
        <div class="pt-2 space-y-6 grid">
          <button class="login_btn mx-auto">Email me</button>
        </div>
      </form>
    </div>
  </main>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "register",
});

import { useAuthStore, useLoadingStore } from "@/store";

const useAuth = useAuthStore();
const isLoading = useLoadingStore();
isLoading.store.verification = true;

const store = reactive({
  show: false,
});

function handleSubmit() {
  useAuth.resetPassword();
}
</script>

<style lang="scss" scoped></style>
