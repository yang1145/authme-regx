/*
 * @name: server.js
 * @author: hhui64
 * @description: gloab control module
 * @version: 0.0.1
 */
'use strict'
const express_ = require('express')
const express = express_()
const router = express_.Router()
const path = require('path')
const ejs = require('ejs')
const fs = require('fs')
const bodyParser = require('body-parser')

var config = require('./config/config.js')

const index = require('./module/index.js')
const sql = require('./module/sql.js')
const check = require('./module/check.js')
const reg = require('./module/reg.js')
const api = require('./module/api.js')

;(async function() {
  // 启动时检测数据表是否存在
  let check____ = await check.tableCheck()
})()

// 移除了视图引擎设置和静态文件中间件，因为不再需要提供前端页面

express.use(bodyParser.urlencoded({ extended: false }))
express.use(bodyParser.json())

// 修改根路径路由，直接返回API信息而不是渲染页面
router.get('/', (req, res) => {
  if (!index.permission(req, res)) {
    res.sendStatus(403)
    return
  }
  
  res.json({
    message: 'AuthMe-RegX API Server',
    version: '0.0.1',
    documentation: '/api/docs' // 指向API文档位置
  })
})

router.get('/api/docs', (req, res) => {
  if (!index.permission(req, res)) {
    res.sendStatus(403)
    return
  }
  
  res.sendFile(path.join(__dirname, 'API_DOCUMENTATION.md'))
})

router.get('/api/get', async (req, res) => {
  // 处理get请求
  if (!index.permission(req, res)) {
    res.sendStatus(403)
    return
  }
  if (!req.query.mod || !req.query.data) {
    // 非法请求返回403
    res.sendStatus(403)
    return
  }
  let mod = req.query.mod
  let JSONdata = JSON.parse(req.query.data)
  res.type('text')
  switch (mod) {
    case 'check': // 实时检查
      if (!JSONdata.InputName || !JSONdata.InputVal) {
        // 非法参数
        res.sendStatus(403)
        return
      }
      let inputcheck = await check.inputCheck(JSONdata, res)
      res.send(inputcheck) // ** 已重构
      break
    case 'sendecode': // 发送邮件验证码
      // 移除了腾讯防水墙验证，直接发送验证码
      let rtn = {
        mod: 'sendecode',
        msg: '',
        email: JSONdata.e
      }
      let sendcode_status = await check.sendecode(JSONdata, res)
      if (sendcode_status) {
        rtn.msg = 'OK'
      } else {
        rtn.msg = '发送失败'
      }
      res.send(JSON.stringify(rtn))
      break
    default:
      res.sendStatus(403)
      break
  }
})

express.post('/api/post', async (req, res) => {
  // post请求处理
  if (!index.permission(req, res)) {
    res.sendStatus(403)
    return
  }
  if (!req.body.mod || !req.body.data) {
    // 非法请求返回403
    res.sendStatus(403)
    return
  }
  let mod = req.body.mod
  let JSONdata = JSON.parse(req.body.data)
  if (!JSONdata || !JSONdata.id || !JSONdata.pwd || !JSONdata.e || !JSONdata.ecode) {
    // 非法参数 (移除了 ticket 参数)
    res.sendStatus(403)
    return
  }
  switch (mod) {
    case 'reg': // 注册提交表单
      // 移除了腾讯防水墙验证，直接进行注册
      let regmsg = await reg.register(JSONdata, api.getReqIp(req))
      res.send(JSON.stringify(regmsg))
      break
    default:
      break
  }
})

var server = express.listen(config.server.port, () => {
  var host = server.address().address
  var port = server.address().port
  console.log('*** Server is running on host: ' + host + ':' + port + ' ***')
})

// END