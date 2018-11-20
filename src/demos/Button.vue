<template>
 <div style="background: #f0f0f0;height: 667px;">
      <div class="demo-title">
        Button组件
      </div>
      <lyy-button @click="handlerClick" style="border: 1px solid red;">default button</lyy-button>
      <div style="padding-top: 10px;"/>
      <lyy-button @click="handlerClick" type="primary">primary button</lyy-button>
      <div style="padding-top: 10px;"/>
      <lyy-button @click="handlerClick"  type="warning">warning button</lyy-button>
      <div style="padding-top: 10px;"/>
      <lyy-button @click="handlerClick"  type="danger">danger button</lyy-button>
      <div style="padding-top: 10px;"/>
      <lyy-button @click="handlerClick" :inline="true">inline</lyy-button>
      <lyy-button @click="handlerClick" :inline="true"  type="danger">inline</lyy-button>
      <lyy-button @click="handlerClick" :inline="true"  type="warning">inline</lyy-button>
      <lyy-button @click="handlerClick" :inline="true"  type="primary">inline</lyy-button>
  </div>
</template>

<script>
import LyyButton from '@/components/button/Button'
export default {
  name: 'demo-button',
  components: {
    LyyButton
  },
  methods: {
    handlerClick () {
      this.$toast('button点击')
    }
  }
}
</script>
