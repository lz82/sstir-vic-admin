import * as MutationType from './mutation-types'

export default {
  [MutationType.SET_USER_INFO] (state, userInfo) {
    state.userInfo = userInfo
  },

  [MutationType.SET_TOKEN] (state, token) {
    state.token = token
  },

  [MutationType.SET_USER_ROLES] (state, roles) {
    state.roles = roles
  }
}
