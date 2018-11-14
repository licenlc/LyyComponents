import Vue from 'vue'
import Dialog from './LifeDialog'
let LifeDialogConstructor = Vue.extend(Dialog)

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
  instanceT = new LifeDialogConstructor({
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

let LifeDialog = (opts) => {
  if (typeof opts === 'string') {
    let content = opts
    opts = {}
    opts.title = '确认框'
    opts.content = content
  }
  opts.type = ''
  opts.cancelText = opts.cancelText || '取消'
  opts.showCancel = true
  $Dialog(opts)
}

export default LifeDialog
