<template>
  <Dialog :title="title" v-transfer-dom :content="content" :titleClass="titleClass" v-if="visible">
      <p slot="content" class="content" :class="contentClass">
        <span class="content-money">￥</span>
        <span class="content-num">{{content}}</span>
      </p>
      <div slot="footer" class="life-dialog-footer">
         <p class="life-btn life-btn-cancel">取消</p>
         <p class="life-btn life-btn-ok">确定</p>
      </div>
  </Dialog>
</template>

<script>
import TransferDom from '@/directives/v-transfer-dom'
import Dialog from '@/components/dialog/Dialog'

export default {
  name: 'life-dialog',
  components: {
    Dialog
  },
  directives: {
    TransferDom
  },
  props: {
    titleClass: String,
    title: String,
    content: String,
    type: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      visible: true
    }
  },
  computed: {
    contentClass () {
      let cls = ''
      switch (this.type) {
        case 'chair':
          cls = 'chair-content'
          break
        case 'washer':
          cls = 'washer-content'
          break
        case 'charge':
          cls = 'charge-content'
          break
      }
      return cls
    }
  }
}
</script>

<style lang="less" scoped>
.life-dialog-footer{
  display: flex;
  justify-content: space-between;
  .life-btn{
    padding: 10px 18px;
    border: 1px solid #E9E9E9;
    border-radius: 18px;
  }
  .life-btn-cancel{
    color: #999;
  }
  .life-btn-ok{
    color: #fff;
  }
}
</style>
