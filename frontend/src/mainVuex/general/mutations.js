export default {
  setLoaderShow(state, {loaderShow, loaderInstances}) {
    state.loaderShow = loaderShow
    state.loaderInstances = loaderInstances
  },
  resetLoader(state) {
    state.loaderShow = false
    state.loaderInstances = 0
  },
  setSideMenuIsOpen(state, open) {
    state.sideMenuIsOpen = open
  }
}
