import * as MutationTypes from './mutation-types.js'
import Cookies from 'js-cookie'

export default {
  [MutationTypes.TOGGLE_SIDEBAR] (state) {
    if (state.sidebar.opened) {
      state.sidebar.opened = false
      Cookies.set('sidebarStatus', state.sidebar.opened)
    } else {
      state.sidebar.opened = true
      Cookies.set('sidebarStatus', state.sidebar.opened)
    }
  },

  [MutationTypes.SET_SIDEBAR] (state, sidebar) {
    Cookies.set('sidebarStatus', sidebar.opened)
    state.sidebar.opened = sidebar.opened
    state.sidebar.withoutAnimation = sidebar.withoutAnimation
  },

  [MutationTypes.SET_DEVICE] (state, device) {
    state.device = device
  },

  [MutationTypes.SET_LANGUAGE] (state, language) {
    state.language = language
    Cookies.set('language', language)
  }
}
