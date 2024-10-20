<template>
  <div class="editor">
    <Editor v-model="isLoading.store.editor" editorStyle="height: 320px">
      <template v-slot:toolbar>
        <div class="ql-formats h-[52px] !flex items-center my-auto">
          <button v-tooltip.bottom="'Bold'" class="ql-bold"></button>
          <button v-tooltip.bottom="'Italic'" class="ql-italic"></button>
          <button v-tooltip.bottom="'Strikethrough'" class="ql-strike"></button>
          <button v-tooltip.bottom="'Underline'" class="ql-underline"></button>
          <button class="ql-align" v-tooltip.bottom="'Left'" value=""></button>
          <button class="ql-align" v-tooltip.bottom="'Center'" value="center"></button>
          <button class="ql-align" v-tooltip.bottom="'Right'" value="right"></button>
          <button v-tooltip.bottom="'Code'" class="ql-code"></button>
          <button v-tooltip.bottom="'Ordered List'" id="ql-ol" class="ql-list" :value="'ordered'">OL</button>
          <button v-tooltip.bottom="'Unordered List'" id="ql-ul" class="ql-list" :value="'bullet'">UL</button>
          <button v-tooltip.bottom="'Blockquote'" class="ql-blockquote">Blockquote</button>
          <button v-tooltip.bottom="'Code Block'" class="ql-code-block"></button>
          <button v-tooltip.bottom="'Insert Link'" class="ql-link">Link</button>
        </div>
      </template>
    </Editor>
  </div>
</template>

<script setup>
import Editor from 'primevue/editor';
import { useLoadingStore } from '~/store';

const isLoading = useLoadingStore();
isLoading.store.editor = ref("Content")
</script>
