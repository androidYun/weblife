const login_state = "login_state";

const token_key = "token_key";


const merchant_key = "merchant_key";

export default {

  setLoginState(state) {
    sessionStorage.setItem(login_state, state)
  },
  getLoginState() {
    return sessionStorage.getItem(login_state)
  },

  setToken(token) {
    sessionStorage.setItem(token_key, token)
    console.log("token")
  },
  getToken() {
    console.log("token")
    return sessionStorage.getItem(token_key)
  },
  setMerchant(token) {
    sessionStorage.setItem(merchant_key, token)
  },
  getMerchant() {
    return sessionStorage.getItem(merchant_key)
  },

}
