<template>
  <main class="flex space-x-6">
    <section
      class="overflow-hidden overflow-y-auto max-h-[calc(100vh_-_160px)] w-[40%] bg-white rounded-lg px-5 pb-5"
    >
      <div
        class="flex items-center sticky top-0 bg-white border-b border-[#EDEDED] h-[60px]"
      >
        <h1 class="text-[20px] font-semibold">Chat</h1>
      </div>
      <div
        @click="
          () => {
            useChat.create.chatgroup_id = i.id;
            useChat.getAll();
          }
        "
        v-for="i in useChat.store.chatgroups"
        :class="useChat.create.chatgroup_id == i.id ? 'bg-[#FFF5E9]' : ''"
        class="flex gap-[10px] py-[10px] px-5 -mx-5 cursor-pointer"
      >
        <img
          class="h-12 w-12 rounded-full object-cover"
          src="@/assets/svg/image/user.svg"
          alt=""
        />
        <div class="w-full">
          <div class="flex justify-between">
            <p class="black_24 font-medium">{{ i.title }}</p>
            <p class="text-[#666666] text-sm">15:33</p>
          </div>
          <p class="text-[#919191] text-sm">Assalomu alaykum</p>
        </div>
      </div>
    </section>
    <section
      class="overflow-hidden overflow-y-auto max-h-[calc(100vh_-_160px)] w-[60%] bg-white rounded-lg"
    >
      <div
        class="flex sticky top-0 z-20 bg-white items-center px-5 border-b border-[#EDEDED] justify-between h-[60px]"
      >
        <h1>Barno Halilova</h1>
        <img src="@/assets/svg/icon/threedot.svg" alt="" />
      </div>
      <!-- chat -->
      <div
        class="space-y-2 min-h-[calc(100vh_-_300px)] px-5 pb-5 text-[#141F1A]"
      >
        <p class="text-[#666666] text-center mb-3 mt-7">Bugun</p>
        <div v-for="(i, index) in useChat.store.data">
          <a-dropdown :trigger="['contextmenu']">
            <div
              :class="
                isLoading.user.data.id == i.user_id
                  ? 'ml-auto bg-[#FFD1B2] border-r-3'
                  : 'bg-[#F2F3F6] border-l-3'
              "
              class="flex items-end gap-3 max-w-[60%] w-fit p-[10px] shadow_message"
            >
              <div>
                <div v-if="i.file">
                  <audio v-if="i.file_type.type[0] == 'audio'" controls>
                    <source :src="i.file" type="audio/ogg" />
                    <source :src="i.file" type="audio/mpeg" />
                    Audio not supported
                  </audio>
                  <video v-else-if="i.file_type.type[0] == 'video'" controls>
                    <source :src="i.file" type="video/mp4" />
                    <source :src="i.file" type="video/ogg" />
                    Video not supported
                  </video>
                  <a
                    :href="i.file"
                    download
                    v-else-if="i.file_type.type[0] == 'raw'"
                    class="flex items-center gap-2 min-w-[150px] bg-[#F2F3F6] rounded-lg"
                  >
                    <img
                      class="h-8 w-8"
                      :src="store.raw_type[i.file_type.type[1]]"
                      alt=""
                    />
                    <div>
                      <p>{{ i.file_type.name }}</p>
                      <p class="text-xs font-medium">
                        {{ i.file_type.size }} KB
                      </p>
                    </div>
                  </a>
                  <div v-else-if="i.file_type.type[0] == 'image'">
                    <!-- <iframe :src="i.file" frameborder="0"></iframe> -->
                    <img
                      :src="`${i.file}`"
                      class="overflow-hidden max-w-[300px]"
                      alt=""
                    />
                  </div>
                  <div v-else-if="i.file_type.type[0] == 'pdf'">
                    <!-- <iframe :src="i.file" frameborder="0"></iframe> -->
                    <div
                      class="flex items-center gap-2 min-w-[150px] bg-[#F2F3F6] rounded-lg"
                    >
                      <img
                        class="h-8 w-8"
                        src="@/assets/svg/image/pdf.png"
                        alt=""
                      />
                      <div>
                        <p>{{ i.file_type.name }}</p>
                        <p class="text-xs font-medium">
                          {{ i.file_type.size }} KB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <pre class="whitespace-pre-wrap" v-if="i.text">{{
                  i.text
                }}</pre>
              </div>
              <p class="text-[#999999] text-xs">15:33</p>
            </div>
            <template #overlay>
              <a-menu>
                <a-menu-item @click="useChat.store.chat_id" key="1"
                  >Edit</a-menu-item
                >
                <a-menu-item
                  @click="
                    () => {
                      useChat.store.chat_id = i.id;
                      useChat.deleteMessage();
                    }
                  "
                  key="2"
                  >Delete</a-menu-item
                >
                <a-menu-item key="3">Reply</a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
          <div
            :class="isLoading.user.data.id == i.user_id ? 'justify-end' : ''"
            v-if="useChat.store.data[index + 1]?.user_id != i.user_id"
            class="flex items-center gap-3 mt-3"
          >
            <img
              class="w-5 h-5 rounded-full object-cover"
              :src="i.user.image"
              alt=""
            />
          </div>
        </div>
      </div>
      <div id="targetElement">Detecter</div>
      <input
        @change="handleFile"
        id="upload_image"
        class="h-0 w-0 overflow-hidden p-0 border-0"
        type="file"
      />
      <nav
        class="sticky w-full -bottom-[1px] flex items-center gap-3 border-t px-5 bg-white border-[#EDEDED]"
      >
        <label v-if="!store.record" for="upload_image" class="cursor-pointer">
          <img src="@/assets/svg/icon/upload_image.svg" alt="" />
        </label>
        <img
          @click="stopRecord"
          v-else
          class="w-5 h-5 cursor-pointer"
          src="@/assets/svg/icon/record_discard.svg"
          alt=""
        />
        <textarea
          v-if="!store.record"
          @input="handleInput"
          id="message_input"
          class="border-none !px-2 w-full"
          placeholder="Xabar yuboring"
        ></textarea>
        <div v-else class="full_flex border w-full">
          <img
            class="-mt-8 recorder mx-auto bg-blue-600 rounded-full p-5 cursor-pointer"
            src="@/assets/svg/icon/record.svg"
            alt=""
          />
        </div>
        <!-- <textarea
          name=""
          id="message_input"
          class="border-none !px-2 w-full"
          placeholder="Xabar yuboring"
        ></textarea> -->
        <img
          v-if="!store.record"
          class="cursor-pointer"
          src="@/assets/svg/icon/smile.svg"
          alt=""
        />
        <img
          @click="sendMessage"
          class="cursor-pointer"
          v-if="useChat.create.text || store.record"
          src="@/assets/svg/icon/send_btn.svg"
          alt=""
        />
        <img
          @click="startRecord"
          class="cursor-pointer"
          v-else
          src="@/assets/svg/icon/voice.svg"
          alt=""
        />
      </nav>
    </section>

    <a-modal class="max-w-[340px]" v-model:open="store.preview" centered>
      <p class="mb-2">
        Send {{ store.type[0] == "raw" ? store.type[1] : store.type[0] }}
      </p>
      <audio v-if="store.type[0] == 'audio'" controls>
        <source :src="store.preview" type="audio/ogg" />
        <source :src="store.preview" type="audio/mpeg" />
        Audio not supported
      </audio>
      <video v-else-if="store.type[0] == 'video'" controls>
        <source :src="store.preview" type="video/mp4" />
        <source :src="store.preview" type="video/ogg" />
        Video not supported
      </video>
      <div
        class="flex items-center gap-2 bg-[#F2F3F6] rounded-lg p-[10px]"
        v-else-if="store.type[0] == 'raw'"
      >
        <img class="h-8 w-8" :src="store.raw_type[store.type[1]]" alt="" />
        <div>
          <p>{{ useChat.create.file_type.name }}</p>
          <p class="text-xs font-medium">
            {{ useChat.create.file_type.size }} KB
          </p>
        </div>
      </div>
      <div class="full_flex" v-else-if="store.type[0] == 'image'">
        <img
          class="max-w-[300px] max-h-[300px] object-contain"
          :src="store.preview"
        />
      </div>
      <!-- <div v-else-if="store.type[0] == 'pdf'">
        <embed class="h-40 w-full max-w-[500px]" :src="store.preview" />
      </div> -->
      <div v-else-if="store.type[0] == 'pdf'">
        <div class="flex items-center gap-2 bg-[#F2F3F6] rounded-lg p-[10px]">
          <img class="h-8 w-8" src="@/assets/svg/image/pdf.png" alt="" />
          <div>
            <p>{{ useChat.create.file_type.name }}</p>
            <p class="text-xs font-medium">
              {{ useChat.create.file_type.size }} KB
            </p>
          </div>
        </div>
      </div>
      <div class="mt-2 space-y-2">
        <label for="caption">Caption</label>
        <textarea
          id="caption"
          @input="handleInput"
          class="border-0 border-b caption !rounded-none p-0 w-[300px]"
        ></textarea>
      </div>

      <div class="flex justify-between mt-2">
        <button class="bg-[#F2F3F6] py-1 px-3 rounded-lg">Cancel</button>
        <button @click="sendMessage" class="bg-[#FFD1B2] py-1 px-3 rounded-lg">
          Send
        </button>
      </div>
    </a-modal>
  </main>
