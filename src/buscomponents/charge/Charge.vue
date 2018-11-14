<template>
   <transition name="dv-mask">
    <div class="lyy-charge" v-transfer-dom v-show="curValue" @click="curValue=false" @touchmove.prevent>
      <transition name="picker-content-fade">
        <section class="charge-wrapper" v-show="curValue" @click.stop>
          <div class="charge-title">
            请选择充值金额
          </div>
          <slot name="chargeList">
            <ul class="charge-wrapper">
              <li class="charge-item" v-for="(item, index) in chargeList" :key="index" @click="handlerItem(item)">
              </li>
            </ul>
          </slot>
          <p>若充值失败， 30分钟内自动返回钱包</p>
        </section>
      </transition>
    </div>
  </transition>
</template>

<script>
import TransferDom from '@/directives/v-transfer-dom'

export default {
  name: 'life-charge',
  directives: {
    TransferDom
  },
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      chargeList: [],
      curValue: false
    }
  },
  created () {
    this.curValue = this.value
  },
  watch: {
    curValue (val) {
      this.$emit('input', val)
    }
  },
  methods: {
    handlerItem (obj) {
      this.curValue = false
      this.$emit('on-select', obj)
    }
  }
}
</script>
