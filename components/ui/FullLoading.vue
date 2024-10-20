<template>
    <div :style="`height: ${l_height}`" class="is_loading table_loading h-[60px]"></div>
</template>

<script setup>
defineProps({
    l_height: String,
})
</script>

<style lang="scss" scoped></style>