</template>

<script setup>
import { useChatStore, useLoadingStore } from "@/store";
import excel from "@/assets/svg/image/excel.png";
import word from "@/assets/svg/image/word.png";
import powerpoint from "@/assets/svg/image/power.png";

definePageMeta({
  layout: "search",
});

const useChat = useChatStore();
const isLoading = useLoadingStore();

const store = reactive({
  record: false,
  preview: false,
  menu: false,
  menutab: false,
  type: "",
  pageY: "",
  pageX: "",
  raw_type: {
    word,
    excel,
    powerpoint,
  },
});
let recStream = ref("");
let chunks = [];
// Media options
var options = {
  audioBitsPerSecond: 128000,
  videoBitsPerSecond: 2500000,
  mimeType: "audio/webm",
};

function handleInput(e) {
  useChat.create.text = e.target.value?.trim();
}

function handleFile(e) {
  const file = e.target.files[0];
  useChat.create.file = file;
  store.preview = URL.createObjectURL(useChat.create.file);
  store.type = isLoading.getFileType(useChat.create.file.name);
  useChat.create.file_type.name = file.name;
  useChat.create.file_type.size = file.size;
  useChat.create.file_type.type = store.type;
}

function stopRecord() {
  store.record = false;
  recStream.value.stop();
}

