import Vue from 'vue'
import io from 'socket.io-client'

export default ( () => {

  // console.log(MainVuex.getters.getterLoggedUserToken)

  const socket = io(process.env.VUE_APP_BASE_WS_URL, {
    reconnectionDelay: 2000,
    reconnectionDelayMax: 5000,
    reconnectionAttempts: 20
  })

  socket.on('connect', () => {
    console.log('Socket successfully connected')
  })

  Vue.prototype.$socket = socket

})()
