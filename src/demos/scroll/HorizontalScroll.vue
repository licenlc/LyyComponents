<template>
 <div >
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
      list: ['1', '2', '3', '4', '5']
    }
  },
  created () {
    for (let i = 5; i < 24; i++) {
      this.list.push(i)
    }
  }
}
</script>

<style lang="less">

.div-hori{
  width: 100%;
  padding: 10px;
  height: 120px;
  overflow: hidden;
  background: #c9d7d7;
  box-sizing: border-box;
}

.scorll-item{
  width: 100px;
  height: 100px;
  background: #c5bbbb;
  margin-left: 10px;
  margin-bottom: 10px;
  display: inline-block;
  text-align: center;
  line-height: 100px;
}
</style>
