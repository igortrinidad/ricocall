export default {
  setActiveConnection(state, connection) {
    state.activeConnection = connection
  },
  setActiveConnectionStatus(state, status) {
    state.activeConnectionStatus = status
  },
  setActiveConnectionType(state, type) {
    state.activeConnectionType = type
  }
}
