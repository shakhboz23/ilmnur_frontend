<template>
  <main
    class="sidebar lessons_view bg-white md:p-8 p-4 pt-6 sm:rounded-[6px] overflow-hidden overflow-y-auto md:max-h-[calc(100vh_-_160px)] md:min-h-[calc(100vh_-_160px)] max-h-[calc(100vh_-_135px)] min-h-[calc(100vh_-_135px)]"
  >
    <section>
      <h1 class="font-semibold md:text-[28px] text-xl">Assalomu alaykum</h1>
      <p class="font-medium text-sm mt-1 _c66">Bugun nimani o‘rganmoqchisiz?</p>
      <h2 class="md:text-xl font-medium md:mt-[30px] mt-4">Darsliklar</h2>
      <div>
        <a-select
          v-model:value="useLesson.store.class"
          class="md:hidden block mt-4 w-[140px] sr_12"
          :options="
            classes.map((pro, index) => ({ value: index + 1, label: pro }))
          "
          required
        >
          <template #suffixIcon>
            <img class="ml-2" src="@/assets/svg/icon/arrow.svg" alt="" />
          </template>
        </a-select>
        <!-- <div class="tabs overflow-x-auto">
          <a-tabs
            class="hidden md:block min-w-fit"
            v-model:activeKey="useLesson.store.class"
          >
            <a-tab-pane
              v-for="(i, index) in classes"
              class="tab1"
              :key="index + 1"
              :tab="i"
            ></a-tab-pane>
          </a-tabs>
        </div> -->
      </div>
    </section>
    <section
      v-if="isLoading.isLoadingType('getLessons')"
      class="grid xl:grid-cols-2 gap-5 mt-3 pb-20"
    >
      <UiFullLoading v-for="i in 6" class="!h-[168px]" />
    </section>
    <section v-else-if="useLesson.store.subjects?.length && !store.errors">
      <swiper
        @mousewheel="mouseSlider"
        @slider-move="changeSlide"
        :watchSlidesProgress="true"
        :slidesPerView="1"
        :spaceBetween="30"
        :pagination="{ clickable: true }"
        class="mySwiper md:mt-[18px] mt-2"
        :modules="modules"
      >
        <swiper-slide :id="i" v-for="(i, index) in 11">
          <section class="grid xl:grid-cols-2 gap-5 mt-3 pb-20">
            <div
              v-for="i in useLesson.store.subjects"
              class="flex items-end justify-between lesson_shadow bg-white p-5 r_10 h-[160px]"
            >
              <div>
                <h1 class="font-medium md:text-2xl text-xl">{{ i.title }}</h1>
                <div class="flex items-center _c92 mt-[6px] mb-5 gap-4">
                  <div class="flex gap-[10px]">
                    <img src="@/assets/svg/lessons/start_btn.svg" alt="" />
                    {{ i.lessonsCount[index] }}
                  </div>
                  <div class="flex items-center gap-[10px]">
                    <img src="@/assets/svg/lessons/clock.svg" alt="" />
                    <p class="flex gap-1">
                      <span
                        v-for="i in formatSecondsToHours(
                          i.totalDuration[index]
                        )"
                        >{{ i }}</span
                      >
                    </p>
                  </div>
                </div>
                <button
                  @click="
                    $router.push(
                      `/lessons/${i.title}?class=${useLesson.store.class}`
                    )
                  "
                  class="bg_orange h-10 px-5 r_10 white"
                >
                  Keyingi
                </button>
              </div>
              <div class="full_flex relative">
                <a-progress
                  class="!h-[92px] !w-[92px]"
                  type="circle"
                  :percent="store.reyting"
                />
                <div class="_c92 full_flex absolute flex-col min-w-fit">
                  <h1 class="text-[10px] _c92">Barchasi</h1>
                  <div class="text-center">
                    <p class="black_24 text-xl">2</p>
                    <hr class="border-[#929292]" />
                    <p class="text-sm px-2 mt-1 _c92">
                      {{ i.lessonsCount[index] }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </swiper-slide>
      </swiper>
    </section>
    <section v-else>
      <p>{{useLesson.store.errors}}</p>
    </section>
    <section class="full_flex h-full py-20 flex-col space-y-4" v-else>
      <img class="h-20" src="@/assets/svg/icon/not_found.svg" alt="" />
      <p>Hech qanday dars topilmadi</p>
    </section>
  </main>
</template>

<script setup>
definePageMeta({
  layout: "search",
});
import { useLessonStore } from "@/store";
import { useFormatter } from "@/composables";
import { useVideoLessonStore, useLoadingStore } from "@/store";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


const modules = [Pagination];

const { formatSecondsToHours } = useFormatter();

const useLesson = useLessonStore();
const isLoading = useLoadingStore();
const router = useRouter();
// useLesson.getSubjects()
// await useAsyncData(() => {
//   console.log("HIIIIIIIIIIIIIIIIIIII")
//   return useLesson.getSubjects();
// });

await useAsyncData('getSubjects', () => useLesson.getSubjects());

const classes = [
  "1-sinf",
  "2-sinf",
  "3-sinf",
  "4-sinf",
  "5-sinf",
  "6-sinf",
  "7-sinf",
  "8-sinf",
  "9-sinf",
  "10-sinf",
  "11-sinf",
];

const store = reactive({
  reyting: 50,
  mouse_wheel: 0,
});

if (isNaN(router.currentRoute.value.query.class)) {
  useLesson.store.class = 1;
  router.push(`/lessons?class=1`);
} else {
  useLesson.store.class = +router.currentRoute.value.query.class;
}

function changeSlide() {
  setTimeout(() => {
    useLesson.store.class = +document.querySelector(".swiper-slide-visible")
      ?.id;
  }, 200);
}

function mouseSlider(e) {
  // e.preventDefault(); // Prevent default scroll behavior
  // Determine scroll direction
  if (e.deltaX > 0) {
    store.mouse_wheel += 1;
    if (store.mouse_wheel % 10 == 0) {
      useLesson.store.class += 1;
      store.mouse_wheel = 0;
    }
    console.log("Scrolling to the right");
  } else if (e.deltaX < 0) {
    store.mouse_wheel += 1;
    if (store.mouse_wheel % 10 == 0) {
      useLesson.store.class -= 1;
      store.mouse_wheel = 0;
    }
    console.log("Scrolling to the left");
  }
}

watch(
  () => useLesson.store.class,
  () => {
    const swiper = document.querySelector(".swiper-pagination-clickable");
    if (swiper && swiper.children.length >= useLesson.store.class) {
      const secondChild = swiper.children[useLesson.store.class - 1];
      if (secondChild) {
        secondChild.click();
      }
    }

    router.push(`/lessons?class=${useLesson.store.class}`);
  }
);

onMounted(() => {
  const swiper = document.querySelector(".swiper-pagination-clickable");
  const secondChild = swiper?.children[+router.currentRoute.value.query.class];
  if (secondChild) {
    secondChild.click();
  }
});
</script>

<style lang="scss" scoped></style>
