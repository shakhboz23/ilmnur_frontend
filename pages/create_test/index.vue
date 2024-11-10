<template>
  <main class="rounded-[6px] overflow-hidden overflow-y-auto h-full max-h-[calc(100vh_-_160px)]">
    <section class="rounded-[6px] overflow-hidden">
      <h1 class="text-xl font-semibold leading-[30px] pt-8 pb-6 bg-white px-9">
        Test yaratishni boshlang:
      </h1>
      <div class="mt-6 px-9">
        <div class="flex items-center justify-between">
          <a-select v-model:value="useTest.store.questions_count" class="min-w-[145px] test_arrow !h-[44px] sr_12"
            :options="questions_count.map((pro) => ({
              label: `${pro.value} talik savollar`,
              value: pro.value,
            }))
              " required>
            <template #suffixIcon>
              <div class="full_flex bg-[#FFF3EB] w-[42px] !h-[42px]">
                <img src="@/assets/svg/icon/arrow.svg" alt="" />
              </div>
            </template>
          </a-select>
          <div class="flex gap-2">
            <div>
              <label for="import_file" class="full_flex gap-2 bg-white p-1.5 rounded-md border_ced cursor-pointer">
                <img class="h-7 w-7" src="@/assets/svg/image/word.png" alt="" />
                <p>WORD</p>
              </label>
            </div>
            <button @click="store.settings = true" class="bg-white rounded-md p-1.5 w-10">
              <img class="mx-auto" src="@/assets/svg/subjects/settings.svg" alt="" />
            </button>
          </div>
        </div>
        <div class="flex gap-[10px] my-6">
          <button v-for="i in useTest.store.questions_count" @click="store.slideStep = i" :class="[
            store.slideStep == i ? 'border border-[#40E746]' : 'border_ced',
            checkQuestion(i) ? 'bg-[#40E746]' : '',
          ]" class="h-10 w-10 bg-white r_2 _c55">
            {{ i }}
          </button>
        </div>
      </div>
      <div class="bg-white px-9 py-6">
        <div class="flex items-center justify-between">
          <p class="text-2xl">
            <span class="font-semibold text-[28px]">{{ store.slideStep }}.</span>
            Savol
          </p>
          <a-select v-model:value="useTest.test[store.slideStep].type"
            class="!relative min-w-[145px] test_arrow !h-[44px] sr_12" :options="sinf.map((pro) => ({ label: pro.label, value: pro.value }))
              " required>
            <template #suffixIcon>
              <div class="full_flex bg-[#FFF3EB] w-[42px] !h-[42px]">
                <img src="@/assets/svg/icon/arrow.svg" alt="" />
              </div>
            </template>
          </a-select>
        </div>
        <swiper @mousewheel="mouseSlider" @slider-move="changeSlide" :watchSlidesProgress="true" :slidesPerView="1"
          :spaceBetween="30" :pagination="{ clickable: true }" class="mySwiper" :modules="modules">
          <swiper-slide :id="step" v-for="step in 16">
            <section>
              <div class="w-[70%]">
                <div class="flex overflow-hidden overflow-x-auto">
                  <div v-for="img in store.questions" class="max-h-min max-w-min min-h-fit min-w-fit">
                    <img class="max-h-[200px]" :src="img" alt="" />
                  </div>
                </div>
                <!-- <a-textarea
                  id="question_text"
                  @input="handleQuestion"
                  v-model:value="useTest.test[step].question[0]"
                  placeholder="Autosize height with minimum and maximum number of lines"
                  :auto-size="{ minRows: 2, maxRows: 5 }"
                /> -->
                <ClientOnly>
                  <Editor v-model="useTest.test[step].question[0]" />
                </ClientOnly>
                <label class="font-medium" for="resourses">Resurslarni biriktiring</label>
                <div class="full_flex my-auto space-x-10 mt-5">
                  <a-button ref="ref1" @click="openModal('video')"
                    class="text-center w-12 h-[100px] !p-0 border-0 shadow-none">
                    <div class="full_flex mx-auto h-10 w-10 bg-[#FFF3EB] rounded-full">
                      <img class="w-[40%]" src="@/assets/svg/subjects/video.svg" alt="" />
                    </div>
                    <p class="font-medium mt-4 text-xs _c24">Video</p>
                  </a-button>
                  <a-button ref="ref2" @click="openModal('tekst')"
                    class="text-center w-12 h-[100px] !p-0 border-0 shadow-none">
                    <div class="full_flex mx-auto h-10 w-10 bg-[#FFF3EB] rounded-full">
                      <img class="w-[40%]" src="@/assets/svg/subjects/text.svg" alt="" />
                    </div>
                    <p class="font-medium mt-4 text-xs _c24">Tekst</p>
                  </a-button>
                  <a-button ref="ref3" @click="openModal('image')"
                    class="text-center w-12 h-[100px] !p-0 border-0 shadow-none">
                    <div class="full_flex mx-auto h-10 w-10 bg-[#FFF3EB] rounded-full">
                      <img class="w-[40%]" src="@/assets/svg/subjects/image.svg" alt="" />
                    </div>
                    <p class="font-medium mt-4 text-xs _c24">Rasm</p>
                  </a-button>
                </div>
                <label @click="store.fileType = 'question'" for="upload_question"
                  class="max-w-fit full_flex mt-6 gap-4 h-[44px] border border-[#EDEDED] rounded-full px-8">
                  <img class="cursor-pointer" src="@/assets/svg/subjects/upload.svg" alt="" />
                  Fayl biriktirish
                </label>
                <hr class="border_ced my-6 !border-b-0" />
                <div class="space-y-6">
                  <h1 class="-mb-3">Variantlar</h1>
                  <p>To‘g‘ri javobni belgilang</p>
                  <div class="space-y-6" v-if="
                    useTest.test[step]?.type == 'variant' ||
                    useTest.test[step]?.type == 'refillable'
                  ">
                    <div v-for="i in 5" class="flex items-center gap-4">
                      <div class="flex items-center gap-4 b_cf5 r_8 w-full px-4">
                        <a-checkbox v-model:checked="checked"> </a-checkbox>
                        <img class="max-h-[160px] my-4" v-if="
                          useTest.test[step]?.variant[i] &&
                          typeof useTest.test[step]?.variant[i] == 'object'
                        " :src="useTest.test[step]?.variant[i][1]" alt="" />
                        <ClientOnly v-else>
                          <Editor class="w-full -mr-4" v-model="useTest.test[step].variant[i]" />
                        </ClientOnly>
                      </div>
                      <label @click="setFileData(i, 'variant')" for="upload_question">
                        <img class="cursor-pointer" src="@/assets/svg/subjects/upload.svg" alt="" />
                      </label>
                    </div>
                  </div>
                  <div v-else-if="useTest.test[step]?.type == 'multiple'">
                    <div v-for="i in 5">
                      <hr v-if="i != 1" class="border_ced my-6 !border-b-0" />
                      <div class="grid grid-cols-2 gap-6">
                        <div v-for="i in 2" class="flex items-center gap-4">
                          <div class="flex items-center gap-4 b_cf5 r_8 w-full px-4">
                            <a-checkbox v-model:checked="checked"> </a-checkbox>
                            <img class="max-h-[160px] my-4" v-if="
                              useTest.test[step]?.variant[i] &&
                              typeof useTest.test[step]?.variant[i] ==
                              'object'
                            " :src="useTest.test[step]?.variant[i][1]" alt="" />
                            <input v-else v-model="useTest.test[step].variant[i]"
                              class="border-0 bg-transparent p-0 rounded-[0]" type="text" placeholder="Variant uchun" />
                          </div>
                          <label @click="setFileData(i, 'variant')" for="upload_question">
                            <img class="cursor-pointer" src="@/assets/svg/subjects/upload.svg" alt="" />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div v-else-if="useTest.test[step]?.type == 'customizable'" class="b_cf5 r_8 px-4">
                    <div v-for="i in 3">
                      <div class="flex items-center gap-4">
                        <div class="flex items-center gap-4 r_8 w-full">
                          <a-checkbox v-model:checked="checked"> </a-checkbox>
                          <img class="max-h-[160px] my-4" v-if="
                            useTest.test[step]?.variant[i] &&
                            typeof useTest.test[step]?.variant[i] == 'object'
                          " :src="useTest.test[step]?.variant[i][1]" alt="" />
                          <input v-else v-model="useTest.test[step].variant[i]"
                            class="border-0 bg-transparent p-0 rounded-[0]" type="text" placeholder="Variant uchun" />
                        </div>
                        <label @click="setFileData(i, 'variant')" for="upload_question">
                          <img class="cursor-pointer" src="@/assets/svg/subjects/upload.svg" alt="" />
                        </label>
                      </div>
                      <hr v-if="i != 1" class="border_ced !border-b-0" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </swiper-slide>
        </swiper>
        <div class="text-end w-[70%] mt-6">
          <UiButton v-loading="isLoading.isLoadingType('createTest')" v-if="store.is_completed" @click="nextQuestion"
            class="!h-12 font-semibold b_c40 relative white !px-6">
            Yuklash
            <UiCircleDivLoading v-if="isLoading.isLoadingType('createTest')" class="full_flex scale-75 rounded-lg" />
          </UiButton>
          <UiButton v-else @click="nextQuestion" class="!h-12 font-semibold bg_orange relative white !px-6">
            Keyingi
            <UiCircleDivLoading v-if="isLoading.isLoadingType('createTest')" class="full_flex scale-75 rounded-lg" />
          </UiButton>
        </div>
      </div>
    </section>

    <input @change="handleFileUpload" class="input_file" type="file" id="upload_question" />
    <input @change="importFile" class="input_file" type="file" id="import_file" />

    <!-- create -->
    <a-modal class="max-w-[440px]" v-model:open="store.settings" centered>
      <div class="flex justify-between items-center w-full">
        <h1 class="font-semibold text-2xl">Sozlamalalar</h1>
      </div>
      <div class="mt-4 space-y-4">
        <div class="space-y-2">
          <label for="name">Boshlanish vaqti</label>
          <div class="flex gap-2">
            <a-date-picker class="w-full" v-model:value="useTest.test_settings.start_date" placeholder="0000-00-00" />
            <a-time-picker v-model:value="useTest.test_settings.start_date" format="HH:mm" placeholder="00:00" />
          </div>
        </div>
        <div class="space-y-2">
          <label for="name">Tugash vaqti</label>
          <div class="flex gap-2">
            <a-date-picker class="w-full" v-model:value="useTest.test_settings.end_date" placeholder="0000-00-00" />
            <a-time-picker v-model:value="useTest.test_settings.end_date" format="HH:mm" placeholder="00:00" />
          </div>
        </div>
        <div class="space-y-2">
          <label for="name">Test muddati</label>
          {{ useTest.test_settings.period }}
          <div>
            <a-time-picker @change="(val) => {
              const hours = val.split(':');
              const hour = +hours[0] * 60;
              const minute = +hours[1];
              useTest.test_settings.period = minute + hour;
            }
              " format="HH:mm" value-format="HH:mm" placeholder="00:00" />
          </div>
        </div>
        <div class="space-y-2">
          <h2>Saralash</h2>
          <label for="sortnum">Saralash bosqichi</label>
          <div class="flex items-center gap-4" v-for="(i, index) in useTest.store.test_step">
            {{ index + 1 }}.
            <a-select v-model:value="useTest.test_settings.sort_level[index]"
              class="min-w-[80px] test_arrow !h-[42px] sr_12" show-search required>
              <a-select-option v-for="i in useTest.store.test_count" :value="i">{{ i }}</a-select-option>
              <template #suffixIcon>
                <div class="full_flex bg-[#FFF3EB] w-[42px] !h-[42px]">
                  <img src="@/assets/svg/icon/arrow.svg" alt="" />
                </div>
              </template>
            </a-select>
            <p @click="addTestStep('add')" v-if="useTest.store.test_step == index + 1"
              class="full_flex min-w-[50px] h-[50px] rounded-full border border-[#CCCCCC] cursor-pointer">
              <img src="@/assets/svg/icon/plus.svg" alt="" />
            </p>
            <p v-else @click="addTestStep('remove', index)"
              class="full_flex min-w-[50px] h-[50px] rounded-full border border-[#CCCCCC] cursor-pointer">
              <img src="@/assets/svg/icon/minus.svg" alt="" />
            </p>
          </div>
          <div class="grid grid-cols-3">
            <div class="space-y-2">
              <label for="sortnum">Testlar soni</label>
              <a-select v-model:value="useTest.test_settings.test_count" class="min-w-[80px] test_arrow !h-[42px] sr_12"
                show-search required>
                <a-select-option v-for="i in useTest.store.test_count" :value="i">{{ i }}</a-select-option>
                <template #suffixIcon>
                  <div class="full_flex bg-[#FFF3EB] w-[42px] !h-[42px]">
                    <img src="@/assets/svg/icon/arrow.svg" alt="" />
                  </div>
                </template>
              </a-select>
            </div>
          </div>
        </div>
      </div>
    </a-modal>
  </main>
