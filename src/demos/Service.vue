<template>
    <div class="">
        <button @click="show=true">展示客服</button>
        <button @click="showToast">展示Toast</button>
        <button @click="showAlert">展示alert</button>
        <button @click="showDialog">展示Dialog</button>
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
      this.$toast(`jdjjjddj${Date.now()}kdkkdkdkdkdkdkdkdkdk`)
    },
    showAlert () {
      this.$alert(`jdjjjddj${Date.now()}kdkkdkdkdkdkdkdkdkdk`)
    },
    showDialog () {
      this.$dialog({
        title: '删除地址对话框',
        content: '你要删除该地址么??',
        onOk: () => {
          console.log('确认删除对话框........')
          this.show = true
        }
      })
    },

  }
}
</script>
