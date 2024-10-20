<template>
  <main
    class="bg-white md:p-8 p-4 pt-6 sm:rounded-[6px] overflow-hidden overflow-y-auto md:max-h-[calc(100vh_-_160px)] md:min-h-[calc(100vh_-_160px)] max-h-[calc(100vh_-_135px)] min-h-[calc(100vh_-_135px)]"
  >
    <section>
      <nav class="flex justify-between items-center">
        <div class="space-y-1">
          <h1 class="text-xl font-semibold">Farzandlaringiz</h1>
          <p class="text-sm _c54 md:w-[340px]">
            Bu farzandlaringiz akkauntlari roʻyxati. Agar ismga bossangiz,
            farzandingizning natijalarini koʻra olasiz.
          </p>
        </div>
        <UiButton
          @click="useUser.store.addchildmodal = true"
          class="md:block hidden bg_orange white font-semibold"
          >Qo'shish</UiButton
        >
      </nav>
      <hr class="md:-mx-8 -mx-4 mt-8 border_ced !border-0 !border-b" />
    </section>
    <div
      v-if="isLoading.isLoadingType('getChildren')"
      class="w-full space-y-1 mt-1"
    >
      <UiFullLoading v-for="_ in 2" :l_height="'60px'" />
    </div>
    <section
      v-else-if="!useUser.store.children?.length"
      class="full_flex flex-col gap-4 min-h-[40vh] md:w-[400px] text-[#323232] font-medium text-xl mx-auto text-center"
    >
      Sizda hali farzandlaringiz ro‘yhatdan o‘tmagan. Ularni qo'shish tugmasi
      orqali qo'shishingiz mumkin
      <UiButton
        @click="useUser.store.addchildmodal = true"
        class="sm:hidden block bg_orange white !h-12"
        >Qo'shish</UiButton
      >
    </section>
    <section v-else class="overflow-x-auto">
      <table class="table-auto mt-5 w-full">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="border-b border-[#EDEDED] relative whitespace-nowrap cursor-pointer hover:bg-gray-100"
            v-for="(i, index) in useUser.store.children"
            @click="$router.push(`/reyting?id=${i.id}`)"
          >
            <td class="py-6 px-5 text-sm relative">#{{ i.id }}</td>
            <td class="py-6 px-5">
              <div class="flex items-center h-full gap-2 font-semibold">
                <UiAvatarEmpty class="max-h-[32px] max-w-[32px]" />
                {{ i.full_name }}
              </div>
            </td>
            <td class="py-6 px-5">
              {{ i.class[0][0] }}-{{ i.class[0][1] }} sinf
            </td>
            <td class="py-6 px-5">
              <p class="font-medium">{{ i.school_number }} - maktab</p>
              <p class="_c55">{{ i.district }}</p>
            </td>
            <td class="py-6 px-5 orange font-medium">Natijalarni ko‘rish</td>
            <td class="py-6 px-5">23.23.2323</td>
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
    </section>

    <!-- create -->
    <a-modal
      class="!max-w-[440px] !w-full !max-h-[100vh]"
      v-model:open="useUser.store.addchildmodal"
      centered
    >
      <div class="flex justify-between items-center w-full">
        <h1 class="font-semibold text-2xl">Farzand qo'shish</h1>
      </div>
      <form @submit.prevent="useUser.addChild" class="space-y-5 _c45 mt-[30px]">
        <div class="space-y-2">
          <div class="space-y-[10px]">
            <h1>Viloyatni tanlang</h1>
            <a-select
              v-model:value="useUser.create.region"
              @change="handleChange"
              class="w-full"
              show-search
              :options="
                regions.map((pro) => ({
                  value: pro.id,
                  label: pro.name_uz,
                }))
              "
              required
            >
              <template #suffixIcon>
                <p class="h-4 w-[1px]"></p>
                <img src="@/assets/svg/icon/select_arrow6c.svg" alt="" />
              </template>
            </a-select>
          </div>
        </div>
        <div class="space-y-[10px]">
          <h1>Tumanni tanlang</h1>
          <a-select
            v-model:value="useUser.create.district"
            class="w-full"
            show-search
            :options="store.districts.map((pro) => ({ value: pro.name_uz }))"
            required
          >
            <template #suffixIcon>
              <p class="h-4 w-[1px]"></p>
              <img src="@/assets/svg/icon/select_arrow6c.svg" alt="" />
            </template>
          </a-select>
        </div>
        <div class="space-y-[10px]">
          <h1>Maktabni tanlang</h1>
          <a-select
            v-model:value="useUser.create.school_number"
            class="w-full"
            :options="sinf.map((pro) => ({ value: pro }))"
            required
          >
            <template #suffixIcon>
              <p class="h-4 w-[1px]"></p>
              <img src="@/assets/svg/icon/select_arrow6c.svg" alt="" />
            </template>
          </a-select>
        </div>
        <div class="space-y-[10px]">
          <label>Sinfni tanlang</label>
          <div class="flex justify-between">
            <div class="flex items-center gap-2">
              <a-select
                v-model:value="useUser.create.class[0][0]"
                class="min-w-[145px] sr_12"
                :options="sinf.map((pro) => ({ value: pro }))"
                required
              >
                <template #suffixIcon>
                  <p class="h-4 w-[1px] bg-[#999999]"></p>
                  <img
                    class="ml-2"
                    src="@/assets/svg/icon/select_arrow6c.svg"
                    alt=""
                  />
                </template>
              </a-select>
              <p class="h-[1px] w-4 bg-[#CCCCCC]"></p>
              <a-select
                v-model:value="useUser.create.class[0][1]"
                class="min-w-[115px] sr_12"
                :options="sinf_type.map((pro) => ({ value: pro }))"
                required
              >
                <template #suffixIcon>
                  <p class="h-4 w-[1px] bg-[#999999]"></p>
                  <img
                    class="ml-2"
                    src="@/assets/svg/icon/select_arrow6c.svg"
                    alt=""
                  />
                </template>
              </a-select>
            </div>
          </div>
        </div>
        <div class="space-y-[10px]">
          <h1>Telefon raqamni kiriting</h1>
          <a-input
            @input="usePhoneMask"
            v-model:value="useUser.create.phone"
            type="tel"
            class="border !py-0 full_flex rounded-[12px] font-[400]"
            placeholder="Telefon raqamni kiriting"
            required
          >
            <template #prefix>+998</template>
          </a-input>
        </div>
        <UiButton
          type="submit"
          class="!h-12 w-full bg_orange !mt-[54px] font-semibold white"
        >
          Qidirish
        </UiButton>
        <UiButton
          type="button"
          @click="useUser.store.addchildmodal = false"
          class="!h-12 w-full border font-semibold"
        >
          Bekor qilish
        </UiButton>
      </form>
    </a-modal>
  </main>
</template>

<script setup>
definePageMeta({
  layout: "search",
});
import { regions } from "@/assets/json/regions.js";
import { district } from "@/assets/json/districts.js";
import { useLoadingStore, useUserStore } from "@/store";
import { useValidate } from "@/composables";

const isLoading = useLoadingStore();
const useUser = useUserStore();
const sinf = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const sinf_type = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
const provinceData = ["Matematika", "Biologiya", "Kimyo"];
const { phoneMask } = useValidate();
useUser.getChildren();

const store = reactive({
  create: false,
  classes: [["1", "A"]],
  subject_step: 1,
  districts: [],
});

function handleChange(data) {
  store.districts = [];
  useUser.create.district = "";
  for (let i of district) {
    if (i.region_id == data) {
      store.districts.push(i);
    }
  }
}

function usePhoneMask() {
  useUser.create.phone = phoneMask(useUser.create.phone);
}
</script>

<style lang="scss" scoped></style>
