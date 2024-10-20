<template>
  <main class="welcome select-none overflow-y-auto max-h-[100vh] overflow-hidden">
    <div
      class="bg-black bg-opacity-30 min-h-screen min-w-[100vw] full_flex flex-col"
    >
      <nav>
        <swiper
          @mousewheel="mouseSlider"
          @slider-move="changeSlide"
          :watchSlidesProgress="true"
          :slidesPerView="1"
          :spaceBetween="80"
          :pagination="{ clickable: true }"
          class="mySwiper max-w-[124px]"
          :modules="modules"
        >
          <swiper-slide
            class="max-w-[124px] duration-1000"
            :id="index"
            v-for="(i, index) in isLoading.user.data?.role"
            @click="store.currentRole = index + 1"
            :class="store.currentRole == index + 1 ? '' : 'scale-75'"
          >
            <li
              :class="store.currentRole == index + 1 ? '' : 'opacity-30'"
              class="text-center space-y-4"
            >
              <div>
                <img
                  v-if="i.image"
                  class="h-[124px] min-h-[124px] min-w-[124px] rounded-full object-cover"
                  :src="i.image"
                  alt=""
                />
                <ui-avatar-empty
                  v-else
                  class="h-[124px] min-h-[124px] min-w-[124px] rounded-full object-cover"
                />
              </div>
              <div v-for="role in roles">
                <p v-if="role.role == i.role">{{ role.uz }}</p>
              </div>
            </li>
          </swiper-slide>
        </swiper>
      </nav>
      <section class="w-[400px] px-4">
        <h1
          v-if="!isLoading.user.current_role_data?.hashed_password"
          class="text-center white font-semibold text-xl"
        >
          {{ store.repeat ? "Parolni kiriting" : "Parolni takrorlang" }}
        </h1>
        <h1 v-else class="text-center white font-semibold text-xl">
          Parolni kiriting
        </h1>
        <p
          class="full_flex text-center my-3 h-10 text-2xl font-semibold tracking-widest"
        >
          {{ useUser.store.password }}
          <span class="h-9 bg-white w-[2px] block animate-pulse"></span>
        </p>
        <div class="grid grid-cols-3">
          <p
            @click="handleClick(i)"
            v-for="i in 9"
            class="full_flex cursor-pointer white h-20 rounded-full font-semibold text-[28px] border border-[#4343431]"
          >
            {{ i }}
          </p>
          <p
            @click="handleClick('C')"
            class="full_flex cursor-pointer white h-20 rounded-full font-semibold text-[28px] border border-[#4343431]"
          >
            C
          </p>
          <p
            @click="handleClick('0')"
            class="full_flex cursor-pointer white h-20 rounded-full font-semibold text-[28px] border border-[#4343431]"
          >
            0
          </p>
          <p
            @click="handleClick('delete')"
            class="full_flex cursor-pointer white h-20 rounded-full font-semibold text-[28px] border border-[#4343431]"
          >
            <img src="@/assets/svg/icon/delete_x.svg" alt="" />
          </p>
        </div>
        <UiButton
          @click="handleUnlock"
          class="bg_orange white w-full !h-10 my-4"
          >Unlock</UiButton
        >
        <!-- <router-link to="/" class="text-center white block"
          >Parolni unutdingizmi?</router-link
        > -->
      </section>
    </div>
  </main>
</template>

<script setup>
// definePageMeta({
//   layout: false,
// });
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import { roles } from "@/constants";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useLoadingStore, useUserStore } from "@/store";

const modules = [Pagination];
const isLoading = useLoadingStore();
const useUser = useUserStore();

const store = reactive({
  currentRole: 1,
  mouse_wheel: 0,
  repeat: false,
});

if (!isLoading.user.current_role_data?.hashed_password) {
  store.repeat = true;
}

function handleUnlock() {
  if (!store.repeat) {
    useUser.check();
  } else {
    store.repeat = false;
    useUser.store.password = "";
  }
}

function handleClick(number) {
  if (number == "C") {
    useUser.store.password = "";
    return;
  } else if (number == "delete") {
    useUser.store.password = useUser.store.password.slice(
      0,
      useUser.store.password.length - 1
    );
    return;
  }
  useUser.store.password += number;
  if (useUser.store.password.length > 4) {
    useUser.store.password = useUser.store.password.slice(0, 4);
  }
}

function changeSlide() {
  setTimeout(() => {
    store.currentRole =
      +document.querySelector(".swiper-slide-visible")?.id + 1;
    console.log(isLoading.user.data?.role[store.currentRole -1].hashed_password, 'sdjskdjskdj');
    if (!isLoading.user.data?.role[store.currentRole -1].hashed_password) {
      store.repeat = true;
    } else {
      store.repeat = false;
    }
  }, 200);
}

function mouseSlider(e) {
  // e.preventDefault(); // Prevent default scroll behavior
  // Determine scroll direction
  if (e.deltaX > 0) {
    store.mouse_wheel += 1;
    if (
      store.mouse_wheel % 10 == 0 &&
      store.currentRole < isLoading.user.data?.role?.length
    ) {
      console.log("Scrolling to the right");
      store.currentRole += 1;
      store.mouse_wheel = 0;
    }
  } else if (e.deltaX < 0) {
    store.mouse_wheel += 1;
    if (store.mouse_wheel % 10 == 0 && store.currentRole > 1) {
      store.currentRole -= 1;
      store.mouse_wheel = 0;
      console.log("Scrolling to the left");
    }
  }
}

watch(
  () => store.currentRole,
  () => {
    isLoading.user.current_role_data =
      isLoading.user.data?.role[store.currentRole - 1];
    isLoading.user.data.current_role = isLoading.user.current_role_data?.role;
    const swiper = document.querySelector(".swiper-pagination-clickable");
    if (swiper && swiper.children.length >= store.currentRole) {
      const secondChild = swiper.children[store.currentRole - 1];
      if (secondChild) {
        secondChild.click();
      }
    }
  }
);

onMounted(() => {
  const swiper = document.querySelector(".swiper-pagination-clickable");
  const secondChild = swiper.children[isLoading.user.current_role_step - 1];
  store.currentRole = isLoading.user.current_role_step;
  if (secondChild) {
    secondChild.click();
  }
});

watch(
  () => isLoading.user.current_role_step,
  () => {
    // for (let i = 0; i < isLoading.user.current_role_step; i++) {
    const swiper = document.querySelector(".swiper-pagination-clickable");
    //   if (swiper && swiper.children.length >= store.currentRole) {
    const secondChild = swiper.children[isLoading.user.current_role_step - 1];
    if (secondChild) {
      secondChild.click();
    }
    //   }
    // }
  }
);

watch(
  () => useUser.store.password,
  () => {
    if (String(useUser.store.password).length == 4) {
      if (!store.repeat) {
        useUser.check();
      }
    }
  }
);
</script>

<style lang="scss" scoped>
.welcome {
  background: url("https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg")
    no-repeat;
  background-size: cover;
  min-height: 100vh;
}
</style>
~/constants
