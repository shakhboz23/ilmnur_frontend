<template>
  <main
    class="lessons_view bg-white p-5 rounded-[6px] overflow-hidden overflow-y-auto max-h-[calc(100vh_-_160px)]"
  >
    <section>
      <div
        class="flex items-center justify-between pb-6 border_cedbottom -mx-5 px-5"
      >
        <h1>Sinflar</h1>
        <UiButton
          @click="store.create = true"
          class="bg_orange font-semibold white !px-6"
          >Qo‘shish</UiButton
        >
      </div>
      <!-- <div
        v-if="isLoading.user.data.current_role == 'director'"
        class="border_cedbottom -mx-5 px-5 mb-[10px]"
      >
        <a-tabs v-model:activeKey="useGroup.store.class">
          <a-tab-pane
            v-for="(i, index) in classes"
            class="tab1"
            :key="index + 1"
            :tab="i.label"
          ></a-tab-pane>
        </a-tabs>
      </div> -->
    </section>
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
        <swiper-slide
          :id="i"
          v-for="(i, index) in isLoading.user.data.current_role ==
          'leader_teacher'
            ? 1
            : 11"
        >
          <section class="grid lg:grid-cols-2 gap-5 mt-3">
            <div
              @click="(e) => getStudentRoute(e, i.id)"
              v-for="(i, l) in useGroup.store.getall"
              :class="i.status ? 'bg-white' : 'bg-[#F6F6F6]'"
              class="flex items-start justify-between class_shadow p-6 r_10 h-[160px] relative cursor-pointer"
            >
              <div class="space-y-6">
                <h1 class="font-bold text-2xl">
                  {{ i.name }}
                </h1>
                <div>
                  <ul class="space-y-1">
                    <li class="text-sm _c55 font-medium">O‘quvchilar soni:</li>
                    <li class="font-semibold">{{i.user_count}} ta</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </swiper-slide>
      </swiper>
    </section>

    <!-- create -->
    <a-modal class="max-w-[440px]" v-model:open="store.create" centered>
      <div class="flex justify-between items-center w-full">
        <h1 class="font-semibold text-2xl">Sinf qo‘shish</h1>
      </div>
      <form
        class="space-y-5 _c45 mt-[30px]"
        @submit.prevent="useGroup.createData"
      >
        <div class="space-y-2">
          <label class="block _c43" for="class_name">Guruh nomi</label>
          <input v-model="useGroup.create.name" type="text" placeholder="Guruh nomi"
        </div>
        <UiButton
          @click="store.create = false"
          type="submit"
          class="!h-12 w-full bg_orange !mt-[54px] font-semibold white"
        >
          Yaratish
          <Loading />
        </UiButton>
      </form>
    </a-modal>
  </main>
</template>

<script setup>
definePageMeta({
  layout: "search",
});
import {
  useUserStore,
  useGroupStore,
  useLoadingStore,
  useChatStore,
} from "@/store";
import { useFormatter } from "@/composables";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const modules = [Pagination];

const useGroup = useGroupStore();
const useUser = useUserStore();
const isLoading = useLoadingStore();
const useChat = useChatStore();
const provinceData = ["Matematika", "Biologiya", "Kimyo"];
const sinf = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const sinf_type = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
const classes = ref([
  { value: 1, label: "1-sinf" },
  { value: 2, label: "2-sinf" },
  { value: 3, label: "3-sinf" },
  { value: 4, label: "4-sinf" },
  { value: 5, label: "5-sinf" },
  { value: 6, label: "6-sinf" },
  { value: 7, label: "7-sinf" },
  { value: 8, label: "8-sinf" },
  { value: 9, label: "9-sinf" },
  { value: 10, label: "10-sinf" },
  { value: 11, label: "11-sinf" },
]);

useGroup.create.subject = ref(provinceData[0]);
useGroup.create.role = "leader_teacher";
useUser.create.role = "leader_teacher";
useGroup.create.type = "leader_teacher";
useUser.store.getall = [];
const router = useRouter();

if (isLoading.user.data.current_role == "leader_teacher") {
  useGroup.getAll();
} else {
  useGroup.getAll();
}

const store = reactive({
  mouse_wheel: 0,
  create: false,
});

if (isNaN(router.currentRoute.value.query.class)) {
  useGroup.store.class = 1;
  router.push(`/classes?class=1`);
} else {
  useGroup.store.class = +router.currentRoute.value.query.class;
}

const filterOption = (input, option) => {
  try {
    console.log(option);
    return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
  } catch (error) {}
};

function changeSlide() {
  setTimeout(() => {
    useGroup.store.class = +document.querySelector(".swiper-slide-visible")?.id;
  }, 200);
}

function mouseSlider(e) {
  // e.preventDefault(); // Prevent default scroll behavior
  // Determine scroll direction
  if (e.deltaX > 0) {
    store.mouse_wheel += 1;
    if (store.mouse_wheel % 10 == 0) {
      useGroup.store.class += 1;
      store.mouse_wheel = 0;
    }
    console.log("Scrolling to the right");
  } else if (e.deltaX < 0) {
    store.mouse_wheel += 1;
    if (store.mouse_wheel % 10 == 0) {
      useGroup.store.class -= 1;
      store.mouse_wheel = 0;
    }
    console.log("Scrolling to the left");
  }
}

function getStudentRoute(e, id) {
  if (e.target.id == "reject_user" || e.target.id == "accept_user") {
    return;
  }
  router.push(`/classes/${id}`);
}

onBeforeMount(() => {
  useUser.getAll();
});
</script>

<style lang="scss"></style>
