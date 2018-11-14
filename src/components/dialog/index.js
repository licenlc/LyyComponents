import Vue from 'vue'
import Dialog from './Dialog'
let DialogConstructor = Vue.extend(Dialog)

const DEFAULT = {
  type: '',
  title: '',
  titleClass: '',
  content: '',
  contentClass: '',
  okText: '确认',
  showCancel: true,
  cancelText: '取消',
  onOK: null,
  onCancel: null
}

let instanceT = null

let getInstance = () => {
  if (instanceT) {
    return instanceT
  }
  instanceT = new DialogConstructor({
    el: document.createElement('div')
  })
  return instanceT
}

let $Dialog = (opts) => {
  opts = Object.assign(DEFAULT, opts)
  let instance = getInstance()
  for (const key in opts) {
    instance[key] = opts[key]
  }
  document.body.appendChild(instance.$el)
  Vue.nextTick(() => {
    instance.visible = true
  })
}

let alert = (opts) => {
  console.log('传递的参数：', opts)
  let tempOpts = opts
  if (typeof opts === 'string') {
    tempOpts.content = opts
    tempOpts.title = '温馨提示'
    tempOpts.okText = '我知道了'
  }
  tempOpts.type = 'alert'
  tempOpts.cancelText = ''
  tempOpts.showCancel = false
  tempOpts.onOK = opts.onOK || null
  $Dialog(tempOpts)
}

let confirm = (opts) => {
  if (typeof opts === 'string') {
    let content = opts
    opts = {}
    opts.title = '确认框'
    opts.content = content
  }
  opts.type = 'confirm'
  opts.cancelText = opts.cancelText || '取消'
  opts.showCancel = true
  $Dialog(opts)
}

export {
  alert,
  confirm
}
