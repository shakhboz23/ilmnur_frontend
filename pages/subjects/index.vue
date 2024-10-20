<template>
  <main
    class="sidebar lessons_view bg-white md:p-8 p-4 pt-6 sm:rounded-[6px] overflow-hidden overflow-y-auto md:max-h-[calc(100vh_-_160px)] md:min-h-[calc(100vh_-_160px)] max-h-[calc(100vh_-_135px)] min-h-[calc(100vh_-_135px)]"
  >
    <section>
      <h1 class="font-semibold md:text-[28px] text-xl">Assalomu alaykum</h1>
      <p class="font-medium text-sm mt-1 _c66">Bugun nimani o‘rganmoqchisiz?</p>
      <div class="flex items-center justify-between">
        <h2 class="md:text-xl font-medium md:mt-[30px] mt-4">Fanlar</h2>
        <UiButton
        v-if="isLoading.user.data.current_role == 'admin'"
          @click="useSubject.modal.create = true"
          class="bg_orange font-semibold white !px-6"
          >Qo‘shish</UiButton
        >
      </div>
    </section>
    <section
      v-if="isLoading.isLoadingType('get')"
      class="grid xl:grid-cols-2 gap-5 mt-3 pb-20"
    >
      <UiFullLoading v-for="i in 6" class="!h-[168px]" />
    </section>
    <section v-else-if="useSubject.store.subjects?.length">
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
              v-for="i in useSubject.store.subjects"
              class="relative flex items-end justify-between lesson_shadow bg-white p-5 r_10 h-[160px]"
            >
              <a-dropdown
                class="absolute top-4 right-4"
                :trigger="['click']"
                placement="bottomRight"
              >
                <img
                  class="cursor-pointer min-w-[20px]"
                  src="@/assets/svg/icon/threedot_black.svg"
                  alt=""
                />
                <template #overlay>
                  <a-menu>
                    <a-menu-item @click="editSubject(i)">Edit</a-menu-item>
                    <a-menu-item @click="deleteSubject(i.id)"
                      >Delete</a-menu-item
                    >
                  </a-menu>
                </template>
              </a-dropdown>
              <div>
                <h1 class="font-medium md:text-2xl text-xl">{{ i.title }}</h1>
                <div class="flex items-center _c92 mt-[6px] mb-5 gap-4">
                  <div class="flex gap-[10px]">
                    <img src="@/assets/svg/lessons/start_btn.svg" alt="" />
                    {{ i.coursesCount }}
                  </div>
                  <div class="flex items-center gap-[10px]">
                    <img src="@/assets/svg/lessons/clock.svg" alt="" />
                    <p class="flex gap-1">
                      <span
                        v-for="i in formatSecondsToHours(
                          i.totalDuration
                        )"
                        >{{ i }}</span
                      >
                    </p>
                  </div>
                </div>
                <button
                  @click="
                    $router.push(
                      `/subjects/${i.title}/courses?class=${useSubject.store.class}`
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
                    <p class="black_24 text-xl">{{i.finished_step}}</p>
                    <hr class="border-[#929292]" />
                    <p class="text-sm px-2 mt-1 _c92">
                      {{ i.coursesCount }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </swiper-slide>
      </swiper>
    </section>
    <section class="full_flex h-full py-20 flex-col space-y-4" v-else>
      <img draggable="false" class="h-20" src="@/assets/svg/icon/not_found.svg" alt="" />
      <p>Hech qanday fan topilmadi</p>
    </section>

    <!-- create -->
    <a-modal
      class="max-w-[440px]"
      v-model:open="useSubject.modal.create"
      centered
    >
      <div class="flex justify-between items-center w-full">
        <h1 class="font-semibold text-2xl">
          <span v-if="useSubject.modal.edit">Fanni tahrirlash</span
          ><span v-else>Fan qo'shish</span>
        </h1>
      </div>
      <form
        class="space-y-5 _c45 mt-[30px]"
        @submit.prevent="useSubject.createSubjects"
      >
        <div class="space-y-2">
          <label for="name">Fan nomi</label>
          <input
            v-model="useSubject.create.title"
            class="rounded-[12px]"
            id="name"
            type="text"
          />
        </div>
        <UiButton
          type="submit"
          v-loading="isLoading.isLoadingType('updateSubject')"
          class="!h-12 w-full bg_orange !mt-[54px] font-semibold white"
        >
          Yaratish
          <Loading />
        </UiButton>
      </form>
    </a-modal>

    <!-- delete -->
    <a-modal width="200" v-model:open="useSubject.modal.delete" centered>
      <div class="space-y-6">
        <!-- <h1 class="font-semibold text-lg">Hisobni o'chirish</h1> -->
        <h1 class="font-semibold text-lg">Fanni o'chirish</h1>
        <p>Haqiqatdan ham bu fanni o'chirmoqchimisiz?</p>
      </div>
      <div class="flex items-center gap-5 mt-5">
        <UiButton
          @click="useSubject.modal.delete = false"
          class="border border-[#BBBBBB] !h-10"
          >Yo'q</UiButton
        >
        <UiButton
          @click="useSubject.deleteSubject"
          v-loading="isLoading.isLoadingType('deleteSubject')"
          class="bg_orange white !h-10"
          >Ha</UiButton
        >
      </div>
    </a-modal>
  </main>
</template>

<script setup>
definePageMeta({
  layout: "search",
});
import { useFormatter } from "@/composables";
import { useLoadingStore, useSubjectStore } from "@/store";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const modules = [Pagination];

const { formatSecondsToHours } = useFormatter();

const useSubject = useSubjectStore();
const isLoading = useLoadingStore();
const router = useRouter();

await useAsyncData(() => {
  return useSubject.getSubjects();
});

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

function changeSlide() {
  setTimeout(() => {
    // useLesson.store.class = +document.querySelector(".swiper-slide-visible")
    //   ?.id;
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

function deleteSubject(id) {
  useSubject.store.subject_id = id;
  useSubject.modal.delete = true;
}

function editSubject(subject) {
  for (let i in useSubject.create) {
    useSubject.create[i] = subject[i];
  }
  useSubject.store.subject_id = subject.id;
  useSubject.modal.edit = true;
  useSubject.modal.create = true;
}

// watch(
//   () => useLesson.store.class,
//   () => {
//     const swiper = document.querySelector(".swiper-pagination-clickable");
//     if (swiper && swiper.children.length >= useLesson.store.class) {
//       const secondChild = swiper.children[useLesson.store.class - 1];
//       if (secondChild) {
//         secondChild.click();
//       }
//     }

//     router.push(`/subjects?class=${useLesson.store.class}`);
//   }
// );

watch(
  () => useSubject.modal.create,
  () => {
    console.log(useSubject.modal.create);
    if (!useSubject.modal.create) {
      useSubject.modal.edit = false;
      useSubject.clearData();
    }
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
