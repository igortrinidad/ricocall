import Api from '@/util/Api'
import {successNotify, errorNotify} from '@/util/Notifications'
import MainRouter from '@/router'
import Vue from 'vue'

export default {

  attemptUserLogin(context, {email, password}) {
    Api.post(`/user/auth/login`, {email, password}, {loader: true})
    .then((response) => {
      const {token} = response.data
      context.commit('setLoggedUserToken', {token})
      context.dispatch('getLoggedUser', {})
    })
    .catch((err) => {
      if(err.response && err.response.status == 401) {
        errorNotify(`Ops, check your credentials...`)
      } else {
        errorNotify(`Ops, something goes wrong with this app!`)
      }
    })
  },

  getLoggedUser(context, {redirect = true}) {
    Api.get(`/user/auth/getLoggedUser`)
    .then(({ data }) => {
      const { user } = data
      context.commit('setLoggedUser', {user})
      successNotify(`Welcome ${user.name} !`)

      context.dispatch('setupTwilioDevice')

      if(!redirect) return

      let urlParams = new URLSearchParams(window.location.search)
      let redirectTo = urlParams.get('redirectTo')
      if(redirectTo){
          MainRouter.push(redirectTo, () => {})
      } else {
          MainRouter.push('/home', () => {})
      }

    })
    .catch((err) => {
      if (err.response && err.response.status == 403) {
        errorNotify(`Sorry, it's seems that somebody blocked you :/`)
        context.dispatch('logoutUser', { showNotification: false })
      } else {
        errorNotify(`Ops, something did wrong with this app, comeback later!`)
      }
    })
  },

  registerUser(context, {user}) {
    Api.post(`/user/auth/register`, user, {loader: true})
    .then((response) => {
      const {token} = response.data
      context.commit('setLoggedUserToken', {token})
      context.dispatch('getLoggedUser', {})
    })
    .catch(() => {
      errorNotify('Erro ao cadastrar, verifique os dados.')
    })
  },

  logoutUser(context, {showNotification = true} = {}) {
    MainRouter.push({ name: 'Login' }, () => {})
    Vue.prototype.$socket.emit('leaveRoom', { userId: context.getters.getterLoggedUser.id })
    setTimeout(() => {
      context.commit('setLogout')
      context.dispatch('destroyTwilioDevice')
    }, 200)
    if(showNotification) successNotify('Successfully logout')
  },

}
