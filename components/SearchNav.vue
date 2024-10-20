<template>
  <div class="max-w-[2000px] mx-auto">
    <nav
      class="flex flex-col z-50 fixed top-0 w-full bg-[#F6F6F6] sm:h-[110px] h-[70px] lg:px-[100px] sm:px-4 max-w-[2000px]"
    >
      <ul class="sm:flex hidden items-center gap-4 text-[#8B8B8B] text-xs h-10">
        <li class="text-[#14191F]">Ташкент</li>
        <li>Privacy policy</li>
        <li>Biz haqimizda</li>
        <li>Terms of use</li>
      </ul>
      <ul
        class="flex items-center justify-between w-full bg-white sm:rounded-lg md:rounded-b-lg sm:rounded-b-none px-4 h-[70px]"
      >
        <li>
          <ul class="sidebar flex items-center gap-20">
            <li class="flex aside items-center gap-6">
              <a-dropdown :trigger="['click']">
                <img
                  class="block md:hidden cursor-pointer"
                  src="@/assets/svg/home/menu.svg"
                  alt=""
                />
                <template #overlay>
                  <a-menu v-if="!useUser.store.deleteModal" class="!px-4 !pt-4">
                    <a-collapse
                      v-model:activeKey="store.account_collapse"
                      :bordered="false"
                      style="background: rgb(255, 255, 255)"
                    >
                      <a-collapse-panel key="true">
                        <template #header>
                          <div
                            class="flex gap-1 items-center cursor-pointer duration-300"
                            :class="store.account_collapse[0] ? 'mb-8' : 'mb-5'"
                          >
                            <div class="relative">
                              <div
                                :class="
                                  isLoading.user.current_role_data.is_online
                                    ? 'clip'
                                    : ''
                                "
                              >
                                <img
                                  v-if="isLoading.user.current_role_data.image"
                                  class="min-h-[53px] min-w-[53px] max-h-[53px] max-w-[53px] rounded-full object-cover"
                                  :src="isLoading.user.current_role_data.image"
                                  alt=""
                                />
                                <ui-avatar-empty
                                  v-else
                                  class="max-h-[53px] max-w-[53px] rounded-full object-cover"
                                />
                              </div>
                              <img
                                v-if="
                                  isLoading.user.current_role_data.is_online
                                "
                                class="absolute -bottom-2.5 -right-0.5"
                                src="@/assets/svg/sidebar/online.svg"
                                alt=""
                              />
                            </div>
                            <div
                              class="flex items-center justify-between w-full"
                            >
                              <div class="max-w-[150px]">
                                <h1 class="font-bold truncate">
                                  {{
                                    isLoading.user.current_role_data.full_name
                                  }}
                                </h1>
                                <p class="text-xs opacity-40 truncate">
                                  @username
                                </p>
                              </div>
                              <img
                                :class="
                                  store.account_collapse[0] ? 'rotate-180' : ''
                                "
                                class="duration-300 mx-4"
                                src="@/assets/svg/navbar/arrow.svg"
                                alt=""
                              />
                            </div>
                          </div>
                        </template>
                        <div
                          @click="changeRole(index)"
                          v-for="(i, index) in isLoading.user.data.role"
                          class="flex gap-3 items-center h-10 mb-5 cursor-pointer"
                        >
                          <div class="relative">
                            <div>
                              <img
                                v-if="i.image"
                                class="min-w-[40px] h-10 w-10 rounded-full object-cover"
                                :src="i.image"
                                alt=""
                              />
                              <ui-avatar-empty
                                v-else
                                class="max-h-[40px] max-w-[40px] rounded-full object-cover"
                              />
                            </div>
                            <img
                              v-if="isLoading.user.data.current_role == i.role"
                              class="absolute -bottom-[0.9px] -right-[0.9px] min-w-[13px] max-h-[13px]"
                              src="@/assets/svg/sidebar/account_icon.svg"
                              alt=""
                            />
                          </div>
                          <div>
                            <h1 class="font-medium" v-for="role in roles">
                              <p v-if="role.role == i.role">
                                {{ role.uz }} bo'lib kirish
                              </p>
                            </h1>
                          </div>
                        </div>
                        <!-- <router-link
                          v-if="isLoading.user.data.current_role != 'student'"
                          @click="
                            useUser.create.phone =
                              isLoading.user.data.phone.slice(4)
                          "
                          to="/register"
                          class="flex gap-3 items-center mb-5 h-6 cursor-pointer _c55"
                        >
                          <p class="full_flex w-10 h-10">
                            <img
                              src="@/assets/svg/sidebar/account_plus.svg"
                              alt=""
                            />
                          </p>
                          <div class="block">
                            <h1 class="font-medium">Hisob qo‘shish</h1>
                          </div>
                        </router-link> -->
                        <div class="block">
                          <button
                            @click="useUser.store.deleteModal = true"
                            class="text-[#FF5252] font-semibold ml-3 mb-[10px]"
                          >
                            <!-- HISOBNI O‘CHIRISH -->
                            HISOBDAN CHIQISH
                          </button>
                        </div>
                        <hr class="border_ced !border-0 !border-b -mx-4 px-4" />
                      </a-collapse-panel>
                    </a-collapse>
                  </a-menu>
                </template>
              </a-dropdown>
              <!-- <router-link to="/"><img src="/logo.svg" alt="" /></router-link> -->
              <Logo />
            </li>
            <li class="relative sm:block hidden">
              <input
                type="text"
                class="rounded-lg lg:w-[560px] md:w-[450px] w-[350px] pl-[23px] pr-[50px] bg-[#F9F9F9] placeholder-[#B3B3B3]"
                placeholder="Qidirish..."
              />
              <div
                class="flex items-center absolute top-0 right-0 h-[50px] w-[39px]"
              >
                <img src="@/assets/svg/icon/search.svg" alt="" />
              </div>
            </li>
          </ul>
        </li>
        <li class="flex items-center gap-3">
          <img
            class="block sm:hidden h-6 w-6"
            src="@/assets/svg/icon/search.svg"
            alt=""
          />
          <a-dropdown
            v-model:open="store.notification_modal"
            placement="bottomRight"
            trigger="click"
          >
            <div
              class="full_flex relative rounded-full bg-[url('@/assets/svg/icon/message_back.svg')] h-10 w-10 cursor-pointer"
            >
              <img src="@/assets/svg/icon/messages.svg" alt="" />
              <p
                class="bg-[#F23636] h-2 w-2 rounded-full absolute top-0 left-[30px]"
              ></p>
            </div>
            <template #overlay>
              <a-menu class="!mt-3 !-mr-1 w-[540px]" @click="handleMenuClick">
                <div
                  class="flex items-end justify-between p-5 border_ced !border-0 !border-b !-mx-1 mb-1 font-semibold"
                >
                  <h1 class="text-xl leading-[30px]">Bildirishnomalar</h1>
                  <p class="_c20 leading-[30px]">Mark all as read</p>
                </div>
                <div
                  class="max-h-[70vh] overflow-hidden overflow-y-auto -mr-1 pr-1"
                >
                  <a-menu-item v-for="i in 10" :key="i">
                    <div
                      class="flex justify-between text-sm h-[180px] !px-2 !py-4"
                    >
                      <div class="flex items-start h-full gap-3">
                        <UiAvatarEmpty class="max-h-[64px] max-w-[64px]" />
                        <div>
                          <p class="w-[70%] h-16 py-3">
                            <span class="font-semibold">Umarbek Muxtorov</span>
                            sizga o‘quvchi sifatida yuborgan so‘rovi
                          </p>
                          <div class="mt-2">
                            <ui-button
                              class="!h-[44px] orange border border-[#FF852E] !px-4"
                              ><span class="lg:block hidden">Qabul qilish</span>
                              <img
                                class="lg:hidden block min-w-[20px]"
                                src="@/assets/svg/icon/accept.svg"
                                alt=""
                            /></ui-button>
                            <ui-button class="!h-[44px] _c24 !px-4"
                              ><span class="lg:block hidden">Rad etish</span>
                              <img
                                class="lg:hidden block min-w-[20px]"
                                src="@/assets/svg/icon/refuse.svg"
                                alt=""
                            /></ui-button>
                          </div>
                        </div>
                      </div>
                      <p class="h-16 py-3">Hozir</p>
                    </div>
                    <hr class="border_ced !border-0 !border-b -mb-1 -mx-2" />
                  </a-menu-item>
                </div>
              </a-menu>
            </template>
          </a-dropdown>
        </li>
      </ul>
    </nav>

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
  </div>
</template>

<script setup>
import { sidebar } from "@/constants/sidebar";
import { useLoadingStore, useUserStore } from "~/store";
import { roles } from "~/constants/roles";

const isLoading = useLoadingStore();
const useUser = useUserStore();
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
  // isLoading.middleware.passwordChecking = false;
}

function handleDeleteAccount() {
  localStorage.removeItem("token");
  useUser.store.deleteModal = false;
  navigateTo("/");
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
  clip-path: path(
    "M41.25 38.0962C44.0928 38.0962 47.657 37.7752 48.5785 35.0859C49.4991 32.3993 50 29.5084 50 26.4969C50 12.2609 38.8071 0.720459 25 0.720459C11.1929 0.720459 0 12.2609 0 26.4969C0 40.7328 11.1929 52.2733 25 52.2733C26.97 52.2733 28.8869 52.0383 30.7256 51.5941C33.0457 51.0336 33.75 48.2161 33.75 45.8291C33.75 41.5584 37.1079 38.0962 41.25 38.0962Z"
  );
}
</style>
~/constants/sidebar~/constants/roles~/constants/sidebar~/constants/roles
