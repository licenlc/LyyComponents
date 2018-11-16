<template>
  <div class="form-item-wrapper">
      <label class="form-label" :style="labelStyle" v-if="label"><slot name="label">{{label}}</slot></label>
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'form-item',
  props: {
    label: {
      type: String,
      default: ''
    },
    labelWidth: Number,
    align: {
      type: String,
      default: 'left'
    }
  },
  computed: {
    // form () {
    //   let parent = this.$parent
    //   while (parent.$options.name !== 'dv-form') {
    //     parent = parent.$parent
    //   }
    //   return parent
    // },
    labelStyle () {
      let style = {}
      const labelWidth = this.labelWidth || ''
      if (labelWidth) {
        style.width = `${labelWidth}px`
      }
      return style
    }
  }
}
</script>
