import Auth from './auth'
export default class Token {
  isValid(token) {
    let payload = this.payload(token);
    return (
        !payload.error &&                 
        (payload.iss === process.env.VUE_APP_API_URL + "/login" ||
            payload.iss === process.env.VUE_APP_API_URL + "/register")
    );
  }
  payload(token) {
    let payload = token.split(".")[1];
    return this.decode(payload);
  }
  decode(payload) {
    try {
      let ascii = atob(payload);
      if (ascii !== "" || ascii != null) return JSON.parse(atob(payload));
      else {
        Auth.logOut();
        return {
          error: true,
        };
      }
    } catch (e) {
      Auth.logOut();
      return {
        error: true,
      };
    }
  }
}