import { defineStore } from "pinia";
import { useLoadingStore } from "@/store";
import axios from "axios";

export const useSubjectStore = defineStore("subject", () => {
  const runtime = useRuntimeConfig();
  const baseUrl = runtime.public.baseURL;
  const isLoading = useLoadingStore();
  const router = useRouter();

  const store = reactive({
    subjects: [],
    subject_id: "",
  });

  const create = reactive({
    title: "",
  });

  const modal = reactive({
    create: false,
    edit: false,
    delete: false,
  });

  function clearData() {
    for (let i in create) {
      create[i] = "";
    }
  }

  function getSubjects() {
    isLoading.addLoading("getSubjects");
    axios
      .get(baseUrl + `subject`)
      .then((res) => {
        console.log(res);
        store.subjects = res.data;
        isLoading.removeLoading("getSubjects");
      })
      .catch((err) => {
        console.log(err);
        // openNotification(err?.response?.data?.message);
        isLoading.removeLoading("getSubjects");
      });
  }

  function createSubjects() {
    isLoading.addLoading("updateSubject");
    if (modal.edit) {
      editSubjects();
      return;
    }
    axios
      .post(baseUrl + `subject/create`, create)
      .then((res) => {
        console.log(res);
        modal.create = false;
        getSubjects();
        isLoading.removeLoading("updateSubject");
      })
      .catch((err) => {
        console.log(err);
        isLoading.removeLoading("updateSubject");
      });
  }

  function editSubjects() {
    isLoading.addLoading("updateSubject");
    create.subject_id = router.currentRoute.value.params.subject_id;
    console.log(create);
    axios
      .put(baseUrl + `subject/${store.subject_id}`, create)
      .then((res) => {
        console.log(res);
        modal.create = false;
        getSubjects();
        isLoading.removeLoading("updateSubject");
      })
      .catch((err) => {
        console.log(err);
        isLoading.removeLoading("updateSubject");
      });
  }

  function deleteSubject() {
    isLoading.addLoading("deleteSubject");
    axios
      .delete(baseUrl + `subject/${store.subject_id}`)
      .then((res) => {
        console.log(res);
        // showMessage("Rad etish", "Foydalanuvchi o'chirildi");
        modal.delete = false;
        getSubjects();
        isLoading.removeLoading("deleteSubject");
      })
      .catch((err) => {
        console.log(err);
        // showMessage("Xato", "Nimadir xato ketdi");
        isLoading.removeLoading("deleteSubject");
      });
  }

  return {
    store,
    create,
    modal,
    clearData,
    getSubjects,
    createSubjects,
    deleteSubject,
  };
});
