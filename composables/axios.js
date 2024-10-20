import { useLoadingStore } from "@/store";

export const useAxios = () => {
  const runtime = useRuntimeConfig();
  const baseUrl = runtime.public.baseURL;
  const isLoading = useLoadingStore();

  async function getRequest(url, loading) {
    isLoading.addLoading(loading);
    const data = await axios.get(baseUrl + url, {
      onDownloadProgress: (progressEvent) => {
        store.progress = Math.round(
          (progressEvent.loaded / progressEvent.total) * 100
        );
        isLoading.removeLoading(loading);
      },
    });
    return data;
  }

  return { getRequest };
};
