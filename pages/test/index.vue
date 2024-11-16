<template>
  <!-- https://vuejsexamples.com/tag/drawing/ -->
  <!-- https://codepen.io/Lewitje/pen/MVommB -->

  <main v-if="
    useGroup.store.getUsers.group_test_settings
      ? useGroup.store.getUsers.group_test_settings
      : true
  ">
    <div v-if="
      checkTestTime(
        useGroup.store.getUsers.group_test_settings
          ? useGroup.store.getUsers.group_test_settings[0]?.start_date
          : 0,
        'start'
      )
    " class="min-h-screen min-w-screen full_flex">
      Test vaqti boshlanmagan
    </div>
    <div v-else-if="
      checkTestTime(
        useGroup.store.getUsers.group_test_settings
          ? useGroup.store.getUsers.group_test_settings[0]?.end_date
          : 0,
        'end'
      )
    " class="min-h-screen min-w-screen full_flex">
      {{ isLoading.isLoadingType('getUsers') ? 'Yuklanmoqda...' : 'Test vaqti tugagan' }}
    </div>
    <div v-else>
      <UiStarAnimation v-if="useTest.store.isTestEnd && useTest.store.testResBall[0] >= 70" />
      <form v-if="
        $router.currentRoute.value.name == 'test' &&
        $router.currentRoute.value.query.g &&
        !useTest.store.group_username
      " class="full_flex flex-col space-y-4 min-w-screen min-h-screen" @submit.prevent="useTest.check_userApi"
        v-loading="isLoading.isLoadingType('getUsers')">
        <div class="space-y-2 sm:w-[400px] w-[80%]">
          <label for="code">Test kodi</label>
          <input v-model="useTest.check_user.code" type="number" placeholder="Test kodini kiriting" id="code"
            required />
        </div>
        <div v-if="useGroup.store.getUsers?.group_user" class="space-y-2 sm:w-[400px] w-[80%]">
          <label for="username">Ism familiya</label>
          <a-select id="username" @change="handleRegion" class="!placeholder-[#555555] w-full"
            v-model:value="useTest.check_user.user_id" placeholder="Ismingizni tanlang" required>
            <a-select-option v-for="user in useGroup.store.getUsers?.group_user" :value="user.id">{{ user.full_name }}
              {{ user.group_reyting[0]?.ball }}</a-select-option>
            <template #suffixIcon>
              <img src="@/assets/svg/reyting/select_arrow.svg" alt="" />
            </template>
          </a-select>
        </div>
        <p class="text-red-600 sm:w-[400px] w-[80%]" v-if="useTest.store.errorMessage">
          {{ useTest.store.errorMessage }}
        </p>
        <button v-loading="isLoading.isLoadingType('checkUser')" class="login_btn mx-auto">Testni boshlash</button>
      </form>
      <div v-else>
        <nav>
          <ul class="full_flex gap-3 md:py-5 py-2">
            <li @click="store.show_time = true" class="full_flex h-8 w-8 b_cfe2 rounded-[4px] cursor-pointer">
              <img src="@/assets/svg/test/time.svg" alt="" />
            </li>
            <li class="full_flex h-8 w-8 b_cfe2 rounded-[4px]">
              <img src="@/assets/svg/test/pen.svg" alt="" />
            </li>
            <li class="full_flex h-8 w-8 b_cfe2 rounded-[4px]">
              <img src="@/assets/svg/test/calculator.svg" alt="" />
            </li>
            <li class="full_flex h-8 w-8 b_cfe2 rounded-[4px]">
              <img src="@/assets/svg/test/periodic.svg" alt="" />
            </li>
          </ul>
          <el-progress :percentage="100 - useTest.store.time.percentage" color="#ff852e" />
        </nav>
        <section
          class="bg-white rounded-md pb-20 overflow-hidden overflow-y-auto md:max-h-[calc(100vh_-_184px)] md:min-h-[calc(100vh_-_184px)] max-h-[calc(100vh_-_120px)] min-h-[calc(100vh_-_120px)]">
          <div class="full_flex z-50 relative">
            <div
              class="flex sm:flex-row flex-col items-start sm:gap-5 gap-[25px] mt-8 md:mb-[60px] mb-10 md:max-w-[50%] w-[95%]">
              <img @click="$router.back" class="cursor-pointer md:-ml-[40px]" src="@/assets/svg/test/close.svg"
                alt="" />
              <div v-if="
                useTest.store.check_result &&
                !Object.keys(useTest.store.check_result).length
              " class="flex flex-wrap gap-3 min-w-[100%] overflow-hidden overflow-x-auto">
                <!-- {{ store.true_answers[i.id] }} -->
                <p @click="() => {
                  useTest.store.slideStep = index;
                  useTest.store.slideStepId = i.id;
                }
                  " v-for="(i, index) in useTest.store.tests" :class="store.true_answers[i.id] ? 'border bg_orange' : 'b_cee'
                    " class="cursor-pointer sm:h-5 ml-1 sm:min-w-[20px] h-4 min-w-[16px] rounded-full"></p>
              </div>
              <div v-else class="flex flex-wrap gap-3 min-w-[100%] overflow-hidden overflow-x-auto">
                <p @click="() => {
                  useTest.store.slideStep = index;
                  useTest.store.slideStepId = i.id;
                }
                  " v-for="(i, index) in useTest.store.tests"
                  :class="useTest.store.check_result[i.id] ? 'b_c40' : 'b_cfe'"
                  class="cursor-pointer sm:h-5 ml-1 sm:min-w-[20px] h-4 min-w-[16px] rounded-full"></p>
                <p @click="() => {
                  useTest.store.slideStep = useTest.store.tests.length;
                }
                  " class="cursor-pointer">
                  <img v-if="useTest.store.testResBall[0] >= 70" class="sm:h-5 h-4" src="@/assets/svg/test/success.svg"
                    alt="" />
                  <img v-else class="sm:h-5 h-4" src="@/assets/svg/test/fail.svg" alt="" />
                </p>
              </div>
            </div>
          </div>
          <!-- test -->
          <div class="overflow-hidden mx-auto md:max-w-[50%] preview">
            <div class="mainSlider duration-500 flex w-full">
              <!-- test -->
              <div class="min-w-full md:px-0 px-4" v-for="(i, index) in useTest.store.tests">
                #{{ i.level_name }}
                <div class="pb-8">
                  <h1 class="font-[700] md:text-2xl text-xl">
                    {{ index + 1 }}.
                    <Editor class="border_ced rounded-md overflow-hidden" v-model="i.question" readonly />
                  </h1>
                </div>
                <p class="bg-[#CCCCCC] h-[1px] sm:mx-0 -mx-4"></p>
                <div>
                  <div class="space-y-4 mt-[30px] mb-5">
                    <button v-for="(variant, index) in i.variants" @click="selectedAnswer(i.id, variant)"
                      class="!min-h-[40px] px-3 rounded-[10px] border full_flex gap-5" :class="store.true_answers[i.id] == variant
                        ? 'orange border-[#FF852E]'
                        : 'border-[#E1E1E1]'
                        ">
                      <span
                        class="block border rounded-[4px] full_flex leading-[21px] text-sm font-medium min-h-[24px] w-6">{{
                          variants[index] }}</span>
                      <span class="!text-start" v-html="variant"></span>
                    </button>
                  </div>
                </div>
              </div>
              <!-- result -->
              <div v-if="!isLoading.isLoadingType('getTests')" class="w-full min-w-full min-h-[calc(100vh_-_380px)]">
                <div class="flex items-center justify-center min-w-full min-h-[calc(100vh_-_380px)]">
                  <div class="p-5 sm:text-start text-center">
                    <img v-if="useTest.store.testResBall[0] >= 70" class="mx-auto mb-10"
                      src="@/assets/svg/register/registered.svg" alt="" />
                    <img v-else class="mx-auto mb-10" src="@/assets/svg/test/fail_result.svg" alt="" />
                    <h1 v-if="useTest.store.testResBall[0] >= 70" class="orange font-bold text-2xl">
                      Siz muvaffaqiyatli o‘tdingiz
                    </h1>
                    <h1 v-else class="orange font-bold text-center text-2xl">
                      Afsuski test mufaqqiyatsiz bo‘ldi
                    </h1>
                    <p v-if="useTest.store.testResBall[0] >= 70" class="_c66 mt-4 mb-10">
                      Sinov tugallandi
                    </p>
                    <p v-else class="_c66 mt-4 mb-10 md:w-[60%] mx-auto">
                      Yetarli bal to‘play olmadingiz. Hechqisi yo‘q qayta
                      topshirib ko‘ring
                    </p>
                    <ul class="grid grid-cols-2 gap-[60px]">
                      <li class="space-y-3 text-[#58CC02]">
                        <div class="flex items-center gap-3 mx-auto">
                          <img src="@/assets/svg/test/clarity.svg" alt="" />
                          <p>Aniqlik</p>
                        </div>
                        <p class="font-semibold text-2xl text-start">
                          {{ useTest.store.testResBall[0] }}%
                        </p>
                      </li>
                      <li class="space-y-3 text-[#FF852E]">
                        <div class="flex items-center gap-3">
                          <img src="@/assets/svg/test/ball.svg" alt="" />
                          <p>Ball</p>
                        </div>
                        <p class="font-semibold text-2xl text-start">
                          {{ useTest.store.testResBall[1] }}
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="relative overflow-x-auto">
                  <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs uppercase bg-gray-50 bg_orange text-white">
                      <tr>
                        <th scope="col" class="px-6 py-3">
                          Fan
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Ball
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="i in Object.keys(useTest.store.subject_ball)"
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {{ i }}
                        </th>
                        <td class="px-6 py-4">
                          {{useTest.store.subject_ball[i]}}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer
          class="flex items-center fixed bottom-0 w-full justify-between border-t border-[#EDEDED] bg-white md:h-[112px] h-[70px] md:px-[100px] px-4">
          <div v-if="!useTest.store.isTestEnd" class="flex items-center gap-[10px] text-[#656565]">
            <img src="@/assets/svg/test/flag.svg" alt="" />
            <p class="w-[112px] font-medium text-sm sm:block hidden">
              Muammo haqida xabar bering
            </p>
          </div>
          <uiButton v-if="useTest.store.isTestEnd" @click="tryAgain" :class="useTest.store.testResBall[0] < 70
            ? 'md:block hidden bg_orange white'
            : 'border border-[#BBBBBB] _c24'
            " class="!flex items-center justify-center gap-[10px] md:w-auto w-full z-50 relative">
            <img :class="useTest.store.testResBall[0] < 70 ? '' : 'hidden'" src="@/assets/svg/test/try_again.svg"
              alt="" />
            <img :class="useTest.store.testResBall[0] < 70 ? 'hidden' : ''" src="@/assets/svg/test/try_again_black.svg"
              alt="" />
            <span>Qayta topshirish</span>
          </uiButton>
          <!-- <div
          v-if="useTest.store.check_result[useTest.store.slideStepId]"
          class="sm:flex hidden items-center gap-[10px] text-[#40E746] font-[700]"
        >
          <img src="@/assets/svg/test/true.svg" alt="" />
          <p>Javob to‘g‘ri!</p>
        </div> -->
          <div v-if="!useTest.store.isTestEnd">
            <uiButton v-if="
              Object.keys(store.true_answers)?.length !=
              useTest.store.tests?.length
            " @click="nextStep" class="bg_orange white">Keyingisi</uiButton>
            <uiButton v-loading="isLoading.isLoadingType('checkAnswers')" :type="isLoading.isLoadingType('checkAnswers') ? 'button' : 'submit'
              " v-else @click="sendAnswers" class="bg_orange white">Yakunlash</uiButton>
          </div>
          <uiButton type="button" v-if="useTest.store.isTestEnd" :class="useTest.store.testResBall[0] < 70
            ? 'md:block hidden bg-[#DDDDDD]'
            : 'bg_orange'
            " @click="NextLesson" class="white md:w-auto w-full">Keyingisi</uiButton>
        </footer>
      </div>
    </div>

    <!-- <a-modal
        v-model:open="useTest.store.testResModal"
        centered
        @ok="useTest.store.testResModal = false"
      >
        <p class="text-xl font-semibold">Sizning natijangiz</p>
        <p class="mt-4">Siz 25 ta testdan 10 tasiga to'gri javob berdingiz</p>
        <p class="text-lg">Sizning balingiz <strong>72%</strong></p>
        <div class="flex items-center gap-[10px] mt-4 text-[#40E746] font-[700]">
          <img class="h-4 w-4" src="@/assets/svg/test/true.svg" alt="" />
          <p>Tabriklaymiz testdan muvaffaqiyatli o'tdingiz!</p>
        </div>
        <p class="mt-2">Siz keyingi darsga o'tishingiz mumkin!</p>
        <uiButton class="bg_orange !h-9 mt-2 white">Keyingisi</uiButton>
      </a-modal> -->

    <a-modal v-model:open="useTest.store.testResModal" centered @ok="useTest.store.testResModal = false">
      <p class="text-xl font-semibold">Sizning natijangiz</p>
      <p class="mt-4">
        Siz 25 ta testdan {{ useTest.store.testResBall[1] }} tasiga to'gri javob
        berdingiz
      </p>
      <p class="text-lg">
        Sizning balingiz <strong>{{ useTest.store.testResBall[0] }}%</strong>
      </p>
      <div class="flex items-center gap-[10px] mt-4 text-[red] font-[700]">
        <img class="h-4 w-4" src="@/assets/svg/test/true.svg" alt="" />
        <p>Afsuski test muvaffaqiyatsiz bajarildi!</p>
      </div>
      <p class="mt-2">
        Keyingi bosqichga o'tish uchun ushbu testdan o'tishingiz kerak!
      </p>
      <uiButton type="button" class="bg-[#FF852E] !h-9 mt-2 white !bg-opacity-50">Keyingisi</uiButton>
    </a-modal>

    <a-modal v-model:open="store.show_time" centered>
      <ul class="grid grid-cols-7 max-w-fit mx-auto py-5 gap-3 text-xl font-semibold text-center">
        <li>{{ useTest.store.time.days }}</li>
        <li>:</li>
        <li>{{ useTest.store.time.hours }}</li>
        <li>:</li>
        <li>{{ useTest.store.time.minutes }}</li>
        <li>:</li>
        <li>{{ useTest.store.time.seconds }}</li>
      </ul>
      <uiButton type="button" class="bg-[#FF852E] !h-9 mt-2 white w-full" @click="store.show_time = false">Davom etish
      </uiButton>
    </a-modal>
  </main>
