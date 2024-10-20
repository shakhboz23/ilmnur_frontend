<template>
  <main
    class="bg-white pb-10 rounded-lg overflow-hidden overflow-y-auto max-h-[calc(100vh_-_160px)]"
  >
    <nav
      class="flex items-center justify-between p-5 border-b border-[#EDEDED]"
    >
      <button
        @click="$router.back()"
        class="flex items-center gap-4 font-semibold text-xl"
      >
        <img src="@/assets/svg/icon/back_arrow.svg" alt="" />
        O'quvchilar
      </button>
      <div class="flex gap-4">
        <UiButton
          @click="store.create = true"
          class="bg_orange font-semibold white !px-6"
          >Qo‘shish</UiButton
        >
        <router-link
          :to="`/create_test?group_id=${$router.currentRoute.value.params.class}`"
        >
          <UiButton class="bg_orange font-semibold white !px-6"
            >Test qo'shish</UiButton
          >
        </router-link>
      </div>
      <!-- /create_test?lesson_id=2 -->
    </nav>
    <div class="px-5 users_tabs flex justify-between items-center">
      <a-tabs class="" v-model:activeKey="useGroupuser.store.activeTab">
        <a-tab-pane key="0">
          <template #tab>
            <div class="flex gap-1 font-medium">
              <p>Hammasi</p>
            </div>
          </template>
        </a-tab-pane>
        <a-tab-pane
          :key="index + 1"
          v-for="(i, index) in useGroupuser.store.group.test_step"
        >
          <template #tab>
            <div class="flex gap-1 font-medium">
              <p>test{{ i }}</p>
            </div>
          </template>
        </a-tab-pane>
      </a-tabs>
      <button
        @click="
          () => {
            useGroup.getById();
            store.generate = true;
          }
        "
        class="border_orange py-1 px-4 rounded-full"
      >
        Test kodi 🔄
      </button>
    </div>
    <section class="overflow-x-auto">
      <table class="table-auto mt-5 w-full">
        <thead>
          <tr class="text-sm b_cff3 whitespace-nowrap">
            <th class="text-start font-medium _c66 px-5 py-3">№</th>
            <th class="text-start font-medium _c66 px-5 py-3">Ism</th>
            <th class="text-start font-medium _c66 px-5 py-3">Reyting</th>
            <th class="text-start font-medium _c66 px-5 py-3">Telefon raqam</th>
            <th class="text-start font-medium _c66 px-5 py-3">Status</th>
            <th class="text-start font-medium _c66 px-5 py-3">Yaratilgan</th>
            <th
              v-if="isLoading.user.data.current_role == 'leader_teacher'"
              class="px-5 py-3"
            ></th>
            <th class="_c66 px-5 py-3"></th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="border-b border-[#EDEDED]"
            v-for="(i, index) in useGroupuser.store.getall"
            :class="i.user_status == 'pending' ? 'bg-[#F6F6F6]' : ''"
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
                {{ i.full_name }}
              </div>
            </td>
            <td class="py-6 px-5">{{ i.userReyting }}</td>
            <td class="py-6 px-5">{{ i.user?.phone }}</td>
            <td class="py-6 px-5">
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
                class="!h-[44px] orange border border-[#FF852E] !px-4"
                ><span class="lg:block hidden">Qabul qilish</span>
                <img
                  class="lg:hidden block"
                  src="@/assets/svg/icon/accept.svg"
                  alt=""
              /></ui-button>
              <ui-button
                @click="useUser.deleteUser(i.id, index)"
                class="!h-[44px] _c24 !px-4"
                ><span class="lg:block hidden">Rad etish</span>
                <img
                  class="lg:hidden block"
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
      <a-tabs
        class="max-w-fit mx-auto !min-w-[120px]"
        v-model:activeKey="useGroupuser.store.group_type"
      >
        <a-tab-pane key="user">
          <template #tab>User</template>
        </a-tab-pane>
        <a-tab-pane key="file">
          <template #tab>File</template>
        </a-tab-pane>
      </a-tabs>
      <form
        class="space-y-5 _c45 mt-[30px]"
        @submit.prevent="useGroupuser.createData"
      >
        <div v-if="useGroupuser.store.group_type == 'user'">
          <div class="space-y-2">
            <label for="name">Ism familiya</label>
            <input
              v-model="useGroupuser.store.full_name"
              class="rounded-[12px]"
              id="name"
              type="text"
            />
          </div>
        </div>
        <div v-else>
          <div class="space-y-2">
            <label for="file">Fayl yuklang</label>
            <input
              @change="handleFile"
              class="rounded-[12px]"
              id="file"
              type="file"
            />
          </div>
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

    <!-- Generate code -->
    <a-modal class="max-w-[440px]" v-model:open="store.generate" centered>
      <div class="flex justify-between items-center w-full">
        <h1 class="font-semibold text-2xl">Kodni yangilash</h1>
      </div>
      <div
      v-loading="isLoading.isLoadingType('getById')"
        class="space-y-5 _c45 mt-[30px]"
      >
        <div class="space-y-4">
          <div class="space-y-2">
            Guruh id <span class="text-blue-700 font-bold">#{{useGroup.store.getById?.id}}</span>
          </div>
          <div class="space-y-2">
            Test kodi <span class="text-blue-700 font-bold">#{{useGroup.store.getById?.code}}</span>
          </div>
          <div v-if="useGroup.store.getById?.group_test_settings">
            <div class="space-y-2">
              Amal qilish muddati <br /> <span class="text-blue-700 font-bold">#{{new Date(+useGroup.store.getById?.expire_time)}}</span>
            </div>
            <h2 class="font-bold text-xl my-2">Guruh testi haqida</h2>
            <div class="space-y-2">
              Boshlanish vaqti <br /> <span class="text-blue-700 font-bold">#{{new Date(useGroup.store.getById?.group_test_settings[0]?.start_date)}}</span>
            </div>
            <div class="space-y-2">
              Tugash vaqti <br /> <span class="text-blue-700 font-bold">#{{new Date(useGroup.store.getById?.group_test_settings[0]?.end_date)}}</span>
            </div>
            <div class="space-y-2">
              Test bosqichi <br /> <span class="text-blue-700 font-bold">#{{useGroup.store.getById?.group_test_settings[0]?.sort_level}}</span>
            </div>
            <div class="space-y-2">
              Test soni <br /> <span class="text-blue-700 font-bold">#{{useGroup.store.getById?.group_test_settings[0]?.test_count}}</span>
            </div>
          </div>
          <!-- <div class="space-y-2">
            Test kodi <br /> <span class="text-blue-700 font-bold">#{{new Date(+useGroup.store.getById?.expire_time)}}</span>
          </div> -->
        </div>
        <UiButton
          type="submit"
          class="!h-12 w-full bg_orange !mt-[54px] font-semibold white"
          v-loading="isLoading.isLoadingType('generate')"
          @click="useGroup.updateCode"
        >
          Yangilash
        </UiButton>
      </div>
    </a-modal>
  </main>
