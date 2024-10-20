<template>
  <main
    class="bg-white md:max-w-[528px] pb-20 sm:rounded-[8px] p-5 overflow-hidden overflow-y-auto md:max-h-[calc(100vh_-_160px)] max-h-[calc(100vh_-_135px)]"
  >
    <nav class="border-b border-[#EDEDED]">
      <h1 class="text-xl font-semibold pb-3">Sozlamalar</h1>
    </nav>
    <h1 class="font-semibold mt-5">Kurslaringiz</h1>
    <section class="space-y-10 whitespace-nowrap mt-2">
      <div
        class="flex items-center gap-6"
        v-for="i in usePayment.store.courses"
      >
        <div class="flex items-center gap-2 w-[30%]">
          <div
            class="bg-gray-300 w-9 h-9 rounded-md min-w-[36px] overflow-hidden"
          >
            <img
              v-if="i.courses.image"
              class="h-9 w-9 object-cover"
              :src="i.courses.image"
              alt=""
            />
          </div>
          <ul class="w-[80%] text-sm">
            <li class="truncate">
              {{ i.courses.name }}
            </li>
            <li class="truncate">{{ i.courses.type }}</li>
          </ul>
        </div>
        <ul class="md:w-[100%]">
          <li>
            <!-- 30/22/2024 -->
            {{ i.date }}
            <p class="inline-block ml-4 px-1 rounded-md bg-gray-300">
              {{ getLastDates(i.date) }}
            </p>
            <button
              class="inline-block px-3 py-1 ml-4 bg_orange white rounded-md"
            >
              Kursni ko'rish
            </button>
          </li>
        </ul>
      </div>
      <div class="flex items-center gap-16">
        <p>Profil rasmi</p>
        <label
          v-if="!useSettings.user.image"
          for="upload_image"
          class="md:w-[70%] md:ml-auto"
        >
          <!-- <img src="@/assets/svg/settings/profile.svg" alt="" /> -->
          <UiAvatarEmpty />
        </label>
        <label
          v-else
          for="upload_image"
          class="min-w-[72px] h-[72px] bg-[#F9F9F9] rounded-full full_flex"
        >
          <img
            class="rounded-full object-cover w-[72px] h-[72px]"
            :src="useSettings.user.image"
            alt=""
          />
        </label>
        <input
          @change="handleImage"
          type="file"
          id="upload_image"
          class="h-0 w-0 overflow-hidden p-0 border-none"
        />
      </div>
      <div>
        <h1 class="font-semibold w-[27%] text-end">Asosiy ma'lumotlar</h1>
        <div class="space-y-9 mt-5 md:w-[70%] md:ml-auto">
          <input
            @change="handleChange"
            v-model="useSettings.user.user.name"
            class="bg-[#F9F9F9]"
            type="text"
            placeholder="Ismingizni kiriting"
          />
          <input
            @change="handleChange"
            v-model="useSettings.user.user.surname"
            class="bg-[#F9F9F9]"
            type="text"
            placeholder="Familiyangizni kiriting"
          />
          <input
            v-model="useSettings.user.user.email"
            class="bg-[#F9F9F9]"
            type="text"
            placeholder="Enter your phone"
            disabled
          />
        </div>
      </div>
      <div>
        <h1 class="font-semibold w-[27%] text-end">Bildirishnomalar</h1>
        <div class="space-y-6 md:mt-3 mt-6 md:w-[70%] md:ml-auto">
          <div
            @click="handleChange('get_answered')"
            class="flex items-center gap-3 cursor-pointer"
          >
            <img
              v-if="useSettings.user.get_answered"
              src="@/assets/svg/settings/checkbox.svg"
              alt=""
            />
            <p v-else class="h-5 w-5 border border-[#C1C1C1] rounded-[4px]"></p>
            <p>Savolingizga javob berildi</p>
          </div>
          <div
            @click="handleChange('new_task')"
            class="flex items-center gap-3 cursor-pointer"
          >
            <img
              v-if="useSettings.user.new_task"
              src="@/assets/svg/settings/checkbox.svg"
              alt=""
            />
            <p v-else class="h-5 w-5 border border-[#C1C1C1] rounded-[4px]"></p>
            <p>Yangi vazifalar haqida bildirishnomalar</p>
          </div>
          <div
            @click="handleChange('chat_messages')"
            class="flex items-center gap-3 cursor-pointer"
          >
            <img
              v-if="useSettings.user.chat_messages"
              src="@/assets/svg/settings/checkbox.svg"
              alt=""
            />
            <p v-else class="h-5 w-5 border border-[#C1C1C1] rounded-[4px]"></p>
            <p>Chat xabarlari</p>
          </div>
        </div>
      </div>
      <!-- <div>
        <h1 class="font-semibold w-[27%] md:text-end">Xavfsizlik</h1>
        <div class="md:w-[70%] md:ml-auto">
          <UiButton
            @click="useSettings.store.change_password = true"
            class="bg-[#DDDDDD] text-[#242424] font-medium mt-6"
            >Parolni o‘zgartirish</UiButton
          >
        </div>
      </div> -->
      <div>
        <h1 class="font-semibold w-[27%] md:text-end">Dastur tili</h1>
        <div class="w-[70%] md:ml-auto">
          <button
            class="flex items-center pb-5 border-b border-[#EDEDED] mt-7 gap-9"
          >
            O‘zbek <img src="@/assets/svg/settings/lang_arrow.svg" alt="" />
          </button>
        </div>
      </div>
      <div>
        <button
          @click="useUser.store.deleteModal = true"
          class="text-[#FF5252] font-semibold mb-[10px]"
        >
          <!-- HISOBNI O‘CHIRISH -->
          HISOBDAN CHIQISH
        </button>
      </div>
    </section>

    <a-modal width="200" v-model:open="useSettings.store.handleImage" centered>
      <div class="space-y-6">
        <h1 class="font-semibold text-lg text-center">Profil rasmi</h1>
        <label
          for="upload_image"
          class="w-[144px] h-[144px] mx-auto bg-[#F9F9F9] rounded-full full_flex"
        >
          <img
            class="rounded-full object-cover w-[144px] h-[144px]"
            :src="store.imagePreview"
            alt=""
          />
        </label>
        <div class="space-y-2">
          <UiButton
            @click="useSettings.updateProfileImage"
            class="bg-[#FF852E] !h-9 white w-full"
            >Upload</UiButton
          >
          <UiButton
            @click="useSettings.store.handleImage = false"
            type="button"
            class="bg-[#F5F5F5] !h-9 _c07 w-full"
            >Discard</UiButton
          >
        </div>
      </div>
    </a-modal>

    <a-modal v-model:open="useSettings.store.change_password" centered>
      <form class="space-y-6">
        <h1 class="flex items-center justify-between font-semibold text-lg">
          Parolni o'zgartirish
          <img
            @click="useSettings.store.change_password = false"
            class="cursor-pointer"
            src="@/assets/svg/test/close.svg"
            alt=""
          />
        </h1>
        <div class="relative">
          <input
            :type="store.current ? 'text' : 'password'"
            v-model="useSettings.change_password.current_password"
            class="pr-[45px] bg-[#F9F9F9]"
            id="login"
            required
          />
          <div
            @click="store.current = !store.current"
            class="full_flex cursor-pointer h-[50px] w-[50px] absolute top-0 right-0"
          >
            <img src="@/assets/svg/settings/show.svg" alt="" />
          </div>
        </div>
        <div class="relativ">
          <input
            :type="store.new ? 'text' : 'password'"
            v-model="useSettings.change_password.new_password"
            class="pr-[45px] bg-[#F9F9F9]"
            id="login"
            required
          />
          <div
            @click="store.new = !store.new"
            class="full_flex cursor-pointer h-[50px] w-[50px] absolute top-0 right-0"
          >
            <img src="@/assets/svg/settings/show.svg" alt="" />
          </div>
        </div>
        <div class="space-y-2">
          <UiButton class="bg-[#FF852E] !h-9 white w-full">Keyingisi</UiButton>
          <UiButton
            @click="useSettings.store.change_password = false"
            type="button"
            class="bg-[#F5F5F5] !h-9 _c07 w-full"
            >Discard</UiButton
          >
        </div>
      </form>
    </a-modal>

    <a-modal width="200" v-model:open="useUser.store.deleteModal" centered>
      <div class="space-y-6">
        <!-- <h1 class="font-semibold text-lg">Hisobni o'chirish</h1> -->
        <h1 class="font-semibold text-lg">Hisobdan chiqish</h1>
        <p>Haqiqatdan ham hisobingizdan chiqishni xohlaysizmi?</p>
      </div>
      <div class="flex items-center gap-5 mt-5">
        <UiButton
          @click="useUser.store.deleteModal = false"
          class="border border-[#BBBBBB] !h-10"
          >Yo'q</UiButton
        >
        <UiButton
          @click="handleDeleteAccount"
          v-loading="isLoading.isLoadingType('deleteUser')"
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
import { regions } from "@/assets/json/regions.js";
import { district } from "@/assets/json/districts.js";
import {
  useSettingsStore,
  useUserStore,
  useLoadingStore,
  usePaymentStore,
} from "~/store";

