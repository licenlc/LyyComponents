<template>
  <div>
      <div class="demo-title">
        DatePicker组件
      </div>
      <ul>
        <li class="demo-list" @click="showDatePicker">年</li>
        <li class="demo-list" @click="showDatePicker1">年月</li>
        <li class="demo-list" @click="showDefault">年月日(默认)</li>
        <li class="demo-list" @click="showDatePicker2">年月日时分秒</li>
      </ul>
      <date-picker ref="datepicker1" type="year" v-model="dateValue"/>
      <date-picker ref="datepicker2" type="month" v-model="dateValue1"/>
      <date-picker ref="datepicker" v-model="dateValue2"/>
      <date-picker ref="datepicker3" type="datetime" v-model="dateValue3"/>
  </div>
</template>

<script>
import DatePicker from '@/components/datepicker/DatePicker'

export default {
  components: {
    DatePicker
  },
  data () {
    return {
      visible: false,
      dateValue: '',
      dateValue1: '',
      dateValue2: '',
      dateValue3: '',
      inputValue: ''
    }
  },
  methods: {
    showDefault () {
      this.$refs.datepicker.showPicker()
    },
    showDatePicker () {
      this.visible = true
      this.$refs.datepicker1.showPicker()
    },
    showDatePicker1 () {
      this.visible = true
      this.$refs.datepicker2.showPicker()
    },
    showDatePicker2 () {
      this.visible = true
      this.$refs.datepicker3.showPicker()
    },
    showDatePicker3 () {
      this.visible = true
      this.$refs.datepicker3.showPicker()
    }
  }

}
</script>
