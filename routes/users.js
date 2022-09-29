var express = require('express');
var router = express.Router();
// import { getsysname } from '../apis/user'
const userapi = require('../apis/user')
/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.render('users', { title: 'pongs' });
  res.send('respond with a resource11');
  // 如果同时存在，按顺序执行一个，不会显示第二个页面
  // 测试发现。前端请求获得了一个html页面，没有收到response
});
function validate(account, password) {
  if (!account) {
    return {
      status: false,
      msg: '用户名不可为空'
    }
  }
  if (!password) {
    return {
      status: false,
      msg: '密码不可为空'
    }
  }
  if (account.length > 24) {
    return {
      status: false,
      msg: '用户名不可大于24位'
    }
  }
  if (password.length > 24) {
    return {
      status: false,
      msg: '密码不可大于24位'
    }
  }
  return {
    status: true,
    msg: null
  }
}

router.post('/login', async (req, res, next) => {
  const {
    account,
    password
  } = req.body
  console.log('req', req)
  console.log('body', req.body)
  let userValidate = validate(account, password),
    result, user
  if (!userValidate.status) {
    res.end(userValidate.msg)
    return
  } else { // 验证通过
    if(account === 'pong') {
      console.log('userapi:', userapi)
      const data = userapi.getUserInfo(account)

      res.json({
        msg: '登录成功',
        data: data,
        code: 200
  })
    } else {
      res.end('密码错误')
    }
  }
  // let result
  // try {
  //   result = await Db.table('user').where('u_account', account).count()
  // } catch (error) {
  //   throw new Error(error)
  // }
  // if (result > 0) {
  //   res.end('该用户名已存在')
  //   return
  // } else {
  //   let data = {
  //     u_account: account,
  //     u_password: md5(password)
  //   }
  //   let user
  //   try {
  //     user = await Db.table('user').insert(data)
  //   } catch (error) {
  //     throw new Error(error)
  //   }
  //   if (user.affectedRows > 0) {
  //     res.json({
  //       msg: '注册成功',
  //       status: true
  //     })
  //   } else {
  //     res.end('error');
  //   }
  // }
})
module.exports = router;
