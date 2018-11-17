<template>
  <div :class = "classes">
    <slot>
    </slot>
  </div>
</template>

<script>
const prefixCls = 'dv-form'
import {oneOf} from '@/components/utils/assist'

export default {
  name: 'dv-form',
  props: {
    model: {
      type: Object
    },
    labelWidth: Number,
    labelPosition: {
      default: 'right',
      validator (value) {
        return oneOf(value, ['left', 'right', 'center'])
      }
    }
  },
  computed: {
    classes () {
      return [
        `${prefixCls}-label-${this.labelPosition}`
      ]
    }
  }
}
</script>
