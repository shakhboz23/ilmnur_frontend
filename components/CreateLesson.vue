<template>
  <main class="flex gap-6 bg-[#F6F6F6]">
    <!-- <a-button type="primary" @click="handleOpen(true)">Begin Tour</a-button> -->
    <section class="w-full rounded-md subject_shadow bg-white overflow-hidden">
      <h1
        class="border-b border-[#EDEDED] py-[30px] px-5 text-xl font-semibold leading-[30px]"
      >
        Mavzuni yaratishni boshlang:
      </h1>
      <div
        class="flex items-center flex-col min-h-[calc(100vh_-_250.5px)] pb-10 max-h-[calc(100vh_-_250.5px)] overflow-hidden overflow-y-auto px-5"
      >
        <div class="w-full" v-if="useContent.store.video.url">
          <iframe
            v-if="useContent.store.video.url?.includes('youtu')"
            :src="useContent.store.video.url"
            class="xl:h-[312px] md:h-[270px] sm:h-[250px] h-[172px] w-full sm:rounded-lg max-h-[312px] rounded-lg relative overflow-hidden bg-black"
            allowfullscreen
          ></iframe>
          <video
            v-else
            class="xl:h-[312px] md:h-[270px] sm:h-[250px] h-[172px] w-full sm:rounded-lg max-h-[312px] rounded-lg relative overflow-hidden bg-black"
            controls
          >
            <source :src="useContent.store.video.url" type="video/mp4" />
            <source :src="useContent.store.video.url" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div
          v-else
          class="full_flex flex-col cursor-pointer border-dashed border bg-[#F2F2F2] w-full my-5 min-h-[312px] rounded-lg"
        >
          <img src="@/assets/svg/lessons/add_video.svg" alt="" />
          <p class="font-medium">Add video</p>
        </div>
        <div class="py-6 px-5 w-full">
          <div
            v-if="useContent.store.video_id"
            class="xl:h-[312px] md:h-[270px] sm:h-[250px] h-[172px] sm:rounded-lg max-h-[312px] rounded-lg relative overflow-hidden bg-black"
          >
            <!-- <CldVideoPlayer
              class="!max-h-[312px] w-full rounded-lg overflow-hidden"
              height="312"
              :src="useContent.store.video_id"
              :colors="colors"
              :onPause="({ player }) => onPauseVideo(player)"
            />
            <div
              @click="playVideo"
              v-show="!store.is_playing"
              class="full_flex cursor-pointer absolute top-0 left-0 w-full h-[312px] bg-[#242424B2] z-10"
            >
              <img src="@/assets/svg/icon/play.svg" alt="" />
            </div> -->
            <iframe
              :src="useContent.store.video_id"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              class="w-full h-full"
            ></iframe>
          </div>
          <div
            v-html="useContent.create.content"
            @click="handleContentClick"
            id="content_data"
            class="my-6 space-y-6 w-[55%] mx-auto text-lg"
          ></div>
        </div>
        <div class="full_flex my-auto gap-10">
          <a-button
            ref="ref1"
            @click="openModal('video')"
            class="text-center w-20 h-[120px] !p-0 border-0 shadow-none"
          >
            <div class="full_flex h-20 w-20 bg-[#FFF3EB] rounded-full">
              <img src="@/assets/svg/subjects/video.svg" alt="" />
            </div>
            <p class="font-medium mt-4 text-md _c24">Video</p>
          </a-button>
          <a-button
            ref="ref2"
            @click="openModal('tekst')"
            class="text-center w-20 h-[120px] !p-0 border-0 shadow-none"
          >
            <div class="full_flex h-20 w-20 bg-[#FFF3EB] rounded-full">
              <img src="@/assets/svg/subjects/text.svg" alt="" />
            </div>
            <p class="font-medium mt-4 text-md _c24">Tekst</p>
          </a-button>
          <a-button
            ref="ref3"
            @click="openModal('image')"
            class="text-center w-20 h-[120px] !p-0 border-0 shadow-none"
          >
            <div class="full_flex h-20 w-20 bg-[#FFF3EB] rounded-full">
              <img src="@/assets/svg/subjects/image.svg" alt="" />
            </div>
            <p class="font-medium mt-4 text-md _c24">Rasm</p>
          </a-button>
        </div>
        <input
          @change="(e: any) => handleFileUpload(e, '')"
          class="input_file"
          type="file"
          accept="video/*"
          id="upload_file"
        />
      </div>
    </section>
    <section
      class="min-w-[292px] bg-white rounded-md subject_shadow overflow-hidden"
    >
      <h1
        class="border-b border-[#EDEDED] py-[30px] px-5 font-semibold leading-[30px]"
      >
        Kontent qo'shing
      </h1>
      <div
        class="max-h-[calc(100vh_-_250.5px)] overflow-hidden overflow-y-auto pb-8"
      >
        <div class="grid grid-cols-2">
          <div
            class="full_flex flex-col border-r border-b border-[#EDEDED] space-y-2 h-[120px]"
          >
            <img class="mx-auto" src="@/assets/svg/subjects/video.svg" alt="" />
            <p>Video</p>
          </div>
          <div
            class="full_flex flex-col border-b border-[#EDEDED] space-y-2 h-[120px]"
          >
            <img class="mx-auto" src="@/assets/svg/subjects/text.svg" alt="" />
            <p>Tekst</p>
          </div>
          <div
            class="full_flex flex-col border-r border-b border-[#EDEDED] space-y-2 h-[120px]"
          >
            <img class="mx-auto" src="@/assets/svg/subjects/image.svg" alt="" />
            <p>Rasm</p>
          </div>
          <div
            class="full_flex flex-col border-b border-[#EDEDED] space-y-2 h-[120px]"
          >
            <img
              class="mx-auto"
              src="@/assets/svg/subjects/settings.svg"
              alt=""
            />
            <p>Sozlamalalar</p>
          </div>
        </div>
        <div class="border-b border-[#EDEDED] px-5">
          <p class="pt-5">Resurslarni biriktiring</p>
          <button
            class="full_flex mt-6 mb-8 gap-4 h-[44px] border border-[#EDEDED] rounded-full w-full"
          >
            <img src="@/assets/svg/subjects/upload.svg" alt="" />
            Fayl biriktirish
          </button>
        </div>
        <div class="space-y-5 mt-6 px-5">
          <div class="relative">
            <a-button
              ref="ref5"
              @click="uploadVideoLesson"
              class="bg_orange font-semibold white w-full !px-6 h-12 !py-0 !rounded-full"
            >
              Davom etish
            </a-button>
            <UiCircleDivLoading
              v-if="isLoading.isLoadingType('uploadVideoLesson')"
              class="full_flex"
            />
          </div>
          <UiButton class="b_c40 font-semibold white w-full !px-6">
            Qoralamaga qo‘shish
          </UiButton>
        </div>
        <a-button
          ref="ref4"
          class="_c55 mt-8 border-b max-w-fit mx-auto cursor-pointer border-[#555555] border-0 r_0 !p-0 block"
          >Oldindan ko‘rish</a-button
        >
      </div>
    </section>

    <!-- create -->
    <a-modal
      class="min-w-[720px]"
      v-model:open="useContent.store.uploadModal"
      centered
    >
      <div class="space-y-3">
        <h1 class="font-semibold text-2xl">
          <span v-if="useContent.file.file_type == 'video'"
            >Video darslik (majburiy)</span
          >
          <span v-else-if="useContent.file.file_type == 'image'"
            >Rasm yuklash</span
          >
          <span v-else>Tekst</span>
        </h1>
        <a-tabs class="max-w-fit mx-auto" v-model:activeKey="store.videoType">
          <a-tab-pane key="file">
            <template #tab>Fayl</template>
          </a-tab-pane>
          <a-tab-pane key="youtube">
            <template #tab>Youtube</template>
          </a-tab-pane>
        </a-tabs>
        <div v-if="store.videoUploadStep == 1" class="full_flex gap-5">
          <a-button
            ref="ref1"
            @click="setVideoType('file')"
            class="text-center w-20 h-[120px] !p-0 border-0 shadow-none"
          >
            <div class="full_flex h-20 w-20 bg-[#FFF3EB] rounded-full">
              <img
                class="h-8 w-10"
                src="@/assets/svg/lessons/add_video.svg"
                alt=""
              />
            </div>
            <p class="font-medium mt-4 text-md _c24">Fayl</p>
          </a-button>
          <a-button
            ref="ref1"
            @click="setVideoType('youtube')"
            class="text-center w-20 h-[120px] !p-0 border-0 shadow-none"
          >
            <div class="full_flex h-20 w-20 bg-[#FFF3EB] rounded-full">
              <img
                class="h-6 w-8"
                src="@/assets/svg/lessons/youtube.svg"
                alt=""
              />
            </div>
            <p class="font-medium mt-4 text-md _c24">Youtube</p>
          </a-button>
          <!-- <div
            class="full_flex flex-col space-y-2 h-[120px]"
          >
            <img class="mx-auto" src="@/assets/svg/subjects/video.svg" alt="" />
            <p>Video</p>
          </div>
          <div
            class="full_flex flex-col space-y-2 h-[120px]"
          >
            <img class="mx-auto h-7 w-8" src="@/assets/svg/lessons/youtube.svg" alt="" />
            <p>Video</p>
          </div> -->
        </div>
        <div
          v-if="
            (useContent.file.file_type == 'video' ||
              useContent.file.file_type == 'youtube') &&
            store.videoUploadStep == 2
          "
        >
          <div v-if="store.videoType == 'file'">
            <div
              v-if="useContent.store.video_id"
              class="max-h-[312px] rounded-lg relative overflow-hidden bg-black"
            >
              <div
                @click="playVideo"
                v-show="!store.is_playing"
                class="full_flex cursor-pointer absolute top-0 left-0 w-full h-[312px] bg-[#242424B2] z-10"
              >
                <img src="@/assets/svg/icon/play.svg" alt="" />
              </div>
            </div>
            <label
              v-else
              for="upload_file"
              class="rounded-lg border block border-dashed border-[#EDEDED] h-[250px] full_flex flex-col gap-10 mt-3"
            >
              <p
                class="full_flex rounded-full !h-10 px-7 bg_orange font-semibold white"
              >
                Video yuklash
                <Loading />
              </p>
              <p class="w-[220px] text-center leading-6">
                Minimal o'lcham - 808 x 632 piksel. GIF tasvirlari
                jonlantirilmaydi.
              </p>
            </label>
          </div>
          <div v-else>
            <label for="youtube_link">Youtube linkini kiriting</label>
            <input
              id="youtube_link"
              type="text"
              v-model="useContent.file.file"
            />
            <!-- <input v-model="useContent.file.duration" type="number" /> -->
            <!-- <button @click="handleFileUpload('e', 'youtube')">Post</button> -->
          </div>
        </div>
        <div v-else-if="useContent.file.file_type == 'image'">
          <div
            v-if="useContent.store.previewImageUrl"
            class="max-h-[312px] rounded-lg relative overflow-hidden"
          >
            <img
              class="max-h-[312px] mx-auto"
              :src="useContent.store.previewImageUrl"
              alt=""
            />
          </div>
          <label
            v-else
            for="upload_file"
            class="rounded-lg border block border-dashed border-[#EDEDED] h-[290px] full_flex flex-col gap-10 mt-3"
          >
            <p
              class="full_flex rounded-full !h-10 px-7 bg_orange font-semibold white"
            >
              Rasm yuklash
              <Loading />
            </p>
            <p class="w-[220px] text-center leading-6">
              Minimal o'lcham - 808 x 632 piksel. GIF tasvirlari
              jonlantirilmaydi.
            </p>
          </label>
          <!-- <div class="space-y-2">
                        <label class="font-semibold" for="name">Mavzu nomi</label>
                        <input class="rounded-[12px]" id="name" type="text" placeholder="Darsni nomi" required>
                    </div> -->
        </div>
        <div v-else-if="useContent.file.file_type == 'tekst'">
          <Editor />
        </div>
        <div class="text-end">
          <UiButton
            @click="uploadData"
            type="button"
            class="bg_orange !mt-[30px] px-[60px] font-semibold white"
          >
            Davom etish
          </UiButton>
        </div>
      </div>
      <UiCircleDivLoading
        v-if="isLoading.isLoadingType('uploading')"
        class="full_flex rounded-lg"
      />
    </a-modal>
    <a-tour
      v-model:current="current"
      :open="open"
      :steps="steps"
      @close="handleOpen(false)"
    />
  </main>
