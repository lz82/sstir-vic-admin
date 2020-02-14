import { MessageBox } from 'element-ui'

const Confirm = msg => {
  return new Promise(resolve => {
    MessageBox.confirm(msg, '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    })
      .then(() => {
        resolve(true)
      })
      .catch(() => {
        resolve(false)
      })
  })
}

export default {
  install (Vue) {
    Object.defineProperty(Vue.prototype, '$Confirm', { value: Confirm })
  }
}
