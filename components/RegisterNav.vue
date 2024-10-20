<template>
  <div>
    <nav
      class="fixed top-0 z-50 w-full"
      :class="
        $router.currentRoute.value.name == 'register'
          ? 'bg-white'
          : 'bg-[#F5F5F7]'
      "
    >
      <ul
        class="flex items-center justify-between border-b border-[#E3E3E9] h-[100px] md:mx-[100px] mx-4"
      >
        <li></li>
        <li>
          <!-- <router-link to="/"><img src="/logo.svg" alt="" /></router-link> -->
          <Logo />
        </li>
        <li class="flex items-center -mr-1">
          <img src="@/assets/svg/navbar/uz.svg" alt="uz" />
          <p class="ml-[10px] mr-1">UZ</p>
          <img src="@/assets/svg/navbar/arrow.svg" alt="" />
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