</template>

<script lang="ts" setup>
import { useContentStore, useLessonStore, useLoadingStore } from "~/store";
import { ref, createVNode } from "vue";
import type { TourProps } from "ant-design-vue";

const useContent = useContentStore();
const useLesson = useLessonStore();
const isLoading = useLoadingStore();
const store = reactive({
  uploadModal: false,
  modalType: "video",
  uploadedVideo: "",
  uploadedImage: "",
  replace: false,
  is_playing: false,
  videoType: "",
  videoUploadStep: 1,
  activeTab: 0,
});

const colors = {
  accent: "#FFFFFF",
  base: "#000",
  text: "#FFFFFF",
};

const open = ref<boolean>(false);

const ref1: any = ref(null);
const ref2: any = ref(null);
const ref3: any = ref(null);
const ref4: any = ref(null);
const ref5: any = ref(null);
const current = ref(0);
const steps: TourProps["steps"] = [
  {
    title: "Video darslik",
    description: "Bu yerda video darslik yuklashingiz mumkin.",
    cover: createVNode("img", {
      alt: "tour.png",
      src: "https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png",
    }),
    target: () => ref1.value && ref1.value.$el,
  },
  {
    title: "Tekst yuklash",
    description: "Bu yerda tekst yuklashingiz mumkin.",
    target: () => ref2.value && ref2.value.$el,
  },
  {
    title: "Rasm yuklash",
    description: "Bu yerda rasm yuklashingiz mumkin.",
    target: () => ref3.value && ref3.value.$el,
  },
  {
    title: "Darslikni ko'rib chiqish",
    description:
      "Ma'lumotlarni yuklashdan avval ko'rib chiqish tavsiya qilinadi",
    target: () => ref4.value && ref4.value.$el,
  },
  {
    title: "Yakunlash",
    description:
      "Ushbu tugmani bosish orqali siz darslikni o'quvchilar uchun taqdim qilishingiz mumkin",
    target: () => ref5.value && ref5.value.$el,
  },
];

