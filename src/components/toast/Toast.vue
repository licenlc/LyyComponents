<template>
  <div class="dv-toast" :class="customClass" v-show="visible">
      <i class="dv-toast-icon" v-if="icon"></i>
      <span>{{msg}}</span>
  </div>
</template>

<script>
export default {
  name: 'dv-toast',
  props: {
    msg: String,
    icon: String,
    duration: {
      type: Number,
      default: 4000
    },
    position: {
      type: String,
      default: 'default'
    },
    type: {
      type: String,
      default: 'success'
    },
    className: String
  },
  computed: {
    customClass () {
      let classList = []
      switch (this.position) {
        case 'top':
          classList.push('dv-toast-top')
          break
        case 'bottom':
          classList.push('dv-toast-bottom')
          break
        default:
          classList.push('dv-toast-middle')
      }
      classList.push(this.className)
      return classList.join(' ')
    }
  },
  watch: {
    visible (val, oldVal) {
      console.log('visible:', val)
    }
  },
  data () {
    return {
      visible: false
    }
  }
}
</script>
