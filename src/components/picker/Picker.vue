<template>
  <transition name="dv-mask">
    <div class="picker"  v-transfer-dom v-show="show" @click="show=false" @touchmove.prevent>
      <transition name="picker-content-fade">
        <section class="picker-wrapper" v-show="show" @click.stop>
          <!-- 头部区 -->
          <div class="picker-header">
              <div class="picker-btn picker-cancel" @click="hidePicker">{{cancelText}}</div>
              {{title}}
              <div class="picker-btn picker-ok" @click="onOk">{{okText}}</div>
          </div>
          <!-- 内容区 -->
          <div class="picker-body">
            <div class="picker-list-wrapper" ref="wheelWrapperRef">
              <div class="picker-list"  v-for="(item, index) in pickerData" :key="index">
                <div class="wheel-scroll" >
                  <p v-for="(item2, index2) in item" :key="index2" class="wheel-item">{{item2.text}}</p>
                </div>
                <div class="picker-select"></div>
             </div>
            </div>
          </div>
          <!-- 内容区 end-->
        </section>
      </transition>
    </div>
  </transition>
</template>

<script>
import BScroll from 'better-scroll'
import TransferDom from '@/directives/v-transfer-dom'

const [ON_OK, ON_CANCEL, ON_CHANGE, VALUE_CHANGE] = ['on-ok', 'on-cancel', 'on-change', 'value-change']

export default {
  name: 'picker',
  directives: {
    TransferDom
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    okText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    defaultIndex: {
      type: Array,
      default: () => []
    },
    value: {
      type: Boolean,
      default: false
    },
    title: String
  },
  data () {
    return {
      show: false,
      selectIndex: this.defaultIndex,
      pickerData: this.data.slice(),
      selectVal: [],
      selectText: [],
      wheels: []
    }
  },
  watch: {
    data (value, oldValue) {
      this.setData(value)
    }
  },
  created () {
    if (this.selectIndex.length === 0) {
      this.selectIndex = []
      for (let i = 0; i < this.pickerData.length; i++) {
        this.selectIndex[i] = 0
      }
      console.log('设置selectIndex:', JSON.stringify(this.selectIndex))
    }
  },
  methods: {
    showPicker () {
      if (this.show) {
        return
      }
      this.show = true
      if (this.wheels.length === 0) {
        this.$nextTick(() => {
          let wheelWrapper = this.$refs.wheelWrapperRef
          for (let i = 0; i < this.pickerData.length; i++) {
            this.createWheel(wheelWrapper, i)
          }
        })
      } else {
        for (let i = 0; i < this.pickerData.length; i++) {
          this.wheels[i].enable()
          this.wheels[i].wheelTo(this.selectIndex[i])
        }
      }
    },
    onOk () {
      if (!this._canClickOK()) {
        return
      }
      this.hidePicker()
      let oldSelectIndex = this.selectIndex.join(',')
      for (let i = 0; i < this.pickerData.length; i++) {
        let index = this.wheels[i].getSelectedIndex()
        this.selectIndex[i] = index
        this.selectVal[i] = this.pickerData[i][index].value
        this.selectText[i] = this.pickerData[i][index].text
      }
      let newSlelectIndex = this.selectIndex.join(',')
      if (oldSelectIndex !== newSlelectIndex) {
        this.$toast('value-change')
        this.$emit(VALUE_CHANGE)
      }
      console.log(JSON.stringify(this.selectIndex), JSON.stringify(this.selectVal), JSON.stringify(this.selectText))
      // this.$toast({msg: `下标：${this.selectIndex}； 选中的值：${this.selectVal}; 选中的文本${this.selectText}`})
      this.$emit(ON_OK, this.selectVal)
      if (this.pickerData.length === 1) {
        if (process.env.NODE_ENV === 'development') {
          console.log(process.env.NODE_ENV)
          this.$toast({msg: `环境测试：${this.selectText[0]}`})
        }
        console.log(this.selectText[0])
        this.$emit('input', this.selectText[0])
      }
    },
    cancel () {
      this.show = false
      this.pickerSelectVal = []
      this.pickerSelectText = []
      this.$emit(ON_CANCEL)
    },
    hidePicker () {
      this.show = false
      this.wheels.forEach(item => {
        item.disable()
      })
    },
    setData (data) {
      this.pickerData = data
      this.refresh()
    },
    scrollTo (index, dist) {
      const wheel = this.wheels[index]
      this.selectIndex[index] = dist
      wheel.wheelTo(dist)
    },
    refresh () {
      console.log('refresh......')
      this.$nextTick(() => {
        this.wheels.forEach(item => {
          item.refresh()
        })
      })
    },
    createWheel (wheelWrapper, i) {
      console.log('默认下标:', this.defaultIndex[i])
      if (!this.wheels[i]) {
        this.wheels[i] = new BScroll(wheelWrapper.children[i], {
          wheel: {
            selectedIndex: this.defaultIndex[i] || 0,
            rotate: 0,
            wheelWrapperClass: 'wheel-scroll',
            wheelItemClass: 'wheel-item',
            useTransform: true
          },
          probeType: 3,
          bounceTime: 300,
          swipeTime: 1000
        })
        this.wheels[i].on('scrollEnd', () => {
          // this.$toast(`列数：${i}; 下标：${this.wheels[i].getSelectedIndex()}; value: ${this.pickerData[i][this.wheels[i].getSelectedIndex()].text}`)
          this.$emit(ON_CHANGE, i, this.wheels[i].getSelectedIndex())
        })
      } else {
        this.wheels[i].refresh()
      }
      return this.wheels[i]
    },
    _canClickOK () {
      this.$toast({
        msg: `是否在滑动：${this.wheels[0].isInTransition}`,
        duration: 1000
      })
      return this.wheels.every(item => {
        return !item.isInTransition
      })
    }
  },
  beforeDestroy () {
    this.wheels && this.wheels.forEach(item => {
      // item.destory()
    })
    this.wheels = null
  }
}
</script>
