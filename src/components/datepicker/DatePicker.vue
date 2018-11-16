<template>
  <picker :data = "data"
    @on-change="dateChange"
    @on-ok="onOk"
    :defaultIndex="[0, 0, 0]" ref="datepicker"></picker>
</template>

<script>
import Picker from '@/components/picker/Picker'
import {getDays} from './utils'
import {oneOf} from '@/components/utils/assist'

const currentYear = new Date().getFullYear()
const DATE_TYPE = ['year', 'month', 'date', 'datetime', 'time']

function getArrText (min, max, formatString) {
  const textArr = []
  for (let i = min; i <= max; i++) {
    const value = i < 10 ? `0${i}` : i
    textArr.push({value: i, text: `${value}${formatString}`})
  }
  return textArr
}

export default {
  name: 'dv-date-picker',
  components: {
    Picker
  },
  props: {
    type: {
      default: 'date',
      validator (value) {
        return oneOf(value, DATE_TYPE)
      }
    },
    format: {
      type: String,
      default: 'yyyy-MM-DD'
    },
    max: {
      type: Number,
      default: currentYear + 14
    },
    min: {
      type: Number,
      default: currentYear - 18
    },
    defaultValue: {
      type: Date
    },
    okText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    }
  },
  watch: {
    data () {
      this.$refs.datepicker.refresh()
    },
    dateValue (val) {
      this.$emit('input', val)
    }
  },
  created () {
    console.log(this.min, this.max)
    this.selectYear = this.year[0]
    this.selectMonth = this.month[0]
  },
  computed: {
    year () {
      return getArrText(this.min, this.max, '年')
    },
    month () {
      return getArrText(1, 12, '月')
    },
    day () {
      if (this.type === 'date' || this.type === 'datetime') {
        let year = this.selectYear
        let month = this.selectMonth
        const days = getDays(year, month)
        return getArrText(1, days, '日')
      }
    },
    hours () {
      return getArrText(1, 24, '时')
    },
    minutes () {
      return getArrText(1, 60, '分')
    },
    data () {
      if (this.type === 'date') {
        return [this.year, this.month, this.day]
      } else if (this.type === 'month') {
        return [this.year, this.month]
      } else if (this.type === 'datetime') {
        return [this.year, this.month, this.day, this.hours, this.minutes]
      } else if (this.type === 'time') {
        return [this.hours, this.minutes]
      } else if (this.type === 'year') {
        return [this.year]
      }
    }
  },
  data () {
    return {
      dateValue: '',
      dateArr: [],
      selectYear: '',
      selectMonth: ''
    }
  },
  methods: {
    dateChange (selectIndex, index) {
      console.log('date-change:', selectIndex, 'index:', index, 'text:', this.data[selectIndex][index].text)
      this.dateArr[selectIndex] = this.data[selectIndex][index].text
      if (this.type === 'date' || this.type === 'datetime') {
        if (selectIndex === 0) {
          this.selectYear = this.data[selectIndex][index].value
        } else if (selectIndex === 1) {
          this.selectMonth = this.data[selectIndex][index].value
        }
      }
      this.dateValue = this.dateArr.join('-')
      console.log('dateChange:', this.dateValue)
    },
    showPicker () {
      this.$refs.datepicker.showPicker()
    },
    getValue () {
      console.log('getValue:', this.dateValue)
      this.$emit('input', this.dateValue)
    },
    onOk (indexArr, valueArr, textArr) {
      this.$toast({
        msg: indexArr.join('-')
      })
      console.log('DatePicker:', indexArr.join('-'))
      this.$emit('on-ok', indexArr)
      this.$emit('input', indexArr)
    }
  }
}
</script>
