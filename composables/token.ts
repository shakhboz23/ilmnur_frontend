import { useLoadingStore } from "~/store";
export const verifyToken = () => {
  const router = useRouter();
  const isLoading = useLoadingStore();
  const routeName = router.currentRoute.value.name;
  function verifyAuthToken() {
    if (routeName !== "reyting" && !isLoading.store.routeToMain) {
      console.log("--------------------------------djksdjk");
      if (
        (routeName == "login" ||
          routeName == "register" ||
          routeName == "index") &&
        !isLoading.store.addAccount
      ) {
        // window.location.href = "/reyting";
        router.push("/reyting");
      }
    }
  }

  return { verifyAuthToken };
};
