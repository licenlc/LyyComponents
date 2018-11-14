let prefix = ''
if (process.env.NODE_ENV === 'production') {
  prefix = '生产'
} else if (process.env.NODE_ENV === 'production') {
  prefix = '测试'
} else {
  prefix = '开发'
}

const API = {
  // 公共
  com: {
    order: `${prefix}/wxpay/`
  },
  // 支付
  pay: {
    wxpay: ''
  },
  // 按摩椅
  chair: {
    query: ''
  },
  // 洗衣机
  washer: {
    query: ''
  },
  // 充电桩
  charge: {
    query: ''
  }
}

export default API
