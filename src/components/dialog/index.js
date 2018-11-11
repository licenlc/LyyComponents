import Vue from 'vue'
import Dialog from './Dialog'
let DialogConstructor = Vue.extend(Dialog)

const DEFAULT = {
  okText: '确认',
  cancelText: '取消'
}

let dialogPools = []

let getInstance = () => {
  if (dialogPools.length > 0) {
    return dialogPools.shift()
  }
  return new DialogConstructor({
    el: document.createElement('div')
  })
}

let $Dialog = (opts) => {
  opts = Object.assign(DEFAULT, opts)
  let instance = getInstance()
  instance.okText = opts.okText
  instance.cancelText = opts.cancelText
}

let alert = (content) => {
  DEFAULT.conent = content
  DEFAULT.okText = ''
  $Dialog(DEFAULT)
}

let dialog = (opts) => {
  $Dialog(opts)
}

export {
  alert,
  dialog
}
