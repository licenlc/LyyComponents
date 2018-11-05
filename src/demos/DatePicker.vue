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
      // pickerList: ['浙江', '武汉', '长沙', '上海', '杭州', '深圳', '广州', '宁波', '北京', '天津']
    }
  },
  created () {
    let data2 = []
    for (let i = 0; i < 100; i++) {
      data2.push({text: i + 100, value: i})
    }
    let data4 = []
    for (let i = 999; i > 800; i--) {
      data4.push({text: i, value: i})
    }
    this.data = [data2]
    // this.data = [data, data3]
    // for (let i = 1; i < 135; i++) {
    //   this.pickerList.push(i)
    // }
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
