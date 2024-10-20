<template>
  <main>
    <section>
      <div>
        <h1 class="text-[48px] font-[700]">Page not found</h1>
        <p class="text-[#545454]">
          Duis dolor sit amet, consectetur adipiscing elitvestibulum in
          pharetra.
        </p>
        <UiButton class="bg_orange white font-medium" @click="$router.push('/')"
          >Bosh sahifafa qaytish</UiButton
        >
      </div>
      <div>
        <p class="text-[400px] font-[700]">404</p>
      </div>
    </section>
  </main>
</template>

<script setup>
definePageMeta({
  layout: false,
});
</script>

<style lang="scss" scoped></style>
