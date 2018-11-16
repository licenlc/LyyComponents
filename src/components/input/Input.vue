<template>
  <div class="dv-input-area">
    <i class="dv-input-clear iconfont icon-qingchu" v-show="clearable && currentValue" @click="handlerClear"></i>
    <div class="dv-input-center">
      <input
      ref="input"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      v-model="currentValue"
      @blur="handlerBlur"
      @focus="handlerFocus"
      class="dv-input"/>
    </div>
  </div>
</template>

<script>
import mask from 'vanilla-masker'

export default {
  name: 'dv-input',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: String,
    disabled: Boolean,
    readonly: Boolean,
    mask: String,
    label: String,
    labelWidth: Number,
    placeholder: String,
    clearable: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      currentValue: '',
      isFocus: false
    }
  },
  computed: {
    // 是否展示清除标签
    showClear () {
      if (this.currentValue !== '' && !(this.disabled && this.readonly)) {
        return true
      }
      return false
    }
  },
  created () {
    let value = this.value
    this.currentValue = (value === undefined || value === null) ? '' : (this.mask ? this.maskValue(value) : value)
  },
  watch: {
    currentValue (newValue, oldValue) {
      console.log('currentValue-newValue:', this.maskValue(newValue))
      this.currentValue = this.maskValue(newValue)
      this.$emit('input', this.maskValue(newValue))
    }
  },
  methods: {
    maskValue (val = '') {
      const value = this.mask ? mask.toPattern(val, this.mask) : val
      return value
    },
    clear () {
      this.currentValue = ''
      this.handlerFocus()
    },
    handlerBlur () {
      console.log('handerBlur')
      this.isFocus = false
      this.$emit('on-blur', this.currentValue)
    },
    handlerFocus () {
      console.log('handlerFocus')
      this.isFocus = true
      // 滑动到屏幕里面
      setTimeout(() => {
        this.$refs.input.scrollIntoViewIfNeeded(false)
      }, 500)
      this.$emit('on-focus', this.currentValue)
    },
    handerKeyUp () {
      console.log('handerKeyUp')
    },
    handlerClear () {
      this.currentValue = ''
    }
  }
}
</script>
