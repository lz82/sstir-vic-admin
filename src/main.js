import Vue from 'vue'

// 重置默认样式
import 'normalize.css/normalize.css'

// 引入ElementUI 这里就直接全量引入了
// 如果需要按需引入，可以参考官方文档 http://element-cn.eleme.io/2.0/#/zh-CN/component/quickstart
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import ElTreeSelect from 'el-tree-select'
// 引入全局样式
import '@/styles/index.less'

import App from './app.vue'
import router from './router'
import store from './store'
import './permission'
// 引入插件
import * as Plugins from './plugins'

Object.keys(Plugins).forEach(key => {
  Vue.use(Plugins[key])
})

Vue.use(ElementUI, { size: 'mini' })
Vue.use(ElTreeSelect)
// 设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
