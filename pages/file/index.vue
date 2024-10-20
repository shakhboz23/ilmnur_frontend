<template>
  <div>
    <input type="file" @change="handleFileInput" />
    <div v-html="convertedContent"></div>
  </div>
</template>

<script>
import mammoth from "mammoth";

export default {
  data() {
    return {
      convertedContent: "",
    };
  },
  methods: {
    async handleFileInput(event) {
      const file = event.target.files[0];
      if (!file) return;

      const result = await this.convertFileToHtml(file);
      this.convertedContent = result.value;
    },
    convertFileToHtml(file) {
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
    },
  },
};
</script>