</template>

<script setup>
definePageMeta({
  layout: false,
});
import Editor from "primevue/editor";
import { useLoadingStore, useTestStore, useGroupStore } from "@/store";

// const isLoading = useLoadingStore();
const useTest = useTestStore();
const useGroup = useGroupStore();
const isLoading = useLoadingStore();
const router = useRouter();
isLoading.addLoading("getUsers");

const store = reactive({
  selectedAnswer: "select",
  true_answers: {},
  show_time: false,
});

const variants = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function tryAgain() {
  useTest.store.slideStep = 0;
  useTest.store.isTestEnd = false;
  store.true_answers = {};
  useTest.store.check_result = [];
  useTest.getTests();
}

function NextLesson() {
  useTest.nextLesson();
}

function sendAnswers() {
  useTest.store.is_timeout = false;
  const true_asnwers = [];
  console.log(store.true_answers);
  for (let i in store.true_answers) {
    true_asnwers.push([+i, store.true_answers[i]]);
  }
  console.log(true_asnwers);
  useTest.checkAnswers(true_asnwers);
}

function selectedAnswer(id, variant) {
  if (!useTest.store.isTestEnd) {
    store.true_answers[id] = variant;
  }
}

function nextStep() {
  if (useTest.store.tests?.length - 1 > useTest.store.slideStep) {
    useTest.store.slideStep += 1;
  }
}

