<template>
  <transition name="dv-mask">
    <div class="lyy-customer"  v-transfer-dom v-show="curValue" @click="curValue=false" @touchmove.prevent>
      <transition name="picker-content-fade">
        <section class="customer-wrapper" v-show="curValue" @click.stop>
          <div class="customer-title">
            客服
          </div>
          <!-- 常见问题 -->
          <div class="problem-wrapper acq-wrapper">
              <h2>常见问题</h2>
              <ul class="flex">
                <li class="pro-item">
                  <i class="icon"/>
                  <p>启动失败</p>
                </li>
                <li class="pro-item">
                  <i class="icon"/>
                  <p>支付失败2</p>
                </li>
                <li class="pro-item">
                  <i class="icon"/>
                  <p>支付失败3</p>
                </li>
                <li class="pro-item">
                  <i class="icon"/>
                  <p>支付失败4</p>
                </li>
                <li class="pro-item" v-if="guide">
                  <i class="icon"/>
                  <p>支付失败4</p>
                </li>
              </ul>
          </div>
          <!-- 在线客服 -->
          <div class="problem-wrapper">
              <h2>在线客服</h2>
              <ul class="flex">
                 <li class="pro-item" @click="showQR">
                  <i class="icon"/>
                  <p>乐摇摇微信公众号</p>
                </li>
                <li class="pro-item">
                  <i class="icon"/>
                  <p>支付失败</p>
                </li>
              </ul>
          </div>
        </section>
      </transition>
    </div>
  </transition>
</template>

<script>
import TransferDom from '@/directives/v-transfer-dom'

export default {
  name: 'lyy-customer',
  directives: {
    TransferDom
  },
  props: {
    guide: {
      type: Boolean,
      default: false
    },
    failIcon: {
      type: String,
      default: ''
    },
    equipmentId: {
      type: String,
      default: ''
    },
    value: Boolean
  },
  data () {
    return {
      QRCode: '',
      QRFlag: true,
      curValue: ''
    }
  },
  created () {
    this.curValue = this.value
  },
  watch: {
    value (val, oldVal) {
      console.log('qrflag:', this.QRFlag)
      if (val && this.QRFlag) {
        this.getCustomer(val)
      } else {
        this.curValue = val
      }
    },
    curValue (val) {
      this.$emit('input', val)
    }
  },
  methods: {
    showQR () {
      console.log('展示公众号二维码')
    },
    // 获取二维码地址，展示
    getCustomer (val) {
      if (this.QRFlag) {
        console.log('获取图片ID')
        setTimeout(() => {
          this.curValue = val
          this.QRFlag = false
        }, 500)
      }
    }
  }
}
</script>
