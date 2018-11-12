<template>
  <transition name="dv-mask">
      <div class="picker" v-show="visible" @click="visible=false" @touchmove.prevent>
        <transition name="dv-dialog">
            <div class="dv-dialog-wrapper" :class="titleClass" v-show="visible" @click.stop>
                <slot name="title">
                  <p class="title" v-html="title" v-if="title"></p>
                </slot>
                <slot name="content">
                  <p class="content" :class="contentClass" v-html="content" v-if="content"></p>
                </slot>
                <slot name="footer">
                  <div class="dialog-btns">
                    <a href="javascript:;" class="dialog-btn dialog-cancel" v-if="showCancel" @click="handlerAction('cancel')">{{cancelText}}</a>
                    <a href="javascript:;" class="dialog-btn dialog-ok" @click="handlerAction('ok')">{{okText}}</a>
                  </div>
                </slot>
            </div>
        </transition>
      </div>
  </transition>
</template>

<script>
export default {
  name: 'dv-dialog',
  props: {
    title: String,
    titleClass: String,
    contentClass: String,
    content: String,
    okText: {
      type: String,
      default: '确定'
    },
    showCancel: {
      type: Boolean,
      default: true
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    onOk: {
      type: Function,
      default: () => {}
    },
    onCancel: {
      type: Function,
      default: () => {}
    }
  },
  data () {
    return {
      visible: false
    }
  },
  methods: {
    handlerAction (type) {
      this.visible = false
      if (type === 'ok') {
        this.onOk()
        this.$emit('on-OK')
      }
    },
    show () {
      this.visible = true
    }
  }
}
</script>
