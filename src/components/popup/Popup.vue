<template>
  <transition name="slide-up">
    <div class="dv-popup " v-transfer-dom :class="[position ? 'dv-popup-' + position : '']" v-show="curValue">
      <slot>
      </slot>
    </div>
  </transition>
</template>

<script>
import TransferDom from '@/directives/v-transfer-dom'

export default {
  name: 'dv-popup',
  directives: {
    TransferDom
  },
  props: {
    position: {
      type: String,
      default: ''
    },
    value: {
      type: Boolean,
      default: false
    },
    time: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      curValue: this.value,
      timer: null
    }
  },
  watch: {
    value (val) {
      this.curValue = val
      if (val && this.time > 0) {
        this.timer = setTimeout(() => {
          this.$emit('input', false)
        }, this.time)
      } else {
        this.$emit('input', val)
      }
    }
  }
}
</script>
