import { defineStore } from "pinia";
import { useLoadingStore } from "@/store";
import axios from "axios";

export const useSettingsStore = defineStore("settings", () => {
  const runtime = useRuntimeConfig();
  const baseUrl = runtime.public.baseURL;
  const isLoading = useLoadingStore();
  const router = useRouter();

  const store = reactive({
    change_password: false,
    handleImage: false,
    profileFile: "",
    membership: [],
  });

  const user = reactive({
    image: "",
    gender: "MALE",
    class: "",
    phone: "",
    image: "",
    region: "",
    district: "",
    school_number: "",
    class: [],
    name: "",
    surname: "",
    email: "",
    user: {
      name: "",
      surname: "",
      email: "",
    },
    subjects: [],
    get_answered: true,
    new_task: true,
    chat_messages: true,
  });

  const change_password = reactive({
    current_password: "",
    new_password: "",
  });

  function updateProfile() {
    // subject = router.currentRoute.value.params.subject;
    // const test_id = router.currentRoute.value.params.test_id;
    for (let i in user.user) {
      user[i] = user.user[i];
    }
    axios
      .put(
        baseUrl + `role/profile/${isLoading.user.current_role_data.id}`,
        user
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        // openNotification(err?.response?.data?.message);
      });
  }

  function getProfile() {
    // subject = router.currentRoute.value.params.subject;
    // const test_id = router.currentRoute.value.params.test_id;
    axios
      .get(
        baseUrl +
          `role/getfull/${isLoading.user.data.id}/${isLoading.user.data.current_role}`
      )
      .then((res) => {
        console.log(res.data, "settings");
        for (let i in user) {
          user[i] = res.data?.data[i];
        }
        // user.full_name = res.data?.data?.user?.name + res.data?.data?.user?.surname
        // store.membership = res.data?.membership;
        // user.phone = res.data?.data?.user?.phone;
      })
      .catch((err) => {
        console.log(err);
        // openNotification(err?.response?.data?.message);
      });
  }

  function updateProfileImage() {
    const formData = new FormData();
    console.log(store.profileFile);
    formData.append("image", store.profileFile);
    axios
      .put(
        baseUrl +
          `role/profileImage/${isLoading.user.data.id}/${isLoading.user.data.current_role}`,
        formData
      )
      .then((res) => {
        console.log(res);
        user.image = res.data?.data?.image;
      })
      .catch((err) => {
        console.log(err);
        // openNotification(err?.response?.data?.message);
      });
  }

  return {
    store,
    user,
    change_password,
    getProfile,
    updateProfile,
    updateProfileImage,
  };
});
