import { defineStore } from "pinia";
import { useLoadingStore, useAuthStore, useCourseStore } from "@/store";
import axios from "axios";
import { useNotification } from "@/composables";
import { roles } from "@/constants";
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc'; // Import the UTC plugin
import localeData from 'dayjs/plugin/localeData';
export const useUserStore = defineStore("User", () => {
  const { showMessage } = useNotification();
  const runtime = useRuntimeConfig();
  const baseUrl = runtime.public.baseURL;
  const useAuth = useAuthStore();
  const useCourse = useCourseStore();
  const isLoading = useLoadingStore();
  const router = useRouter();

  const store = reactive({
    getall: "",
    progress: 0,
    createModal: false,
    activeKey: 1,
    password: "",
    is_update: false,
    user_id: "",
    subject_step: 1,
    is_send: false,
    is_end_time: false,
    addchildmodal: false,
    deleteModal: false,
    children: [],
    otp: "",
    total_count: {},
    search_input: "",
    search_users: [],
    add_user_step: 0,
    is_user_login: false,
    role_id: "",
  });

  const create = reactive({
    name: "",
    surname: "",
    subjects: [],
    role: "",
    secret_key: "",
    file: "",
    deadline: new Date(),
    email: "",
    password: "",
    user_id: "",
  });

  function sendOtp() {
    isLoading.addLoading("sendOtp");
    const phone = "+998" + create.phone.replace(/\D/g, "");
    axios
      .post(baseUrl + "otp/sendOtp", {
        phone,
      })
      .then((res) => {
        console.log(res);
        store.is_send = true;
        store.otp = res.data.data.code;
        store.deadline = Date.now() + 120000;
        isLoading.removeLoading("sendOtp");
      })
      .catch((err) => {
        console.log(err);
        showMessage("Xato", err?.response?.data?.message);
        isLoading.removeLoading("sendOtp");
      });
  }

  function register() {
    // const code = create.code.join("");
    // const phone = "+998" + create.phone.replace(/\D/g, "");
    axios
      .post(baseUrl + "user/register", create)
      .then((res) => {
        console.log(res);
        if (res.data.statusCode == 200) {
          // showMessage("xato", "Telefon yoki parol xato");
          store.activeKey += 1;
          // localStorage.setItem("token", res.data.token);
          create.name = null;
          create.surname = null;
          create.phone = null;
          create.school_number = null;
          create.class = [[1, "A"]];
          create.subjects = [];
          create.role = "";
          create.region = null;
          create.district = null;
          create.secret_key = null;
          create.file = "";
          create.code = [];
          create.deadline = new Date();
          store.is_send = false;
          isLoading.user.data.id = res.data.data.user.id;
          useAuth.getUserFullInfo();
        } else {
          if (res.data.message == "Already registered") {
            showMessage("Xato", "Telefon raqam allaqachon ro'yhatga olingan");
            store.activeKey = 1;
            navigateTo("/login");
            store.is_send = false;
          } else {
            showMessage("Xato", "Telefon yoki parol xato");
          }
        }
        getAll();
      })
      .catch((err) => {
        console.log(err);
        if (err.response.data.message == "Class") {
          showMessage("Xato", "Bu sinfga rahbar allaqachon ro'yhatga olingan");
          return;
        }
        showMessage("Xato", "Telefon yoki parol xato");
      });
  }

  function update(data) {
    console.log(create);
    axios
      .put(baseUrl + `role/update/${isLoading.user.current_role_data.id}`, data)
      .then((res) => {
        console.log(res);
        if (res.data.statusCode == 200) {
          // openNotification(res.data.message);
          store.activeKey += 1;
        } else {
          showMessage("Xato", "Telefon yoki parol xato");
        }
        getAll();
      })
      .catch((err) => {
        console.log(err);
        // openNotification(err?.response?.data?.message);
        showMessage("Roleni o'zgartirish", "Muvaffaqiyatli o'zgartirildi");
      });
  }

  function updateUser(data) {
    console.log(data);
    axios
      .put(baseUrl + `role/update/${store.role_id}`, data)
      .then((res) => {
        console.log(res);
        if (res.data.statusCode == 200) {
          // openNotification(res.data.message);
          store.activeKey += 1;
        } else {
          showMessage("Xato", "Telefon yoki parol xato");
        }
        getAll();
      })
      .catch((err) => {
        console.log(err);
        // openNotification(err?.response?.data?.message);
        showMessage("Roleni o'zgartirish", "Muvaffaqiyatli o'zgartirildi");
      });
  }

  function checkEmail() {
    console.log(create);
    isLoading.addLoading("checkEmail");
    axios
      .get(baseUrl + `user/checkemail/${create.email}`)
      .then((res) => {
        console.log(res);
        store.is_user_login = true;
        store.add_user_step = 1;
        create.name = res.data.data.name
        create.surname = res.data.data.surname
        create.email = res.data.data.email
        isLoading.removeLoading("checkEmail");
      })
      .catch((err) => {
        isLoading.removeLoading("checkEmail");
        store.is_user_login = false;
        store.add_user_step = 1;
        console.log(err);
        // openNotification(err?.response?.data?.message);
        showMessage("Roleni o'zgartirish", "Muvaffaqiyatli o'zgartirildi");
      });
  }

  function check() {
    console.log(store.password);
    axios
      .post(baseUrl + "user/check_password", {
        user_id: isLoading.user.current_role_data.user_id,
        role: isLoading.user.current_role_data.role,
        password: String(store.password),
      })
      .then((res) => {
        console.log(res);
        if (res.data.statusCode == 200) {
          // isLoading.middleware.passwordChecking = true;
          isLoading.user.current_role_data =
            isLoading.user.data.role[isLoading.user.current_role_step - 1];
          store.password = "";
          // showMessage("Roleni o'zgartirish", "Muvaffaqiyatli o'zgartirildi");
          store.activeKey += 1;
        } else {
          showMessage("Xato", "Nimadir xato ketdi");
        }
      })
      .catch((err) => {
        console.log(err);
        showMessage("Xato", "Iltimos, ma'lumotlarni to'g'ri kiriting!");
      });
  }

  function getAll() {
    isLoading.addLoading("getAllUsers");
    const token = localStorage.getItem("token");
    axios
      .get(baseUrl + `role/getByRole/${create.role}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
        onDownloadProgress: (progressEvent) => {
          store.progress = Math.round(
            (progressEvent.loaded / progressEvent.total) * 100
          );
          console.log(store.progress);
          // setUploadPercentage(progress);
        },
      })
      .then((res) => {
        console.log(res);
        store.getall = res.data.data;
        isLoading.removeLoading("getAllUsers");
      })
      .catch((err) => {
        console.log(err);
        // showMessage("Xato", "Nimadir xato ketdi");
        isLoading.removeLoading("getAllUsers");
      });
  }

  function searchUsers() {
    isLoading.addLoading("getAllUsers");
    const token = localStorage.getItem("token");
    axios
      .get(baseUrl + `user/searchusers/${store.search_input}/1`, {
        headers: {
          Authorization: "Bearer " + token,
        },
        onDownloadProgress: (progressEvent) => {
          store.progress = Math.round(
            (progressEvent.loaded / progressEvent.total) * 100
          );
          console.log(store.progress);
          // setUploadPercentage(progress);
        },
      })
      .then((res) => {
        console.log(res);
        store.search_users = res.data.data.records;
        let date
        useCourse.store.user_dates = [];
        for (let i of store.search_users) {
          date = new Date();
          const formattedDate = formatDateToYYYYMMDD(date);
          useCourse.store.user_dates.push(dayjs(formattedDate, "YYYY-MM-DD"));
        }
        console.log(useCourse.store.user_dates)
        isLoading.removeLoading("getAllUsers");
      })
      .catch((err) => {
        console.log(err);
        // showMessage("Xato", "Nimadir xato ketdi");
        isLoading.removeLoading("getAllUsers");
      });
  }

  function getAllStudent() {
    isLoading.addLoading("getAllUsers");
    const class_id = router.currentRoute.value.params.class;
    const token = localStorage.getItem("token");
    axios
      .get(baseUrl + `role/getallstudent/${class_id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        store.getall = res.data.data;
        isLoading.removeLoading("getAllUsers");
      })
      .catch((_) => {
        showMessage("Xato", "Nimadir xato ketdi");
        isLoading.removeLoading("getAllUsers");
      });
  }

  function countUsers() {
    isLoading.addLoading("countUsers");
    let users = [];
    for (let i of roles) {
      console.log(i);
      users.push(i.role);
    }
    axios
      .post(baseUrl + `role/count_users`, users)
      .then((res) => {
        console.log(res, "--------------------------------");
        store.total_count = res.data.data;
        isLoading.removeLoading("countUsers");
      })
      .catch((_) => {
        showMessage("Xato", "Nimadir xato ketdi");
        isLoading.removeLoading("countUsers");
      });
  }

  function updateStatus(id, index) {
    axios
      .put(baseUrl + `role/status/${id}/${create.role}`)
      .then((res) => {
        console.log(res);
        if (res.data.statusCode == 200) {
          store.getall[index].user_status = "solved";
          showMessage("Status", "Muvaffaqiyatli o'zgartirildi");
        } else {
          showMessage("Xato", "Nimadir xato ketdi");
        }
      })
      .catch((err) => {
        console.log(err);
        showMessage("Xato", "Nimadir xato ketdi");
      });
  }

  function addChild() {
    isLoading.addLoading("addChild");
    const phone = "+998" + create.phone.replace(/\D/g, "");

    axios
      .post(baseUrl + `user/addchild`, {
        ...create,
        phone,
        parent_id: isLoading.user.current_role_data.id,
        user_id: 0,
      })
      .then((res) => {
        console.log(res);
        if (res.data.statusCode == 200) {
          showMessage("Farzand qo'shish", "Farzandingiz qo'shildi!");
          store.addchildmodal = false;
          getChildren();
        } else {
          showMessage("Xato", "Nimadir xato ketdi");
        }
        isLoading.removeLoading("addChild");
      })
      .catch((err) => {
        console.log(err.response.data.message);
        if (err.response.data.message == "Already exists") {
          showMessage(
            "Farzand qo'shish",
            "Foydalanuvchi allaqachon qo'shilgan!"
          );
        } else {
          showMessage("Farzand qo'shish", "Farzandingiz topilmadi!");
        }
        isLoading.removeLoading("addChild");
      });
  }

  function getChildren() {
    isLoading.addLoading("getChildren");
    axios
      .get(baseUrl + `role/getChildren/${isLoading.user.current_role_data.id}`)
      .then((res) => {
        console.log(res, "children");
        store.children = res.data.data;
        isLoading.removeLoading("getChildren");
      })
      .catch((err) => {
        showMessage("Xato", "Nimadir xato ketdi");
        isLoading.removeLoading("getChildren");
      });
  }

  function deleteUser(id, index) {
    isLoading.addLoading("deleteUser");
    axios
      .delete(baseUrl + `role/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.statusCode == 200) {
          showMessage("Rad etish", "Foydalanuvchi o'chirildi");
          store.getall.splice(index, 1);
        } else {
          showMessage("Xato", "Nimadir xato ketdi");
        }
        isLoading.removeLoading("deleteUser");
      })
      .catch((err) => {
        console.log(err);
        showMessage("Xato", "Nimadir xato ketdi");
        isLoading.removeLoading("deleteUser");
      });
  }

  function formatDateToYYYYMMDD(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
  }

  return {
    store,
    create,
    register,
    getAll,
    check,
    update,
    getAllStudent,
    updateUser,
    updateStatus,
    checkEmail,
    sendOtp,
    addChild,
    getChildren,
    deleteUser,
    countUsers,
    searchUsers,
  };
});