const handleOpen = (val: boolean): void => {
  open.value = val;
};

function openModal(type: string) {
  useContent.file.file_type = type;
  useContent.store.uploadModal = true;
}

function playVideo() {
  const video: any = document.querySelector(".vjs-tech");
  video.currentTime = 0;
  (document.querySelector(".vjs-big-play-button") as HTMLElement)?.click();
  store.is_playing = true;
}

function setVideoType(type: string) {
  store.videoType = type;
  store.videoUploadStep = 2;
}

function convertToEmbedUrl(youtubeUrl: string) {
  // Extract the video ID from the YouTube URL
  const videoId =
    youtubeUrl.split("v=")[1]?.split("&")[0] || youtubeUrl.split("/").pop();

  // Return the embeddable URL
  return `https://www.youtube.com/embed/${videoId}`;
}

function uploadData() {
  if (store.videoType == "youtube") {
    useContent.store.video.url = convertToEmbedUrl(useContent.file.file);
  }
  if (useContent.create.content == undefined) {
    useContent.create.content = ``;
  }
  console.log(useContent.create.content);
  if (store.replace) {
    useContent.create.content = isLoading.store.editor;
  } else if (useContent.file.file_type == "image") {
    useContent.create.content += `<img class="max-h-[400px] mx-auto" src="${useContent.store.previewImageUrl}" alt="">`;
  } else {
    useContent.create.content += `<div>${isLoading.store.editor}</div>`;
  }
  useContent.store.uploadModal = false;
  store.replace = false;
  isLoading.store.editor = ``;
}

