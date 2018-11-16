<template>
   <transition name="dv-mask">
    <div class="popup-mask" v-transfer-dom v-show="curValue" @click="curValue=false" @touchmove.prevent>
      <transition name="picker-content-fade">
        <!-- 充值弹框 -->
        <section class="charge-wrapper" v-show="curValue" @click.stop>
          <slot name="title">
            <div class="charge-title">
              请选择充值金额
            </div>
          </slot>
          <slot name="content">
            <!-- 充值列表 -->
            <ul class="charge-wrapper-list" @click="curValue=false">
              <li class="charge-item" v-for="(item, index) in chargeList" :key="index" @click="handlerItem(item)">
              </li>
            </ul>
          </slot>
          <slot name="footer">
            <p class="charge-footer">若充值失败，30分钟内自动返回微信钱包</p>
          </slot>
          <section class="charge-mask" v-show="maskFlag"></section>
        </section>
        <!-- 蒙版 -->
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
      curValue: this.value,
      maskFlag: false
    }
  },
  watch: {
    value (val) {
      this.curValue = val
      if (val === false) {
        this.maskFlag = false
      }
    },
    curValue (val) {
      this.$emit('input', val)
    }
  },
  methods: {
    handlerItem (obj) {
      // this.curValue = false
      this.maskFlag = true
      this.$emit('on-select', obj)
    }
  }
}
</script>
