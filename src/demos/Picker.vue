<template>
    <div>
        <div class="demo-title">
          Picker选择器
        </div>
        <ul>
          <li @click="showPicker" style="text-align:center;" class="demo-list">单列picker</li>
          <li @click="showPicker2" style="text-align:center;" class="demo-list">多列picker</li>
        </ul>
      <span style="color: red; font-size: 18px; text-align: center;">{{dateValue}}</span>
      <picker title="单列picker" :data="data" ref="picker" :defaultIndex="[3]"/>
      <picker title="多列picker" :data="data" ref="picker" :defaultIndex="[3]"/>
    </div>
</template>

<script>
import Picker from '@/components/picker/Picker'
export default {
  name: 'picker-demo',
  components: {
    Picker
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
