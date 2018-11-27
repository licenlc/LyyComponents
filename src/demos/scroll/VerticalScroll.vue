<template>
 <div >
      <div class="demo-title">
        scroll组件
      </div>
      <div class="div-hori2">
        <scroll diretction="vertical" :options="options">
            <div class="scorll-item2" v-for="(item, index) in list" :key="index">
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
      list: [],
      options: {
        pullUpLoad: true
      }
    }
  },
  created () {
    for (let i = 1; i < 24; i++) {
      this.list.push(i)
    }
  },
  beforeMount () {
    let height = document.body.offsetHeight
    this.$toast(`height: ${height}`)
  }
}
</script>

<style lang="less">

.div-hori2{
  width: 100%;
  padding: 10px;
  height: 600px;
  overflow: auto;
  background: #fff;
  box-sizing: border-box;
}

.scorll-item2{
  width: 100%;
  height: 100px;
  background: #c5bbbb;
  margin-left: 10px;
  margin-bottom: 10px;
  display: inline-block;
  text-align: center;
  line-height: 100px;
}
</style>
