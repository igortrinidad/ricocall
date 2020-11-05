import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './mainVuex'

  require('./mainBootstrap')
  require('./mainSocket')

  store.dispatch('resetLoader')
  if(store.getters.getterLoggedUser) {
    store.dispatch('getLoggedUser', { loader: true })
  }

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
