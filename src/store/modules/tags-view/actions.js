import * as MutationTypes from './mutation-types'

export default {
  addView ({ commit }, view) {
    commit(MutationTypes.ADD_CACHED_VIEWS, view)
    commit(MutationTypes.ADD_VISITED_VIEWS, view)
  },

  delCachedView ({ commit, state }, view) {
    return new Promise(resolve => {
      commit(MutationTypes.DEL_CACHED_VIEWS, view)
      resolve([...state.cachedViews])
    })
  },

  delVisitedView ({ commit, state }, view) {
    return new Promise(resolve => {
      commit(MutationTypes.DEL_VISITED_VIEWS, view)
      resolve([...state.visitedViews])
    })
  },

  delView ({ dispatch, state }, view) {
    return new Promise(resolve => {
      dispatch('delVisitedView', view)
      dispatch('delCachedView', view)
      resolve({
        visitedViews: [...state.visitedViews],
        cachedViews: [...state.cachedViews]
      })
    })
  },

  delOthersViews ({ dispatch, state }, view) {
    return new Promise(resolve => {
      dispatch('delOthersVisitedViews', view)
      dispatch('delOthersCachedViews', view)
      resolve({
        visitedViews: [...state.visitedViews],
        cachedViews: [...state.cachedViews]
      })
    })
  },
  delOthersVisitedViews ({ commit, state }, view) {
    return new Promise(resolve => {
      commit(MutationTypes.DEL_OTHERS_VISITED_VIEWS, view)
      resolve([...state.visitedViews])
    })
  },
  delOthersCachedViews ({ commit, state }, view) {
    return new Promise(resolve => {
      commit(MutationTypes.DEL_OTHERS_CACHED_VIEWS, view)
      resolve([...state.cachedViews])
    })
  },

  delAllViews ({ dispatch, state }, view) {
    return new Promise(resolve => {
      dispatch('delAllVisitedViews', view)
      dispatch('delAllCachedViews', view)
      resolve({
        visitedViews: [...state.visitedViews],
        cachedViews: [...state.cachedViews]
      })
    })
  },
  delAllVisitedViews ({ commit, state }) {
    return new Promise(resolve => {
      commit(MutationTypes.DEL_ALL_VISITED_VIEWS)
      resolve([...state.visitedViews])
    })
  },
  delAllCachedViews ({ commit, state }) {
    return new Promise(resolve => {
      commit(MutationTypes.DEL_ALL_CACHED_VIEWS)
      resolve([...state.cachedViews])
    })
  }
}
