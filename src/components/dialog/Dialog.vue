<template>
  <transition name="dv-mask">
      <div class="picker" v-show="visible" @click="visible=false" @touchmove.prevent>
        <transition name="dv-dialog">
            <div class="dv-dialog-wrapper" v-show="visible" @click.stop>
                <slot name="title">
                  <p class="title" v-html="title" v-if="title"></p>
                </slot>
                <slot name="content">
                  <p class="content" v-html="content" v-if="content"></p>
                </slot>
                <slot name="btns">
                  <div class="dialog-btns">
                    <a href="javascript:;" class="dialog-btn dialog-cancel" v-if="showCancel" v-html="cancelText" @click="visible=false"/>
                    <a href="javascript:;" class="dialog-btn dialog-ok" v-html="okText"></a>
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
    }
  },
  data () {
    return {
      visible: true
    }
  },
  methods: {
    show () {
      this.visible = true
    }
  }
}
</script>
