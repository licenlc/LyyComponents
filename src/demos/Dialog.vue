<template>
    <div class="">
        <button @click="showDialog">展示Toast</button>
        <Dialog title="标题" ref="dialog">
            <p slot="content" style="color:red;">内容超若噢噢噢噢若噢噢噢噢若噢噢噢噢若噢噢噢噢若噢噢噢噢若噢</p>
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
    }
  }
}
</script>