const sinf = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const sinf_type = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
const provinceData = ["Matematika", "Biologiya", "Kimyo"];
const useSettings = useSettingsStore();
const usePayment = usePaymentStore();
const useUser = useUserStore();
const isLoading = useLoadingStore();

const store = reactive({
  current: false,
  new: false,
  imagePreview: "",
  districts: [],
});

function handleImage(e) {
  const file = e.target.files[0];
  useSettings.store.profileFile = file;
  store.imagePreview = URL.createObjectURL(file);
  useSettings.store.handleImage = true;
}

function handleDeleteAccount() {
  localStorage.removeItem("token");
  useUser.store.deleteModal = false;
  navigateTo("/");
}

function handleChange(type) {
  if (type) {
    useSettings.user[type] = !useSettings.user[type];
  }
  useSettings.updateProfile();
}

function handleRegion(data) {
  store.districts = [];
  useSettings.user.district = "";
  for (let i of district) {
    if (i.region_id == data) {
      store.districts.push(i);
    }
  }
}

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

watch(
  () => useSettings.user.gender,
  () => {
    useSettings.updateProfile();
  }
);

watch(
  () => useSettings.user,
  () => {
    useSettings.updateProfile();
  }
);

onBeforeMount(() => {
  handleRegion(isLoading.user.current_role_data.region);
  useUser.store.subject_step =
    isLoading.user.current_role_data.subjects?.length;
  useSettings.getProfile();
  usePayment.getByRoleId();
});
</script>

<style lang="scss" scoped></style>