</template>

<script setup>
definePageMeta({
  layout: "search",
});
import Editor from "primevue/editor";
import { useTestStore, useLoadingStore, useContentStore } from "~/store";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import mammoth from "mammoth";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const modules = [Pagination];
// const value = ref(
//   `<div>Hello World!</div><div>PrimeVue <b>Editor</b> Rocks</div><div><br></div>`
// );

const useTest = useTestStore();
const useContent = useContentStore();
const isLoading = useLoadingStore();
const store = reactive({
  questions: [],
  questionmodal: false,
  cursorPosition: "",
  fileId: "",
  fileType: "",
  mouse_wheel: "",
  slideStep: 1,
  questions_count: 1,
  not_completed: [],
  is_completed: false,
  convertedContent: "",
  settings: false,
});
const sinf = [
  {
    label: "Variantli",
    value: "variant",
  },
  {
    label: "Ko'p tanlovli",
    value: "multiple",
  },
  {
    label: "To'ldiriladigan",
    value: "refillable",
  },
  {
    label: "Moslashtiriladigan",
    value: "customizable",
  },
];

const questions_count = [
  {
    value: 1,
  },
  {
    value: 10,
  },
  {
    value: 16,
  },
  {
    value: 20,
  },
  {
    value: 40,
  },
];

