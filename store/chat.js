import { io } from "socket.io-client";
import { defineStore } from "pinia";
import { useLoadingStore } from "@/store";
import axios from "axios";

export const useChatStore = defineStore("chat", () => {
  const runtime = useRuntimeConfig();
  const baseUrl = runtime.public.baseURL;
  const realtimeUrl = runtime.public.realtimeURL;
  const isLoading = useLoadingStore();
  console.log(realtimeUrl);
  let socket;
  if (process.client) {
    socket = io("http://localhost:4000", {
      reconnectionDelayMax: 10000000, // Maximum delay between reconnection attempts (milliseconds)
      reconnectionAttempts: 5,
      query: {
        id: isLoading.user.data.id,
      },
    });
  }

  // const socket = io(realtimeUrl, {
  //   reconnectionDelayMax: 10000000, // Maximum delay between reconnection attempts (milliseconds)
  //   reconnectionAttempts: 5,
  //   query: {
  //     id: isLoading.user.data.id,
  //   },
  // });

  // {
  // auth: {
  //   token: "Bearer " + token,
  // },
  // }

  const store = reactive({
    data: "",
    chatgroups: [],
    chat_id: "",
  });
  const create = reactive({
    file: "",
    file_type: {
      name: "",
      type: "",
      size: "",
    },
    icon: 1,
    text: "",
    user_id: 1,
    chatgroup_id: 2,
  });

  function sendMessage() {
    const formData = new FormData();
    formData.append("icon", create.icon);
    formData.append("text", create.text);
    formData.append("user_id", isLoading.user.data.id);
    formData.append("chatgroup_id", create.chatgroup_id);
    formData.append("image", create.file);
    formData.append("file_type", JSON.stringify(create.file_type));

    axios
      .post(baseUrl + "chat", formData)
      .then((res) => {
        console.log(res);
        // getAll();
        socket.emit("getAll/created", {
          chatgroup_id: create.chatgroup_id,
          page: 1,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function updateMessage() {
    axios
      .put(baseUrl + `chat/${store.chat_id}`, create)
      .then((res) => {
        console.log(res);
        // getAll();
        socket.emit("getAll/created", {
          chatgroup_id: create.chatgroup_id,
          page: 1,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function deleteMessage() {
    axios
      .delete(baseUrl + `chat/${store.chat_id}`, create)
      .then((res) => {
        console.log(res);
        // getAll();
        socket.emit("getAll/created", {
          chatgroup_id: create.chatgroup_id,
          page: 1,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getAll() {
    socket.emit(`getAll/chats`, { chatgroup_id: create.chatgroup_id, page: 1 });
  }

  function getAllGroups() {
    axios
      .get(baseUrl + `chatgroup`)
      .then((res) => {
        console.log(res);
        store.chatgroups = res.data.data;
      })
      .catch((err) => {
        console.log(err);
        // openNotification(err?.response?.data?.message);
      });
  }
  if (process.client) {
    socket.on("created", (res) => {
      socket.emit(`getAll/created`, {
        chatgroup_id: create.chatgroup_id,
        page: 1,
      });
      console.log(res);
    });

    socket.on("chats", (res) => {
      console.log(res);
      store.data = res.data.records;
      for (let i in store.data) {
        console.log(i);
        store.data[i].file_type = JSON.parse(store.data[i].file_type);
      }
    });

    socket.on("notifications", (res) => {
      console.log(res);
      isLoading.store.notifications = res.data;
    });

    socket.on("connected", (res) => {
      console.log(res, "connected ====================");
      isLoading.user.current_role_data.is_online = res.data?.is_online;
    });
    socket.on("disconnected", (res) => {
      console.log(res, "disconnected ====================");
    });
  }

  return {
    store,
    create,
    sendMessage,
    getAll,
    getAllGroups,
    deleteMessage,
    updateMessage,
  };
});
