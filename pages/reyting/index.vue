<template>
  <main
    class="bg-white sm:rounded-lg overflow-hidden overflow-y-auto md:max-h-[calc(100vh_-_160px)] md:min-h-[calc(100vh_-_160px)] max-h-[calc(100vh_-_135px)] min-h-[calc(100vh_-_135px)] xl:max-w-[60%] p-4 pt-0"
  >
    <section class="full_flex flex-col space-y-2 pt-4">
      <img src="@/assets/svg/reyting/reyting.svg" alt="" />
      <h1 class="text-[#323232] text-lg text-center font-semibold">
        O'rganing. Tajriba orttiring. Raqobatlashing
      </h1>
      <p class="text-[#555555] text-sm text-center md:w-[50%] w-[90%]">
        Darslar uchun imkon qadar ko'proq tajriba ball to'plash orqali haftalik
        reytingda yangi o'rinni egallashga harakat qiling
      </p>
    </section>
    <section
      class="sticky top-0 z-[500] bg-[#ffffff42] backdrop-blur-md sidebar"
    >
      <div
        class="flex gap-2 md:mt-[40px] mt-1 text-[#555555] pt-5 overflow-hidden overflow-x-auto tabs"
      >
        <button
          @click="useReyting.store.subject = 0"
          class="bg-[#F5F5F5] rounded-full px-3 h-10"
          :class="
            useReyting.store.subject == 0
              ? 'bg_orange white'
              : 'bg-[#F5F5F5]'
          "
        >
          Barchasi
        </button>
        <button
          @click="useReyting.store.subject = i.id"
          v-for="i in useSubject.store.subjects"
          class="rounded-full px-3 h-10"
          :class="
            useReyting.store.subject == i.id
              ? 'bg_orange white'
              : 'bg-[#F5F5F5]'
          "
        >
          {{ i.title }}
        </button>
      </div>
      <ul
        class="flex overflow-hidden overflow-x-auto tabs gap-2 mt-5 mb-[30px]"
      >
        <li class="reyting_select rounded-md w-full">
          <a-select
            @change="handleRegion"
            class="!placeholder-[#555555] w-full"
            v-model:value="useReyting.store.course_id"
            :options="
              useReyting.store.courses.map((pro, index) => ({
                value: index,
                label: pro.courses.name,
              }))
            "
            placeholder="Kursingizni tanlang"
            required
          >
            <template #suffixIcon>
              <img src="@/assets/svg/reyting/select_arrow.svg" alt="" />
            </template>
          </a-select>
        </li>
        <!--         
        <li @click="clearFilter">
          <button class="bg-[#f5f5f5] h-10 rounded-md px-4">Tozalash</button>
        </li> -->
      </ul>
      <div class="bg-white">
        <a-tabs class="-mb-4 max-w-fit" v-model:activeKey="store.activeTab">
          <a-tab-pane class="tab1" :key="1" tab="O'quvchi"></a-tab-pane>
          <a-tab-pane class="tab1" :key="2" tab="O'qituvchi"></a-tab-pane>
        </a-tabs>
      </div>
      <p class="bg-[#E1E1E1] h-[1px] w-full"></p>
    </section>
    <section class="md:px-[64px]">
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
        <swiper-slide :id="index" v-for="(i, index) in ['student', 'teacher']">
          <section class="pb-20">
            <table
              v-if="
                !isLoading.isLoadingType('getStudentReyting') ||
                !isLoading.isLoadingType('getTeacherReyting')
              "
              id="table"
              class="draggable-table mt-6 w-full text-start"
            >
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(i, index) in useReyting.store.reyting[i]"
                  :id="i.id"
                  class="font-medium text-[#1F1500]"
                >
                  <td class="min-w-[24px]">
                    <div class="full_flex">
                      <img
                        v-if="index == 0"
                        src="@/assets/svg/reyting/first.svg"
                        alt=""
                      />
                      <img
                        v-else-if="index == 1"
                        src="@/assets/svg/reyting/second.svg"
                        alt=""
                      />
                      <img
                        v-else-if="index == 2"
                        src="@/assets/svg/reyting/third.svg"
                        alt=""
                      />
                      <p v-else>{{ index + 1 }}</p>
                    </div>
                  </td>
                  <td class="flex items-center px-5 gap-4 py-[10px]">
                    <div>
                      <img
                        v-if="i.image"
                        class="min-h-[53px] min-w-[53px] max-h-[53px] max-w-[53px] rounded-full object-cover"
                        :src="i.image"
                        alt=""
                      />
                      <ui-avatar-empty
                        v-else
                        class="max-h-[53px] max-w-[53px] rounded-full object-cover"
                      />
                    </div>
                    <p class="truncate max-w-[25vw]">
                      {{ i.full_name }}
                    </p>
                  </td>
                  <td
                    class="py-[10px] text-center px-6 whitespace-nowrap text-[#757575]"
                  >
                    {{ i.totalReyting }} bal
                  </td>
                </tr>
              </tbody>
            </table>
            <div
              v-if="
                isLoading.isLoadingType('getStudentReyting') ||
                isLoading.isLoadingType('getTeacherReyting')
              "
              class="space-y-1"
            >
              <UiFullLoading v-for="i in 10" class="w-full" />
            </div>
          </section>
        </swiper-slide>
      </swiper>
    </section>
  </main>
</template>

<script setup>
definePageMeta({
  layout: "search",
});
import { regions } from "@/assets/json/regions.js";
import { district } from "@/assets/json/districts.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const modules = [Pagination];
import { useReytingStore, useSubjectStore, useLoadingStore } from "@/store";

const router = useRouter();
const useReyting = useReytingStore();
const useSubject = useSubjectStore();
const isLoading = useLoadingStore();

const store = reactive({
  activeTab: 1,
  mouse_wheel: 0,
});

function changeSlide() {
  setTimeout(() => {
    store.activeTab = +document.querySelector(".swiper-slide-visible")?.id + 1;
  }, 200);
}

function handleRegion(data) {
  store.districts = [];
  useReyting.store.filter.district = null;
  handleChangeReyting();
  for (let i of district) {
    if (i.region_id == data) {
      store.districts.push(i);
    }
  }
}

function mouseSlider(e) {
  // e.preventDefault(); // Prevent default scroll behavior
  // Determine scroll direction
  if (e.deltaX > 0) {
    store.mouse_wheel += 1;
    if (store.mouse_wheel % 10 == 0) {
      store.activeTab = 2;
      store.mouse_wheel = 0;
    }
  } else if (e.deltaX < 0) {
    store.mouse_wheel += 1;
    if (store.mouse_wheel % 10 == 0) {
      store.activeTab = 1;
      store.mouse_wheel = 0;
    }
    console.log("Scrolling to the left");
  }
}

function handleChangeReyting() {
  useReyting.getCourses();
}

function clearFilter() {
  for (let i in useReyting.store.filter) {
    useReyting.store.filter[i] = null;
  }
  useReyting.store.class_data = [];
  handleChangeReyting();
}

watch(
  () => store.activeTab,
  () => {
    const swiper = document.querySelector(".swiper-pagination-clickable");
    // if (store.activeTab) {
    const secondChild = swiper.children[store.activeTab - 1];
    if (secondChild) {
      secondChild.click();
    }
    // }

    // router.push(`/lessons?class=${useLesson.store.class}`)
  }
);

watch(
  () => useReyting.store.subject,
  () => {
    useReyting.getCourses();
  }
);

onBeforeMount(() => {
  useReyting.getCourses();
  useSubject.getSubjects();
});
</script>

<style lang="scss" scoped></style>
