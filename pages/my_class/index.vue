<template>
  <main class="flex gap-4">
    <container
      :class="store.is_open ? 'xl:block hidden' : ''"
      class="bg-white sm:rounded-lg overflow-hidden overflow-y-auto md:max-h-[calc(100vh_-_160px)] md:min-h-[calc(100vh_-_160px)] max-h-[calc(100vh_-_75px)] min-h-[calc(100vh_-_75px)] xl:min-w-[40%] min-w-full"
    >
      <div class="p-5">
        <nav class="flex items-end gap-4">
          <h1 class="font-semibold text-xl">Sinflaringiz</h1>
          <p class="_cb3 font-medium">2023 / 2024</p>
        </nav>
        <hr class="border_ced !border-0 !border-b mt-3 mb-6" />
        <div
          class="space-y-5 overflow-hidden overflow-y-auto md:max-h-[calc(100vh_-_270px)] max-h-[calc(100vh_-_220px)] md:pb-0 pb-5 pr-5 -mr-5"
        >
          <div
            v-for="i in isLoading.user.current_role_data.class"
            @click="getClassStudent(i)"
            class="_c24 b_cf9 r_8 p-4 leading-6 space-y-[10px] h-[90px] cursor-pointer relative"
          >
            <span
              v-if="isLoading.user.current_role_data.user_status == 'pending'"
              class="b_cf23 w-[10px] h-[10px] absolute top-2 right-2 rounded-full"
            ></span>
            <p class="!mt-[0px]">
              Sinf: <span class="font-semibold">{{ i[0] }}-{{ i[1] }}</span>
            </p>
            <p>O‘quvchilar <span class="font-semibold hidden">0 ta</span></p>
          </div>
        </div>
      </div>
    </container>
    <container
      :class="!store.is_open ? 'xl:block hidden' : ''"
      class="bg-white sm:rounded-lg overflow-hidden overflow-y-auto md:max-h-[calc(100vh_-_160px)] md:min-h-[calc(100vh_-_160px)] max-h-[calc(100vh_-_75px)] min-h-[calc(100vh_-_75px)] xl:min-w-[58%] min-w-full md:max-w-[calc(100vw_-_325px)]"
    >
      <div class="p-5">
        <nav class="flex items-end gap-4">
          <div
            @click="store.is_open = false"
            class="flex items-center gap-4 cursor-pointer"
          >
            <img
              class="xl:hidden block"
              src="@/assets/svg/icon/back_arrow.svg"
              alt=""
            />
            <p>
              Sinf:
              <span class="font-semibold"
                >{{ useGroup.store.class_name[0] }}-{{
                  useGroup.store.class_name[1]
                }}</span
              >
            </p>
          </div>
        </nav>
        <hr class="border_ced !border-0 !border-b mt-3 mb-4" />
        <div
          class="space-y-5 overflow-hidden overflow-y-auto md:max-h-[calc(100vh_-_255px)] max-h-[calc(100vh_-_210px)] pr-5 -mr-5"
        >
          <p class="font-medium !-mb-2">
            O‘quvchilar:
            <span class="font-semibold"
              >{{ useGroup.store.my_classes?.length }} ta</span
            >
          </p>
          <section class="overflow-x-auto">
            <table class="table-auto mt-5 w-full">
              <thead>
                <tr class="text-sm b_cff3 whitespace-nowrap">
                  <th class="text-start font-medium _c66 px-5 py-3">№</th>
                  <th class="text-start font-medium _c66 px-5 py-3">Ism</th>
                  <th class="text-start font-medium _c66 px-5 py-3">
                    Telefon raqam
                  </th>
                  <th class="text-start font-medium _c66 px-5 py-3">
                    Yaratilgan
                  </th>
                  <th class="_c66 px-5 py-3 min-w-[70px]"></th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="border-b border-[#EDEDED]"
                  v-for="i in useGroup.store.my_classes"
                >
                  <td class="py-6 px-5 text-sm">#{{ i.id }}</td>
                  <td class="py-6 px-5">
                    <div class="flex items-center h-full gap-2">
                      <UiAvatarEmpty class="max-h-[32px] max-w-[32px]" />
                      {{ i.full_name }}
                    </div>
                  </td>
                  <td class="py-6 px-5">{{ i.user?.phone }}</td>
                  <td class="py-6 px-5">12.02.2023</td>
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
                          <a-menu-item>Delete</a-menu-item>
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
        </div>
      </div>
    </container>
  </main>
</template>

<script setup>
definePageMeta({
  layout: "search",
});

import { useLoadingStore, useGroupStore } from "~/store";

const isLoading = useLoadingStore();
const useGroup = useGroupStore();

const store = reactive({
  is_open: false,
});

function getClassStudent(data) {
  useGroup.store.class_name = data;
  store.is_open = true;
  useGroup.getTeacherClass();
}

onBeforeMount(() => {
  useGroup.getTeacherClass();
});
</script>

<style lang="scss" scoped></style>
