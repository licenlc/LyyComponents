<template>
    <div class="">
      <div>
        <button @click="showDialog">展示对话框1</button>
        <button @click="showDialog2">展示对话框2</button>
        <button @click="showPopup=true">popup展示</button>
      </div>
      <div>
         <button @click="showLifeDialog">展示生活类对话框</button>
      </div>
    </div>
</template>

<script>

export default {
  data () {
  },
  methods: {
    showDialogInfo () {
      this.$dialog({
        title: '标题',
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
