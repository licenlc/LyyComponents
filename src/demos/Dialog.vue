<template>
  <div>
      <div class="demo-title">
        Dialog组件
      </div>
      <ul>
        <li class="demo-list" @click="showDialog">默认Dialog</li>
        <li class="demo-list" @click="showDialog">自定义Dialog</li>
        <li class="demo-list" @click="showAlert2">默认Alert</li>
        <li class="demo-list" @click="showAlert2">自定义Alert</li>
      </ul>
  </div>
</template>

<script>

export default {
  methods: {
    showDialog () {
      this.$dialog({
        // title: '标题',
        content: '开导开导看到',
        onOK: () => {
          console.log('点击确认按钮')
        }
      })
    },
    showAlert2 () {
      this.$alert({
        title: 'alert对胡',
        content: '快点快点快点看',
        okText: '我知道了'
      })
    }
  }
}
</script>
