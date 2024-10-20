<template>
  <main
    class="bg-white pb-10 rounded-lg overflow-hidden overflow-y-auto max-h-[calc(100vh_-_160px)]"
  >
    <nav
      class="flex items-center justify-between p-5 border-b border-[#EDEDED]"
    >
      <button class="font-semibold text-xl">To'lovlar</button>
      <UiButton
        v-if="isLoading.user.data.current_role == 'methodological'"
        @click="usePayment.store.createModal = true"
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
            <th class="text-start font-medium _c66 px-5 py-3">Kurs nomi</th>
            <!-- <th class="text-start font-medium _c66 px-5 py-3">
              O‘quvchilar soni
            </th> -->
            <!-- <th class="text-start font-medium _c66 px-5 py-3">Telefon raqam</th> -->
            <!-- <th class="text-start font-medium _c66 px-5 py-3">Sinflari</th> -->
            <th
              v-if="isLoading.user.data.current_role != 'methodological'"
              class="text-start font-medium _c66 px-5 py-3"
            >
              Status
            </th>
            <th class="text-start font-medium _c66 px-5 py-3">Yaratilgan</th>
            <th class="text-start font-medium _c66 px-5 py-3">To'lov kuni</th>
            <th
              v-if="isLoading.user.data.current_role == 'methodological'"
              class="px-5 py-3"
            ></th>
            <th class="min-w-[60px] px-5 py-3"></th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="border-b border-[#EDEDED] relative"
            :class="i.user_status == 'pending' ? 'bg-[#F6F6F6]' : ''"
            v-for="(i, index) in usePayment.store.getall"
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
                {{ i.role.user.id }}
                {{ i.role.user.name }}
                {{ i.role.user.surname }}
              </div>
            </td>
            <!-- <td class="py-6 px-5">
              <p v-for="subject in i.subjects">{{ subject }}</p>
            </td>
            <td class="py-6 px-5">12</td> -->
            <td class="py-6 px-5">Pending</td>
            <!-- <td class="py-6 px-5">
              <div v-for="i in i.class">{{ i[0] }} - {{ i[1] }}</div>
            </td> -->
            <td
              v-if="isLoading.user.data.current_role != 'methodological'"
              class="py-6 px-5"
            >
              <UiStatus :status="1" />
            </td>
            <td class="py-6 px-5">
              {{ formateCreatedAt(i.updatedAt) }}
            </td>
            <td class="py-6 px-5">
              {{ getLastDates(i.updatedAt) }}
            </td>
            <td
              class="py-6 px-5 flex items-center whitespace-nowrap sticky right-0 bg-[#F6F6F6]"
              v-if="
                isLoading.user.data.current_role == 'methodological' &&
                i.user_status == 'pending'
              "
            >
              <ui-button
                @click="usePayment.updateStatus(i.id, index)"
                class="!md:h-[44px] !h-[36px] md:text-[16px] text-sm orange border border-[#FF852E] !px-4"
                ><span class="lg:block hidden">Qabul qilish</span>
                <img
                  class="lg:hidden block min-w-[20px]"
                  src="@/assets/svg/icon/accept.svg"
                  alt=""
              /></ui-button>
              <ui-button
                @click="usePayment.deleteUser(i.id, index)"
                class="!md:h-[44px] !h-[36px] md:text-[16px] text-sm _c24 !px-4"
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
                  class="cursor-pointer min-w-[20px]"
                  src="@/assets/svg/icon/threedot_black.svg"
                  alt=""
                />
                <template #overlay>
                  <a-menu>
                    <!-- <a-menu-item @click="editTeacher(index, i.id)"
                        >Edit</a-menu-item
                      > -->
                    <a-menu-item @click="usePayment.deleteUser(i.id, index)"
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

import { usePaymentStore, useLoadingStore } from "@/store";
import { useFormatter } from "#imports";

const { formateCreatedAt } = useFormatter();
const usePayment = usePaymentStore();
const isLoading = useLoadingStore();

usePayment.store.getall = [];

onBeforeMount(() => {
  usePayment.getAll();
});

function getLastDates(date) {
  const date1 = new Date("2024-07-27");
  const date2 = new Date("2024-08-27");
  const monthDifference = date2 - date1;
  const daysInMonth = Math.floor(monthDifference / (1000 * 60 * 60 * 24));
  const startDate = new Date(date);
  const currentDate = new Date();
  const timeDifference = currentDate - startDate;
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  return daysDifference + " / " + daysInMonth;
}

function editTeacher(index, id) {
  usePayment.store.user_id = id;
  usePayment.store.createModal = true;
  usePayment.store.is_update = true;
  usePayment.create = Object.assign({}, usePayment.store.getall[index]);
  usePayment.create.phone = usePayment.store.getall[index].user?.phone;
  const subjects = usePayment.store.getall[index].subjects;
  const classes = usePayment.store.getall[index].class;
  usePayment.create.subjects = Object.assign(
    [],
    subjects.length ? subjects : [null]
  );
  usePayment.create.class = Object.assign(
    [],
    classes.length ? JSON.parse(JSON.stringify(classes)) : [[null, null]]
  );
  usePayment.create.role = "teacher";
  usePayment.store.subject_step = Object.keys(usePayment.create.subjects)?.length;
}
</script>

<style lang="scss" scoped></style>
