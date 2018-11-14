<template>
  <div class="hello">
    <div class="demo-title">
      基础组件
    </div>
    <ul>
      <router-link tag="li" class="demo-list" v-for="(item, index) in list" :key="index" :to="item.path">
        {{item.name}}
        <i class="left"></i>
      </router-link>
    </ul>
     <div class="demo-title">
      业务组件
    </div>
    <ul>
      <router-link tag="li" class="demo-list" v-for="(item, index) in custome" :key="index" :to="item.path">
        {{item.name}}
        <i class="left"></i>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      list: [
        {name: 'Dialog对话框', path: 'dialog'},
        {name: 'upload文件上传(待完善)', path: 'upload'},
        {name: 'picker(待完善)', path: 'picker'},
        {name: 'DatePicker日期选择器', path: 'date'},
        {name: 'tosat', path: 'toast'},
        {name: 'input输入框', path: 'input'}
      ],
      custome: [
        {name: '客服弹框和充值弹框', path: 'service'}
      ]
    }
  }
}
</script>

<style lang="less">
li{
  margin: 0;
  padding: 0;
  list-style: none;
}
.demo-title{
  font-size: 18px;
  padding: 14px;
  background-color:#f0f0f0;
  font-weight: 400;
}
.demo-list{
  box-sizing: border-box;
  padding: 12px;
  padding-left: 20px;
  position:relative;
  font-size: 16px;
  border-bottom: 1px solid #f0f0f0;
  width: 100%;
  text-align:left;
  font-weight: 400;
  .left{
    width: 8px;
    height: 8px;
    display: inline-block;
    border-top: 1px solid #ccc;
    border-left: 1px solid #ccc;
    position: absolute;
    top: 15px;
    right: 20px;
    transform: rotate(135deg);
  }
}
</style>
