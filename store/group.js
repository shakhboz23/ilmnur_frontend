import { defineStore } from "pinia";
import { useLoadingStore } from "@/store";
import axios from "axios";

export const useGroupStore = defineStore("Group", () => {
  const runtime = useRuntimeConfig();
  const baseUrl = runtime.public.baseURL;
  const isLoading = useLoadingStore();
  const router = useRouter();

  const store = reactive({
    getall: [],
    getById: {},
    getUsers: [],
    my_classes: [],
    class_name: [],
  });

  const create = reactive({
    name: "",
  });

  const openNotification = (res) => {
    notification.destroy();
    notification.open({
      message: "Notification Title",
      description: res,
      duration: 0,
    });
  };

  function createData() {
    create.creator_id = isLoading.user.current_role_data.id;
    axios
      .post(baseUrl + "group/create", create)
      .then((res) => {
        console.log(res);
        if (res.data.statusCode == 200) {
          openNotification(res.data.message);
        } else {
          openNotification(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        openNotification(err?.response?.data?.message);
      });
  }

  function getById() {
    isLoading.addLoading("getById");
    const id = router.currentRoute.value.params.class;
    axios
      .get(baseUrl + `group/getById/${id}`)
      .then((res) => {
        console.log(res);
        store.getById = res.data.data;
        isLoading.removeLoading("getById");
      })
      .catch((err) => {
        console.log(err);
        openNotification(err?.response?.data?.message);
        isLoading.removeLoading("getById");
      });
  }

  function getUsers(id) {
    isLoading.addLoading("getUsers");
    axios
      .get(baseUrl + `group/getUsers/${id}`)
      .then((res) => {
        console.log(res);
        store.getUsers = res.data.data;
        isLoading.removeLoading("getUsers");
      })
      .catch((err) => {
        console.log(err);
        openNotification(err?.response?.data?.message);
        isLoading.removeLoading("getUsers");
      });
  }

  function updateCode() {
    isLoading.addLoading("generate");
    const id = router.currentRoute.value.params.class;
    axios
      .put(baseUrl + "group/generate/" + id)
      .then((res) => {
        console.log(res);
        if (res.data.statusCode == 200) {
          store.getById = res.data.data;
          openNotification(res.data.message);
        } else {
          openNotification(res.data.message);
        }
        isLoading.removeLoading("generate");
      })
      .catch((err) => {
        console.log(err);
        openNotification(err?.response?.data?.message);
        isLoading.removeLoading("generate");
      });
  }

  function addGroupstep(id) {
    axios
      .put(baseUrl + "group/addstep/" + id)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        openNotification(err?.response?.data?.message);
      });
  }

  function getAll() {
    axios
      .get(baseUrl + `group`)
      .then((res) => {
        console.log(res);
        store.getall = res.data.data;
      })
      .catch((err) => {
        console.log(err);
        openNotification(err?.response?.data?.message);
      });
  }

  function getLeaderTeacherClass() {
    const token = localStorage.getItem("token");
    axios
      .get(
        baseUrl +
          `group/leaderteachergroup/${isLoading.user.current_role_data.id}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((res) => {
        store.getall = res.data.data;
      })
      .catch((err) => {
        openNotification(err?.response?.data?.message);
      });
  }

  function getTeacherClass() {
    const token = localStorage.getItem("token");
    axios
      .post(
        baseUrl + `role/teacherclass`,
        {
          class_name: store.class_name,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((res) => {
        store.my_classes = res.data.data;
      })
      .catch((err) => {
        openNotification(err?.response?.data?.message);
      });
  }

  // isLoading.store.socket.on("request", (res) => {
  //   console.log(res, "socket accepted");
  //   if (res.type == "request") {
  //     store.getall.push(res.data.data);
  //   } else if (res.type == "accepted") {
  //     for (let i in store.getall) {
  //       if (res.data.data.id == store.getall[i].id) {
  //         console.log(i);
  //         store.getall[i] = res.data.data;
  //       }
  //     }
  //   }
  // });

  return {
    store,
    create,
    createData,
    getAll,
    getById,
    // updateStatus,
    getLeaderTeacherClass,
    getTeacherClass,
    addGroupstep,
    updateCode,
    getUsers,
  };
});
