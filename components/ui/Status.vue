<template>
    <div>
        <button v-if="status == 1" class="_caf b_ce5 h-7 px-6 rounded-full font-semibold text-xs" type="button">Pending</button>
        <button v-else-if="status == 2" class="bg-[#EEB627] bg-opacity-30 _ceeb h-7 px-6 rounded-full font-semibold text-xs" type="button">In Progress</button>
        <button v-else class="bg-[#63CC49] bg-opacity-30 text-[#63CC49] h-7 px-6 rounded-full font-semibold text-xs" type="button">Solved</button>
    </div>
</template>

<script setup>
defineProps({
    status: String,
})
</script>

<style lang="scss" scoped>

</style>