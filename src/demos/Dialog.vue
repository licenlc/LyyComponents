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
      <div>
        <button @click="showDialogInfo">展示dialog</button>
        <button @click="showAlert2">展示alert</button>
      </div>
        <!-- <Dialog title="标题" ref="dialog">
            <p slot="content" style="color:red;">内容超若噢噢噢噢若噢噢噢噢若噢噢噢噢若噢噢噢噢若噢噢噢噢若噢</p>
        </Dialog>
         <life-dialog title="标题" ref="dialog3" type="chair" content="生活类对话框？？">
        </life-dialog>
         <Dialog title="标题2" ref="dialog2" content="您确定要删除该地址？" :showCancel="false"></Dialog>
        <Popup position="top" v-model="showPopup" style="background-color:red;color:#fff;" :time = 8000>
          <p>设备正在启动中...</p>
        </Popup> -->
    </div>
</template>

<script>
// import Dialog from '@/components/dialog/Dialog'
// import LifeDialog from '@/buscomponents/lifeDialog/LifeDialog'
// import Popup from '@/components/popup/Popup'
export default {
  // components: {
  //   Dialog,
  //   Popup,
  //   LifeDialog
  // },
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
    },
    showLifeDialog () {
      this.$refs.dialog3.show()
    },
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