function handleFileUpload(e: any, type: string) {
  if (type == "youtube") {
    useContent.file.file_type = "youtube";
    useContent.file.is_active = true;
    useContent.uploadVideo();
    return;
  }
  const file = e.target.files[0];
  const url = URL.createObjectURL(file);

  if (useContent.file.file_type == "video") {
    useContent.file.file = file;
    useContent.file.is_active = true;
    useContent.store.video.file = file;
    useContent.store.video.url = url;
    // useContent.uploadVideo();
  } else {
    // useContent.file.file = file;
    // useContent.file.is_active = false;
    // useContent.uploadVideo();
    useContent.create.content += `<img class="max-h-[400px] mx-auto" src="${url}" alt="">`;
  }
  // document.getElementById("upload_file").value = "";
  (document.getElementById("upload_file") as HTMLInputElement).value = "";
}

function uploadVideoLesson() {
  if (useContent.store.video.url) {
    useContent.uploadContent();
  }
}

function handleContentClick() {
  const data = document.getElementById("content_data")?.innerHTML || ``;
  isLoading.store.editor = data;
  useContent.file.file_type == "tekst";
  useContent.store.uploadModal = true;
  store.replace = true;
}

onBeforeMount(() => {
  useLesson.getLessonById();
});

onMounted(() => {
  handleOpen(true);
});
</script>

<style lang="scss" scoped></style>
