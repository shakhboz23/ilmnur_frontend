import { defineStore } from "pinia";
import { useLoadingStore } from "@/store";
import axios from "axios";

export const useReytingStore = defineStore("reyting", () => {
  const runtime = useRuntimeConfig();
  const baseUrl = runtime.public.baseURL;
  const isLoading = useLoadingStore();
  const router = useRouter();

  const store = reactive({
    subject: "math",
    course_id: null,
    reyting: [],
    courses: [],
  });

  function getReyting() {
    isLoading.addLoading("getStudentReyting");
    axios
      .post(baseUrl + `getCourseReyting/${store.course_id}/${store.subject}`, {
        subject: store.subject,
        course_id: store.course_id,
      })
      .then((res) => {
        console.log(res);
        store.reyting = res.data.data;
        isLoading.removeLoading("getStudentReyting");
      })
      .catch((err) => {
        console.log(err);
        isLoading.removeLoading("getStudentReyting");
      });
  }

  function getCourses() {
    isLoading.addLoading("getCourses");
    const token = localStorage.getItem("token");
    axios
    .get(baseUrl + `course/getAll/${store.subject}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((res) => {
      console.log(res);
      if (res.data.statusCode == 200) {
        console.log(res, "==d=skdls");
        // store.courses = res.data.data;
        store.courses = res.data.membership;
        // store.user_step = res.data.step?.data.pop();
      } else {
        store.courses = [];
        // openNotification(res.data.message);
      }
    })
    .catch((err) => {
      console.log(err);
      finish();
      store.courses = [];
      // openNotification(err?.response?.data?.message);
    });

  }

  return { store, getReyting, getCourses };
});
