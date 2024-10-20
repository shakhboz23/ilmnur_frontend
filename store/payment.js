import { defineStore } from "pinia";
import { useLoadingStore } from "@/store";
import axios from "axios";

export const usePaymentStore = defineStore("payment", () => {
  const runtime = useRuntimeConfig();
  const baseUrl = runtime.public.baseURL;
  const isLoading = useLoadingStore();
  const router = useRouter();
  const store = reactive({
    getall: [],
    courses: [],
  });

  function getAll() {
    axios
      .get(baseUrl + `payments/getAll`)
      .then((res) => {
        console.log(res);
        store.getall = res.data.data;
      })
      .catch((_) => {});
  }

  function getByRoleId() {
    axios
      .get(baseUrl + `coursemember/getByRoleId/${isLoading.user.current_role_data.id}`)
      .then((res) => {
        console.log(res, 'pay');
        store.courses = res.data
      })
      .catch((_) => {});
  }

  return {
    store,
    getAll,
    getByRoleId,
  };
});
