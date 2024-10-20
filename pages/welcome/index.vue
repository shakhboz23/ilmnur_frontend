<template>
  <main class="welcome">
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
            class="max-w-[124px]"
            :id="i"
            v-for="(i, index) in isLoading.user.data.role"
            @click="store.currentRole = index + 1"
          >
            <li :class="store.currentRole == index + 1 ? '':'opacity-30'" class="text-center space-y-4">
              <div>
                <img
                  v-if="i.image"
                  class="h-[124px] min-w-[124px] rounded-full object-cover"
                  :src="i.image"
                  alt=""
                />
                <ui-avatar-empty
                  v-else
                  class="h-[124px] min-w-[124px] rounded-full object-cover"
                />
              </div>
              <p>{{ i.role }}</p>
            </li>
          </swiper-slide>
        </swiper>
      </nav>
      <section class="w-[400px]">
        <input
          class="bg-transparent text-center border-0"
          type="number"
          placeholder="Enter your PIN"
        />
        <div class="grid grid-cols-3">
          <p
            v-for="i in 9"
            class="full_flex white h-20 rounded-full font-semibold text-[28px] border border-[#4343431]"
          >
            {{ i }}
          </p>
        </div>
        <UiButton class="bg_orange white w-full !h-10">Unlock</UiButton>
        <router-link to="/">Parolni unutdingizmi?</router-link>
      </section>
    </div>
  </main>
</template>

<script setup>
definePageMeta({
  layout: false,
});
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useLoadingStore } from "@/store";

const modules = [Pagination];
const isLoading = useLoadingStore();

const store = reactive({
  currentRole: 1,
  mouse_wheel: 0,
});

function changeSlide() {
  setTimeout(() => {
    store.currentRole = +document.querySelector(".swiper-slide-visible")?.id;
  }, 200);
}

function mouseSlider(e) {
  // e.preventDefault(); // Prevent default scroll behavior
  // Determine scroll direction
  if (e.deltaX > 0) {
    store.mouse_wheel += 1;
    if (
      store.mouse_wheel % 10 == 0 &&
      store.currentRole < isLoading.user.data.role?.length
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
    const swiper = document.querySelector(".swiper-pagination-clickable");
    if (swiper && swiper.children.length >= store.currentRole) {
      const secondChild = swiper.children[store.currentRole - 1];
      if (secondChild) {
        secondChild.click();
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
