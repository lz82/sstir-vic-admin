import * as MutationTypes from './mutation-types'

import { constantRouterMap } from '@/router'

export default {
  [MutationTypes.SET_ROUTERS] (state, routers) {
    state.addRouters = routers
    state.routers = constantRouterMap.concat(routers)
  }
}
