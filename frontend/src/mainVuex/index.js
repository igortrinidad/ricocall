
import createPersistedState from 'vuex-persistedstate'
import Vue from 'vue'
import Vuex from 'vuex'

/**
 * Modules
 */
import auth from '@/mainVuex/auth'
import general from '@/mainVuex/general'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    auth,
    general
  },
  plugins: [createPersistedState({
      key: 'ricocall',
  })]
})

export default store