function checkTestTime(time, type) {
  if (router.currentRoute.value.query.g) {
    if (type == "start") {
      if (new Date(time).getTime() > new Date().getTime()) {
        return true;
      }
    } else if (type == "end") {
      if (new Date(time).getTime() < new Date().getTime()) {
        return true;
      }
    }
    return false;
  } else {
    console.log(useTest.store.test_errors);
    if (type == "start") {
      if (useTest.store.test_errors == "start date is invalid") {
        return true;
      }
    } else if (type == "end") {
      if (useTest.store.test_errors == "end date is invalid") {
        return true;
      }
    }
    return false;
  }
}

watch(
  () => useTest.store.slideStep,
  () => {
    const image = document.querySelector(".mainSlider");
    image.style.transform = `translateX(-${useTest.store.slideStep * 100}%)`;
  }
);

watch(
  () => useTest.store.is_timeout,
  () => {
    if (useTest.store.is_timeout) {
      sendAnswers();
    }
  }
);

onBeforeMount(() => {
  useTest.store.slideStep = 0;
  useTest.store.isTestEnd = false;
  store.true_answers = {};
  useTest.store.check_result = [];

  const group_id = router.currentRoute.value.query.g;
  if (group_id) {
    useGroup.getUsers(group_id);
    return;
  }
  useTest.getTests();
});
</script>

<style lang="scss" scoped>
* {
  user-select: none;
}
</style>
