import { defineStore } from "pinia";
import { useLoadingStore } from "@/store";
import axios from "axios";

export const useGroupuserStore = defineStore("Groupuser", () => {
  const runtime = useRuntimeConfig();
  const baseUrl = runtime.public.baseURL;
  const isLoading = useLoadingStore();
  const router = useRouter();

  const store = reactive({
    getall: [],
    group: "",
    full_name: "",
    group_type: "user",
    file: "",
    activeTab: 0,
  });

  const create = reactive({
    users: [],
    group_id: "",
  });

  function createData() {
    const token = localStorage.getItem("token");
    create.group_id = router.currentRoute.value.params.class;
    console.log(create.group_id);
    if (store.group_type == 'user') {
      create.users = [store.full_name];
    } else {
      create.users = store.file;
    }
    axios
      .post(baseUrl + "group_user/create", create, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function updateStatus(id) {
    axios
      .put(baseUrl + "group_user/status/" + id)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getAll() {
    const group_id = router.currentRoute.value.params.class;
    axios
      .get(baseUrl + `group_user/getbygroup/${group_id}/${store.activeTab}`)
      .then((res) => {
        console.log(res.data, "===");
        store.getall = res.data.data;
        store.group = res.data.group;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getLeaderTeacherGroup_user() {
    const token = localStorage.getItem("token");
    axios
      .get(
        baseUrl +
          `group_user/leaderteachergroup_user/${isLoading.user.current_role_data.id}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((res) => {
        store.getall = res.data.data;
      })
      .catch((err) => {});
  }

  function getTeacherGroup_user() {
    const token = localStorage.getItem("token");
    axios
      .post(
        baseUrl + `role/teachergroup_user`,
        {
          group_user_name: store.group_user_name,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((res) => {
        store.my_group_useres = res.data.data;
      })
      .catch((err) => {});
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
    updateStatus,
    getLeaderTeacherGroup_user,
    getTeacherGroup_user,
  };
});
