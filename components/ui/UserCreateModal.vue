<template>
  <div>
    <!-- check user email -->
    <a-modal
      v-if="useUser.store.add_user_step == 0"
      class="max-w-[440px] !w-full !max-h-[100vh]"
      v-model:open="useUser.store.createModal"
      centered
    >
      <div class="flex justify-between items-center w-full">
        <h1
          v-show="useUser.create.role == i.role"
          v-for="i in roles"
          class="font-semibold text-2xl"
        >
          <span v-if="useUser.create.role == i.role"
            >{{ i.uz }}
            {{ useUser.store.is_update ? "tahrirlash" : "qo‘shish" }}</span
          >
        </h1>
        <p></p>
      </div>
      <form
        class="space-y-5 _c45 mt-[30px]"
        @submit.prevent="useUser.checkEmail"
      >
        <div class="space-y-2">
          <label for="phone">Email</label>
          <input
            v-model="useUser.create.email"
            class="rounded-[12px]"
            id="phone"
            type="email"
            required
          />
        </div>
        <UiButton
          v-loading="isLoading.isLoadingType('checkEmail')"
          @click="store.create = false"
          type="submit"
          class="!h-12 w-full bg_orange !mt-[54px] font-semibold white"
        >
          Davom etish
          <Loading />
        </UiButton>
      </form>
    </a-modal>

    <!-- create user -->
    <a-modal
      v-else-if="useUser.store.add_user_step == 1"
      class="max-w-[440px] !w-full !max-h-[100vh]"
      v-model:open="useUser.store.createModal"
      centered
    >
      <div class="flex justify-between items-center w-full">
        <h1
          v-show="useUser.create.role == i.role"
          v-for="i in roles"
          class="font-semibold text-2xl"
        >
          <span v-if="useUser.create.role == i.role"
            >{{ i.uz }}
            {{ useUser.store.is_update ? "tahrirlash" : "qo‘shish" }}</span
          >
        </h1>
        <p></p>
      </div>
      <form class="space-y-5 _c45 mt-[30px]" @submit.prevent="handleSubmit">
        <div class="space-y-2">
          <label for="name">Ism</label>
          <input
            v-model="useUser.create.name"
            :disabled="useUser.store.is_user_login ? true : false"
            class="rounded-[12px]"
            id="name"
            type="text"
            required
          />
        </div>
        <div class="space-y-2">
          <label for="surname">Familiya</label>
          <input
            v-model="useUser.create.surname"
            :disabled="useUser.store.is_user_login ? true : false"
            class="rounded-[12px]"
            id="surname"
            type="text"
            required
          />
        </div>
        <div class="space-y-2">
          <label for="phone">Email</label>
          <input
            v-model="useUser.create.email"
            class="rounded-[12px]"
            id="phone"
            type="email"
            :disabled="useUser.store.is_user_login ? true : false"
            required
          />
        </div>
        <div class="space-y-2">
          <label for="password">Parol</label>
          <input
            v-model="useUser.create.password"
            class="rounded-[12px]"
            id="password"
            type="password"
            required
          />
        </div>
        <div
          v-if="
            useUser.create.role == 'teacher' ||
            useUser.create.role == 'methodological'
          "
          class="space-y-2"
        >
          <label for="subject">O'qituv fani</label>
          <div
            v-for="i in useUser.store.subject_step"
            class="flex items-center gap-2"
          >
            <a-select
              v-if="isLoading.user.data.role?.includes('teacher')"
              v-model:value="useSubject.store.subjects[i - 1]"
              filterable
              @change="checkUserSubjects(i)"
              v-model="useAuth"
              class="w-full sr_12"
              required
            >
              <template #suffixIcon>
                <p class="h-4 w-[1px]"></p>
                <img src="@/assets/svg/icon/select_arrow6c.svg" alt="" />
              </template>
              <a-select-option
                v-for="subject in isLoading.user.data.subjects"
                :value="subject"
                >{{ subject }}</a-select-option
              >
            </a-select>
            <a-select
              v-else
              v-model:value="useUser.create.subjects[i - 1]"
              filterable
              @change="checkUserSubjects(i)"
              class="w-full sr_12"
              required
            >
              <template #suffixIcon>
                <p class="h-4 w-[1px]"></p>
                <img src="@/assets/svg/icon/select_arrow6c.svg" alt="" />
              </template>
              <a-select-option
                v-for="subject in useSubject.store.subjects"
                :value="subject.id"
                >{{ subject.title }}</a-select-option
              >
            </a-select>
            <p
              @click="useUser.store.subject_step += 1"
              class="full_flex min-w-[50px] h-[50px] rounded-full border border-[#CCCCCC] cursor-pointer"
            >
              <img src="@/assets/svg/icon/plus.svg" alt="" />
            </p>
          </div>
        </div>
        <UiButton
          @click="store.create = false"
          type="submit"
          class="!h-12 w-full bg_orange !mt-[54px] font-semibold white"
        >
          {{ useUser.store.is_update ? "Tahrirlash" : "Yaratish" }}
          <Loading />
        </UiButton>
      </form>
    </a-modal>
  </div>
</template>

<script setup>
import { useUserStore, useLoadingStore, useSubjectStore } from "@/store";
import { roles } from "@/constants/roles.js";

const useUser = useUserStore();
const useSubject = useSubjectStore();
const isLoading = useLoadingStore();

const provinceData = ["Matematika", "Biologiya", "Kimyo"];

const store = reactive({
  create: false,
  classes: [["1", "A"]],
  subject_step: 1,
  districts: [],
});

if (isLoading.user.data.role?.includes("methodological")) {
  useUser.create.subjects = ref(
    isLoading.user.data.subjects ? isLoading.user.data.subjects[0] : ""
  );
} else {
  useUser.create.subjects = ref([provinceData[0]]);
}

function checkUserSubjects(subject) {
  if (
    useUser.create.subjects.indexOf(
      isLoading.user.data?.subjects[subject - 1]
    ) !=
    subject - 1
  ) {
    useUser.create.subjects.splice(subject - 1, 1);
    useUser.store.subject_step -= 1;
  }
}

function handleSubmit() {
  console.log(useUser.create);
  if (useUser.store.is_update) {
    useUser.updateUser(useUser.create);
  } else {
    useUser.register();
  }
}

watch(
  () => useUser.store.createModal,
  () => {
    if (!useUser.store.createModal) {
      useUser.store.add_user_step = 0;
      useUser.store.is_user_login = false;
      useUser.store.is_update = false;
    }
  }
);

onBeforeMount(() => {
  useSubject.getSubjects();
});
</script>

<style lang="scss" scoped></style>
~/constants/roles.js~/constants/roles.js
