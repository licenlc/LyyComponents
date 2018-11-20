// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Toast from '@/components/toast/index'
// import Toast2 from '@/components/toast/Toast'
import {alert, confirm} from '@/components/dialog'
// import CreateAPI from '@/create/index'
// Vue.use(CreateAPI, {
//   apiPrefix: '$$',
//   ComponentPrefix: 'lyy-'
// })

// Vue.createAPI(Toast2, true)
// Vue.config.silent = true
// Vue.config.productionTip = true
Vue.config.errorHandler = function (err, vm, info) {
  console.log('errorHandler')
  let {message, name, script, line, column, stack} = err
  console.log('message:', name)
  console.log('name:', message)
  console.log('script:', script)
  console.log('line:', line)
  console.log('column:', column)
  console.log('stack:', stack)
}

Vue.prototype.$toast = Toast
Vue.prototype.$alert = alert
Vue.prototype.$dialog = confirm

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
