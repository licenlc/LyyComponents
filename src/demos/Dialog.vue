<template>
    <div class="">
        <button @click="showDialog">展示对话框1</button>
        <button @click="showDialog2">展示对话框2</button>
        <button @click="showPopup=true">popup展示</button>
        <Dialog title="标题" ref="dialog">
            <p slot="content" style="color:red;">内容超若噢噢噢噢若噢噢噢噢若噢噢噢噢若噢噢噢噢若噢噢噢噢若噢</p>
        </Dialog>
         <Dialog title="标题2" ref="dialog2" content="您确定要删除该地址？" :showCancel="false">
        </Dialog>
        <Popup position="top" v-model="showPopup" style="background-color:red;color:#fff;" :time = 8000>
          <p>设备正在启动中...</p>
        </Popup>
    </div>
</template>

<script>
import Dialog from '@/components/dialog/Dialog'
import Popup from '@/components/popup/Popup'
export default {
  components: {
    Dialog,
    Popup
  },
  data () {
    return {
      showPopup: false,
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
