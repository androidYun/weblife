const login_state = "login_state";

const token_key = "token_key";


const merchant_key = "merchant_key";

const role_type_key = "role_type_key";

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
  setMerchant(merchantId) {
    sessionStorage.setItem(merchant_key, merchantId)
  },
  getMerchant() {
    return sessionStorage.getItem(merchant_key)
  },
  setRoleType(roleType) {
    sessionStorage.setItem(role_type_key, roleType)
  },
  getRoleType() {
    return sessionStorage.getItem(role_type_key)
  },
}
