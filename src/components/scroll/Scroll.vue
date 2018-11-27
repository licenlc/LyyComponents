<template>
  <div class="dv-scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <div class="list-wrapper" ref="listWrapper">
        <slot>
        </slot>
        <slot name="pullup">
          <div class="scroll-pullup-wrapper" v-if="pullUpLoad">
            <div class="pullup-end" v-if="!isPullUpLoad">
              <span>加载结束</span>
            </div>
            <div class="pullup-loading" v-else>
              加载中....
            </div>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {getRect} from './utils'
// const SCOLL_EVENT = ['scroll', 'scroll-start', 'scroll-end']
const [DIRECTION_H, DIRECTION_V] = ['horizontal', 'vertical']
const DEFAULT_OPTIONS = {
  observeDOM: true,
  click: true,
  probeType: 1,
  scrollbar: false,
  pullDownRefresh: false,
  pullUpLoad: false,
  momentum: true
}

export default {
  name: 'scroll',
  props: {
    options: {
      type: Object,
      default: () => {}
    },
    diretction: {
      type: String,
      default: DIRECTION_V,
      validator (value) {
        return value === DIRECTION_H || value === DIRECTION_V
      }
    }
  },
  watch: {
    options (val) {
      console.log(JSON.stringify(val))
    }
  },
  data () {
    return {
      isPullUpLoad: false
    }
  },
  computed: {
    pullUpLoad () {
      console.log('computed:', this.options.pullUpLoad)
      return this.options.pullUpLoad
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.initScroll()
    })
  },
  beforeDestroy () {
    this.destory()
  },
  methods: {
    initScroll () {
      if (!this.$refs.wrapper) {
        console.error('没有获取包裹元素')
        return
      }
      this.$nextTick(() => {
        this._calcHeight()
        let options = Object.assign({}, DEFAULT_OPTIONS, {
          scrollY: this.diretction === DIRECTION_V,
          scrollX: this.diretction === DIRECTION_H
        })
        console.log(JSON.stringify(options))
        this.scroll = new BScroll(this.$refs.wrapper, options)
        this.scroll.on('scrollEnd', () => {
          console.log('滑动结束')
          this.$emit('scroll-end')
        })
        this.scroll.enable()
        if (options.pullUpLoad) {
          this._onPullupLoad()
        }
      })
    },
    _handleEvent () {
    },
    disable () {
      this.scroll && this.scroll.disable()
    },
    enable () {
      this.scroll && this.scroll.enable()
    },
    refresh () {
      this._calcHeight()
      this.scroll && this.scroll.refresh()
    },
    destory () {
      this.scroll && this.scorll.destory()
      this.scroll = null
    },
    _calcHeight () {
      if (this.$refs.listWrapper) {
        console.log('_calcHeight')
        this.$refs.listWrapper.style.minHeight = this.pullDownRefresh || this.pullUpLoad ? `${getRect(this.$refs.listWrapper)}` : '0'
      }
    },
    _onPullDownRefresh () {
      this.scroll.on('pullingDown', this._pullDownHandle)
      this.scroll.on('scroll', this._pullDownScrollHandle)
    },
    _offPullDownRefresh () {
      this.scroll.off('pullingDown', this._pullDownHandle)
      this.scroll.off('scroll', this._pullDownScrollHandle)
    },
    _onPullupLoad () {
      console.log('pulling-up')
      this.scroll.on('pullingUp', this._hanldlePullupLoad)
    },
    _offPullupLoad () {
      this.scroll.off('pullingup', this._hanldlePullupLoad)
    },
    _hanldlePullupLoad () {
      this.isPullUpLoad = true
      this.$emit('pullingup')
    }
  }
}
</script>

<style lang="less">
.dv-scroll-wrapper{
  position: relative;
  // width: 100%;
  height: 100%;
  overflow: hidden;
  // white-space: nowrap;
  .scroll-content{
    display: inline-block;
  }
  .list-wrapper{
    overflow: hidden;
  }
  .scroll-pullup-wrapper{
    font-size: 16px;
    padding: 10px;
  }
}
</style>
