<template>
  <!-- https://vuejsexamples.com/tag/drawing/ -->
  <!-- https://codepen.io/Lewitje/pen/MVommB -->

  <main>
    <UiStarAnimation
      v-if="useTest.store.isTestEnd && useTest.store.testResBall[0] >= 70"
    />
    <nav>
      <ul class="full_flex gap-3 md:py-5 py-2">
        <li class="full_flex h-8 w-8 b_cfe2 rounded-[4px]">
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
    </nav>
    <section
      class="bg-white rounded-md pb-20 overflow-hidden overflow-y-auto md:max-h-[calc(100vh_-_184px)] md:min-h-[calc(100vh_-_184px)] max-h-[calc(100vh_-_120px)] min-h-[calc(100vh_-_120px)]"
    >
      <div class="full_flex z-50 relative">
        <div
          class="flex sm:flex-row flex-col items-start sm:gap-5 gap-[25px] mt-8 md:mb-[60px] mb-10 md:max-w-[50%] w-[95%]"
        >
          <img
            @click="closeTestPage"
            class="cursor-pointer md:-ml-[40px]"
            src="@/assets/svg/test/close.svg"
            alt=""
          />
          <div
            v-if="
              useTest.store.check_result &&
              !Object.keys(useTest.store.check_result).length
            "
            class="flex flex-wrap gap-3 min-w-[100%] overflow-hidden overflow-x-auto"
          >
            <!-- {{ store.true_answers[i.id] }} -->
            <p
              @click="
                () => {
                  useTest.store.slideStep = index;
                  useTest.store.slideStepId = i.id;
                }
              "
              v-for="(i, index) in useTest.store.tests"
              :class="store.true_answers[i.id] ? 'border bg_orange' : 'b_cee'"
              class="cursor-pointer sm:h-5 ml-1 sm:min-w-[20px] h-4 min-w-[16px] rounded-full"
            ></p>
          </div>
          <div
            v-else
            class="flex flex-wrap gap-3 min-w-[100%] overflow-hidden overflow-x-auto"
          >
            <p
              @click="
                () => {
                  useTest.store.slideStep = index;
                  useTest.store.slideStepId = i.id;
                }
              "
              v-for="(i, index) in useTest.store.tests"
              :class="useTest.store.check_result[i.id] ? 'b_c40' : 'b_cfe'"
              class="cursor-pointer sm:h-5 ml-1 sm:min-w-[20px] h-4 min-w-[16px] rounded-full"
            ></p>
            <p
              @click="
                () => {
                  useTest.store.slideStep = useTest.store.tests.length;
                }
              "
              class="cursor-pointer"
            >
              <img
                v-if="useTest.store.testResBall[0] >= 70"
                class="sm:h-5 h-4"
                src="@/assets/svg/test/success.svg"
                alt=""
              />
              <img
                v-else
                class="sm:h-5 h-4"
                src="@/assets/svg/test/fail.svg"
                alt=""
              />
            </p>
          </div>
        </div>
      </div>
      <!-- test -->
      <div class="overflow-hidden mx-auto md:max-w-[50%] preview">
        <div class="mainSlider duration-500 flex w-full">
          <!-- test -->
          <div
            class="min-w-full md:px-0 px-4"
            v-for="(i, index) in useTest.store.tests"
          >
            <div class="pb-8">
              <h1 class="font-[700] md:text-2xl text-xl">
                {{ index + 1 }}.
                <Editor
                  class="border_ced rounded-md overflow-hidden"
                  v-model="i.question"
                  readonly
                />
              </h1>
            </div>
            <p class="bg-[#CCCCCC] h-[1px] sm:mx-0 -mx-4"></p>
            <div>
              <div class="space-y-4 mt-[30px] mb-5">
                <button
                  v-for="(variant, index) in i.variants"
                  @click="selectedAnswer(i.id, variant)"
                  class="!min-h-[40px] px-3 rounded-[10px] border full_flex gap-5"
                  :class="
                    store.true_answers[i.id] == variant
                      ? 'orange border-[#FF852E]'
                      : 'border-[#E1E1E1]'
                  "
                >
                  <span
                    class="block border rounded-[4px] full_flex leading-[21px] text-sm font-medium min-h-[24px] w-6"
                    >{{ variants[index] }}</span
                  >
                  <span class="!text-start" v-html="variant"></span>
                </button>
              </div>
            </div>
          </div>
          <!-- result -->
          <div
            class="flex items-center justify-center min-w-full min-h-[calc(100vh_-_380px)]"
          >
            <div class="p-5 sm:text-start text-center">
              <img
                v-if="useTest.store.testResBall[0] >= 70"
                class="mx-auto mb-10"
                src="@/assets/svg/register/registered.svg"
                alt=""
              />
              <img
                v-else
                class="mx-auto mb-10"
                src="@/assets/svg/test/fail_result.svg"
                alt=""
              />
              <h1
                v-if="useTest.store.testResBall[0] >= 70"
                class="orange font-bold text-2xl"
              >
                Siz muvaffaqiyatli o‘tdingiz
              </h1>
              <h1 v-else class="orange font-bold text-2xl">
                Afsuski test mufaqqiyatsiz bo‘ldi
              </h1>
              <p
                v-if="useTest.store.testResBall[0] >= 70"
                class="_c66 mt-4 mb-10"
              >
                Sinov tugallandi
              </p>
              <p v-else class="_c66 mt-4 mb-10 md:w-[60%] mx-auto">
                Yetarli bal to‘play olmadingiz. Hechqisi yo‘q qayta topshirib
                ko‘ring
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
        </div>
      </div>
    </section>
    <footer
      class="flex items-center fixed bottom-0 w-full justify-between border-t border-[#EDEDED] bg-white md:h-[112px] h-[70px] md:px-[100px] px-4"
    >
      <div
        v-if="!useTest.store.isTestEnd"
        class="flex items-center gap-[10px] text-[#656565]"
      >
        <img src="@/assets/svg/test/flag.svg" alt="" />
        <p class="w-[112px] font-medium text-sm sm:block hidden">
          Muammo haqida xabar bering
        </p>
      </div>
      <uiButton
        v-if="useTest.store.isTestEnd"
        @click="tryAgain"
        :class="
          useTest.store.testResBall[0] < 70
            ? 'md:block hidden bg_orange white'
            : 'border border-[#BBBBBB] _c24'
        "
        class="!flex items-center justify-center gap-[10px] md:w-auto w-full z-50 relative"
      >
        <img
          :class="useTest.store.testResBall[0] < 70 ? '' : 'hidden'"
          src="@/assets/svg/test/try_again.svg"
          alt=""
        />
        <img
          :class="useTest.store.testResBall[0] < 70 ? 'hidden' : ''"
          src="@/assets/svg/test/try_again_black.svg"
          alt=""
        />
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
        <uiButton
          v-if="
            Object.keys(store.true_answers)?.length !=
            useTest.store.tests?.length
          "
          @click="nextStep"
          class="bg_orange white"
          >Keyingisi</uiButton
        >
        <uiButton
          :type="isLoading.isLoadingType('checkAnswers') ? 'button' : 'submit'"
          v-else
          @click="sendAnswers"
          class="bg_orange white"
          >Yakunlash</uiButton
        >
      </div>
      <uiButton
        type="button"
        v-if="useTest.store.isTestEnd"
        :class="
          useTest.store.testResBall[0] < 70
            ? 'md:block hidden bg-[#DDDDDD]'
            : 'bg_orange'
        "
        @click="NextLesson"
        class="white md:w-auto w-full"
        >Keyingisi</uiButton
      >
    </footer>

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

    <a-modal
      v-model:open="useTest.store.testResModal"
      centered
      @ok="useTest.store.testResModal = false"
    >
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
      <uiButton
        type="button"
        class="bg-[#FF852E] !h-9 mt-2 white !bg-opacity-50"
        >Keyingisi</uiButton
      >
    </a-modal>
  </main>
</template>

<script setup>
definePageMeta({
  layout: false,
});
import Editor from "primevue/editor";
import { useLoadingStore, useTestStore } from "@/store";

// const isLoading = useLoadingStore();
const useTest = useTestStore();
const isLoading = useLoadingStore();
const router = useRouter();

const store = reactive({
  selectedAnswer: "select",
  true_answers: {},
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

function closeTestPage() {
  const params = router.currentRoute.value.params;
  const query = router.currentRoute.value.query;
  navigateTo(`/lessons/${params.subject}/${params.id}?class=${query.class}`);
}

function NextLesson() {
  useTest.nextLesson();
}

function sendAnswers() {
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

watch(
  () => useTest.store.slideStep,
  () => {
    const image = document.querySelector(".mainSlider");
    image.style.transform = `translateX(-${useTest.store.slideStep * 100}%)`;
  }
);

onBeforeMount(() => {
  useTest.getTests();
});

onBeforeUnmount(() => {
  useTest.store.slideStep = 0;
  useTest.store.isTestEnd = false;
  store.true_answers = {};
  useTest.store.check_result = [];
});
</script>

<style lang="scss" scoped>
* {
  user-select: none;
}
</style>
