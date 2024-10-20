import { defineStore } from "pinia";
import { ApiRequest } from "~/helpers";
import { useLoadingStore, useContentStore } from "@/store";
import { useNotification } from "@/composables";
import axios from "axios";

export const useCourseStore = defineStore("course", () => {
  const apiRequest = new ApiRequest();
  const runtime = useRuntimeConfig();
  const baseUrl = runtime.public.baseURL;
  const isLoading = useLoadingStore();
  const useContent = useContentStore();
  const router = useRouter();
  const { showMessage } = useNotification();
  const { start, finish } = useLoadingIndicator();
  console.log(start);

  const store = reactive({
    subjects: [],
    courses: [],
    course_id: "",
    user_step: {},
    courseById: [],
    membership: [],
    class: 1,
    createModal: false,
    user_dates: [],
    addMember: false,
  });

  const create = reactive({
    name: "",
    description: "",
    price: "",
    discount: "",
    subject_id: "",
    published: false,
    type: "public",
    price_type: "monthly",
    file: {
      file: "",
      url: "",
    },
  });

  const modal = reactive({
    create: false,
    edit: false,
    delete: false,
    join: false,
  });

  const addmember = reactive({
    course_id: "",
    dates: [],
    role_id: [],
  });

  function clearData() {
    for (let i in create) {
      create[i] = "";
    }
  }

  function getSubjects() {
    // start();
    console.log("Hiiiiiiiiii456");
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

  async function getCourses() {
    start();
    store.courses = [];
    let subject = router.currentRoute.value.params.subject_id;
    const token = localStorage.getItem("token");
    axios
      .get(baseUrl + `course/getAll/${subject}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log(res);
        if (res.data.statusCode == 200) {
          console.log(res, "==d=skdls");
          store.courses = res.data.data;
          store.membership = res.data.membership;
          store.user_step = res.data.step?.data.pop();
        } else {
          store.courses = [];
          // openNotification(res.data.message);
        }
        finish();
      })
      .catch((err) => {
        console.log(err);
        finish();
        store.courses = [];
        // openNotification(err?.response?.data?.message);
      });
  }

  function getCourseById() {
    isLoading.addLoading("getCourseById");
    let class_name = router.currentRoute.value.query.class;
    let id = router.currentRoute.value.params.id;
    axios
      .get(baseUrl + `course/getById/${id}/${class_name}`)
      .then((res) => {
        console.log(res);
        store.courseById = res.data.data;
        useContent.store.video_id =
          store.courseById.video_course[0]?.video?.public_id;
        useContent.create.video_id =
          store.courseById.video_course[0]?.video?.id;
        useContent.create.content = store.courseById.video_course[0]?.content;
        isLoading.removeLoading("getCourseById");
      })
      .catch((err) => {
        console.log(err);
        store.courses = [];
        // openNotification(err?.response?.data?.message);
        isLoading.removeLoading("getCourseById");
      });
  }

  function createCourse() {
    create.subject_id = router.currentRoute.value.params.subject_id;
    if (modal.edit) {
      return updateCourse();
    }
    const token = localStorage.getItem("token");
    isLoading.addLoading("uploading");
    const formData = new FormData();
    for (let i in create) {
      if (create[i] !== "") {
        formData.append(i, create[i]);
      }
    }
    formData.delete("file");
    formData.append("file", create.file.file);
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    axios
      .post(baseUrl + `course/create`, formData, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log(res);
        modal.create = false;
        getCourses();
        isLoading.removeLoading("uploading");
      })
      .catch((err) => {
        console.log(err);
        // openNotification(err?.response?.data?.message);
        isLoading.removeLoading("uploading");
      });
  }

  function addMember(type, course_id) {
    if (type == "jointogroup") {
      addmember.role_id = [isLoading.user.current_role_data.id];
      addmember.course_id = course_id;
    }else {
      addmember.course_id = store.course_id;      
    }
    if (!addmember.role_id?.length) {
      return;
    }
    console.log(addmember.role_id);
    // create.subject_id = router.currentRoute.value.params.subject_id;
    // if (modal.edit) {
    //   return updateCourse();
    // }
    const token = localStorage.getItem("token");
    isLoading.addLoading("addMember");
    axios
      .post(baseUrl + `coursemember/create`, addmember, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log(res);
        store.addMember = false;
        if (type == "jointogroup") {
          const current_route = router.currentRoute.value;
          const subject_id = current_route.params.subject_id;
          router.push(
            `/subjects/${subject_id}/courses/${store.course_id}/lessons`
          );
        }
        showMessage("Add member", "Member added successfully")
        getCourses();
        isLoading.removeLoading("addMember");
      })
      .catch((err) => {
        console.log(err);
        // openNotification(err?.response?.data?.message);
        isLoading.removeLoading("addMember");
        showMessage("Add member", "Something went wrong")
      });
  }

  function updateCourse() {
    const token = localStorage.getItem("token");
    isLoading.addLoading("uploading");
    axios
      .put(baseUrl + `course/${store.course_id}`, create, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log(res);
        modal.create = false;
        getCourses();
        isLoading.removeLoading("uploading");
      })
      .catch((err) => {
        console.log(err);
        // openNotification(err?.response?.data?.message);
        isLoading.removeLoading("uploading");
      });
  }

  function deleteCourse() {
    const token = localStorage.getItem("token");
    isLoading.addLoading("uploading");
    axios
      .delete(baseUrl + `course/${store.course_id}`, create, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log(res);
        modal.delete = false;
        getCourses();
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
    addmember,
    modal,
    getSubjects,
    getCourses,
    getCourseById,
    createCourse,
    clearData,
    deleteCourse,
    addMember,
  };
});
