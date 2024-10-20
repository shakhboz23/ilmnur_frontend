<template>
  <div>
    <ClientOnly>
      <Editor_cki />
    </ClientOnly>
    <client-only>
      <ckeditor
        :editor="editor"
        v-model="editorData"
        :config="editorConfig"
      ></ckeditor>
    </client-only>
  </div>
</template>

<script setup></script>
