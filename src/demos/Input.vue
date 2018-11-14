<template>
  <div class="input-pages">
    <div class="demo-title">
        输入框
    </div>
    <lyy-input label="姓名" v-model="value1" placeholder="请输入姓名"/>
    <p class="input-desc">
      <span class="input-label">电话号码格式</span>
      <lyy-input label="电话号码" class="input-area" v-model="phone" mask="999 9999 9999" placeholder="请输入电话号码"/>
    </p>
  </div>
</template>

<script>
import LyyInput from '@/components/input/Input'

export default {
  components: {
    LyyInput
  },
  data () {
    return {
      value1: '',
      phone: '18064082092'
    }
  }
}
</script>
<style lang="less">
.input-desc{
  display: flex;
  align-items: center;
  .input-label{
    padding-right: 10px;
    padding-left: 10px;
    display: inline-block;
  }
  .input-area{
    flex: 1;
  }
}
</style>
