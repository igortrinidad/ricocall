export default {

  setLoaderShow(context, show) {
    if(show) {
      let currentLoaderInstances = context.getters.getterLoaderInstances
      let newLoaderInstances = currentLoaderInstances + 1
      context.commit('setLoaderShow', {loaderShow: true, loaderInstances: newLoaderInstances})
    } else {
      context.dispatch('setLoaderOff')
    }
  },

  setLoaderOff(context) {
    setTimeout(() => {
      let currentLoaderInstances = context.getters.getterLoaderInstances
      if(currentLoaderInstances === 1) {
        context.commit('setLoaderShow', {loaderShow: false, loaderInstances: 0})
      } else {
        let newLoaderInstances = currentLoaderInstances - 1
        context.commit('setLoaderShow', {loaderShow: true, loaderInstances: newLoaderInstances})
      }
    }, 500)
  },

  resetLoader(context) {
    context.commit('resetLoader')
  }
}
