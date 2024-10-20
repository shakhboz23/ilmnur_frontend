<template>
  <main
    class="bg-white pb-10 rounded-lg overflow-hidden overflow-y-auto max-h-[calc(100vh_-_160px)]"
  >
    <nav
      class="flex items-center justify-between p-5 border-b border-[#EDEDED]"
    >
      <button class="font-semibold text-xl">O‘quvchilar</button>
      <UiButton
        v-if="isLoading.user.data.current_role == 'teacher'"
        @click="useUser.store.createModal = true"
        class="bg_orange font-semibold white !px-6"
        >Qo‘shish</UiButton
      >
    </nav>
    <section class="overflow-x-auto">
      <table class="table-auto mt-5 w-full">
        <thead>
          <tr class="text-sm b_cff3 whitespace-nowrap">
            <th class="text-start font-medium _c66 px-5 py-3">№</th>
            <th class="text-start font-medium _c66 px-5 py-3">Ism</th>
            <th class="text-start font-medium _c66 px-5 py-3">Email</th>
            <th class="text-start font-medium _c66 px-5 py-3">Status</th>
            <th class="text-start font-medium _c66 px-5 py-3">Yaratilgan</th>
            <th
              v-if="isLoading.user.data.current_role == 'teacher'"
              class="px-5 py-3"
            ></th>
          </tr>
        </thead>
        <tbody> 
          <tr
            class="border-b border-[#EDEDED] relative"
            :class="i.user_status == 'pending' ? 'bg-[#F6F6F6]' : ''"
            v-for="(i, index) in useUser.store.getall"
          >
            <td class="py-6 px-5 text-sm relative">
              <p
                v-if="i.user_status == 'pending'"
                class="b_cf23 w-[10px] h-[10px] absolute top-2 left-2 rounded-full"
              ></p>
              #{{ i.id }}
            </td>
            <td class="py-6 px-5">
              <div class="flex items-center h-full gap-2">
                <UiAvatarEmpty class="max-h-[32px] max-w-[32px]" />
                {{ i.user.name }}
                {{ i.user.surname }}
              </div>
            </td>
            <td class="py-6 px-5">{{ i.user?.email }}</td>
            <td
              v-if="isLoading.user.data.current_role != 'leader_teacher'"
              class="py-6 px-5"
            >
              <UiStatus :status="1" />
            </td>
            <td class="py-6 px-5">{{ formateCreatedAt(i.createdAt) }}</td>
            <td
              class="py-6 px-5 flex items-center whitespace-nowrap sticky right-0 bg-[#F6F6F6]"
              v-if="
                isLoading.user.data.current_role == 'leader_teacher' &&
                i.user_status == 'pending'
              "
            >
              <ui-button
                @click="useUser.updateStatus(i.id, index)"
                class="!md:h-[44px] !h-[36px] md:text-[16px] text-sm orange border border-[#FF852E] !px-4"
                ><span class="lg:block hidden">Qabul qilish</span>
                <img
                  class="lg:hidden block min-w-[20px]"
                  src="@/assets/svg/icon/accept.svg"
                  alt=""
              /></ui-button>
              <ui-button
                @click="useUser.deleteUser(i.id, index)"
                class="!md:h-[44px] !h-[36px] md:text-[16px] text-sm _c24 !px-4"
                ><span class="lg:block hidden">Rad etish</span>
                <img
                  class="lg:hidden block min-w-[20px]"
                  src="@/assets/svg/icon/refuse.svg"
                  alt=""
              /></ui-button>
            </td>
            <td
              v-if="isLoading.user.data.current_role == 'teacher'"
              class="py-6 px-5"
            >
              <a-dropdown :trigger="['click']">
                <img
                  class="cursor-pointer"
                  src="@/assets/svg/icon/threedot_black.svg"
                  alt=""
                />
                <template #overlay>
                  <a-menu>
                    <!-- <a-menu-item>Edit</a-menu-item> -->
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

    <!-- user create modal -->
    <UiUserCreateModal />
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

useUser.store.getall = [];
useUser.create.role = "student";

onBeforeMount(() => {
  useUser.getAll();
});
</script>

<style lang="scss" scoped></style>
