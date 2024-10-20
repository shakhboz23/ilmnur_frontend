<template>
  <main
    class="bg-white md:rounded-[6px] md:p-[30px] p-4 overflow-hidden overflow-y-auto md:max-h-[calc(100vh_-_160px)] md:min-h-[calc(100vh_-_160px)] max-h-[100vh] min-h-[100vh] pb-20"
  >
    <!-- teacher role -->
    <div v-if="isLoading.user.data.current_role == 'main_teacher'">
      <nav
        class="flex items-center justify-between _c92 border-b border-[#EDEDED] pb-4 mb-5"
      >
        <div
          @click="
            $router.push(
              `/lessons?class=${router.currentRoute.value.query.class}`
            )
          "
          class="flex items-center gap-4 cursor-pointer max-w-fit"
        >
          <img src="@/assets/svg/icon/back_arrow.svg" alt="" />
          <p class="text-lg font-semibold sm:block hidden">Orqaga</p>
        </div>
        <div>
          <UiButton
            @click="useLesson.store.createModal = true"
            class="bg_orange font-semibold white !px-6"
            >Qo‘shish</UiButton
          >
        </div>
      </nav>

      <section class="flex flex-wrap gap-5 justify-between pb-6">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="font-semibold text-xl">
              Mavzular
              <p class="text-md _c66">({{ store.subject }})</p>
            </h1>
          </div>
        </div>
        <ul class="flex md:gap-[60px] gap-10 mt-1">
          <li>
            <h1 class="_cab">Sinf</h1>
            <a-dropdown :trigger="['click']">
              <div
                class="flex items-center justify-between cursor-pointer font-medium w-[100px]"
              >
                <p>{{ classes[router.currentRoute.value.query.class - 1] }}</p>
                <p class="full_flex b_cff3 w-5 h-5 rounded-full">
                  <img src="@/assets/svg/icon/select_arrow.svg" alt="" />
                </p>
              </div>
              <template #overlay>
                <a-menu>
                  <a-menu-item
                    @click="store.class = index"
                    v-for="(i, index) in classes"
                    :key="i"
                  >
                    <p>{{ i }}</p>
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </li>
        </ul>
      </section>
      <p class="md:hidden block h-4 b_cf6 -mx-4"></p>
      <section class="mt-5">
        <h1 class="font-medium text-xl">
          Darslar
          <span class="text-sm _c66"
            >({{ useLesson.store.lessons?.length }}-darslar)</span
          >
        </h1>
        <div class="overflow-x-auto sm:mx-0 -mx-4">
          <table
            class="draggable-table mt-6 w-full text-start whitespace-nowrap"
          >
            <thead>
              <tr>
                <th
                  class="pr-6 text-start font-[400] pb-[6px] _cab sm:table-cell hidden"
                >
                  №
                </th>
                <th class="sm:px-6 px-4 text-start font-[400] pb-[6px] _cab">
                  Mavzu
                </th>
                <th class="px-6 font-[400] pb-[6px] _cab sm:table-cell hidden">
                  Dars davomiyligi
                </th>
                <th class="px-6 font-[400] pb-[6px] _cab sm:table-cell hidden">
                  Topshirganlar
                </th>
                <th class="px-6 font-[400] pb-[6px] _cab sm:table-cell hidden">
                  Yechim
                </th>
                <th class="px-6 font-[400] pb-[6px] _cab min-w-[70px]"></th>
              </tr>
            </thead>
            <tbody>
              <tr
                @click="
                  $router.push(
                    `${router.currentRoute.value.path}/${i.id}?class=${router.currentRoute.value.query.class}`
                  )
                "
                v-for="(i, index) in useLesson.store.lessons"
                class="border-b border-[#EDEDED] cursor-pointer"
              >
                <td class="py-6 pr-6 sm:block hidden">{{ index + 1 }}</td>
                <td class="sm:py-6 py-3 sm:px-6 px-4">
                  <p>{{ i.title }}</p>
                  <p
                    v-if="i.video_lesson"
                    class="sm:hidden flex gap-1 font-medium _c99 mt-1"
                  >
                    <span
                      v-for="i in formatSecondsToHours(
                        i.video_lesson[0]?.video?.duration
                      )"
                      >{{ i }}</span
                    >
                  </p>
                </td>
                <td class="full_flex py-6 px-6">
                  <p v-if="i.video_lesson" class="sm:flex gap-1 hidden">
                    <span
                      v-for="i in formatSecondsToHours(
                        i.video_lesson[0]?.video?.duration
                      )"
                      >{{ i }}</span
                    >
                  </p>
                </td>
                <td class="py-6 px-6 text-center sm:table-cell hidden">
                  {{ i.totalUsers }}
                </td>
                <td class="py-6 px-6 sm:table-cell hidden">
                  <img
                    class="mx-auto"
                    src="@/assets/svg/icon/test1.svg"
                    alt=""
                  />
                </td>
                <td class="sm:py-6 py-3 sm:px-6 px-4 min-w-[70px]">
                  <img
                    v-if="i.user_step"
                    class="mx-auto w-6 h-6"
                    src="@/assets/svg/lessons/step_solved.svg"
                    alt=""
                  />
                  <img
                    v-else
                    class="mx-auto w-6 h-6"
                    src="@/assets/svg/icon/lock.svg"
                    alt=""
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
    <!-- student role -->
    <div v-else class="pb-[100px]">
      <nav
        class="flex items-center justify-between _c92 md:border-b border-[#EDEDED] pb-4 mb-5"
      >
        <div
          @click="
            $router.push(
              `/lessons?class=${router.currentRoute.value.query.class}`
            )
          "
          class="flex items-center gap-4 cursor-pointer max-w-fit"
        >
          <img src="@/assets/svg/icon/back_arrow.svg" alt="" />
          <p class="text-lg font-semibold sm:block hidden">Orqaga</p>
        </div>
        <div></div>
      </nav>
      <section class="flex items-end justify-between gap-6 flex-wrap">
        <div class="md:space-y-1 space-y-[10px]">
          <h1 class="font-semibold md:text-[28px] text-xl">
            {{ store.subject }}
          </h1>
          <p class="md:text-[16px] text-sm _c66">
            Bugun nimani o‘rganmoqchisiz?
          </p>
        </div>
        <ul class="flex flex-wrap md:gap-[60px] gap-10 md:text-[16px] text-sm">
          <li>
            <h1 class="_cab">Sinf</h1>
            <a-dropdown :trigger="['click']">
              <div
                class="flex items-center justify-between cursor-pointer font-medium w-[100px]"
              >
                <p>{{ classes[router.currentRoute.value.query.class - 1] }}</p>
                <p class="full_flex b_cff3 w-5 h-5 rounded-full">
                  <img src="@/assets/svg/icon/select_arrow.svg" alt="" />
                </p>
              </div>
              <template #overlay>
                <a-menu>
                  <a-menu-item
                    @click="store.class = index"
                    v-for="(i, index) in classes"
                    :key="i"
                  >
                    <p>{{ i }}</p>
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </li>
          <li>
            <h1 class="_cab">Darslik</h1>
            <a-dropdown :trigger="['click']">
              <div
                class="flex items-center justify-between cursor-pointer font-medium w-[100px]"
              >
                <p>{{ store.subject }}</p>
                <p class="full_flex b_cff3 w-5 h-5 rounded-full">
                  <img src="@/assets/svg/icon/select_arrow.svg" alt="" />
                </p>
              </div>
              <template #overlay>
                <a-menu>
                  <a-menu-item
                    @click="store.subject = i.title"
                    v-for="i in useSubject.store.subjects"
                    :key="i.id"
                  >
                    <p>{{ i.title }}</p>
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </li>
        </ul>
      </section>
      <p class="md:hidden block h-4 b_cf6 -mx-4 mt-6"></p>
      <section class="md:mt-[30px] mt-5">
        <h1 class="font-medium text-xl">
          Darslar
          <span class="text-sm _c66"
            >({{ useLesson.store.lessons?.length }}-darslar)</span
          >
        </h1>
        <div class="overflow-x-auto sm:mx-0 -mx-4">
          <table
            class="draggable-table mt-6 w-full text-start whitespace-nowrap"
          >
            <thead>
              <tr>
                <th
                  class="pr-6 text-start font-[400] pb-[6px] _cab sm:table-cell hidden"
                >
                  №
                </th>
                <th class="sm:px-6 px-4 text-start font-[400] pb-[6px] _cab">
                  Mavzu
                </th>
                <th class="px-6 font-[400] pb-[6px] _cab sm:table-cell hidden">
                  Dars davomiyligi
                </th>
                <th class="px-6 font-[400] pb-[6px] _cab sm:table-cell hidden">
                  Topshirganlar
                </th>
                <th class="px-6 font-[400] pb-[6px] _cab sm:table-cell hidden">
                  Yechim
                </th>
                <th class="px-6 font-[400] pb-[6px] _cab min-w-[70px]"></th>
              </tr>
            </thead>
            <tbody>
              <tr
                @click="
                  navigateToNext(
                    i,
                    index,
                    useLesson.store.user_step?.lesson_id + 1 ==
                      useLesson.store.lessons[index]?.id ||
                      index == 0 ||
                      i.user_step
                  )
                "
                v-for="(i, index) in useLesson.store.lessons"
                class="border-b border-[#EDEDED] cursor-pointer"
              >
                <td class="py-6 pr-6 sm:block hidden">{{ index + 1 }}</td>
                <td class="sm:py-6 py-3 sm:px-6 px-4">
                  <p>{{ i.title }}</p>
                  <p
                    v-if="i.video_lesson"
                    class="sm:hidden flex gap-1 font-medium _c99 mt-1"
                  >
                    <span
                      v-for="i in formatSecondsToHours(
                        i.video_lesson[0]?.video?.duration
                      )"
                      >{{ i }}</span
                    >
                  </p>
                </td>
                <td class="full_flex py-6 px-6">
                  <p v-if="i.video_lesson" class="sm:flex gap-1 hidden">
                    <span
                      v-for="i in formatSecondsToHours(
                        i.video_lesson[0]?.video?.duration
                      )"
                      >{{ i }}</span
                    >
                  </p>
                </td>
                <td class="py-6 px-6 text-center sm:table-cell hidden">
                  {{ i.totalUsers }}
                </td>
                <td class="py-6 px-6 sm:table-cell hidden">
                  <img
                    class="mx-auto"
                    src="@/assets/svg/icon/test1.svg"
                    alt=""
                  />
                </td>
                <td class="sm:py-6 py-3 sm:px-6 px-4 min-w-[70px]">
                  <img
                    v-if="i.user_step"
                    class="mx-auto w-6 h-6"
                    src="@/assets/svg/lessons/step_solved.svg"
                    alt=""
                  />
                  <img
                    v-else-if="
                      useLesson.store.user_step?.lesson_id + 1 ==
                        useLesson.store.lessons[index]?.id || index == 0
                    "
                    class="mx-auto w-6 h-6"
                    src="@/assets/svg/lessons/step_pending.svg"
                    alt=""
                  />
                  <img
                    v-else
                    class="mx-auto w-6 h-6"
                    src="@/assets/svg/icon/lock.svg"
                    alt=""
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>

    <!-- create -->
    <a-modal
      class="max-w-[440px]"
      v-model:open="useLesson.store.createModal"
      centered
    >
      <div class="flex justify-between items-center w-full">
        <h1 class="font-semibold text-2xl">Mavzu qo‘shish</h1>
      </div>
      <form
        @submit.prevent="useLesson.createLesson"
        class="space-y-5 _c45 mt-[30px]"
      >
        <div class="space-y-2">
          <label for="name">Mavzu nomi</label>
          <input
            v-model="useLesson.create.title"
            class="rounded-[12px]"
            id="name"
            type="text"
          />
        </div>
        <div class="space-y-2">
          <label>Sinf</label>
          <div class="flex justify-between">
            <div class="flex items-center gap-2 w-full">
              <a-select
                v-model:value="useLesson.create.class"
                class="min-w-[145px] w-full sr_12"
                :options="
                  classes.map((pro, index) => ({
                    value: index + 1,
                    label: pro,
                  }))
                "
                required
              >
                <template #suffixIcon>
                  <p class="h-4 w-[1px] bg-[#999999]"></p>
                  <img
                    class="ml-2"
                    src="@/assets/svg/icon/select_arrow6c.svg"
                    alt=""
                  />
                </template>
              </a-select>
            </div>
          </div>
        </div>
        <UiButton
          @click="useLesson.store.createModal = false"
          type="submit"
          class="!h-12 w-full bg_orange !mt-[54px] font-semibold white"
        >
          Yaratish
          <Loading />
        </UiButton>
      </form>
    </a-modal>
  </main>
