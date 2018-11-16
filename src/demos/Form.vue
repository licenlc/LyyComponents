<template>
  <div class="input-pages">
    <div class="demo-title">Form</div>

    <lyy-form>
        <form-item label="姓名" style="border-bottom: 1px solid #f0f0f0;">
            <lyy-input v-model="value1" placeholder="请输入姓名"/>
        </form-item>
        <form-item label="电话号码" style="border-bottom: 1px solid #f0f0f0;">
            <lyy-input v-model="value1" placeholder="请输入电话号码"/>
        </form-item>
        <form-item style="border-bottom: 1px solid #f0f0f0;">
            <lyy-input v-model="value1" placeholder="请输入电话号码"/>
        </form-item>
    </lyy-form>
  </div>
</template>

<script>
import LyyInput from '@/components/input/Input'
import FormItem from '@/components/formItem'
import LyyForm from '@/components/form/Form'

export default {
  components: {
    LyyInput,
    FormItem,
    LyyForm
  },
  data () {
    return {
      value1: '',
      address: '',
      phone: '18064082092',
      left: 'left'
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
