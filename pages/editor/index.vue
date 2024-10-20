<template>
  <client-only class="editor card mt-40 px-20">
    <!-- <a-upload-dragger
      v-model:fileList="useContent.create.video"
      name="file"
      :max-count="1"
      @change="handleChange"
    >
      <p class="ant-upload-drag-icon">
        <inbox-outlined></inbox-outlined>
      </p>
      <p class="ant-upload-text">Click or drag file to this area to upload</p>
      <p class="ant-upload-hint">
        Support for a single or bulk upload. Strictly prohibit from uploading
        company data or other band files
      </p>
    </a-upload-dragger> -->
    <Editor id="editor" v-model="value" editorStyle="height: 320px">
      <!-- <template v-slot:toolbar>
        <span class="ql-formats">
          <button v-tooltip.bottom="'Bold'" class="ql-bold"></button>
          <button v-tooltip.bottom="'Italic'" class="ql-italic"></button>
          <button v-tooltip.bottom="'Underline'" class="ql-underline"></button>
        </span>
      </template> -->
    </Editor>
    <button @click="send">Send</button>
    <!-- {{ value }} -->
    <!-- <div v-html="value"></div> -->
  </client-only>
</template>

<script setup>
import Editor from "primevue/editor";
import { useContentStore } from "@/store";

const useContent = useContentStore();
const value = ref(
  "<div>Hello World!</div><div>PrimeVue <b>Editor</b> Rocks</div><div><br></div>"
);

async function send() {
  const editor = document.getElementById("editor");
  const images = editor.querySelectorAll("img");

  let t = 0;
  (async function () {
    for await (let i of images) {
      const editor = document.getElementById("editor");
      const image = editor.querySelectorAll("img");
      const base64Url = image[t].src;
      const base64Data = base64Url.split(";base64,").pop();
      const arrayBuffer = Uint8Array.from(atob(base64Data), (c) =>
        c.charCodeAt(0)
      ).buffer;
      const file = new File([arrayBuffer], "file.png", { type: "image/png" });

      image[t].src = await useContent.create_url(file);
      console.log(image[t].src);
      t++;
    }
    useContent.create.content = value.value;
    useContent.uploadContent();
  })();
}

const handleChange = async (info) => {
  const status = info.file.status;
  if (status !== "uploading") {
    console.log(info.file, info.fileList);
  }
  if (status === "done") {
    message.success(`${info.file.name} file uploaded successfully.`);
  } else if (status === "error") {
    message.error(`${info.file.name} file upload failed.`);
  }
};
</script>

<style lang="scss"></style>

<!-- <p>Hello World!</p><p>PrimeVue <strong>Editor</strong> Rocks</p><p>
<img src="data:image/png;base64,iVBORw0KGgoAAA5tobErkJggg==">
</p><p>f</p><p><br></p><p>fdfkdjkfl;df</p><p>
<img src="data:image/png;base64,iVBORw0KK5CYII="></p> -->
