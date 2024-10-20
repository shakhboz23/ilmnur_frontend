
import Token from '@/helpers/token'
const loginExpiryKey = 'tokenExpiry'
const Userinfo = 'dml0YWxfY2FjaGU='
const localStorageKey = 'loggedIn'
const userlogin = '_auth_token'


// import CryptoJS from 'crypto-js';

class Auth {
  // eslint-disable-next-line
  authToken = null
  userProfile = null
  // tokenExpiry = null
  logOut() {

    // localStorage.removeItem(loginExpiryKey)
    localStorage.removeItem(Userinfo)
    localStorage.removeItem(userlogin)
    localStorage.removeItem(localStorageKey)
    this.authToken = null
    // this.tokenExpiry = null
  }
  localAuthLogin(authResult) {
    this.authToken = authResult.authorization.token
    this.userProfile = authResult.user
    // console.log(this.userProfile)
    this.tokenExpiry = new Date(authResult.authorization.expires_in * 1000)
    localStorage.setItem(loginExpiryKey, this.tokenExpiry)
    localStorage.setItem(localStorageKey, 'true')
    localStorage.setItem(userlogin, this.authToken)
    localStorage.setItem(
        Userinfo,
        this.encryptData(JSON.stringify({
          displayName: this.userProfile.name + ' ' + this.userProfile.surname,
          email: this.userProfile.email,
        }), 'samarkand'),
    )
  }
  isAuthenticatedUser() {
    try {
      let isValid = Token.isValid(localStorage.getItem(userlogin));
      return (
          localStorage.getItem(localStorageKey) === 'true' &&
          isValid
      )
    }catch (e){
      return false;
    }
  }


  encryptData(data, key) {
    const jsonData = JSON.stringify(data);
    const encryptedData = CryptoJS.AES.encrypt(jsonData, key).toString();
    return encryptedData;
  }
  // Decrypt JSON data
  decryptData(encryptedData, key) {
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedData, key);
    const decryptedData = decryptedBytes.toString(CryptoJS.enc.Utf8);
    const jsonData = JSON.parse(decryptedData);
    return jsonData;
  }
}

export default new Auth()
