<template>
  <div class="max-w-[2000px] mx-auto">
    <nav
      class="fixed md:block hidden top-0 w-full z-50 bg-[#ffffff64] backdrop-blur-lg max-w-[2000px]"
    >
      <div class="flex items-center justify-between h-[100px] px-[100px]">
        <ul class="flex items-center xl:gap-[100px] gap-[50px]">
          <li>
            <!-- <router-link to="/"><img src="/logo.svg" alt="" /></router-link> -->
            <Logo />
          </li>
          <li>
            <ul class="lg:flex hidden items-center gap-10">
              <li>Kurslar</li>
              <li>Yordam</li>
              <li>Aloqa</li>
              <li>Narxlar</li>
            </ul>
          </li>
        </ul>
        <ul class="flex items-center gap-6 pl-4">
          <li class="flex items-center -mr-1">
            <img src="@/assets/svg/navbar/uz.svg" alt="uz" />
            <p class="ml-[10px] mr-1">UZ</p>
            <img src="@/assets/svg/navbar/arrow.svg" alt="" />
          </li>
          <li>
            <UiButton
              @click="$router.push('/register')"
              class="border border-[#BBBBBB] black_24"
              >Hisob yaratish</UiButton
            >
          </li>
          <li>
            <UiButton @click="$router.push('/login')" class="bg_orange white"
              >Kirish</UiButton
            >
          </li>
        </ul>
      </div>
    </nav>
    <nav
      class="fixed block md:hidden top-0 w-full z-50 bg-[#ffffff] backdrop-blur-lg"
    >
      <div class="flex items-center justify-between h-[100px] px-4 border">
        <img src="@/assets/svg/home/menu.svg" alt="" />
        <ul class="flex items-center gap-9">
          <li>
            <router-link to="/"><img src="/logo.svg" alt="" /></router-link>
          </li>
          <li>
            <UiButton
              @click="$router.push('/login')"
              class="border border-[#BBBBBB] black_24"
              >Kirish</UiButton
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
