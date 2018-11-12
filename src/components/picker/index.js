import Vue from 'vue'

let PickerConstructor = Vue.extend(import('./Picker'))

const DEFAULT = {
  cancelText: '取消',
  okText: '确定',
  title: '',
  data: [],
  defaultIndex: []
}

let instanceArr = []

let getInstance = () => {
  if (instanceArr.length > 0) {
    return instanceArr.pop()
  }
  let instance = new PickerConstructor({
    el: document.createElement('div')
  })
  instanceArr.push(instance)
  return instance
}

let Picker = (opts) => {
  if (opts instanceof Array) {
    let data = opts
    opts = {}
    opts.data = data
  }
  opts = Object.assign(DEFAULT, opts)
  let instance = getInstance()
  instance.data = opts.data
  instance.title = opts.title
  instance.okText = opts.okText
  instance.cancelText = opts.cancelText
  instance.defaultIndex = opts.defaultIndex
  return instance
}

export default Picker
