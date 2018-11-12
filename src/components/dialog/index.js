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
    return
  }
  instanceT = new DialogConstructor({
    el: document.createElement('div')
  })
}

let $Dialog = (opts) => {
  console.log('opts:', opts)
  opts = Object.assign(DEFAULT, opts)
  console.log(opts)
  getInstance()
  let instance = instanceT
  for (const key in opts) {
    console.log(`${key}=${opts[key]}`)
    instance[key] = opts[key]
  }
  console.log(instance)
  document.body.appendChild(instance.$el)
  Vue.nextTick(() => {
    instance.visible = true
  })
}

let alert = (opts) => {
  let tempOpts = JSON.parse(JSON.stringify(DEFAULT))
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
