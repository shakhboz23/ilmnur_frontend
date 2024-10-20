import { defineStore } from "pinia";
import { ApiRequest } from "~/helpers";
import { useLoadingStore, useContentStore } from "@/store";
import axios from "axios";

export const useLessonStore = defineStore("lesson", () => {
  const apiRequest = new ApiRequest();
  const runtime = useRuntimeConfig();
  const baseUrl = runtime.public.baseURL;
  const isLoading = useLoadingStore();
  const useContent = useContentStore();
  const router = useRouter();
  const { start, finish } = useLoadingIndicator();
  console.log(start);

  const store = reactive({
    subjects: [],
    lessons: [],
    user_step: {},
    lessonById: [],
    errors: "",
    class: 1,
    createModal: false,
    lesson_id: "",
  });

  const create = reactive({
    title: "",
    course_id: "",
    type: false,
  });

  const modal = reactive({
    create: false,
    edit: false,
    delete: false,
  });

  function getSubjects() {
    // start();
    isLoading.addLoading("get");
    apiRequest
      .get(`subject/${store.class}`)
      .then((res) => {
        isLoading.removeLoading("get");
        console.log(res);
        if (res.data.statusCode == 200) {
          store.subjects = res.data.data;
        } else {
          // openNotification(res.data.message);
        }
        // finish();
      })
      .catch((err) => {
        isLoading.removeLoading("get");
        console.log(err);
        // openNotification(err?.response?.data?.message);
        // finish();
      });
  }

  async function getLessons() {
    // isLoading.addLoading("getLessons");
    start();
    const token = localStorage.getItem("token");
    const course_id = router.currentRoute.value.params.course_id;
    axios
      .get(baseUrl + `lesson/getAll/${course_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res, "djskd====================");
        if (res.data.statusCode == 200) {
          console.log(res, "==d=skdls");
          store.lessons = res.data.data;
          store.user_step = res.data.step?.data.pop();
        } else {
          store.lessons = [];
          // openNotification(res.data.message);
        }
        finish();
        isLoading.removeLoading("getLessons");
      })
      .catch((err) => {
        console.log(err);
        finish();
        store.lessons = [];
        store.errors = err.response?.data?.message;
        isLoading.removeLoading("getLessons");
        // openNotification(err?.response?.data?.message);
      });
  }

  function getLessonById() {
    const token = localStorage.getItem("token");
    console.log(token);
    isLoading.addLoading("getLessonById");
    // let class_name = router.currentRoute.value.query.class;
    let id = router.currentRoute.value.params.id;
    axios
      .get(baseUrl + `lesson/getById/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        store.lessonById = res.data.data;
        useContent.store.video_id =
          store.lessonById.video_lesson[0]?.video?.public_id;
        useContent.create.video_id =
          store.lessonById.video_lesson[0]?.video?.id;
        useContent.create.content = store.lessonById.video_lesson[0]?.content;
        isLoading.removeLoading("getLessonById");
      })
      .catch((err) => {
        console.log(err);
        store.lessons = [];
        // openNotification(err?.response?.data?.message);
        isLoading.removeLoading("getLessonById");
      });
  }

  function createLesson() {
    create.course_id = +router.currentRoute.value.params.course_id;
    if (modal.edit) {
      return updateLesson();
    }
    isLoading.addLoading("uploading");
    axios
      .post(baseUrl + `lesson/create`, create)
      .then((res) => {
        console.log(res);
        const subject_id = +router.currentRoute.value.params.subject_id;
        const course_id = +router.currentRoute.value.params.course_id;
        const lesson_id = res.data.data.id;
        const video_lesson_id = res.data.video_lesson?.id;
        if (video_lesson_id) {
          router.push(`/create_test?lesson_id=${lesson_id}`);
        } else {
          router.push(
            `/subjects/${subject_id}/courses/${course_id}/lessons/${lesson_id}?create_lesson=true`
          );
        }
        modal.create = false;
        getLessons();
        isLoading.removeLoading("uploading");
      })
      .catch((err) => {
        console.log(err);
        // openNotification(err?.response?.data?.message);
        isLoading.removeLoading("uploading");
      });
  }

  function updateLesson() {
    const token = localStorage.getItem("token");
    isLoading.addLoading("uploading");
    axios
      .put(baseUrl + `lesson/${store.lesson_id}`, create, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log(res);
        modal.create = false;
        getLessons();
        isLoading.removeLoading("uploading");
      })
      .catch((err) => {
        console.log(err);
        // openNotification(err?.response?.data?.message);
        isLoading.removeLoading("uploading");
      });
  }

  function deleteLesson() {
    const token = localStorage.getItem("token");
    isLoading.addLoading("uploading");
    axios
      .delete(baseUrl + `lesson/${store.lesson_id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log(res);
        modal.delete = false;
        getLessons();
        isLoading.removeLoading("uploading");
      })
      .catch((err) => {
        console.log(err);
        // openNotification(err?.response?.data?.message);
        isLoading.removeLoading("uploading");
      });
  }

  return {
    store,
    create,
    modal,
    getSubjects,
    getLessons,
    getLessonById,
    createLesson,
    deleteLesson,
  };
});
