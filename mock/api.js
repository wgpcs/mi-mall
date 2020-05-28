import Mock from 'mockjs'

Mock.mock('/api/user/login', {
  status: 0,
  data: {
    'id|1000-12000': 0,
    'username': '@cname',
    'email': '@email',
    'phone': /1(3|4|5|6|7|8|9){2}\d{8}/,
    'avatar': '',
    'createtime': 1479048325000
  },
})