</template>

<script setup>
definePageMeta({
  layout: "search",
});

import { useLessonStore, useSubjectStore, useLoadingStore } from "@/store";
import { useFormatter } from "@/composables";

const { formatSecondsToHours } = useFormatter();
const useLesson = useLessonStore();
const useSubject = useSubjectStore();
const isLoading = useLoadingStore();
const router = useRouter();

const classes = ref([
  "1-sinf",
  "2-sinf",
  "3-sinf",
  "4-sinf",
  "5-sinf",
  "6-sinf",
  "7-sinf",
  "8-sinf",
  "9-sinf",
  "10-sinf",
  "11-sinf",
]);

await useAsyncData(() => {
  return useLesson.getLessons();
});

const store = reactive({
  subject: router.currentRoute.value.params.subject,
  class: router.currentRoute.value.query.class,
});

console.log(router.currentRoute.value.params.subject);
if (isNaN(router.currentRoute.value.query.class)) {
  console.log(router.currentRoute.value.params.subject);
  router.push(`/lessons/${store.subject}?class=1`);
}

function navigateToNext(data, index, is_route) {
  if (is_route || index == 0) {
    router.push(
      `${router.currentRoute.value.path}/${data.id}?class=${router.currentRoute.value.query.class}`
    );
  }
}

