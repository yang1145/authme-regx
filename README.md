# AuthMe-RegX API

使用 Node.js 驱动的 Minecraft 网页注册系统后端 API，专为配合 AuthMe-Reloaded 插件使用。

此项目是 [Authme-reger](https://github.com/sc0utz/Authme-Reger) 的重写版，将原有的前端和后端一体化架构改造为纯后端 API 服务，提供现代化的 RESTful API 接口供前端或其他服务调用。

## ⚠️ 重要提醒

__本项目年代久远，目前业界已有更好的解决方案如 authlib-injector 等外置登录技术，无论在安全性、易用性上都比本项目要好得多，因此我不再推荐各位使用本项目。__

请您在使用本项目之前思考以下几点问题：
- 我是否只需要一个简单的注册 API 服务？
- 我的登录系统是否为 Authme 且不考虑更换？

如果您最终的回答都为"是"，那么您可以使用本项目，否则我依然推荐您去使用基于 authlib-injector 的验证系统（如：BlessingSkin）。

## 功能特性

* 兼容 AuthMe Reloaded 5.6.0 (最新版本)
* 提供 RESTful API 接口
* 实时检测用户输入的内容并提交后端验证
* 发送邮件验证码验证邮箱
* 注册昵称白名单/黑名单
* 注册邮箱白名单/黑名单
* 注册IP归属地白名单/黑名单
* 相同IP间隔N分钟后才能注册
* 支持 Authme 插件常用的加密算法

## API 文档

项目提供详细的 API 文档，可通过访问 `/api/docs` 端点获取。

## 如何启动

将项目 Clone 到本地，使用 cd 命令切换到项目根目录，执行命令 `npm install` 来安装项目的依赖包

### 环境变量配置

项目现在支持通过环境变量进行配置，以提高安全性和灵活性。您可以通过以下方式配置：

1. 复制 `.env.example` 文件为 `.env` 文件
2. 根据需要修改 `.env` 文件中的配置项
3. 或者直接设置系统环境变量来覆盖默认配置

### 传统配置文件方式

用编辑器打开 `config/config.js` 并填写数据库等信息，您可以根据自己的需要来调整相应的配置项

执行命令 `npm run start` 启动服务端，您会在控制台看到一行提示 __"Server is running on host XXXX"__

如果您没有改动过默认配置，那么 API 服务将在 `127.0.0.1:1234` 上运行。

## 配置说明

项目支持通过环境变量配置所有参数，完整的环境变量列表请参考 `.env.example` 文件。

主要配置项包括：

### 网站配置
- `WEBSITE_TITLE`: 网站标题
- `WEBSITE_URL`: 网站URL
- `WEBSITE_DESCRIPTION`: 网站描述
- `WEBSITE_KEYWORDS`: 网站关键词

### 服务器配置
- `SERVER_HOST`: 服务器监听地址
- `SERVER_PORT`: 服务器监听端口

### 数据库配置
- `MYSQL_HOST`: MySQL主机地址
- `MYSQL_PORT`: MySQL端口
- `MYSQL_USER`: MySQL用户名
- `MYSQL_PASSWORD`: MySQL密码
- `MYSQL_DBNAME`: 数据库名称

### 安全配置
- 敏感信息如数据库密码等应通过环境变量配置，避免硬编码在代码中
- 项目默认将 `.env` 文件加入 `.gitignore`，防止敏感信息被提交到代码仓库

## 反向代理

### Nginx 反向代理 (推荐)

在 `nginx.conf` 的 `http` 中添加一个 `server` 节点，示例如下：

```
http {
  # regx 反向代理节点
  server {
      listen        80;
      server_name   api.yoursite.com;

      location / {
          proxy_set_header X-Real-IP $remote_addr;
          proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
          proxy_set_header Host  $http_host;
          proxy_set_header X-Nginx-Proxy true;
          proxy_set_header Connection "";
          proxy_pass http://127.0.0.1:1234;
          proxy_intercept_errors on;
      }
      error_page   404  /404.html;
      error_page   500 502 503 504  /50x.html;
      location = /50x.html {
          root   html;
      }
  }
  # 其它 server 节点...
}
```

`listen 80;` 为监听 80 端口(即 http 协议)，如果开启 SSL (即 https 协议)那么请修改为 `listen 443;` ，并添加相应的 SSL 配置代码，具体代码就不在此贴出，一般证书提供商都会有相应的配置代码

`server_name api.yoursite.com;` 为绑定域名，将其修改为您的域名

`proxy_pass http://127.0.0.1:1234;` 后面的 `:1234` 为端口号，可根据站点的配置修改

添加完成后，保存配置文件，然后重启 Nginx

以上面为例子的话，此时访问 __api.yoursite.com__ 即可访问 API 服务

__注意:__ 推荐开启 SSL ，此项目支持全站 HTTPS

## 安全建议

1. 使用环境变量存储敏感信息，如数据库密码、API密钥等
2. 启用HTTPS以加密传输数据
3. 定期更新依赖包以修复安全漏洞
4. 使用强密码策略和验证码机制防止恶意注册

## 开源协议

项目使用 AGPL-3.0 协议开源