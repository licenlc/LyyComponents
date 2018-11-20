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

<style lang="less">
.dv-btn{
  display: flex;
  // width: 100%;
  text-align: center;
  cursor: pointer;
  padding: 18px;
  font-size: 18px;
  box-sizing: border-box;
  white-space: nowrap;
  background:#fff;
  color: #333;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
}
.dv-btn-disabled {
  background: #ccc;
  color: #fff;
  position: relative;
}
.dv-btn-primary{
  background:#4b0;
  color: #fff;
}
.dv-btn-warning{
  background: #ff976a;
  color: #fff;
}
.dv-btn-danger{
  background: #f44;
  color: #fff;
}
.dv-btn-inline{
  display: inline-block;
  padding: 10px;
}
</style>