function sendMessage() {
  if (store.record) {
    recStream.value.stop();
    return;
  }
  useChat.sendMessage();
}

const startRecord = async () => {
  try {
    // Access to computer devices
    const mediaDevices = await navigator.mediaDevices.getUserMedia({
      audio: true,
    });
    if (mediaDevices.active === true) {
      store.record = true;
      // The MediaRecorder() constructor creates a new MediaRecorder object that will record a specified MediaStream.
      recStream.value = new MediaRecorder(mediaDevices, options);
      //console.log(recStream.value)
      recStream.value.ondataavailable = (e) => {
        // console.log(e)
        // Push media data inside the array
        chunks.push(e.data);
        // If state inactive stop recording
        if (recStream.value.state == "inactive" && store.record) {
          // console.log(chunks)
          // Create a new Blob with the array created
          let blob = new Blob(chunks, { type: "audio/webm" });
          console.log(blob);
          let fileName = "recorded_audio.webm"; // You can specify the file name here
          useChat.create.file = new File([blob], fileName, {
            type: "audio/webm",
          });
          console.log(useChat.create.file);
          store.record = false;
          useChat.sendMessage();
          // Create a Playback and pass it the blob
          // createAudioElement(URL.createObjectURL(blob));
        }
      };
      // Start Recording in 1s
      // recStream.value.start(1000)
      // Start rec now
      recStream.value.start();
    }
  } catch (error) {
    if (error) console.log(error);
  }
};

function contextmenu(event, id) {
  store.menu = id;
  store.pageX = event.pageX;
  store.pageY = event.pageY;
  event.preventDefault();
}

watch(
  () => useChat.create.text,
  () => {
    if (useChat.create.text) {
      document.getElementById("message_input").classList.add("caret_color");
    }
  }
);

onBeforeMount(() => {
  useChat.getAll();
  useChat.getAllGroups();
  window.addEventListener("paste", function (e) {
    var item = Array.from(e.clipboardData.items).find((x) =>
      /^image\//.test(x.type)
    );
    if (item) {
      var blob = item.getAsFile();
      store.preview = URL.createObjectURL(blob);
    }
  });

  window.addEventListener("contextmenu", function (event) {
    console.log(event.target);
    if (!store.menutab) {
      store.menu = false;
    }
    store.pageX = event.pageX;
    store.pageY = event.pageY;
    event.preventDefault();
  });

  window.addEventListener("click", function (event) {
    if (!store.menutab) {
      store.menu = false;
    }
  });
});

onMounted(() => {
  window.addEventListener("click", () => {
    // Elementni tanlang
    const targetElement = document.getElementById("targetElement");

    if (targetElement) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Element ekranda ko'rinayotgan bo'lsa
            console.log("Element ekranda ko'rinayotgan bo'lsa");
          }
        });
      });

      observer.observe(targetElement);
    } else {
      console.error("Element topilmadi");
    }
  });
});
</script>

<style lang="scss" scoped></style>