</template>

<script setup>
import mammoth from "mammoth";
import * as XLSX from "xlsx";
definePageMeta({
  layout: "search",
});

import {
  useUserStore,
  useLoadingStore,
  useGroupuserStore,
  useGroupStore,
} from "@/store";
import { useFormatter } from "#imports";

const { formateCreatedAt } = useFormatter();
const useUser = useUserStore();
const useGroup = useGroupStore();
const isLoading = useLoadingStore();
const useGroupuser = useGroupuserStore();
const store = reactive({
  create: false,
  generate: false,
  usertype: "user",
  activeTab: 0,
});

useUser.store.getall = [];
useUser.create.role = "student";

useGroupuser.getAll();

// useUser.getAllStudent();

async function handleFile(e) {
  try {
    const file = e.target.files[0];
    const result = await convertFileToHtml(file);
    useGroupuser.store.file = [];
    if (result.type == "xlsx") {
      for (let i of result.content?.slice(1)) {
        useGroupuser.store.file.push(i[0]);
      }
    } else {
      console.log("hello world");
      for (let i of result.content?.slice(1)) {
        const htmlString = i[1];
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, "text/html");
        useGroupuser.store.file.push(doc.querySelector("p").innerHTML);
      }
    }
  } catch (_) {}
}

function convertFileToHtml(file) {
  const fileType = file.name.split(".").pop();

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = async (event) => {
      const arrayBuffer = event.target.result;

      try {
        if (fileType === "docx") {
          // Use mammoth.js for DOCX files
          const hmltTable = await mammoth.convertToHtml(
            { arrayBuffer },
            {
              styleMap: ["p[style-name='Equation'] => span.math-display:fresh"],
            }
          );
          const rows = hmltTable.value.match(/<tr>.*?<\/tr>/gs); // Extract rows
          if (!rows) return [];

          let result = rows.map((row) => {
            const cells = row.match(/<td>(.*?)<\/td>/gs); // Extract cells
            if (!cells) return [];
            return cells.map((cell) => cell.replace(/<\/?td>/g, "")); // Remove <td> tags
          });
          resolve({ type: "docx", content: result });
        } else if (fileType === "xlsx") {
          // Use XLSX for XLSX files
          const workbook = XLSX.read(arrayBuffer, { type: "array" });
          const firstSheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[firstSheetName];
          const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
          resolve({ type: "xlsx", content: data });
        } else {
          reject(new Error("Unsupported file type"));
        }
      } catch (error) {
        reject(error);
      }
    };

    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
}

watch(
  () => useGroupuser.store.activeTab,
  () => {
    useGroupuser.getAll();
  }
);
</script>

<style lang="scss" scoped></style>
