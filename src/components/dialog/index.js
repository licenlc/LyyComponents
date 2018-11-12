import Vue from 'vue'
import Dialog from './Dialog'
let DialogConstructor = Vue.extend(Dialog)

const DEFAULT = {
  okText: '确认',
  cancelText: '取消',
  msg: '',
  type: ''
}

let dialogPools = []
let instance = null

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

let alert = (opts) => {
  let tempOpts = {}
  if (typeof opts === 'string') {
    tempOpts.message = opts
    tempOpts.title = '温馨提示'
    tempOpts.okText = '我知道了'
  }
  tempOpts.type = 'alert'
  tempOpts.cancelText = ''
  $Dialog(tempOpts)
}

let confirm = (opts) => {
  let tempOpts = {}
  if (typeof opts === 'string') {
    tempOpts.msg = opts
  }
  opts.type = 'confirm'
  $Dialog(opts)
}

export {
  alert,
  confirm
}
