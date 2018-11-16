<template>
  <div :class = "classes">
    <slot>
    </slot>
  </div>
</template>

<script>
const prefixCls = 'dv-form'

export default {
  name: 'dv-form',
  props: {
    model: {
      type: Object
    },
    labelWidth: Number,
    labelPosition: {
      type: String,
      default: 'right'
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
