import { defineStore } from "pinia";
import { useLoadingStore } from "@/store";
import axios from "axios";

export const useVideoLessonStore = defineStore("videolesson", () => {
  const runtime = useRuntimeConfig();
  const baseUrl = runtime.public.baseURL;
  const isLoading = useLoadingStore();
  const router = useRouter();

  const store = reactive({
    video_lesson: [],
  });

  function getById() {
    isLoading.addLoading("getLessonById");
    const id = router.currentRoute.value.params.id;
    axios
      .get(baseUrl + `lesson/getById/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.statusCode == 200) {
          store.video_lesson = res.data.data;
        } else {
          // openNotification(res.data.message);
          store.video_lesson = [];
        }
        isLoading.removeLoading("getLessonById");
      })
      .catch((err) => {
        console.log(err);
        // openNotification(err?.response?.data?.message);
        store.video_lesson = [];
        isLoading.removeLoading("getLessonById");
      });
  }

  return { store, getById };
});
