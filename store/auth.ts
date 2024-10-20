import { Password } from "./../.nuxt/components.d";
import { defineStore } from "pinia";
import { useLoadingStore } from "@/store";
import { ApiRequest } from "~/helpers";
import type { ILogin, IRegister } from "~/interfaces";
import { io } from "socket.io-client";
import { useNotification } from "~/composables";
import axios from "axios";

export const useAuthStore = defineStore("auth", () => {
  const apiRequest = new ApiRequest();
  const { showMessage } = useNotification();
  const runtime = useRuntimeConfig();
  const baseUrl = runtime.public.baseURL;
  const realtimeUrl = runtime.public.realtimeURL;
  const store = reactive({});
  const isLoading = useLoadingStore();
  const router = useRouter();
  // const isRoute = [
  //   "login",
  //   "register",
  //   "forgot_password",
  //   "verify_otp",
  //   "new_password",
  //   "error",
  //   "index",
  // ]?.includes(router.currentRoute.value.name);

  const create = reactive({
    phone: "",
    password: "",
    username: "",
  });

  const register = reactive<IRegister>({
    role: "",
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const login = reactive<ILogin>({
    email: "",
    password: "",
  });

  const reset_pass = reactive({
    new_password: "",
    confirm_password: "",
    activation_link: "",
  });

  function getUserFullInfo() {
    isLoading.addLoading("getUserFullInfo");
    console.log("user data");
    axios
      .get(baseUrl + `user/${isLoading.user.data.id}`)
      .then((res: any): void => {
        console.log(res, "user data");
        if (res.data.statusCode == 200) {
          // isLoading.middleware.passwordChecking = false;
          isLoading.user.data = res.data?.data;
          isLoading.store.socket = io("http://localhost:4000", {
            reconnectionDelayMax: 10000000, // Maximum delay between reconnection attempts (milliseconds)
            reconnectionAttempts: 5,
            query: {
              id: isLoading.user?.data.id,
            },
          });
          isLoading.user.current_role_step = 0;
          isLoading.middleware.loading = false;
          for (let i of isLoading.user?.data.role) {
            isLoading.user.current_role_step += 1;
            if (i.role == isLoading.user?.data.current_role) {
              isLoading.user.current_role_data = i;
              break;
            }
          }
        } else {
          isLoading.middleware.loading = false;
          const isRoute = [
            "login",
            "register",
            "forgot_password",
            "verify_otp",
            "new_password",
            "error",
            "index",
          ]?.includes(router.currentRoute.value.name);
          if (!isRoute) {
            console.log("object");
            return navigateTo("/");
          } // showMessage("Xato", "Nimadir xato ketdi");
        }
        isLoading.removeLoading("getUserFullInfo");
      })
      .catch((err) => {
        isLoading.middleware.loading = false;
        console.log(err);
        if (err.response?.data.message == "User not found!") {
          localStorage.removeItem("token");
        }
        const isRoute = [
          "login",
          "register",
          "forgot_password",
          "verify_otp",
          "new_password",
          "error",
          "index",
        ]?.includes(router.currentRoute.value.name);
        if (!isRoute) {
          console.log("object");
          return navigateTo("/");
        } // showMessage("Xato", "Nimadir xato ketdi");
        isLoading.removeLoading("getUserFullInfo");
      });
  }

  function authLogin() {
    apiRequest
      .post("user/login", login)
      .then((res: any) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        if (res.data.statusCode == 200) {
          router.push("/reyting");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function resetPassword() {
    apiRequest
      .post("resetpassword/create", { email: login.email })
      .then((res: any) => {
        console.log(res);
        if (res.status == 201) {
          router.push("/verify-email");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function authRegister() {
    apiRequest
      .post("user/register", register)
      .then((res: any) => {
        console.log(res);
        if (res.data.message == "Verification code sended successfully") {
          localStorage.setItem("token", res.data.token);
          router.push("/verify-email");
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response?.data?.message == "Already registered") {
          showMessage("Email", "Allaqachon ro'yhatdan o'tilgan");
        }
      });
  }

  function authActivateLink() {
    const activation_link = router.currentRoute.value.query.activation_link;
    apiRequest
      .get(`user/activation_link/${activation_link}`)
      .then((res: any) => {
        console.log(res);
        if (res.data.message == "User activated successfully") {
          router.push("/verify-email");
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response?.data?.message == "User already activated") {
          showMessage("Email", "Allaqachon ro'yhatdan o'tilgan");
        }
      });
  }

  function authResetPass() {
    reset_pass.activation_link = String(
      router.currentRoute.value.query.activation_link
    );
    axios
      .put(baseUrl + `user/newPassword`, reset_pass)
      .then((res: any) => {
        console.log(res);
        if (res.status == 200) {
          router.push("/login");
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response?.data?.message == "User already activated") {
          showMessage("Email", "Allaqachon ro'yhatdan o'tilgan");
        }
      });
  }

  function getRegions() {
    const apiKey1 = "4971bcda-6d54-4c71-b231-531f7377d66d";
    const apiKey = "ff0a0a81-3e7e-4a6c-8e21-d7e25594a046";
    const country = "Uzbekistan, Samarqand, Kattaqo'rg'on";
    const region = "Samarqand viloyati";
    const district = "Kattaqo‘rg‘on tumani";
    const village = "Payshanba";

    const location = `${country}, ${region}, ${district}, ${village}`;
    axios
      .get(
        `https://geocode-maps.yandex.ru/1.x/?apikey=${apiKey1}&format=json&geocode=${country}`
      )
      .then((response) => {
        const data = response.data;
        const coordinates =
          data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(
            " "
          );
        const latitude = coordinates[1];
        const longitude = coordinates[0];
        console.log("Latitude:", latitude, "Longitude:", longitude);
        const countryCoordinates = latitude + "," + longitude;
        axios
          .get(
            `https://search-maps.yandex.ru/v1/?apikey=${apiKey}&text=School&ll=${countryCoordinates}&format=json&lang=uz_UZ`
          )
          .then((response) => {
            const data = response.data;
            // Parse the response to extract the school numbers or other relevant information
            console.log(data);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  async function verifyGoogleCredential(response: any) {
    const credential = response.credential;
    apiRequest
      .post("user/auth/google", { credential })
      .then((res: any) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        if (res.data.statusCode == 200) {
          router.push("/reyting");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return {
    store,
    create,
    getUserFullInfo,
    getRegions,
    reset_pass,
    register,
    login,
    authLogin,
    authRegister,
    authActivateLink,
    resetPassword,
    authResetPass,
    verifyGoogleCredential,
  };
});
