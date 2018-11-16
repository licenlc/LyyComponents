<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
@import './styles/index.less';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
li{
  margin: 0;
  padding: 0;
  list-style: none;
}
.demo-title{
  font-size: 18px;
  padding: 18px;
  background-color:#f0f0f0;
  font-weight: 400;
}
.demo-list{
  box-sizing: border-box;
  padding: 16px;
  font-size: 16px;
  border-bottom: 1px solid #f0f0f0;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left{
    width: 8px;
    height: 8px;
    display: inline-block;
    border-top: 1px solid #ccc;
    border-left: 1px solid #ccc;
    transform: rotate(135deg);
  }
}
</style>
