const Schema = class {
  constructor (name, type, label, placeholder = '', options = null, isMulti = false, defaultVal = null) {
    this.name = name
    this.type = type
    this.label = label
    this.placeholder = placeholder
    this.options = options
    this.isMulti = isMulti
    this.defaultVal = defaultVal
  }
}

export default {
  install (Vue) {
    Object.defineProperty(Vue.prototype, '$Schema', { value: Schema })
  }
}
