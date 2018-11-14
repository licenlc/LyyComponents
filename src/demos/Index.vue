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
  name: 'index',
  data () {
    return {
      list: [
        {name: 'Dialog对话框', path: 'dialog'},
        {name: 'Toast提示', path: 'toast'},
        {name: 'Upload文件上传(待完善)', path: 'upload'},
        {name: 'Picker(功能待完善，可以使用)', path: 'picker'},
        {name: 'DatePicker日期选择器', path: 'date'},
        {name: 'Input输入框', path: 'input'}
      ],
      custome: [
        {name: '客服弹框(Service)和充值弹框(Charge)', path: 'service'}
        // {name: '生活类公用弹框(lifeDialog)', path: 'lifeDialog'}
      ]
    }
  }
}
</script>
