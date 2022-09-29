// import dboperation from '../utils/db/dboperation'
const dboperation = require ('../utils/db/dboperation')
// import { dateFormat } from '@/utils/common'

// const path = require('path')
// const fs = require('fs')
// export function getguid () {
//   return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
//     const r = Math.random() * 16 | 0; const v = c === 'x' ? r : (r & 0x3 | 0x8)
//     return v.toString(16)
//   })
// }
// export function getsystime () {
//   return dboperation.findData('SELECT * FROM t_sys_param WHERE param_name = \'sys_time\'')[0].param_value
// }
// export function putsystime (code) {
//   return dboperation.updateData('UPDATE t_sys_param SET param_value = @code WHERE param_name = \'sys_time\'', {
//     code: code
//   })
// }
// 获取系统名称
const getUserInfo =function (account) {
  return dboperation.findData('SELECT * FROM t_users WHERE account = @account', {
    account: account
  })[0]
}
module.exports = {
    getUserInfo
}