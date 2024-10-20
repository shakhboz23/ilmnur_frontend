import { defineStore } from "pinia";
import { useLoadingStore } from "@/store";
import axios from "axios";

export const useProfileStore = defineStore("profile", () => {
  const runtime = useRuntimeConfig();
  const baseUrl = runtime.public.baseURL;
  const isLoading = useLoadingStore();
  const router = useRouter();

  const store = reactive({
    currentStep: "",
    is_activity: false,
  });
  const activity = reactive({
    start_time: "",
    end_time: "",
    role: "",
    user_id: "",
  });

  function getActivity() {
    activity.start_time = new Date();
    activity.end_time = new Date(activity.start_time);
    activity.end_time.setDate(activity.start_time.getDate() - 7);
    activity.role = isLoading.user.data.current_role;
    activity.user_id = isLoading.user.data.id;
    console.log(activity, "------");
    axios
      .post(baseUrl + `activity/getactivity`, activity)
      .then((res) => {
        console.log(res, "activity");
        for (let i=0; i < store.currentStep?.length; i++) {
            for (let event of res.data.data) {
                console.log(event)
                const date = new Date(event.createdAt);
                if (date.getMonth() == store.currentStep[i][0] && date.getDate() == store.currentStep[i][1]) {
                    store.currentStep[i].push(event.activity);
                    break;
                }
            }
        }
        store.is_activity = true;
        console.log(store.currentStep)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return { store, getActivity };
});
