

export default {
  setLoggedUserToken(state, {type, token}) {
    state.loggedUserType = type
    state.loggedUserToken = token
  },
  setLoggedUser(state, {user}) {
    state.loggedUser = user
  },
  setLogout(state) {
    state.loggedUser = null
    state.loggedUserToken = null
    state.loggedUserType = null
  }
}
