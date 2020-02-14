import * as MutationTypes from './mutation-types'

export default {
  [MutationTypes.ADD_CACHED_VIEWS] (state, view) {
    if (state.cachedViews.includes(view.name)) {
      return
    }
    if (!view.meta.noCache) {
      state.cachedViews.push(view.name)
    }
  },

  [MutationTypes.ADD_VISITED_VIEWS] (state, view) {
    if (state.visitedViews.some(v => v.path === view.path)) {
      return
    }

    state.visitedViews.push(
      Object.assign({}, view, {
        title: view.meta.title + (view.query.tagname ? `-${view.query.tagname}` : '') || 'no-name'
      })
    )
  },

  [MutationTypes.DEL_VISITED_VIEWS] (state, view) {
    for (const [i, v] of state.visitedViews.entries()) {
      if (v.path === view.path) {
        state.visitedViews.splice(i, 1)
        break
      }
    }
  },

  [MutationTypes.DEL_CACHED_VIEWS] (state, view) {
    for (const i of state.cachedViews) {
      if (i === view.name) {
        const index = state.cachedViews.indexOf(i)
        state.cachedViews.splice(index, 1)
        break
      }
    }
  },

  [MutationTypes.DEL_OTHERS_VISITED_VIEWS] (state, view) {
    for (const [i, v] of state.visitedViews.entries()) {
      if (v.path === view.path) {
        state.visitedViews = state.visitedViews.slice(i, i + 1)
        break
      }
    }
  },

  [MutationTypes.DEL_OTHERS_CACHED_VIEWS] (state, view) {
    for (const i of state.cachedViews) {
      if (i === view.name) {
        const index = state.cachedViews.indexOf(i)
        state.cachedViews = state.cachedViews.slice(index, index + 1)
        break
      }
    }
  },

  [MutationTypes.DEL_ALL_VISITED_VIEWS] (state) {
    state.visitedViews = []
  },

  [MutationTypes.DEL_ALL_CACHED_VIEWS] (state) {
    state.cachedViews = []
  }
}
