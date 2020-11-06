export default {
  setActiveConnection(state, connection) {
    state.activeConnection = connection
  },
  setActiveConnectionStatus(state, status) {
    state.activeConnectionStatus = status
  },
  setActiveConnectionType(state, type) {
    state.activeConnectionType = type
  },
  setActiveConnectionFromUserName(state, userName) {
    state.activeConnectionFromUserName = userName
  },
  setActiveConnectionToUserName(state, userName) {
    state.activeConnectionToUserName = userName
  },
}
