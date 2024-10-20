import { defineNuxtRouteMiddleware } from "#app";
import { useLoadingStore, useAuthStore } from "~/store";

export default defineNuxtRouteMiddleware(async (to: any, from) => {
  const router = useRouter();
  const isRoute = [
    "login",
    "register",
    "forgot_password",
    "verify_otp",
    "verify-email",
    "new_password",
    "error",
    "index",
    "change-password",
    "reset-password",
  ]?.includes(to.name);
  const useAuth = useAuthStore();
  const isLoading = useLoadingStore();
  if (!isLoading.user.data?.role) {
    isLoading.addLoading("getUserFullInfo");
  }
  try {
    if (process.client) {
      const token = localStorage.getItem("token");
      console.log(to.name);
      // throw createError({
      //   statusCode: 404,
      //   statusMessage: "Page Not Found",
      // });
      if (!isRoute) {
        // router.push("/404")
      }
      if (token) {
        const parts = token.split(".");
        const exp = parts[1];
        const decodedPayload = JSON.parse(atob(exp));
        console.log(decodedPayload);
        isLoading.user.data.id = decodedPayload.id;
        if (!isLoading.user.data?.role) {
          useAuth.getUserFullInfo();
        }
        console.log(isLoading.user.data.id);
        const experition = decodedPayload.exp;
        const now = +Date.now().toString().slice(0, 10);
        console.log(now, experition);
        console.log(now >= experition);
        if (now >= experition) {
          console.log(now >= experition);
          localStorage.removeItem("token");
          return navigateTo("/login");
        } else {
          console.log(to.name);
          // if (to.name !== "reyting" && !isLoading.store.routeToMain) {
          //   console.log("--------------------------------djksdjk");
          //   if (
          //     (to.name == "login" ||
          //     to.name == "register" ||
          //     to.name == "index") && !isLoading.store.addAccount
          //     ) {
          //       // window.location.href = "/reyting";
          //       router.push("/reyting");
          //   }
          // }
        }
      } else if (!isRoute) {
        if (
          to.name ==
            "test" &&
          to.query.g
        ) {
          return;
        }
        isLoading.middleware.loading = false;
        console.log("object");
        return navigateTo("/");
      } else {
        isLoading.middleware.loading = false;
      }
    }
  } catch (error) {
    isLoading.middleware.loading = false;
    console.log(error);
    if (!isRoute) {
      console.log("object");
      return navigateTo("/");
    }
  }
});
