import Vue from 'vue'
import ToastVue from './Toast'
const ToastConstructor = Vue.extend(ToastVue)

let toastPools = []

const getInstance = () => {
  if (toastPools.length > 0) {
    const instance = toastPools[0]
    toastPools.slice(0, 1)
    return instance
  }
  return new ToastConstructor({
    el: document.createElement('div')
  })
}

ToastConstructor.prototype.close = function () {
  this.visible = false
  toastPools.push(this)
}

let Toast = (opts = {}) => {
  if (typeof opts === 'string') {
    let msg = opts
    opts = {}
    opts.msg = msg
  }
  const duration = opts.duration || 4000
  let instance = getInstance()
  clearTimeout(instance.timer)
  instance.duration = duration
  instance.msg = opts.msg
  instance.position = opts.position
  instance.className = opts.className || ''
  instance.icon = opts.icon || ''
  instance.type = opts.type || ''
  document.body.appendChild(instance.$el)
  Vue.nextTick(() => {
    instance.visible = true
    duration && (instance.timer = setTimeout(() => {
      instance.close()
    }, duration))
  })
  return instance
}

export default Toast
