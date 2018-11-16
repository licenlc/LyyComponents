<template>
  <div class="input-pages">
    <div class="demo-title">输入框</div>
    <lyy-input style="border-bottom: 1px solid #f0f0f0;" v-model="value1" placeholder="请输入姓名"/>
    <lyy-input style="border-bottom: 1px solid #f0f0f0;" v-model="value1" readonly placeholder="请输 readonly"/>
    <lyy-input style="border-bottom: 1px solid #f0f0f0;" v-model="value1" disabled placeholder="不可编辑。。。。"/>
    <lyy-input style="border-bottom: 1px solid #f0f0f0;" v-model="value1" placeholder="请输入姓名"/>
    <lyy-input style="border-bottom: 1px solid #f0f0f0;" v-model="address" placeholder="请输入地址"/>
    <lyy-input style="border-bottom: 1px solid #f0f0f0;" v-model="value1" placeholder="请输入姓名"/>
    <lyy-input style="border-bottom: 1px solid #f0f0f0;" v-model="address" placeholder="请输入地址"/>
    <lyy-input style="border-bottom: 1px solid #f0f0f0;" v-model="value1" placeholder="请输入姓名"/>
    <lyy-input style="border-bottom: 1px solid #f0f0f0;" v-model="address" placeholder="请输入地址"/>
    <lyy-input style="border-bottom: 1px solid #f0f0f0;" v-model="value1" placeholder="请输入姓名"/>
    <lyy-input style="border-bottom: 1px solid #f0f0f0;" v-model="address" placeholder="请输入地址"/>
    <lyy-input style="border-bottom: 1px solid #f0f0f0;" v-model="value1" placeholder="请输入姓名"/>
    <lyy-input style="border-bottom: 1px solid #f0f0f0;" v-model="address" placeholder="请输入地址"/>
    <lyy-input style="border-bottom: 1px solid #f0f0f0;" v-model="value1" placeholder="请输入姓名"/>
    <lyy-input style="border-bottom: 1px solid #f0f0f0;" v-model="address" placeholder="请输入地址"/>
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
      address: '',
      phone: '18064082092'
    }
  },
  watch: {
    phone (val) {
      console.log('phone:', val)
    }
  }
}
</script>
<style lang="less">
.input-desc{
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f0f0f0;
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
