<template>
 <div >
      <div class="demo-title">
        scroll组件
      </div>
      <div class="div-hori">
        <scroll diretction="vertical">
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
      list: ['1', '2', '3', '4', '5']
    }
  },
  created () {
    for (let i = 5; i < 24; i++) {
      this.list.push(i)
    }
  },
  beforeMount () {
    let height = document.body.offsetHeight
    console.log('height:', height)
    this.$toast(`height: ${height}`)
  }
}
</script>

<style lang="less">

.div-hori{
  width: 100%;
  padding: 10px;
  height: 600px;
  overflow: auto;
  background: #c9d7d7;
  box-sizing: border-box;
}

.scorll-item{
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
