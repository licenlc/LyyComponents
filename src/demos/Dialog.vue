<template>
    <div class="">
        <button @click="showDialog">展示对话框1</button>
        <button @click="showDialog2">展示对话框2</button>
        <Dialog title="标题" ref="dialog">
            <p slot="content" style="color:red;">内容超若噢噢噢噢若噢噢噢噢若噢噢噢噢若噢噢噢噢若噢噢噢噢若噢</p>
        </Dialog>
         <Dialog title="标题2" ref="dialog2" content="您确定要删除该地址？" :showCancel="false">
        </Dialog>
    </div>
</template>

<script>
import Dialog from '@/components/dialog/Dialog'
export default {
  components: {
    Dialog
  },
  data () {
    return {
      show: false,
      content: '内容超若噢噢噢噢若噢噢噢噢若噢噢噢噢若噢噢噢噢若噢噢噢噢若噢'
    }
  },
  methods: {
    showDialog () {
        this.$refs.dialog.show()
    },
    showDialog2 () {
        this.$refs.dialog2.show()
    }
  }
}
</script>
