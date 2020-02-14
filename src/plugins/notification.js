import { Notification } from 'element-ui'

const Notify = (msg, position, duration) => {
  Notification({
    title: '提示',
    message: msg || '保存成功!',
    position: position || 'bottom-right',
    duration: duration || 2000
  })
}

export default {
  install (Vue) {
    Object.defineProperty(Vue.prototype, '$Notify', { value: Notify })
  }
}
