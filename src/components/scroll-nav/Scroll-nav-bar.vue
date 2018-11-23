<template>
  <div class="dv-scroll-nav-bar" :class='"dv-scroll-nav-bar" + direction'>
    <scroll ref="scroll">
      <div class="nav-bar-item" v-for="(item, index) in data" :key="index" @click="handlerItem(item.label)">
        <slot>
        </slot>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from '@/components/scroll/Scroll'

const DIRECTION_H = 'horizontal'
const DIRECTION_V = 'vertical'

export default {
  name: 'scroll-nav-bar',
  components: {
    Scroll
  },
  props: {
    direction: {
      type: String,
      default: DIRECTION_H
    },
    data: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handlerItem (text) {
    }
  }
}
</script>

<style lang="less">

</style>
