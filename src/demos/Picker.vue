<template>
    <div class="container">
      <div @click="showPicker" style="padding: 10px;width:80px;display:inline-block;text-align:center;">点击</div>
      <div @click="showPicker2" style="padding: 10px;width:80px;display:inline-block;text-align:center;">点击</div>
      <span style="color: red; font-size: 18px; text-align: center;">{{dateValue}}</span>
      <picker :data="data" ref="picker" :defaultIndex="[3]"/>

    </div>
</template>

<script>
import Picker from '@/components/picker/Picker'
export default {
  name: 'picker-demo',
  components: {
    Picker
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

<style lang="less">
*{
  padding: 0;
  margin:0;
}
.container{
  background-color:#f0f0f0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: block;
}
</style>
