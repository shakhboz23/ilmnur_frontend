<template>
  <main class="sm:bg-white">
    <section v-if="!useContent.store.create_lesson">
      <div class="video_lesson w-full md:p-[30px] sm:p-4">
        <nav
          class="flex items-center justify-between _c92 border-b border-[#EDEDED] bg-white pb-4 mb-5 sm:pt-0 sm:px-0 pt-4 px-4"
        >
          <div
            @click="$router.back()"
            class="flex items-center gap-4 cursor-pointer max-w-fit"
          >
            <img src="@/assets/svg/icon/back_arrow.svg" alt="" />
            <p class="text-lg font-semibold sm:block hidden">Orqaga</p>
          </div>
          <p class="text-xl font-semibold text-black">Video dars</p>
          <div class="flex items-center gap-3">
            <img
              @click="backToMain"
              class="cursor-pointer"
              src="@/assets/svg/icon/exit.svg"
              alt=""
            />
            <!-- <button
            class="font-medium b_c40 h-10 px-5 rounded-full white whitespace-nowrap"
          >
            Test qo'shish
          </button> -->
          </div>
        </nav>
        <div
          v-if="useVideoLesson.store.video_lesson?.video_lesson?.length"
          class="bg-white"
        >
          <div
            v-if="!isLoading.isLoadingType('getLessonById') && useVideoLesson.store.video_lesson?.video_lesson[0].video"
            class="lessons xl:h-[312px] md:h-[270px] sm:h-[250px] h-[172px] sm:rounded-lg relative overflow-hidden"
          >
            <CldVideoPlayer
              class="xl:h-[312px] md:h-[270px] sm:h-[250px] h-[172px] w-full sm:rounded-lg overflow-hidden"
              :src="
                useVideoLesson.store.video_lesson?.video_lesson[0].video
                  ?.public_id
              "
              :colors="colors"
              :onPause="({ player }) => onPauseVideo(player)"
            />
            <div
              @click="playVideo"
              v-show="!store.is_playing"
              class="full_flex cursor-pointer absolute top-0 left-0 w-full xl:h-[312px] md:h-[270px] sm:h-[250px] h-[172px] bg-[#242424B2] z-10"
            >
              <img src="@/assets/svg/icon/play.svg" alt="" />
            </div>
          </div>
          <!-- <div
            v-if="!isLoading.isLoadingType('getLessonById')"
            class="xl:h-[312px] md:h-[270px] sm:h-[250px] h-[172px] sm:rounded-lg relative overflow-hidden"
          >
            <iframe
              :src="
                useVideoLesson.store.video_lesson?.video_lesson[0].video?.url
              "
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              class="w-full h-full"
            ></iframe>
          </div> -->
          <div class="sm:px-0 px-4">
            <h1
              class="md:text-[28px] text-xl font-semibold md:mt-[30px] mt-5 sm:mb-6 mb-5 md:text-center"
            >
              {{ useVideoLesson.store.video_lesson?.title }}
            </h1>
            <div
              v-html="
                useVideoLesson.store.video_lesson?.video_lesson[0]?.content
              "
              class="md:w-[55%] mx-auto sm:text-lg space-y-5"
            ></div>
            <div class="full_flex sm:mt-14 mt-10 pb-[60px]">
              <button
                v-if="useVideoLesson.store.video_lesson?.tests[0]?.id"
                @click="
                  nextPage(
                    useVideoLesson.store.video_lesson.video_lesson[0]?.lesson_id
                  )
                "
                class="w-[55%] font-medium bg_orange h-10 px-5 rounded-full white"
              >
                Keyingi
              </button>
              <button
                v-else-if="isLoading.user.data.current_role == 'teacher'"
                @click="
                  nextPage(
                    useVideoLesson.store.video_lesson.video_lesson[0]
                      ?.lesson_id,
                    'create_test'
                  )
                "
                class="w-[55%] font-medium b_c40 h-10 px-5 rounded-full white"
              >
                Test qo'shish
              </button>

              <button
                v-else
                class="w-[55%] font-medium bg-[red] h-10 px-5 rounded-full white"
              >
                Test mavjud emas
              </button>
            </div>
          </div>
        </div>
        <div
          v-else-if="isLoading.user.data.current_role == 'teacher'"
          class="flex flex-col items-center justify-center gap-5 max-h-[312px] min-h-[312px] overflow-hidden"
        >
          Video darslik mavjud emas
          <div>
            <UiButton @click="createLesson" class="bg_orange white"
              >Darslik qo'shish</UiButton
            >
          </div>
        </div>
        <div
          v-else
          class="flex flex-col items-center justify-center gap-5 max-h-[312px] min-h-[312px] overflow-hidden"
        >
          Video darslik mavjud emas
        </div>
      </div>
    </section>
    <CreateLesson v-else />
  </main>
