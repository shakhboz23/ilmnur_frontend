<template>
  <aside
    class="lesson_sidebar min-w-[291px] px-[10px] border-r border-[#EDEDED] bg-white"
  >
    <div class="p-6 bg-white sticky top-0">
      <h1>Kimyo</h1>
      <p>{{ useLesson.store.lessons?.length }} DARS</p>
    </div>
    <ul>
      <a-tooltip
        v-for="(i, index) in useLesson.store.lessons"
        placement="bottom"
      >
        <template
          v-if="
            useLesson.store.user_step?.lesson_id + 1 !=
              useLesson.store.lessons[index]?.id &&
            index != 0 &&
            !i.user_step
          "
          class="tjfjdsk"
          #title
        >
          <h1 class="font-semibold _c00 mb-3">
            Asosiy darslarni o‘zlashtiring
          </h1>
          <p class="_c32">
            Keyingi darsga o‘tish uchun yuqoridagi barcha vazifalarni bajaring!
          </p>
        </template>
        <li
          @click="
            changeLesson(
              i,
              index,
              useLesson.store.user_step?.lesson_id + 1 ==
                useLesson.store.lessons[index]?.id || index == 0 || i.user_step
            )
          "
          :class="
            $router.currentRoute.value.params.id == i.id
              ? 'bg-[#FFF3EB] border-[#FF852E80]'
              : 'border-transparent'
          "
          class="flex flex-col justify-center cursor-pointer duration-700 border-b px-[14px] h-[70px] cards rounded-t-[8px] rounded-b-[2px] space-y-1"
          :style="{ opacity: i.user_step || index == 0 ? 1 : 0.5 }"
        >
          <div class="flex items-center gap-3">
            <h3>{{ index + 1 }}-DARS</h3>
            <img
              v-if="i.user_step"
              class="w-4 h-4"
              src="@/assets/svg/lessons/step_solved.svg"
              alt=""
            />
            <img
              v-else-if="
                useLesson.store.user_step?.lesson_id + 1 ==
                  useLesson.store.lessons[index]?.id || index == 0
              "
              class="w-4 h-4"
              src="@/assets/svg/lessons/step_pending.svg"
              alt=""
            />
            <img
              v-else
              class="w-4 h-4"
              src="@/assets/svg/icon/lock.svg"
              alt=""
            />
          </div>
          <h1 class="truncate">{{ i.title }}</h1>
        </li>
      </a-tooltip>
    </ul>
  </aside>
</template>

<script setup>
import { useLessonStore } from "@/store";

const useLesson = useLessonStore();
const router = useRouter();

function changeLesson(data, index, is_route) {
  if (is_route || index == 0) {
    const path = router.currentRoute.value.path.split("/");
    let url = "/" + path[1] + "/" + path[2] + "/" + path[3] + "/" + path[4] + "/" + path[5] + "/" + data.id;
    router.push(url);
  }
}

onBeforeMount(async () => {
  await useLesson.getLessons("lessons_list");
});
</script>

<style lang="scss" scoped></style>
