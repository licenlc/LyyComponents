<template>
    <div class="container">
      <div @click="showPicker2" style="padding: 10px;width:80px;display:inline-block;text-align:center;">点击</div>
      <span style="color: red; font-size: 18px; text-align: center;">{{dateValue}}</span>
      <date-picker ref="datepicker" v-model="dateValue"/>
    </div>
</template>

<script>
import DatePicker from '@/components/datepicker/DatePicker'

export default {
  components: {
    DatePicker
  },
  watch: {
    'visible': function (newValue, oldVal) {
      console.log(newValue)
    },
    dateValue (val) {
      console.log('获取时间：', val)
    }
  },
  data () {
    return {
      visible: false,
      data: [],
      pickerList: [],
      dateValue: '',
      inputValue: ''
    }
  },
  methods: {
    showPicker () {
      this.visible = true
      this.$refs.picker.showPicker()
    },
    showPicker2 () {
      this.visible = true
      this.$refs.datepicker.showPicker()
    }
  }

}
</script>
