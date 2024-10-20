import axios from "axios";

export default class ApiRequest {
  runtime = useRuntimeConfig();
  useLoadingIndicator = useLoadingIndicator();

  endPoint = this.runtime.public.baseURL;
  token = null;

  getToken() {
    return localStorage.getItem("_auth_token");
  }

  getHeader() {
    if (process.client) {
      let token = this.getToken();

      return {
        Authorization: "Bearer " + token,
        "Access-Control-Allow-Origin": "*",
      };
    }
  }

  get(url: string) {
    // this.useLoadingIndicator.start();

    // setTimeout(() => {
    let headers = this.getHeader();
    console.log(headers);
    // url = this.endPoint + this.filterUrl(url);
    url = this.endPoint + url;
    const data = new Promise((resolve, reject) => {
      axios
        .get(url, { headers })
        .then((res: any) => {
          // this.useLoadingIndicator.finish();
          console.log(res, 'dsdsdsd[][][kld');
          resolve(res);
        })
        .catch((e) => {
          let text = e.response?.data?.errors
            ? e.response?.data?.errors[0]
            : "Something error.";
          reject(e);
        });
    });
    console.log(data)
    return data;
    // }, 10000);
  }

  post(url: string, data = {}) {
    let headers = this.getHeader();
    // url = this.endPoint + this.filterUrl(url);
    url = this.endPoint + url;
    return new Promise(function (resolve, reject) {
      axios
        .post(url, data, { headers })
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
          // store.commit("register/setLoad", false);
          if (error) {
            console.log(error);
            // store.commit("register/setErrorMsg", error.response?.data?.message);
          }
        });
    });
  }

  putData(url: string, data = {}) {
    let headers = this.getHeader();
    // url = this.endPoint + this.filterUrl(url);
    url = this.endPoint + url;
    return new Promise(function (resolve, reject) {
      axios
        .put(url, data, { headers: headers })
        .then((res) => {
          resolve(res);
        })
        .catch((e) => {
          reject(e);
          // sweet(
          //   e.response.data.errors[0],
          //   e.response.status
          // );
        });
    });
  }

  put(url: string, data: any = {}) {
    let headers = this.getHeader();
    // url = this.endPoint + this.filterUrl(url);
    url = this.endPoint + url;
    let formData = data;
    formData.append("_method", "PUT");
    return new Promise(function (resolve, reject) {
      axios
        .put(url, formData, { headers: headers })
        .then((res) => {
          resolve(res);
        })
        .catch((e) => {
          reject(e);
          // store.commit("register/setLoad", false);

          // sweet(
          //   e.response.data.errors[0],
          //   e.response.status
          // );
        });
    });
  }

  delete(url: string) {
    let headers = this.getHeader();
    // url = this.endPoint + this.filterUrl(url);
    url = this.endPoint + url;
    return new Promise(function (resolve, reject) {
      axios
        .delete(url, { headers: headers })
        .then((res) => {
          resolve(res);
        })
        .catch((e) => {
          // store.commit("register/setLoad", false);
          reject(e);
          let text = e.response?.data?.errors
            ? e.response?.data?.errors[0]
            : e.response.message;
          // sweet(text, e.response.status);
        });
    });
  }
}

// function sweet(text, status) {
//   if (status === 401) {
//     Auth.logOut();
//     return;
//   }
//   // axios.get(
//   //   `https://api.telegram.org/bot6150606671:AAHWFzbnI_5GiIiu5feKqlRMzwRn6S-GZ-I/sendmessage?chat_id=1291007595&text=${
//   //     (text)
//   //   }`
//   // );
//   // Swal.fire({
//   //   title: "Something went wrong:",
//   //   text: text + " " + status,
//   //   icon: "error",
//   //   status: 200,
//   // });
// }
