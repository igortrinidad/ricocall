import Api from '@/util/Api'
import Vue from 'vue'
import { Device } from 'twilio-client'
import { getLogger } from 'loglevel'
getLogger(Device.packageName)

export default {

  setupTwilioDevice(context) {
    context.commit('setActiveConnection', null)
    Api.get(`/twilio/token`)
    .then(({ data }) => {

      const { token } = data
      Device.setup(token)

      Device.on('ready', () => {
        console.log('Twilio Ready');
      })

      Device.on('error', (error) => {
        console.log('Error: ' + error.message);
      })

      Device.on('incoming', (connection) => {

        [ ...connection.customParameters.entries() ].forEach((parameter) => {
          if(parameter[0] == 'fromUserName') {
            context.commit('setActiveConnectionFromUserName', parameter[1])
          }
          if(parameter[0] == 'toUserName') {
            context.commit('setActiveConnectionToUserName', parameter[1])
          }
        })

        context.commit('setActiveConnection', connection)
        context.commit('setActiveConnectionStatus', connection.status())
        context.commit('setActiveConnectionType', 'incoming')
        Vue.prototype.$socket.emit('updateUserStatus', {userId: context.getters.getterLoggedUser.id, status: 'busy'})

        context.dispatch('warmupConnection', connection)

      })

      Device.on('offline', () => {
        if(context.getters.getterLoggedUser) {
          context.dispatch('setupTwilioDevice')
        }
      })

      Device.on('disconnect', () => {
        Vue.prototype.$socket.emit('updateUserStatus', {userId: context.getters.getterLoggedUser.id, status: 'online'})
      })

    })
  },

  destroyTwilioDevice() {
    Device.destroy()
  },

  makeTwilioCall(context, { user }) {
    const connection = Device.connect( { From: context.getters.getterLoggedUser.id, To: user.id })
    console.log(connection)
    context.commit('setActiveConnection', connection)
    context.commit('setActiveConnectionStatus', connection.status())
    context.commit('setActiveConnectionType', 'outgoing')
    context.commit('setActiveConnectionToUserName', user.name)
    Vue.prototype.$socket.emit('updateUserStatus', {userId: context.getters.getterLoggedUser.id, status: 'busy'})

    context.dispatch('warmupConnection', connection)

  },

  warmupConnection(context, connection) {
    connection.on('cancel', () => { context.dispatch('clearConnection') })
    connection.on('disconnect', () => {
      Vue.prototype.$notifications.error('Call ended')
      if(context.getters.getterActiveConnectionType == 'outgoing')
      context.dispatch('clearConnection')
     })
    connection.on('error', () => { context.dispatch('clearConnection') })
    connection.on('hangup', () => { context.dispatch('clearConnection') })
    connection.on('reject', () => { context.dispatch('clearConnection') })
    connection.on('transportClose', () => { context.dispatch('clearConnection') })
    connection.on('accept', () => {
      context.commit('setActiveConnection', connection)
      context.commit('setActiveConnectionStatus', connection.status())
    })
  },

  clearConnection(context) {
    context.commit('setActiveConnection', null)
    context.commit('setActiveConnectionStatus', null)
    context.commit('setActiveConnectionType', null)
    Vue.prototype.$socket.emit('updateUserStatus', {userId: context.getters.getterLoggedUser.id, status: 'online'})
  },

  acceptCall(context) {
    context.getters.getterActiveConnection.accept()
    Vue.prototype.$notifications.success('Call accepted')
  },

  rejectIncomingCall(context) {
    context.getters.getterActiveConnection.reject()
    Device.disconnectAll()
    context.commit('setActiveConnection', null)
    context.commit('setActiveConnectionStatus', null)
    Vue.prototype.$socket.emit('updateUserStatus', {userId: context.getters.getterLoggedUser.id, status: 'online'})
  },

  disconnectConnection(context) {
    Device.disconnectAll()
    context.commit('setActiveConnection', null)
    context.commit('setActiveConnectionStatus', null)
    Vue.prototype.$socket.emit('updateUserStatus', {userId: context.getters.getterLoggedUser.id, status: 'online'})
  }
}
