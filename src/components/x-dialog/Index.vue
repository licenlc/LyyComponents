<template>
  <transition name="dv-mask">
      <div class="popup-mask" v-show="visible" @click="visible=false" @touchmove.prevent>
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
