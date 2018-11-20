<template>
  <div>
      <div class="demo-title">
        Toast组件
      </div>
      <ul>
        <li class="demo-list" @click="defaultToast">默认toast</li>
        <li class="demo-list" @click="coutomToast">自定义toast</li>
        <li class="demo-list" @click="coutomToast2">creatToast</li>
      </ul>
  </div>
</template>

<script>

export default {
  methods: {
    defaultToast () {
      this.$toast('默认toa水电费是范德萨的ddgdfgdfgdgd发生水电费水电费是st', 'dkdk')
    },
    coutomToast () {
      this.$toast({
        duration: 4000,
        msg: 'ldldl1{}',
        position: 'bottom',
        type: '',
        icon: ''
      })
    },
    coutomToast2 () {
      this.$$dvToast({
        duration: 3000,
        msg: 'crateAOI',
        visible: true
      }).show()
    }
  }
}
</script>
