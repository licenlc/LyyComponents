<template>
  <div class="dv-input-area">
    <!-- <div class="dv-input-left" v-if="label !== ''">
      <slot name="label">
        <div class="dv-input-label" v-html="label"></div>
      </slot>
    </div> -->
    <i class="dv-input-clear" v-if="clearable && currentValue" @click="handlerClear">X</i>
    <div class="dv-input-center">
      <input :placeholder="placeholder" :disabled="disabled" :readonly="readonly" v-model="currentValue" @blur="handlerBlur" class="dv-input"/>
    </div>
    <div class="dv-input-right">
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
      console.log('currentValue-newValue:', newValue)
      this.$emit('input', this.maskValue(newValue))
    },
    value (val) {
      this.currentValue = val
    }
  },
  methods: {
    maskValue (val = '') {
      const value = this.mask ? mask.toPattern(val, this.mask) : val
      console.log('maskValue:', value)
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

<style lang="less">
.dv-input-area{
  display:flex;
  background-color: #fff;
  font-size: 20px;
  padding: 5px 0;
  align-items: center;
  position: relative;
  border-bottom: 1px solid #f0f0f0;
  .dv-input-left{
    display: inline-block;
    padding-right: 20px;
  }
  .dv-input-center{
    flex: 1;
    height: 30px;
    .dv-input{
      width: 100%;
      height: 100%;
    }
  }
  .dv-input-clear{
    position: absolute;
    right: 0;
  }
}
</style>
