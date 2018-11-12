// 洗衣机，充电桩，按摩椅页面公用的方法
const commonMixins = {
  data () {
    return {
      balance: '',
      equipmentId: ''
    }
  },
  methods: {
    // 获取URL路径上的参数
    getQueryString () {
      this.equipmentId = ''
    },
    // 查询余额
    queryBalance () {
      this.$http.get('', {equipmentId: this.equipmentId}).then((data) => {
        this.balance = data.balance
      })
    },
    // 获取设备初始化信息
    getDeviceInfo () {
      this.$http.get('', {equipmentId: this.equipmentId}).then((data) => {

      })
    }
  }
}

export default commonMixins
