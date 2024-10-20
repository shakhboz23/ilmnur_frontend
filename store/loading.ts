import { defineStore } from "pinia";

export const useLoadingStore = defineStore("loading", () => {
  const runtime = useRuntimeConfig();
  const realtimeUrl = runtime.public.realtimeURL;

  const store = reactive({
    loadingTypes: [],
    page: 1,
    limit: 8,
    isOpen: false,
    isLogin: false,
    salesman_id: "",
    name: "",
    editor: "",
    notifications: [],
    socket: '',
    routeToMain: false,
    addAccount: false,
    middleware: false,
    verification: false,
  });

  const middleware = reactive({
    loading: true,
    passwordChecking: false,
  });

  const user = reactive({
    current_role_step: 0,
    current_role_data: "",
    data: {
      id: "",
      role: "",
      subjects: [],
      is_online: false,
      current_role: "",
    },
  });

  function addLoading(type: string) {
    if (!store.loadingTypes?.includes(type)) {
      store.loadingTypes.push(type);
    }
  }

  function removeLoading(type: any) {
    if (store.loadingTypes?.includes(type)) {
      store.loadingTypes = store.loadingTypes?.filter(
        (loading) => loading !== type
      );
    }
  }

  function isLoadingType(type: any) {
    return store.loadingTypes?.includes(type);
  }

  function priceFormatter(price: string) {
    let unformattedValue = price.replace(/\s/g, "");
    return unformattedValue.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  function getFileType(fileName: string) {
    const extension: any = fileName?.split(".")?.pop()?.toLowerCase();

    if (["jpg", "jpeg", "png", "gif", "bmp"].includes(extension)) {
      return ["image"];
    } else if (["mp3", "wav", "ogg"].includes(extension)) {
      return ["audio"];
    } else if (["mp4", "avi", "mov", "wmv"].includes(extension)) {
      return ["video"];
    } else if (["pdf"].includes(extension)) {
      return ["pdf"];
    } else if (["doc", "docx"].includes(extension)) {
      return ["raw", "word"];
    } else if (["xls", "xlsx"].includes(extension)) {
      return ["raw", "excel"];
    } else if (["ppt", "pptx"].includes(extension)) {
      return ["raw", "powerpoint"];
    } else {
      return "Other";
    }
  }

  return {
    store,
    middleware,
    addLoading,
    removeLoading,
    isLoadingType,
    priceFormatter,
    getFileType,
    user,
  };
});
