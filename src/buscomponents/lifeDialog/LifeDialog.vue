<template>
  <Dialog :title="title" :content="content" :titleClass="titleClass">
      <p slot="content" :class="contentClass">
        <span class="content-money">￥</span>
        <span class="content-num">{{msg}}</span>
      </p>
      <div slot="footer" class="life-dialog-footer">
         <a href="javascript:;" class="life-btn life-btn-cancel">取消</a>
         <a href="javascript:;" class="life-btn life-btn-ok">确定</a>
      </div>
  </Dialog>
</template>

<script>
import Dialog from '@/components/dialog/Dialog'
export default {
  name: 'life-dialog',
  components: {
    Dialog
  },
  props: {
    titleClass: String,
    title: String,
    content: String,
    type: String
  },
  data () {
    return {
    }
  },
  computed: {
    contentClass () {
      let cls = ''
      switch(this.type) {
        case 'chair':
          cls = 'chair-content'
          break
        case 'washer':
          cls = 'washer-content'
          break
      }
      return cls
    }
  }
}
</script>

