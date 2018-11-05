<template>
  <div class="input-pages">
    <lyy-input label="姓名" v-model="value1" placeholder="请输入姓名"/>
    <lyy-input label="电话号码" v-model="phone" mask="999 9999 9999" placeholder="请输入姓名"/>
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
