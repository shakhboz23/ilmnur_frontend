<template>
  <main class="news bg-white sm:rounded-lg py-[10px] px-5 md:max-w-[60%]">
    <nav>
      <h1 class="mb-1">Yangiliklar</h1>
      <a-tabs v-model:activeKey="store.activeTab">
        <!-- <a-tab-pane :key="0">
          <template #tab>
            <div class="flex gap-1 font-medium">
              <p>Xabarnomalar</p>
              <p class="text-[#FF852E] font-semibold">+8</p>
            </div>
          </template>
        </a-tab-pane> -->
        <a-tab-pane :key="0">
          <template #tab>
            <div class="flex gap-1 font-medium">
              <p>Dastur yangiliklari</p>
              <p class="text-[#FF852E] font-semibold">
                +{{ useNews.store.getall?.length }}
              </p>
            </div>
          </template>
        </a-tab-pane>
        <a-tab-pane :key="1" v-if="isLoading.user.data.current_role == 'admin'">
          <template #tab>
            <div class="flex gap-1 font-medium">
              <p>Yangilik qo'shish</p>
              <p class="text-[#FF852E] font-semibold">+8</p>
            </div>
          </template>
        </a-tab-pane>
      </a-tabs>
    </nav>
    <section>
      <swiper
        @mousewheel="mouseSlider"
        @slider-move="changeSlide"
        :watchSlidesProgress="true"
        :slidesPerView="1"
        :spaceBetween="30"
        :pagination="{ clickable: true }"
        class="mySwiper"
        :modules="modules"
      >
        <swiper-slide :id="index" v-for="(i, index) in 1">
          <section
            class="space-y-5 overflow-hidden overflow-y-auto max-h-[calc(100vh_-_270px)]"
          >
            <div
              v-for="i in useNews.store.getall"
              class="space-y-5 pb-10 border-b border-[#EDEDED] -mx-5 px-5"
            >
              <h1 class="font-medium !-mb-1">
                {{ i.title }}
              </h1>
              <div class="flex items-center gap-5 text-[#656565]">
                <div class="flex items-center gap-2">
                  <img src="@/assets/svg/news/min.svg" alt="" />
                  <p>04.05.2024</p>
                </div>
                <div class="flex items-center gap-2">
                  <img src="@/assets/svg/news/show.svg" alt="" />
                  <p>80</p>
                </div>
              </div>
              <div>
                <img
                  :lazy="true"
                  v-if="i.source"
                  class="w-full object-cover rounded-[4px]"
                  :src="i.source"
                  alt=""
                />
              </div>
              <pre>{{ i.description }}</pre>
            </div>
          </section>
        </swiper-slide>
        <swiper-slide
          :id="2"
          v-if="isLoading.user.data.current_role == 'admin'"
        >
          <section
            class="space-y-5 overflow-hidden overflow-y-auto max-h-[calc(100vh_-_270px)]"
          >
            <form
              @submit.prevent="handleSubmit"
              class="space-y-5 pb-10 border-b border-[#EDEDED] -mx-5 px-5"
            >
              <input
                v-model="useNews.create.title"
                class="mt-1"
                placeholder="Sarlavha"
                e="text"
                required
              />
              <div class="flex items-center gap-5 text-[#656565]">
                <div class="flex items-center gap-2">
                  <img src="@/assets/svg/news/min.svg" alt="" />
                  <p>0 min</p>
                </div>
                <div class="flex items-center gap-2">
                  <img src="@/assets/svg/news/show.svg" alt="" />
                  <p>0</p>
                </div>
              </div>
              <div
                v-if="!useContent.store.file_url"
                v-loading="isLoading.isLoadingType('uploading')"
              >
                <label
                  for="upload_file"
                  class="rounded-lg border block border-dashed border-[#EDEDED] h-[290px] full_flex flex-col gap-10 mt-3"
                >
                  <p
                    class="full_flex rounded-full !h-10 px-7 bg_orange font-semibold white"
                  >
                    Video yuklash
                    <Loading />
                  </p>
                  <p class="w-[220px] text-center leading-6">
                    Minimal o'lcham - 808 x 632 piksel. GIF tasvirlari
                    jonlantirilmaydi.
                  </p>
                </label>
              </div>
              <div v-else>
                <img
                  class="rounded-lg border block border-dashed border-[#EDEDED] h-[290px] full_flex flex-col gap-10 mt-3"
                  :src="useContent.store.file_url"
                  alt=""
                />
              </div>
              <textarea
                v-model="useNews.create.description"
                placeholder="Description"
                class="!h-[120px]"
                required
              ></textarea>
              <div>
                <UiButton class="bg_orange white font-semibold">Post</UiButton>
              </div>
            </form>
          </section>
        </swiper-slide>
      </swiper>
    </section>
    <input
      @change="handleFileUpload"
      class="input_file"
      type="file"
      id="upload_file"
    />
  </main>
</template>

<script setup>
definePageMeta({
  layout: "search",
});

import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import { useNotification } from "@/composables";
import { useContentStore, useLoadingStore, useNewsStore } from "~/store";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const modules = [Pagination];
const useContent = useContentStore();
const useNews = useNewsStore();
const isLoading = useLoadingStore();
const { showMessage } = useNotification();
useNews.getAll();
const store = reactive({
  activeTab: 0,
  mouse_wheel: 0,
});

function handleSubmit() {
  useNews.create.source = useContent.store.file_url || "";
  useNews.createData();
}

function changeSlide() {
  setTimeout(() => {
    store.activeTab = +document.querySelector(".swiper-slide-visible")?.id;
  }, 200);
}

function mouseSlider(e) {
  // e.preventDefault(); // Prevent default scroll behavior
  let t;
  if (isLoading.user.data.current_role == "admin") {
    t = 1;
  } else {
    t = 0;
  }
  if (e.deltaX > 0) {
    store.mouse_wheel += 1;
    if (store.mouse_wheel % 10 == 0 && store.activeTab < t) {
      store.activeTab += 1;
      store.mouse_wheel = 0;
    }
  } else if (e.deltaX < 0) {
    store.mouse_wheel += 1;
    if (store.mouse_wheel % 10 == 0 && store.activeTab > 0) {
      store.activeTab -= 1;
      store.mouse_wheel = 0;
    }
    console.log("Scrolling to the left");
  }
}

function handleFileUpload(e) {
  const file = e.target.files[0];
  useContent.file.file = file;
  useContent.file.file_type = "image";
  useContent.file.is_active = true;
  useContent.uploadImage();
}

watch(
  () => store.activeTab,
  () => {
    const swiper = document.querySelector(".swiper-pagination-clickable");
    // if (store.activeTab) {
    const secondChild = swiper.children[store.activeTab];
    if (secondChild) {
      secondChild.click();
    }
    // }

    // router.push(`/lessons?class=${useLesson.store.class}`)
  }
);
</script>

<style lang="scss" scoped></style>
