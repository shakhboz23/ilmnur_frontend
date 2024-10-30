<template>
  <div class="sidebar">
    <aside
      class="md:block hidden aside overflow-hidden overflow-y-auto z-50 max-h-[calc(100vh_-_160px)] h-[calc(100vh_-_160px)] w-[267px] min-w-[267px] p-4 bg-white rounded-lg">
      <a-collapse v-model:activeKey="store.account_collapse" :bordered="false" style="background: rgb(255, 255, 255)">
        <a-collapse-panel key="true">
          <template #header>
            <div class="flex gap-1 items-center cursor-pointer duration-300"
              :class="store.account_collapse[0] ? 'mb-8' : 'mb-5'">
              <div class="relative">
                <div :class="isLoading.user.current_role_data?.is_online ? 'clip' : ''
        ">
                  <img v-if="isLoading.user.current_role_data?.image"
                    class="min-h-[53px] min-w-[53px] max-h-[53px] max-w-[53px] rounded-full object-cover"
                    :src="isLoading.user.current_role_data?.image" alt="" />
                  <ui-avatar-empty v-else class="max-h-[53px] max-w-[53px] rounded-full object-cover" />
                </div>
                <img v-if="isLoading.user.current_role_data?.is_online" class="absolute -bottom-2.5 -right-0.5"
                  src="@/assets/svg/sidebar/online.svg" alt="" />
              </div>
              <div class="flex items-center justify-between w-full">
                <div class="max-w-[150px]">
                  <h1 class="font-bold truncate">
                    {{ isLoading.user.data.name }}
                    {{ isLoading.user.data.surname }}
                  </h1>
                  <p class="text-xs opacity-40 truncate">@username</p>
                </div>
                <img :class="store.account_collapse[0] ? 'rotate-180' : ''" class="duration-300"
                  src="@/assets/svg/navbar/arrow.svg" alt="" />
              </div>
            </div>
          </template>
          <div @click="changeRole(index)" v-for="(i, index) in isLoading.user.data.role"
            class="flex gap-3 items-center h-10 mb-5 cursor-pointer">
            <div class="relative">
              <div>
                <img v-if="i.image" class="min-w-[40px] h-10 w-10 rounded-full object-cover" :src="i.image" alt="" />
                <ui-avatar-empty v-else class="max-h-[40px] max-w-[40px] rounded-full object-cover" />
              </div>
              <img v-if="isLoading.user.data.current_role == i.role"
                class="absolute -bottom-[0.9px] -right-[0.9px] min-w-[13px] max-h-[13px]"
                src="@/assets/svg/sidebar/account_icon.svg" alt="" />
            </div>
            <div>
              <h1 class="font-medium" v-for="role in roles">
                <p v-if="role.role == i.role">{{ role.uz }} bo'lib kirish</p>
              </h1>
            </div>
          </div>
          <!-- <router-link
            @click="addAccount"
            to="/register"
            class="flex gap-3 items-center mb-5 h-6 cursor-pointer _c55"
          >
            <p class="full_flex w-10 h-10">
              <img src="@/assets/svg/sidebar/account_plus.svg" alt="" />
            </p>
            <div class="block">
              <h1 class="font-medium">Hisob qo‘shish</h1>
            </div>
          </router-link> -->
          <hr class="border_ced !border-0 !border-b -mx-4 px-4" />
        </a-collapse-panel>
      </a-collapse>
      <div :class="store.account_collapse[0] ? 'mt-4' : ''" class="duration-500">
        <router-link :to="i.url" v-for="i in sidebar" :key="i.id">
          <div v-if="i.role?.includes(isLoading.user.data?.current_role) ||
        !i?.role.length
        "
            class="flex items-center hover:bg-[#FFF3EB] hover:bg-opacity-40 px-2 rounded-lg gap-2 h-12 cursor-pointer text-[#555555]">
            <img :src="i.svg" alt="" />
            <p>{{ i.name }}</p>
          </div>
        </router-link>
      </div>
    </aside>
    <aside class="md:hidden block tabs sidebar_scroll md:overflow-hidden overflow-x-auto">
      <!-- <a-tabs
        class="md:hidden block !min-w-fit"
        v-model:activeKey="store.current_page"
      >
        <a-tab-pane
          v-for="(i, index) in sidebar_role"
          :key="i.url"
          :tab="i.name"
        >
        </a-tab-pane>
      </a-tabs> -->
      <el-tabs v-model="store.current_page"
        class="md:hidden block !min-w-fit bg-white h-[40px] sm:rounded-b-md mb-4 px-4">
        <el-tab-pane v-for="(i, index) in sidebar_role" :label="i.name" :name="i.url"></el-tab-pane>
      </el-tabs>
    </aside>
  </div>
</template>

<script setup>
import { sidebar } from "@/constants/sidebar";
import { useLoadingStore, useUserStore, useAuthStore } from "~/store";
import { roles } from "~/constants/roles";

const isLoading = useLoadingStore();
const useUser = useUserStore();
const useAuth = useAuthStore();
const router = useRouter();
const store = reactive({
  account_collapse: false,
  current_page: 1,
});

const sidebar_role = [];

for (let i of sidebar) {
  if (i.role.includes(isLoading.user.data?.current_role)) {
    sidebar_role.push(i);
  } else if (!i.role.length) {
    sidebar_role.push(i);
  }
}

function changeRole(index) {
  isLoading.user.current_role_step = index + 1;
  isLoading.user.current_role_data = isLoading.user.data.role[index];
  isLoading.user.data.current_role = isLoading.user.current_role_data.role;
  useAuth.updateCurrentRole( isLoading.user.data.id, isLoading.user.data.current_role);
  // isLoading.middleware.passwordChecking = false;
}

function addAccount() {
  useUser.create.phone = isLoading.user.data.phone.slice(4)
  isLoading.store.addAccount = true;
}

watch(
  () => store.current_page,
  () => {
    router.push(store.current_page);
  }
);
</script>

<style lang="scss" scoped>
.router-link-active {
  div {
    background: #fff3eb !important;
    color: #14191f;
  }

  &hover {
    background: #fff3eb;
  }
}

.clip {
  clip-path: path("M41.25 38.0962C44.0928 38.0962 47.657 37.7752 48.5785 35.0859C49.4991 32.3993 50 29.5084 50 26.4969C50 12.2609 38.8071 0.720459 25 0.720459C11.1929 0.720459 0 12.2609 0 26.4969C0 40.7328 11.1929 52.2733 25 52.2733C26.97 52.2733 28.8869 52.0383 30.7256 51.5941C33.0457 51.0336 33.75 48.2161 33.75 45.8291C33.75 41.5584 37.1079 38.0962 41.25 38.0962Z"
    );
}
</style>
