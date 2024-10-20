<template>
  <main
    class="p-[30px] bg-white rounded-lg overflow-hidden overflow-y-auto max-h-[calc(100vh_-_160px)]"
  >
    <nav class="flex items-center border-b border-[#EDEDED] pb-6 gap-4">
      <img
        class="h-24 w-24 rounded-[10px] object-cover"
        src="@/assets/svg/image/user.svg"
        alt=""
      />
      <div class="space-y-[10px]">
        <h1 class="text-[#242424] text-xl font-[700]">
          {{ isLoading.user.data.name }}
          {{ isLoading.user.data.surname }}
        </h1>
        <div class="flex items-center gap-[10px] text-[#454545] text-sm">
          <img src="@/assets/svg/profile/clock.svg" alt="" />
          Ro'yxatdan o'tish: 2024 yil
        </div>
      </div>
    </nav>
    <section>
      <h1 class="text-xl font-[700] mt-[30px] mb-5">Statistika</h1>
      <!-- <ul class="grid grid-cols-2 gap-6">
        <li
          class="flex items-start gap-3 border border-[#E1E1E1] rounded-2xl p-5"
        >
          <img class="pt-2" src="@/assets/svg/profile/ball.svg" alt="" />
          <div>
            <p class="leading-[30px] text-xl font-[700]">552</p>
            <p class="leading-6 text-[#AFAFAF] font-medium">Bal</p>
          </div>
        </li>
        <li
          class="flex items-start gap-3 border border-[#E1E1E1] rounded-2xl p-5"
        >
          <img class="pt-2" src="@/assets/svg/profile/top.svg" alt="" />
          <div>
            <p class="leading-[30px] text-xl font-[700]">2</p>
            <p class="leading-6 text-[#AFAFAF] font-medium">Top-3</p>
          </div>
        </li>
      </ul> -->
      <h1 class="text-xl font-[700] mt-[30px] mb-5">Faollik</h1>
      <div
        class="h-[50px] -space-x-[10px] bg-[#F5F5F5] rounded-[10px] overflow-hidden max-w-fit"
      >
        <button class="bg_orange white px-[35px] h-full rounded-[10px]">
          Haftalik
        </button>
        <button class="px-[35px] h-full">Oylik</button>
      </div>
      <LineChart class="pt-9" />
    </section>
  </main>
</template>

<script setup>
definePageMeta({
  layout: "search",
});

import { useProfileStore, useLoadingStore } from "~/store";
import { Calendar } from "calendar";
const cal = new Calendar(1);

const useProfile = useProfileStore();
const isLoading = useLoadingStore();
useProfile.getActivity();

const store = reactive({
  calendar: "",
  year: "",
  month: "",
  day: "",
});

const date = new Date();
store.year = date.getFullYear();
store.month = date.getMonth();
store.day = date.getDate();
function getCalendar(year, month) {
  let t = 0;
  store.calendar = [];
  store.calendar = cal.monthDates(
    store.year,
    store.month,
    function (d) {
      t++;
      if (d.getMonth() == store.month && d.getDate() == store.day) {
        useProfile.store.currentStep = Math.ceil(t / 7);
      }
      return [d.getMonth(), (" " + d.getDate()).slice(-2), t];
    },
    function (w) {
      return w;
    }
  );
  console.log(store.calendar);
  useProfile.store.currentStep =
    store.calendar[useProfile.store.currentStep - 1];
  console.log(useProfile.store.currentStep);
  // useEvent.store.start_date = new Date(
  //   store.year,
  //   ...useEvent.store.calendar[0][0]
  // ).toLocaleDateString("uz-UZ", {
  //   year: "numeric",
  //   month: "2-digit",
  //   day: "2-digit",
  // });
  // useEvent.store.end_date = new Date(
  //   store.year,
  //   ...useEvent.store.calendar[useEvent.store.calendar.length - 1][6]
  // ).toLocaleDateString("uz-UZ", {
  //   year: "numeric",
  //   month: "2-digit",
  //   day: "2-digit",
  // });
}
getCalendar();
</script>

<style lang="scss" scoped></style>