function addTestStep(type, index) {
  if (type == "add") {
    useTest.test_settings.sort_level.push([]);
    useTest.store.test_step += 1;
  } else {
    useTest.test_settings.sort_level.splice(index, 1);
    useTest.store.test_step -= 1;
  }
}

async function handleFileUpload(e) {
  const file = e.target.files[0];
  const url = URL.createObjectURL(file);
  console.log(store.fileType);
  if (store.fileType == "question") {
    useTest.test[store.slideStep].question.push(file);
    store.questions.push(url);
  } else {
    useTest.test[store.slideStep].variant[store.fileId] = [file, url];
  }
  document.getElementById("upload_question").value = "";
}

async function importFile(event) {
  const file = event.target.files[0];
  if (!file) return;
  const result = await convertFileToHtml(file);
  console.log(result);
  store.convertedContent = result.value;
  htmlTableToArray(result.value);
}

function htmlTableToArray(htmlTable) {
  const rows = htmlTable.match(/<tr>.*?<\/tr>/gs); // Extract rows
  if (!rows) return [];

  let result = rows.map((row) => {
    const cells = row.match(/<td>(.*?)<\/td>/gs); // Extract cells
    if (!cells) return [];
    return cells.map((cell) => cell.replace(/<\/?td>/g, "")); // Remove <td> tags
  });

  result.shift();
  console.log(result, "res");
  useTest.store.questions_count = result.length;
  for (let i = 0; i < result.length; i++) {
    useTest.test[i + 1].question[0] = result[i][1];
    for (let j = 2; j < result[i]?.length; j++) {
      useTest.test[i + 1].variant[j - 1] = result[i][j];
    }
    console.log(useTest.test[i + 1].variant);
  }
  // return result;
  // const regex = /<p>(.*?)<\/p>/g;
  // const matches = htmlTable.match(regex);
  // if (!matches) return [];

  // matches.map((match) => match.replace(/<\/?p>/g, ""));
  // console.log(matches);
}

