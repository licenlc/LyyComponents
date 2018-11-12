<template>
  <transition name="dv-mask">
    <div class="picker"  v-transfer-dom v-show="show" @click="show=false" @touchmove.prevent>
      <transition name="picker-content-fade">
        <div class="picker-wrapper" v-show="show" @click.stop>
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
          <!-- 内容区 -->
          </div>
        </div>
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
      console.log(JSON.stringify(value), JSON.stringify(oldValue))
      this.setData(value)
    }
  },
  created () {
    console.log(JSON.stringify(this.data))
    console.log('picker-created', JSON.stringify(this.selectIndex))
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
        // this.$nextTick(() => {
        //   })
        let wheelWrapper = this.$refs.wheelWrapperRef
        for (let i = 0; i < this.pickerData.length; i++) {
          this.createWheel(wheelWrapper, i)
        }
      } else {
        for (let i = 0; i < this.pickerData.length; i++) {
          this.wheels[i].enable()
          this.wheels[i].wheelTo(this.selectIndex[i])
        }
      }
    },
    onOk () {
      console.log(this._canClickOK())
      if (!this._canClickOK()) {
        return
      }
      let oldSelectIndex = this.selectIndex.join(',')
      console.log('oldSelectIndex:', oldSelectIndex)
      this.hidePicker()
      for (let i = 0; i < this.pickerData.length; i++) {
        console.log('===============:', this.wheels[i].getSelectedIndex())
        let index = this.wheels[i].getSelectedIndex()
        this.selectIndex[i] = index
        this.selectVal[i] = this.pickerData[i][index].value
        this.selectText[i] = this.pickerData[i][index].text
      }
      let newSlelectIndex = this.selectIndex.join(',')
      console.log('newSlelectIndex:', newSlelectIndex)
      if (oldSelectIndex !== newSlelectIndex) {
        console.log('value-change')
        this.$emit(VALUE_CHANGE)
      }
      console.log(JSON.stringify(this.selectIndex), JSON.stringify(this.selectVal), JSON.stringify(this.selectText))
      this.$emit(ON_OK, this.selectVal)
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
        for (let key in item) {
          if (key === 'selectedIndex') {
            console.log(key, '-', item[key])
          }
        }
        item.disable()
      })
    },
    setData (data) {
      this.pickerData = data
    },
    scrollTo (index, dist) {
      const wheel = this.wheels[index]
      this.selectIndex[index] = dist
      wheel.wheelTo(dist)
    },
    refresh () {
      this.$nextTick(() => {
        this.wheels.forEach(item => {
          item.refresh()
        })
      })
    },
    createWheel (wheelWrapper, i) {
      console.log('createWheel- 151:', this.defaultIndex[i])
      // parseInt(this.defaultIndex[i])
      if (!this.wheels[i]) {
        this.wheels[i] = new BScroll(wheelWrapper.children[i], {
          wheel: {
            selectedIndex: 3,
            rotate: 0,
            wheelWrapperClass: 'wheel-scroll',
            wheelItemClass: 'wheel-item',
            useTransform: true
          },
          probeType: 3,
          bounceTime: 600,
          swipeTime: 1000
        })
        this.wheels[i].on('scrollEnd', () => {
          console.log('滑动对应的列数:', i, '滑动选中的index:', this.wheels[i].getSelectedIndex(), '滑动选中的value:', this.pickerData[i][this.wheels[i].getSelectedIndex()].text)
          this.$emit(ON_CHANGE, i, this.wheels[i].getSelectedIndex())
        })
      } else {
        this.wheels[i].refresh()
      }
      return this.wheels[i]
    },
    _canClickOK () {
      console.log('是否在滑动:', this.wheels[0].isInTransition)
      return this.wheels.every(item => {
        return !item.isInTransition
      })
    }
  }
}
</script>
