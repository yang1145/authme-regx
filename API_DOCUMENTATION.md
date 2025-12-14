# AuthMe-RegX API 文档

## 概述

AuthMe-RegX 是一个基于 Node.js 的注册系统，用于 Minecraft 服务器的用户注册。本系统提供 RESTful API 接口供前端调用，实现了用户注册、验证等功能。

## 基础信息

- Base URL: `/api`
- 请求格式: `application/json`
- 响应格式: `text/plain` 或 `application/json`

## API 接口

### 1. 实时检查接口

#### GET /api/get?mod=check

实时检查用户输入的字段是否符合要求。

##### 请求参数

| 参数名 | 类型   | 必填 | 描述         |
| ------ | ------ | ---- | ------------ |
| mod    | string | 是   | 模式，固定值 `check` |
| data   | string | 是   | JSON 字符串，包含以下字段 |

data 参数内容：
```json
{
  "InputName": "字段名",
  "InputVal": "字段值",
  "BizState": "业务状态（可选）"
}
```

##### InputName 可选值

- `id`: 用户名
- `pwd`: 密码
- `e`: 邮箱
- `ecode`: 验证码

##### 响应格式

```json
{
  "InputName": "字段名",
  "CheckStatus": "检查结果(true/false)",
  "Message": "错误信息（如果有）"
}
```

### 2. 发送邮箱验证码接口

#### GET /api/get?mod=sendecode

发送邮箱验证码到指定邮箱。

##### 请求参数

| 参数名 | 类型   | 必填 | 描述             |
| ------ | ------ | ---- | ---------------- |
| mod    | string | 是   | 模式，固定值 `sendecode` |
| data   | string | 是   | JSON 字符串，包含以下字段 |

data 参数内容：
```json
{
  "e": "邮箱地址"
}
```

##### 响应格式

```json
{
  "mod": "sendecode",
  "msg": "操作结果消息",
  "email": "邮箱地址"
}
```

### 3. 用户注册接口

#### POST /api/post

用户注册接口。

##### 请求参数

| 参数名 | 类型   | 必填 | 描述         |
| ------ | ------ | ---- | ------------ |
| mod    | string | 是   | 模式，固定值 `reg` |
| data   | string | 是   | JSON 字符串，包含以下字段 |

data 参数内容：
```json
{
  "id": "用户名",
  "pwd": "密码",
  "e": "邮箱",
  "ecode": "邮箱验证码"
}
```

##### 响应格式

```json
{
  "mod": "reg",
  "status": "注册状态(true/false)",
  "msg": "操作结果消息",
  "id": "用户名",
  "e": "邮箱",
  "ecode": "邮箱验证码"
}
```

## 错误响应

所有非法请求将返回 HTTP 状态码 403。

## 配置说明

系统通过 `config.js` 和 `.env` 文件进行配置，主要配置项包括：

- 网站信息（标题、描述等）
- 服务器设置（主机、端口）
- MySQL 数据库连接信息
- 邮件服务器设置
- 验证码设置
- 黑白名单设置

## 数据表结构

系统会自动创建两个数据表：

1. `regx_users` - 用户信息表
2. `authme` - AuthMe 插件兼容表

这两个表分别存储用户注册信息，确保与 Minecraft 服务器的 AuthMe 插件兼容。