function convertFileToHtml(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = async (event) => {
      const arrayBuffer = event.target.result;
      console.log(arrayBuffer);
      const result = await mammoth.convertToHtml(
        { arrayBuffer },
        {
          styleMap: ["p[style-name='Equation'] => span.math-display:fresh"],
        }
      );
      console.log(result);
      resolve(result);
    };
    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
}

function setFileData(id, type) {
  console.log(id, type);
  store.fileId = id;
  store.fileType = type;
}

function changeSlide() {
  setTimeout(() => {
    store.slideStep = +document.querySelector(".swiper-slide-visible")?.id;
  }, 200);
}

function mouseSlider(e) {
  // e.preventDefault(); // Prevent default scroll behavior
  // Determine scroll direction
  if (e.deltaX > 0) {
    store.mouse_wheel += 1;
    if (store.mouse_wheel % 10 == 0) {
      if (store.slideStep < useTest.store.questions_count) {
        store.slideStep += 1;
      }
      store.mouse_wheel = 0;
    }
    console.log("Scrolling to the right");
  } else if (e.deltaX < 0) {
    store.mouse_wheel += 1;
    if (store.mouse_wheel % 10 == 0) {
      if (store.slideStep > 1) {
        store.slideStep -= 1;
      }
      store.mouse_wheel = 0;
    }
    console.log("Scrolling to the left");
  }
}

