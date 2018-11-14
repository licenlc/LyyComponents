import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/demos/Index'
import Input from '@/demos/Input'
import Picker from '@/demos/Picker'
import upload from '@/demos/upload'
import service from '@/demos/Service'
import dialog from '@/demos/Dialog'
import DatePicker from '@/demos/DatePicker'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
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
    },
    {
      path: '/upload',
      name: 'upload',
      component: upload
    },
    {
      path: '/service',
      name: 'service',
      component: service
    },
    {
      path: '/dialog',
      name: 'dialog',
      component: dialog
    },
    {
      path: '/date',
      name: 'datePicker',
      component: DatePicker
    }
  ]
})
