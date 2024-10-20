import { defineStore } from "pinia";
import { useLoadingStore } from "@/store";
import axios from "axios";
import { notification } from "ant-design-vue";

export const useNewsStore = defineStore("news", () => {
  const runtime = useRuntimeConfig();
  const baseUrl = runtime.public.baseURL;
  const isLoading = useLoadingStore();
  const router = useRouter();

  const store = reactive({
    getall: [],
  });

  const create = reactive({
    title: "",
    source: "",
    description: "",
  });

  function createData() {
    axios
      .post(baseUrl + "news", create)
      .then((res) => {
        console.log(res);
        getAll();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function updateStatus(id) {
    axios
      .put(baseUrl + "class/status/" + id)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getAll() {
    axios
      .get(baseUrl + `news/findall`)
      .then((res) => {
        console.log(res);
        store.getall = res.data.data;
      })
      .catch((err) => {});
  }

  return {
    store,
    create,
    createData,
    getAll,
  };
});