function checkQuestion(index) {
  let t;
  let step;
  if (useTest.test[index].question?.length) {
    t = 0;
    for (let i of Object.values(useTest.test[index].variant)) {
      if (i) {
        t++;
      }
      if (t == 2) {
        step = store.not_completed.indexOf(index);
        if (step == -1) {
          store.not_completed.push(index);
        }
        return true;
      }
    }
  }
  step = store.not_completed.indexOf(index);
  if (step != -1) {
    store.not_completed.splice(step, 1);
  }
  return false;
}

function nextQuestion() {
  if (store.is_completed) {
    useTest.createTest();
  }
  store.not_completed.sort((a, b) => a - b);
  for (let i = 0; i < useTest.store.questions_count - 1; i++) {
    if (store.not_completed[i + 1] - store.not_completed[i] != 1) {
      store.slideStep = store.not_completed[i] + 1;
      return;
    }
  }
  if (
    Object.keys(store.not_completed)?.length == useTest.store.questions_count
  ) {
    store.is_completed = true;
    return;
  }
  if (store.slideStep == useTest.store.questions_count) {
    return;
  }
  store.slideStep += 1;
}

watch(
  () => store.slideStep,
  () => {
    const swiper = document.querySelector(".swiper-pagination-clickable");
    if (swiper && swiper.children.length >= store.slideStep) {
      const secondChild = swiper.children[store.slideStep - 1];
      if (secondChild) {
        secondChild.click();
      }
    }
  }
);
</script>

<style lang="scss" scoped></style>
