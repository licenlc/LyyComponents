<template>
 <div style="background: #f0f0f0;height: 667px;">
      <div class="demo-title">
        Scroll组件
      </div>
      <lyy-button @click="handlerClick('horizontal')" type="primary">horizontal Scroll</lyy-button>
      <div style="padding-top: 10px;"/>
      <lyy-button @click="handlerClick('vertical')" type="primary">vertical Scroll</lyy-button>
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
    handlerClick (path) {
      this.$router.push({path: `/${path}`})
    }
  }
}
</script>
