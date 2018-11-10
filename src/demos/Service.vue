<template>
    <div class="">
        <button @click="show=true">展示客服</button>
        <service v-model="show" :guide="true"/>
    </div>
</template>

<script>
import Service from '@/buscomponents/service/Service'
// import TransferDom from '@/directives/v-transfer-dom'
export default {
  components: {
    Service
  },
  data () {
    return {
      show: false
    }
  }
}
</script>