watch(
  () => store.class,
  () => {
    console.log(router.currentRoute.value);
    let url = `/lessons/${store.subject}?class=${store.class + 1}`;
    router.push(url);
  }
);

watch(
  () => store.subject,
  () => {
    let url = `/lessons/${store.subject}?class=${router.currentRoute.value.query.class}`;
    router.push(url);
  }
);

watch(
  () => router.currentRoute.value,
  () => {
    useLesson.getLessons();
  }
);

onBeforeMount(() => {
  useSubject.getSubjects();
});

onMounted(() => {
  (function () {
    const table = document.getElementById("table");
    const tbody = table?.querySelector("tbody");

    let currRow = null,
      dragElem = null,
      mouseDownX = 0,
      mouseDownY = 0,
      mouseX = 0,
      mouseY = 0,
      mouseDrag = false;

    function init() {
      bindMouse();
    }

    function bindMouse() {
      document.addEventListener("mousedown", (event) => {
        if (event.button != 0) return true;

        let target = getTargetRow(event.target);
        if (target) {
          currRow = target;
          addDraggableRow(target);
          currRow.classList.add("is-dragging");

          let coords = getMouseCoords(event);
          mouseDownX = coords.x;
          mouseDownY = coords.y;

          mouseDrag = true;
        }
      });

      document.addEventListener("mousemove", (event) => {
        if (!mouseDrag) return;

        let coords = getMouseCoords(event);
        // mouseX = coords.x - mouseDownX;
        mouseY = coords.y - mouseDownY;

        moveRow(mouseX, mouseY);
      });

      document.addEventListener("mouseup", (event) => {
        if (!mouseDrag) return;

        currRow.classList.remove("is-dragging");
        table.removeChild(dragElem);

        dragElem = null;
        mouseDrag = false;
      });
    }

    function swapRow(row, index) {
      let currIndex = Array.from(tbody.children).indexOf(currRow),
        row1 = currIndex > index ? currRow : row,
        row2 = currIndex > index ? row : currRow;

      tbody.insertBefore(row1, row2);
    }

    function moveRow(x, y) {
      dragElem.style.transform = "translate3d(" + x + "px, " + y + "px, 0)";

      let dPos = dragElem.getBoundingClientRect(),
        currStartY = dPos.y,
        currEndY = currStartY + dPos.height,
        rows = getRows();

      for (var i = 0; i < rows.length; i++) {
        let rowElem = rows[i],
          rowSize = rowElem.getBoundingClientRect(),
          rowStartY = rowSize.y,
          rowEndY = rowStartY + rowSize.height;

        if (
          currRow !== rowElem &&
          isIntersecting(currStartY, currEndY, rowStartY, rowEndY)
        ) {
          if (Math.abs(currStartY - rowStartY) < rowSize.height / 2)
            swapRow(rowElem, i);
        }
      }
    }

    function addDraggableRow(target) {
      dragElem = target.cloneNode(true);
      dragElem.classList.add("draggable-table__drag");
      dragElem.style.height = getStyle(target, "height");
      dragElem.style.background = getStyle(target, "backgroundColor");
      for (var i = 0; i < target.children.length; i++) {
        let oldTD = target.children[i],
          newTD = dragElem.children[i];
        newTD.style.width = getStyle(oldTD, "width");
        newTD.style.height = getStyle(oldTD, "height");
        newTD.style.padding = getStyle(oldTD, "padding");
        newTD.style.margin = getStyle(oldTD, "margin");
      }

      table.appendChild(dragElem);

      let tPos = target.getBoundingClientRect(),
        dPos = dragElem.getBoundingClientRect();
      dragElem.style.bottom = dPos.y - tPos.y - tPos.height + "px";
      dragElem.style.left = "-1px";

      document.dispatchEvent(
        new MouseEvent("mousemove", {
          view: window,
          cancelable: true,
          bubbles: true,
        })
      );
    }

    function getRows() {
      return table.querySelectorAll("tbody tr");
    }

    function getTargetRow(target) {
      let elemName = target.tagName.toLowerCase();

      if (elemName == "tr") return target;
      if (elemName == "td") return target.closest("tr");
    }

    function getMouseCoords(event) {
      return {
        x: event.clientX,
        y: event.clientY,
      };
    }

    function getStyle(target, styleName) {
      let compStyle = getComputedStyle(target),
        style = compStyle[styleName];

      return style ? style : null;
    }

    function isIntersecting(min0, max0, min1, max1) {
      return (
        Math.max(min0, max0) >= Math.min(min1, max1) &&
        Math.min(min0, max0) <= Math.max(min1, max1)
      );
    }

    init();
  })();
});
</script>

<style lang="scss" scoped>
.draggable-table {
  position: relative;
  transition-duration: 1200s;
}

.draggable-table .draggable-table__drag {
  position: absolute;
  // width: 100%;
  cursor: grabbing;
  -webkit-box-shadow: 0px 1px 5px 0px #00000026;
  box-shadow: 0px 1px 5px 0px #00000026;
  opacity: 1;
  display: flex;
}

.draggable-table thead th {
  user-select: none;
}

.draggable-table tbody tr {
  cursor: pointer;
}

.draggable-table tbody tr td {
  user-select: none;
}

.draggable-table tbody tr.is-dragging {
  background: #ffffff !important;
  box-shadow: 0px 1px 5px 0px #00000026;
  width: 100%;

  img {
    display: none;
  }
}

.draggable-table tbody tr.is-dragging td {
  color: white;
}
</style>
