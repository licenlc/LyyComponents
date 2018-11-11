<template>
    <div class="">
        <button @click="show=true">展示客服</button>
        <button @click="showToast">展示Toast</button>
        <service v-model="show" :guide="true"/>
    </div>
</template>

<script>
import Service from '@/buscomponents/service/Service'
export default {
  components: {
    Service
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    showToast () {
      // Toast({msg: 'ldldldldll'})
      this.$toast('jdjjjddj'+ Date.now())
      // console.log(this.$toast('jdjjjddj'))
    }
  }
}
</script>
