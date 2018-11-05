import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/demos/HelloWorld'
import Input from '@/demos/Input'
import Picker from '@/demos/Picker'
// import DatePicker from '@/demos/DatePicker'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/input',
      name: 'input',
      component: Input
    },
    {
      path: '/picker',
      name: 'picker',
      component: Picker
    }
    // {
    //   path: '/date',
    //   name: 'date',
    //   component: DatePicker
    // }
  ]
})
