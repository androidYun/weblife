const login_state = "login_state";

export default {

  setLoginState(state) {
    sessionStorage.setItem(login_state, state)
  },
  getLoginState() {
    return sessionStorage.getItem(login_state)
  }
}
