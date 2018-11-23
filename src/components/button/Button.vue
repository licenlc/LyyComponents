<template>
  <div class="dv-btn" :class="btnClass" @click="handlerClick">
    <i class="dv-btn-icon" :class="icon" v-if="icon"></i>
    <slot>{{text}}</slot>
  </div>
</template>

<script>
import {oneOf} from '@/components/utils/assist'

const prefixCls = 'dv-btn'
export default {
  name: 'dv-button',
  props: {
    icon: String,
    text: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: true
    },
    type: {
      default: '',
      validator (value) {
        return oneOf(value, ['primary', 'warning', 'danger', ''])
      }
    },
    size: {
      default: 'normal'
    },
    inline: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    btnClass () {
      let a = [
        {
          [`${prefixCls}-disabled`]: !!this.disabled,
          [`${prefixCls}-active`]: this.active,
          [`${prefixCls}-${this.type}`]: !!this.type,
          [`${prefixCls}-inline`]: !!this.inline
        }
      ]
      return a
    }
  },
  methods: {
    handlerClick (e) {
      console.log('点击事件')
      if (this.disabled) {
        e.preventDefault()
        e.stopPropagation()
        return
      }
      this.$emit('click')
    }
  }
}
</script>