</template>

<script setup>
definePageMeta({
  layout: "nav",
});
import axios from "axios";
import { useVideoLessonStore, useLoadingStore, useContentStore } from "~/store";
import { useNuxtApp } from "#app";
import { Cloudinary } from "@cloudinary/url-gen";
const { $cloudinary } = useNuxtApp();
console.log($cloudinary);
const useVideoLesson = useVideoLessonStore();
const useContent = useContentStore();
const isLoading = useLoadingStore();
const router = useRouter();

const cloudinary = new Cloudinary({
  cloud_name: "dqq3cnpxv", // Replace with your Cloudinary cloud name
  api_key: "381131244113522", // Replace with your Cloudinary API key
  // Optional: Add other configuration options if needed
});
const store = reactive({
  is_playing: false,
  create_lesson: false,
});

const colors = {
  accent: "#FFFFFF",
  base: "#000",
  text: "#FFFFFF",
};

const videoSrc = ref("");

function onPauseVideo(player) {}

function playVideo() {
  const video = document.querySelector(".vjs-tech");
  video.currentTime = 0;
  document.querySelector(".vjs-big-play-button")?.click();
  store.is_playing = true;
}

function backToMain() {
  const path = router.currentRoute.value.path.split("/");
  let url = "/" + path[1] + "/" + path[2];
  url += "?class=" + router.currentRoute.value.query.class;
  router.push(url);
}

function nextPage(lesson_id, type) {
  const path = router.currentRoute.value.path.split("/");
  let url;
  if (type == "create_test") {
    url = "/" + type + "?lesson_id=" + lesson_id;
  } else {
    url = `/test?t=${lesson_id}`
  }
  router.push(url);
}

function createLesson() {
  useContent.store.create_lesson = true;
  const path = router.currentRoute.value.path.split("/");
  // let url = "/" + path[1] + "/" + path[2] + "/" + path[3];
  let url = "?create_lesson=true";
  router.push(url);
}

const getVideoSignature = async () => {
  try {
    console.log(
      useVideoLesson.store.video_lesson?.video_lesson[0].video?.public_id
    );
    const { data } = await axios(
      `http://localhost:4000/api/videos/get-signed-url`,
      {
        params: {
          publicId:
            useVideoLesson.store.video_lesson?.video_lesson[0].video?.public_id,
        },
      }
    );
    console.log(data);
    const publicId =
      useVideoLesson.store.video_lesson?.video_lesson[0].video?.public_id;
    // const { signature, timestamp } = data;
    videoSrc.value = `https://res.cloudinary.com/dqq3cnpxv/video/authenticated/${publicId}.mp4?api_key=381131244113522&timestamp=${timestamp}&signature=${signature}`;
    const signature = "91dd457eb12366cde0e6ee3d89ffd7122858c5e4";
    const timestamp = "1719627538";
    const videoUrl = cloudinary
      .video(
        useVideoLesson.store.video_lesson?.video_lesson[0].video?.public_id,
        {
          resource_type: "video",
          type: "authenticated",
          timestamp: Math.round(new Date().getTime() / 1000),
          signature,
        }
      )
      .toURL();
    console.log(videoUrl);
    const video_data = $cloudinary.video_url(
      useVideoLesson.store.video_lesson?.video_lesson[0].video?.public_id,
      {
        resource_type: "video",
        type: "authenticated",
        timestamp,
        signature,
        api_key: "381131244113522",
        cloud_name: "dqq3cnpxv",
      }
    );
    videoSrc.value = video_data + ".mp4";
    console.log(
      video_data,
      "dkjskdjksdjksdjk------------------------------------------------------------------------------------------------------------------------"
    );
  } catch (error) {
    console.error("Error getting video signature:", error);
  }
};

// getVideoSignature();

watch(
  () => router.currentRoute.value.query,
  () => {
    useVideoLesson.getById();
  }
);

onBeforeMount(() => {
  useVideoLesson.getById();
});
</script>

<style lang="scss" scoped></style>
