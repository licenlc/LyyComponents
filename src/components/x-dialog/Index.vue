<template>
  <transition name="dv-mask">
      <div class="picker" v-show="visible" @click="visible=false" @touchmove.prevent>
      </div>
  </transition>
</template>

<script>
export default {
  name: 'dv-dialog',
  data () {
    return {
      visible: true
    }
  }
}
</script>
