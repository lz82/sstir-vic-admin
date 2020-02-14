import Vue from 'vue'

// you can set only in production env show the error-log
// if (process.env.NODE_ENV === 'production') {
Vue.config.errorHandler = function (err, vm, info) {
// Don't ask me why I use Vue.nextTick, it just a hack.
// detail see https://forum.vuejs.org/t/dispatch-in-vue-config-errorhandler-has-some-problem/23500
  Vue.nextTick(() => {
    // todo: 记录错误日志
    console.log('/src/errorLog.js 捕获全局异常')
    console.error('errorlog', err, vm, info)
  })
}
// }
