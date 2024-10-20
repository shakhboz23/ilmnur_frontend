<template>
  <main
    class="bg-white pb-10 rounded-lg overflow-hidden overflow-y-auto max-h-[calc(100vh_-_160px)]"
  >
    <nav
      class="flex items-center justify-between p-5 border-b border-[#EDEDED]"
    >
      <!-- <button @click="store.create = true" class="bg-black h-10 text-white p-3 rounded-full">
                  Uslubiy birlashma rahbari qo'shish
              </button> -->
      <button class="font-semibold text-xl">Foydalanuvchilar</button>
      <UiButton
        @click="useUser.store.createModal = true"
        class="bg_orange font-semibold white !px-6"
        >Qo‘shish</UiButton
      >
    </nav>
    <div class="px-5 users_tabs">
      <a-tabs class="" v-model:activeKey="store.activeTab">
        <a-tab-pane :key="index" v-for="(i, index) in roles">
          <template #tab>
            <div class="flex gap-1 font-medium">
              <p>{{ i.uz }}</p>
              <p class="text-[#FF852E] font-semibold">
                {{
                  useUser.store.total_count.user_data
                    ? useUser.store.total_count.user_data[i.role]
                    : ""
                }}
              </p>
            </div>
          </template>
        </a-tab-pane>
      </a-tabs>
    </div>
    <section>
      <swiper
        @slider-move="changeSlide"
        :watchSlidesProgress="true"
        :slidesPerView="1"
        :spaceBetween="30"
        :pagination="{ clickable: true }"
        class="mySwiper"
        :modules="modules"
      >
        <swiper-slide :id="i" v-for="(i, index) in 4">
          <section class="overflow-x-auto">
            <table class="table-auto mt-5 w-full">
              <thead>
                <tr class="text-sm b_cff3 whitespace-nowrap">
                  <th class="text-start font-medium _c66 px-5 py-3">№</th>
                  <th class="text-start font-medium _c66 px-5 py-3">Ism</th>
                  <th class="text-start font-medium _c66 px-5 py-3">Fan</th>
                  <th class="text-start font-medium _c66 px-5 py-3">
                    O‘quvchilar soni
                  </th>
                  <th class="text-start font-medium _c66 px-5 py-3">
                    Telefon raqam
                  </th>
                  <th class="text-start font-medium _c66 px-5 py-3">
                    Sinflari
                  </th>
                  <th class="text-start font-medium _c66 px-5 py-3">Status</th>
                  <th class="text-start font-medium _c66 px-5 py-3">
                    Yaratilgan
                  </th>
                  <th class="_c66 px-5 py-3"></th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="border-b border-[#EDEDED]"
                  v-for="(i, index) in useUser.store.getall"
                  :class="i.user_status == 'pending' ? 'bg-[#F6F6F6]' : ''"
                >
                  <td class="py-6 px-5 text-sm relative">
                    <p
                      v-if="i.user_status == 'pending'"
                      class="b_cf23 w-[10px] h-[10px] absolute top-2 left-2 rounded-full"
                    ></p>
                    #{{ i.user.id }}
                  </td>
                  <td class="py-6 px-5">
                    <div class="flex items-center h-full gap-2">
                      <UiAvatarEmpty class="max-h-[32px] max-w-[32px]" />
                      {{ i.full_name }}
                    </div>
                  </td>
                  <td class="py-6 px-5">
                    <p v-for="subject in i.subjects">{{ subject }}</p>
                  </td>
                  <td class="py-6 px-5">12</td>
                  <td class="py-6 px-5">{{ i.user.phone }}</td>
                  <td class="py-6 px-5">
                    <div v-for="i in i.class">{{ i[0] }} - {{ i[1] }}</div>
                  </td>
                  <td class="py-6 px-5">
                    <UiStatus :status="1" />
                  </td>
                  <td class="py-6 px-5">
                    {{ formateCreatedAt(i.createdAt) }}
                  </td>
                  <td
                    class="py-6 px-5 flex items-center whitespace-nowrap sticky right-0 bg-[#F6F6F6]"
                    v-if="
                      isLoading.user.data.current_role == 'admin' &&
                      i.user_status == 'pending'
                    "
                  >
                    <ui-button
                      @click="useUser.updateStatus(i.id, index)"
                      class="!h-[44px] orange border border-[#FF852E] !px-4"
                      ><span class="lg:block hidden">Qabul qilish</span>
                      <img
                        class="lg:hidden block min-w-[20px]"
                        src="@/assets/svg/icon/accept.svg"
                        alt=""
                    /></ui-button>
                    <ui-button
                      @click="useUser.deleteUser(i.id, index)"
                      class="!h-[44px] _c24 !px-4"
                      ><span class="lg:block hidden">Rad etish</span>
                      <img
                        class="lg:hidden block min-w-[20px]"
                        src="@/assets/svg/icon/refuse.svg"
                        alt=""
                    /></ui-button>
                  </td>
                  <td class="py-6 px-5">
                    <a-dropdown :trigger="['click']">
                      <img
                        class="cursor-pointer"
                        src="@/assets/svg/icon/threedot_black.svg"
                        alt=""
                      />
                      <template #overlay>
                        <a-menu>
                          <a-menu-item>Edit</a-menu-item>
                          <a-menu-item @click="useUser.deleteUser(i.id, index)"
                            >Delete</a-menu-item
                          >
                        </a-menu>
                      </template>
                    </a-dropdown>
                  </td>
                </tr>
              </tbody>
            </table>
            <div
              v-if="isLoading.isLoadingType('getAllUsers')"
              class="w-full space-y-1 mt-1"
            >
              <UiFullLoading v-for="_ in 10" :l_height="'60px'" />
            </div>
          </section>
        </swiper-slide>
      </swiper>
    </section>

    <!-- create user modal-->
    <UiUserCreateModal />
  </main>
