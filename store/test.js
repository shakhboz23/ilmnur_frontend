import { defineStore } from "pinia";
import { useLoadingStore, useContentStore, useGroupStore } from "@/store";
import { useNotification } from "@/composables";
import axios from "axios";

export const useTestStore = defineStore("test", () => {
  const { showMessage } = useNotification();
  const runtime = useRuntimeConfig();
  const baseUrl = runtime.public.baseURL;
  const isLoading = useLoadingStore();
  const useContent = useContentStore();
  const useGroup = useGroupStore();
  const router = useRouter();

  const store = reactive({
    tests: [],
    check_result: [],
    subject_ball: {},
    slideStepId: "",
    testResModal: false,
    testResBall: [],
    maxTests: 16,
    questions_count: 10,
    slideStep: 0,
    isTestEnd: false,
    group_username: "",
    errorMessage: false,
    test_errors: "",
    test_step: 1,
    test_count: 300,
    time: {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      percentage: 0,
    },
    is_timeout: false,
  });

  const test_settings = reactive({
    start_date: "",
    end_date: "",
    sort_level: [["Matematika", 2, 8], ["Ona tili", 2, 8]],
    test_count: "",
    period: "",
  });

  const route_types = {
    t: "tests",
    g: "group_test",
  };

  const check_user = reactive({
    user_id: "",
    code: "",
  });

  const test = reactive({});

  function setTestTime() {
    let countDownDate =
      new Date().getTime() +
      useGroup.store.getUsers.group_test_settings[0]?.period * 60 * 1000;
    let now = new Date().getTime();
    let totalTime = countDownDate - now;
    store.timeInterval = setInterval(function () {
      let now = new Date().getTime();
      let distance = countDownDate - now;
      store.time.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      store.time.hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      store.time.minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );
      console.log(store.time.minutes);
      store.time.seconds = Math.floor((distance % (1000 * 60)) / 1000);
      store.time.percentage = (distance / totalTime) * 100;

      if (distance < 0) {
        store.time.days = 0;
        store.time.hours = 0;
        store.time.minutes = 0;
        store.time.seconds = 0;
        store.is_timeout = true;
        clearInterval(store.timeInterval);
      }
    }, 1000);
  }

  function addTestData() {
    for (let i = 1; i <= store.maxTests; i++) {
      console.log(i);
      test[i] = {
        type: "variant",
        question: [],
        variant: {},
      };
    }
    console.log(test);
  }
  addTestData();

  function getTests() {
    let type;
    let test_id = router.currentRoute.value.query.t;
    if (test_id) {
      type = "t";
    } else {
      type = "g";
      test_id = router.currentRoute.value.query.g;
    }
    isLoading.addLoading("getTests");
    axios
      .get(baseUrl + `${route_types[type]}/${test_id}`)
      .then((res) => {
        if (useGroup.store.getUsers.group_test_settings[0]?.period > 0) {
          setTestTime();
        }
        console.log(res);
        if (res.data.statusCode == 200) {
          store.tests = res.data.data;
        } else {
          store.tests = [];
          // openNotification(res.data.message);
        }
        isLoading.removeLoading("getTests");
      })
      .catch((err) => {
        console.log(err);
        store.tests = [];
        store.test_errors = err.response?.data?.message;
        isLoading.removeLoading("getTests");
        // openNotification(err?.response?.data?.message);
      });
  }

  function nextLesson() {
    const params = router.currentRoute.value.params;
    const query = router.currentRoute.value.query;
    axios
      .get(baseUrl + `lesson/next_lesson/${params.id}/${params.subject}`)
      .then((res) => {
        console.log(res);
        const data = res.data.data;
        navigateTo(
          `/lessons/${params.subject}/${data.id}?class=${query.class}`
        );
      })
      .catch((err) => {
        console.log(err);
        navigateTo(
          `/lessons/${params.subject}/${params.id}?class=${query.class}`
        );
      });
  }

  function check_userApi() {
    const id = router.currentRoute.value.query.g;
    axios
      .post(baseUrl + `group/checkuser/${id}`, check_user)
      .then((res) => {
        console.log(res);
        if (res.data.data == "Verified successfully") {
          store.group_username = res.data.user.full_name;
          getTests();
        }
        store.errorMessage = "";
      })
      .catch((err) => {
        console.log(err);
        store.errorMessage = err.response.data.message;
      });
  }

  function checkAnswers(true_asnwers) {
    isLoading.addLoading("checkAnswers");
    const lesson_id = +router.currentRoute.value.params.id;
    let type;
    let url, data;
    let test_id = +router.currentRoute.value.query.t;
    if (test_id) {
      type = "t";
      url =
        `${route_types[type]}/check_answers/` +
        isLoading.user.current_role_data.id;
      data = { answers: true_asnwers, lesson_id: test_id };
    } else {
      type = "g";
      test_id = +router.currentRoute.value.query.g;
      url = `${route_types[type]}/check_answers/` + store.group_username;
      data = { answers: true_asnwers, group_id: test_id };
    }
    axios
      .post(baseUrl + url, data)
      .then((res) => {
        // store.testResModal = true;
        store.isTestEnd = true;
        store.slideStep = store.tests?.length;
        store.check_result = res?.data?.data?.results;
        store.testResBall = res?.data?.data?.ball;
        store.subject_ball = res?.data?.data?.subject_ball;
        console.log(res);
        if (res.data?.data?.message == "Already added!") {
          showMessage("Reyting", "Sizning natijangiz allaqachon qo'shilgan");
        }
        isLoading.removeLoading("checkAnswers");
      })
      .catch((err) => {
        console.log(err);
        isLoading.removeLoading("checkAnswers");
        // openNotification(err?.response?.data?.message);
      });
  }

  async function createTest() {
    let l = test_settings.sort_level?.length;
    console.log(test_settings.sort_level);
    for (let i = 0; i < l; i++) {
      if (!test_settings.sort_level[i]) {
        test_settings.sort_level.splice(i, 1);
      }
    }
    console.log(test_settings.sort_level);
    console.log(test);
    isLoading.addLoading("createTest");
    let lesson_id, group_id;
    let url;
    if (router.currentRoute.value.query.lesson_id) {
      lesson_id = +router.currentRoute.value.query.lesson_id;
      url = `/test?t=${lesson_id}`;
    } else {
      group_id = +router.currentRoute.value.query.group_id;
      url = `/test?g=${group_id}`;
    }
    for (let i = 1; i <= store.questions_count; i++) {
      try {
        const tempElement = document.createElement("div");
        tempElement.innerHTML = test[i].question[0];
        const imgElement = tempElement.querySelector("img")?.src;
        if (imgElement) {
          const base64Data = imgElement.split(";base64,").pop();
          const arrayBuffer = Uint8Array.from(atob(base64Data), (c) =>
            c.charCodeAt(0)
          ).buffer;
          const file = new File([arrayBuffer], "file.png", {
            type: "image/png",
          });

          const src = await useContent.create_url(file);
          tempElement.querySelector("img").src = src.url;
          test[i].question[0] = `${tempElement.innerHTML}`;
        }
        for (let variant in test[i].variant) {
          const tempElement = document.createElement("div");
          tempElement.innerHTML = test[i].variant[variant];
          const imgElement = tempElement.querySelector("img")?.src;
          if (imgElement) {
            const base64Data = imgElement.split(";base64,").pop();
            const arrayBuffer = Uint8Array.from(atob(base64Data), (c) =>
              c.charCodeAt(0)
            ).buffer;
            const file = new File([arrayBuffer], "file.png", {
              type: "image/png",
            });

            const src = await useContent.create_url(file);
            tempElement.querySelector("img").src = src.url;
            test[i].variant[variant] = `${tempElement.innerHTML}`;
          }
        }
      } catch (err) {
        console.log(err);
      }
    }
    console.log(test)
    if (lesson_id) {
      await axios
        .post(baseUrl + `tests/create`, {
          ...test_settings,
          lesson_id,
          test,
          // variants: Object.values(test[i].variant),
          // question: test[i].question[0],
        })
        .then((res) => {
          console.log(res);
          showMessage("Uploaded successfully");
        })
        .catch((err) => {
          console.log(err);
          showMessage(err?.response?.data?.message);
        });
    } else {
      await axios
        .post(baseUrl + `group_test/create`, {
          ...test_settings,
          group_id,
          test,
        })
        .then((res) => {
          console.log(res);
          showMessage("Uploaded successfully");
        })
        .catch((err) => {
          console.log(err);
          showMessage(err?.response?.data?.message);
        });
      isLoading.removeLoading("createTest");
    }

    let test_settings2 = {
      start_date: "",
      end_date: "",
      sort_level: [],
      test_count: "",
    };

    for (let i in test_settings2) {
      test_settings[i] = test_settings2[i];
    }
    if (router.currentRoute.value.query.group_id) {
      useGroup.addGroupstep(router.currentRoute.value.query.group_id);
    }
    router.push(url);
  }

  return {
    store,
    test,
    test_settings,
    getTests,
    checkAnswers,
    createTest,
    nextLesson,
    check_user,
    check_userApi,
  };
});
