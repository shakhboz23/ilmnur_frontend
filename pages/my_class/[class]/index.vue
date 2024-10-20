<template>
    <main
      class="bg-white pb-10 rounded-lg overflow-hidden overflow-y-auto max-h-[calc(100vh_-_160px)]"
    >
      <nav
        class="flex items-center justify-between p-5 border-b border-[#EDEDED]"
      >
        <button class="font-semibold text-xl">O'quvchilar</button>
        <UiButton
          @click="store.create = true"
          class="bg_orange font-semibold white !px-6"
          >Qo‘shish</UiButton
        >
      </nav>
      <section>
        <table class="table-auto mt-5 w-full">
          <thead>
            <tr class="text-sm b_cff3 whitespace-nowrap">
              <th class="text-start font-medium _c66 px-5 py-3">№</th>
              <th class="text-start font-medium _c66 px-5 py-3">Ism</th>
              <th class="text-start font-medium _c66 px-5 py-3">Reyting</th>
              <th class="text-start font-medium _c66 px-5 py-3">Telefon raqam</th>
              <th class="text-start font-medium _c66 px-5 py-3">Status</th>
              <th class="text-start font-medium _c66 px-5 py-3">Yaratilgan</th>
              <th class="_c66 px-5 py-3"></th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="border-b border-[#EDEDED]"
              v-for="i in useUser.store.getall"
            >
              <td class="py-6 px-5 text-sm">#{{ i.id }}</td>
              <td class="py-6 px-5">
                <div class="flex items-center h-full gap-2">
                  <UiAvatarEmpty class="max-h-[32px] max-w-[32px]" />
                  {{ i.full_name }}
                </div>
              </td>
              <td class="py-6 px-5">12</td>
              <td class="py-6 px-5">{{ i.phone }}</td>
              <td class="py-6 px-5">
                <UiStatus :status="1" />
              </td>
              <td class="py-6 px-5">{{ formateCreatedAt(i.createdAt) }}</td>
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
  
      <!-- create -->
      <a-modal class="max-w-[440px]" v-model:open="store.create" centered>
        <div class="flex justify-between items-center w-full">
          <h1 class="font-semibold text-2xl">O'quvchi qo'shish</h1>
        </div>
        <form class="space-y-5 _c45 mt-[30px]" @submit.prevent="useUser.register">
          <div class="space-y-2">
            <label for="name">Ism familiya</label>
            <input
              v-model="useUser.create.full_name"
              class="rounded-[12px]"
              id="name"
              type="text"
            />
          </div>
          <div class="space-y-2">
            <label for="phone">Telefon raqami</label>
            <input
              v-model="useUser.create.phone"
              class="rounded-[12px]"
              id="phone"
              type="text"
            />
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
  
  import { useUserStore, useLoadingStore } from "@/store";
  import { useFormatter } from "#imports";
  
  const { formateCreatedAt } = useFormatter();
  const useUser = useUserStore();
  const isLoading = useLoadingStore();
  const store = reactive({
    create: false,
  });
  
  useUser.store.getall = [];
  useUser.create.role = ["student"];
  
  useUser.getAll();
  </script>
  
  <style lang="scss" scoped></style>
  