</template>

<script setup>
definePageMeta({
  layout: "search",
});

import { useUserStore, useLoadingStore } from "@/store";
import { useFormatter } from "#imports";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import { roles } from "@/constants/roles.js";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const modules = [Pagination];
const { formateCreatedAt } = useFormatter();
const useUser = useUserStore();
const isLoading = useLoadingStore();
const router = useRouter();
const store = reactive({
  create: false,
  mouse_wheel: 0,
  activeTab: 1,
});
useUser.store.getall = [];
useUser.create.role = ["super_admin"];
useUser.countUsers();

onBeforeMount(() => {
  useUser.getAll();
});

function add_class() {
  const data = [];
  data[0] = useUser.create.class[useUser.create.class.length - 1][0] + 1;
  data[1] = sinf_type[data[0] - 1];
  useUser.create.class.push(data);
}

function checkUserSubjects(subject) {
  if (
    useUser.create.subjects.indexOf(
      isLoading.user.data?.subjects[subject - 1]
    ) !=
    subject - 1
  ) {
    useUser.create.subjects.splice(subject - 1, 1);
    store.subject_step -= 1;
  }
}

function changeSlide() {
  setTimeout(() => {
    store.activeTab = +document.querySelector(".swiper-slide-visible")?.id;
  }, 200);
}

function mouseSlider(e) {
  // e.preventDefault(); // Prevent default scroll behavior
  // Determine scroll direction
  if (e.deltaX > 0) {
    store.mouse_wheel += 1;
    if (store.mouse_wheel % 10 == 0) {
      store.activeTab += 1;
      store.mouse_wheel = 0;
    }
    console.log("Scrolling to the right");
  } else if (e.deltaX < 0) {
    store.mouse_wheel += 1;
    if (store.mouse_wheel % 10 == 0) {
      store.activeTab -= 1;
      store.mouse_wheel = 0;
    }
    console.log("Scrolling to the left");
  }
}

watch(
  () => store.activeTab,
  () => {
    useUser.create.role = roles[store.activeTab].role;
    useUser.getAll();
    const swiper = document.querySelector(".swiper-pagination-clickable");
    if (swiper && swiper.children.length >= store.activeTab) {
      const secondChild = swiper.children[store.activeTab - 1];
      if (secondChild) {
        secondChild.click();
      }
    }

    router.push(`/users?role=${store.activeTab}`);
  }
);
</script>

<style lang="scss" scoped></style>
