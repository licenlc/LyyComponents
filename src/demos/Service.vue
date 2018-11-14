<template>
    <div >
        <div class="demo-title">
        生活类客服和充值
      </div>
        <ul>
          <li @click="show=true" style="text-align:center;" class="demo-list">展示客服</li>
          <li @click="showCharge=true" style="text-align:center;" class="demo-list">展示充值弹框</li>
        </ul>
        <service v-model="show" :guide="true"/>
        <Charge v-model="showCharge"/>
    </div>
</template>

<script>
import Service from '@/buscomponents/service/Service'
import Charge from '@/buscomponents/charge/Charge'
export default {
  components: {
    Service,
    Charge
  },
  data () {
    return {
      show: false,
      showCharge: false
    }
  },
  methods: {
  }
}
</script>
