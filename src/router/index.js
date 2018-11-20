import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/demos/Index'
import Input from '@/demos/Input'
import Picker from '@/demos/Picker'
import upload from '@/demos/upload'
import service from '@/demos/Service'
import dialog from '@/demos/Dialog'
import Form from '@/demos/Form'
import Toast from '@/demos/Toast'
import Error from '@/demos/Error'
import Button from '@/demos/Button'
import Scroll from '@/demos/Scroll'
import Horizontal from '@/demos/scroll/HorizontalScroll'
import Vertical from '@/demos/scroll/VerticalScroll'
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
      path: '/scroll',
      name: 'scroll',
      component: Scroll
    },
    {
      path: '/horizontal',
      name: 'horizontal',
      component: Horizontal
    },
    {
      path: '/vertical',
      name: 'vertical',
      component: Vertical
    },
    {
      path: '/button',
      name: 'button',
      component: Button
    },
    {
      path: '/input',
      name: 'input',
      component: Input
    },
    {
      path: '/form',
      name: 'form',
      component: Form
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
    },
    {
      path: '/toast',
      name: 'toast',
      component: Toast
    },
    {
      path: '/error',
      name: 'errpr',
      component: Error
    }
  ]
})
