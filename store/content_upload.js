import { defineStore } from "pinia";
import { useLoadingStore } from "@/store";
import axios from "axios";
import { notification } from "ant-design-vue";

export const useContentStore = defineStore("content", () => {
  const runtime = useRuntimeConfig();
  const router = useRouter();
  const baseUrl = runtime.public.baseURL;
  const isLoading = useLoadingStore();

  const store = reactive({
    previewImageUrl: "",
    video_id: "",
    create_lesson: false,
    uploadModal: false,
    file_url: null,
    video: {
      file: "",
      url: "",
    },
    image: [],
  });

  const create = reactive({
    lesson_id: "",
    video: "",
    content: "",
  });

  const file = reactive({
    is_active: false,
    file: "",
    file_type: "",
    duration: "",
  });

  const openNotification = (res) => {
    notification.destroy();
    notification.open({
      message: "Notification Title",
      description: res,
    });
  };

  async function create_url(file) {
    const formData = new FormData();
    formData.append("file", file);
    const res = await axios.post(baseUrl + "video_lesson/create_url", formData);
    console.log(res);
    if (res.data.statusCode == 200) {
      openNotification("Uploaded successfully");
      return res.data.data;
    } else {
      openNotification("Error uploading a file");
    }
  }

  function uploadContent() {
    isLoading.addLoading("uploadVideoLesson");
    create.lesson_id = +router.currentRoute.value.params.id;
    const path = router.currentRoute.value.path.split("/");
    let url = "/" + path[1] + "/" + path[2] + "/" + path[3];
    url += "?class=" + router.currentRoute.value.query.class;
    create.video = store.video.file;
    const formData = new FormData();
    console.log(store.video.file);
    formData.append('file', store.video.file);
    formData.append('lesson_id', create.lesson_id);
    formData.append('content', create.content);
    axios
      .post(baseUrl + "video_lesson", formData)
      .then((res) => {
        console.log(res);
        store.create_lesson = false;
        router.push(url);
        isLoading.removeLoading("uploadVideoLesson");
      })
      .catch((err) => {
        console.log(err);
        isLoading.removeLoading("uploadVideoLesson");
      });
  }

  function uploadVideo() {
    isLoading.addLoading("uploading");
    const formData = new FormData();
    formData.append("file", file.file);
    formData.append("is_active", file.is_active);
    formData.append("file_type", file.file_type);
    formData.append("duration", file.duration);
    if (file.file_type == "youtube") {
      formData.append("file1", file.file);
    } else {
      formData.append("file1", "file");
    }
    axios
      .post(baseUrl + "uploaded/create", formData)
      .then((res) => {
        console.log(res, "kdlsdklsdkl");
        if (file.file_type == "video" || file.file_type == "youtube") {
          store.video_id = res.data.data?.url;
          create.video_id = res.data.data?.id;
          store.uploadModal = false;
        } else if (file.file_type == "image") {
          store.previewImageUrl = res.data.data?.url;
        }
        store.file_url = res.data.data?.url;
        isLoading.removeLoading("uploading");
      })
      .catch((err) => {
        console.log(err);
        isLoading.removeLoading("uploading");
      });
  }

  function uploadImage() {
    isLoading.addLoading("uploading");
    const formData = new FormData();
    formData.append("file", file.file);
    formData.append("is_active", file.is_active);
    formData.append("file_type", file.file_type);
    formData.append("duration", file.duration);
    if (file.file_type == "youtube") {
      formData.append("file1", file.file);
    } else {
      formData.append("file1", "file");
    }
    axios
      .post(baseUrl + "uploaded/create", formData)
      .then((res) => {
        console.log(res);
        if (file.file_type == "video") {
          store.video_id = res.data.data?.public_id;
          create.video_id = res.data.data?.id;
          store.uploadModal = false;
        } else if (file.file_type == "image") {
        }
        store.file_url = res.data.data?.url;
        isLoading.removeLoading("uploading");
      })
      .catch((err) => {
        console.log(err);
        isLoading.removeLoading("uploading");
      });
  }

  return {
    store,
    create,
    file,
    create_url,
    uploadContent,
    uploadVideo,
    uploadImage,
  };
});
