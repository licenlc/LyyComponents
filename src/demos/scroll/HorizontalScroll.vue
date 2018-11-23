<template>
 <div style="background-color: #edf0f4;height:600px;">
      <div class="demo-title">
        scroll组件
      </div>
      <div class="div-hori">
        <scroll diretction="horizontal">
            <div class="scorll-item" v-for="(item, index) in list" :key="index">
              {{index}}
            </div>
        </scroll>
      </div>
  </div>
</template>

<script>
import Scroll from '@/components/scroll/Scroll'
export default {
  components: {
    Scroll
  },
  data () {
    return {
      list: []
    }
  },
  created () {
    for (let i = 0; i < 5; i++) {
      this.list.push(i)
    }
  }
}
</script>

<style lang="less">

.div-hori{
  margin-top: 20px;
  width: 100%;
  padding: 10px;
  height: 160px;
  overflow: hidden;
  background: #fff;
  box-sizing: border-box;
}

.scorll-item{
  width: 200px;
  height: 160px;
  background: #c5bbbb;
  margin-right: 20px;
  margin-bottom: 10px;
  display: inline-block;
  text-align: center;
  line-height: 160px;
}
</style>
