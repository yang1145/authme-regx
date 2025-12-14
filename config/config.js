const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  website: {
    title: process.env.WEBSITE_TITLE || "我的世界服务器",
    url: process.env.WEBSITE_URL || "minecraft.net",
    description: process.env.WEBSITE_DESCRIPTION || "Minecraft 是一款堆方块、不断冒险的游戏。在此注册,或浏览网站了解最新消息和社区的精彩创意!",
    keywords: process.env.WEBSITE_KEYWORDS || "我的世界, 注册我的世界, 我的世界pc版, 我的世界mac版, 我的世界iphone版, 我的世界安卓版, 我的世界android版, 我的世界xboxone版, 我的世界ps4版, 我的世界电脑版",
    h1_title: process.env.WEBSITE_H1_TITLE || "欢迎你的到来",
    h4_title: process.env.WEBSITE_H4_TITLE || "快乐风车，基情相伴",
    checkbox_ag: process.env.WEBSITE_CHECKBOX_AG || "《我的世界服务器用户服务条款》",
    footer: process.env.WEBSITE_FOOTER || "© 2018 Minecraft 京ICP备18012345号-1"
  },

  server: {
    host: process.env.SERVER_HOST || "127.0.0.1",
    port: process.env.SERVER_PORT || 1234
  },

  system: {
    reg: {
      interval: process.env.REG_INTERVAL || 480,
      email: {
        mode: process.env.REG_EMAIL_MODE || "blacklist",
        whitelist: process.env.REG_EMAIL_WHITELIST || "qq.com, sina.com, 163.com, 126.com, 189.com",
        blacklist: process.env.REG_EMAIL_BLACKLIST || "gmail.com, hotmail.com"
      },
      ip: {
        mode: process.env.REG_IP_MODE || "blacklist",
        whitelist: process.env.REG_IP_WHITELIST || "",
        blacklist: process.env.REG_IP_BLACKLIST || "113.43.52.*, 69.*.*.*"
      },
      city: {
        mode: process.env.REG_CITY_MODE || "blacklist",
        whitelist: process.env.REG_CITY_WHITELIST || "中国",
        blacklist: process.env.REG_CITY_BLACKLIST || ""
      }
    }
  },

  mysql: {
    host: process.env.MYSQL_HOST || "localhost",
    port: process.env.MYSQL_PORT || 3306,
    user: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASSWORD || "root",
    dbname: process.env.MYSQL_DBNAME || "regx",
    users: {
      tablename: process.env.MYSQL_USERS_TABLENAME || "regx_users",
      prefix: process.env.MYSQL_USERS_PREFIX || "",
      encrypt: process.env.MYSQL_USERS_ENCRYPT || "SHA256",
      saltlen: process.env.MYSQL_USERS_SALTLEN || 8,
      column: {
        mySQLColumnId: process.env.MYSQL_USERS_COLUMN_ID || "id",
        mySQLColumnName: process.env.MYSQL_USERS_COLUMN_NAME || "username",
        mySQLRealName: process.env.MYSQL_USERS_COLUMN_REALNAME || "realname",
        mySQLColumnPassword: process.env.MYSQL_USERS_COLUMN_PASSWORD || "password",
        mySQLColumnEmail: process.env.MYSQL_USERS_COLUMN_EMAIL || "email",
        mySQLColumnInviteCode: process.env.MYSQL_USERS_COLUMN_INVITE_CODE || "invite_code",
        mySQLColumnRegisterDate: process.env.MYSQL_USERS_COLUMN_REGISTER_DATE || "date",
        mySQLColumnRegisterIp: process.env.MYSQL_USERS_COLUMN_REGISTER_IP || "ip"		
      }
    },
    authme: {
      tablename: process.env.MYSQL_AUTHME_TABLENAME || "authme",
      prefix: process.env.MYSQL_AUTHME_PREFIX || "",
      world: process.env.MYSQL_AUTHME_WORLD || "world",
      encrypt: process.env.MYSQL_AUTHME_ENCRYPT || "SHA256",
      saltlen: process.env.MYSQL_AUTHME_SALTLEN || 8,
      column: {
        mySQLColumnId: process.env.MYSQL_AUTHME_COLUMN_ID || "id",
        mySQLColumnName: process.env.MYSQL_AUTHME_COLUMN_NAME || "username",
        mySQLRealName: process.env.MYSQL_AUTHME_COLUMN_REALNAME || "realname",
        mySQLColumnPassword: process.env.MYSQL_AUTHME_COLUMN_PASSWORD || "password",
        mySQLColumnEmail: process.env.MYSQL_AUTHME_COLUMN_EMAIL || "email",
        mySQLColumnLogged: process.env.MYSQL_AUTHME_COLUMN_LOGGED || "isLogged",
        mySQLColumnHasSession: process.env.MYSQL_AUTHME_COLUMN_HAS_SESSION || "hasSession",
        mySQLColumnIp: process.env.MYSQL_AUTHME_COLUMN_IP || "ip",
        mySQLColumnLastLogin: process.env.MYSQL_AUTHME_COLUMN_LAST_LOGIN || "lastlogin",
        mySQLColumnRegisterDate: process.env.MYSQL_AUTHME_COLUMN_REGISTER_DATE || "regdate",
        mySQLColumnRegisterIp: process.env.MYSQL_AUTHME_COLUMN_REGISTER_IP || "regip",
        mySQLlastlocX: process.env.MYSQL_AUTHME_COLUMN_LOC_X || "x",
        mySQLlastlocY: process.env.MYSQL_AUTHME_COLUMN_LOC_Y || "y",
        mySQLlastlocZ: process.env.MYSQL_AUTHME_COLUMN_LOC_Z || "z",
        mySQLlastlocWorld: process.env.MYSQL_AUTHME_COLUMN_LOC_WORLD || "world",
        mySQLlastlocYaw: process.env.MYSQL_AUTHME_COLUMN_LOC_YAW || "yaw",
        mySQLlastlocPitch: process.env.MYSQL_AUTHME_COLUMN_LOC_PITCH || "pitch"
      }
    }
  },

  // 移除了 verify 配置项，因为不再使用腾讯防水墙

  email: {
    smtp: {
      host: process.env.EMAIL_SMTP_HOST || "smtp.exmail.qq.com",
      port: process.env.EMAIL_SMTP_PORT || 465,
      sercure: process.env.EMAIL_SMTP_SERCURE || true,
      username: process.env.EMAIL_SMTP_USERNAME || "10000@qq.com",
      password: process.env.EMAIL_SMTP_PASSWORD || "123456",
      nick: process.env.EMAIL_SMTP_NICK || "我的世界服务器",
      from: process.env.EMAIL_SMTP_FROM || "10000@qq.com",
      title: process.env.EMAIL_SMTP_TITLE || "请验证您的邮箱",
      servername: process.env.EMAIL_SMTP_SERVERNAME || "我的世界服务器",
      description: process.env.EMAIL_SMTP_DESCRIPTION || "《我的世界服务器》是一个追求温馨和谐、纯净玩法的正版服务器，旨在为玩家打造一个舒适的游戏环境，欢迎您的加入！"
    },
    ecode: {
      timeout: process.env.EMAIL_ECODE_TIMEOUT || 300,
      timecount: process.env.EMAIL_ECODE_TIMECOUNT || 0
    }
  },

  errMsg: {
    id: {
      check: process.env.ERRMSG_ID_CHECK || "您不能使用该昵称",
      exist: process.env.ERRMSG_ID_EXIST || "该昵称已存在，您不能使用该昵称",
      disabled: process.env.ERRMSG_ID_DISABLED || "该昵称已被禁用，您不能使用该昵称",
      regex: process.env.ERRMSG_ID_REGEX || "昵称格式不正确"
    },
    e: {
      check: process.env.ERRMSG_E_CHECK || "您不能使用该邮箱",
      exist: process.env.ERRMSG_E_EXIST || "该邮箱已被注册",
      disabled: process.env.ERRMSG_E_DISABLED || "该邮箱已被禁用",
      regex: process.env.ERRMSG_E_REGEX || "邮箱格式不正确"
    },
    ecode: {
      check: process.env.ERRMSG_ECODE_CHECK || "验证码不正确",
      regex: process.env.ERRMSG_ECODE_REGEX || "验证码格式不正确"
    },
    ip: {
      regex: process.env.ERRMSG_IP_REGEX || "IP地址格式不正确",
      fast: process.env.ERRMSG_IP_FAST || "您的IP地址在短时间内不能注册！"
    },
    reg: {
      success: process.env.ERRMSG_REG_SUCCESS || "作弊、捣乱等违法行为将会被封禁，请珍惜！",
      error: process.env.ERRMSG_REG_ERROR || "错误代码: 500 注册失败，请联系管理员！",
      fast: process.env.ERRMSG_REG_FAST || "您的IP地址在短时间内不能注册！"
    },
    default: process.env.ERRMSG_DEFAULT || "参数错误"
  }
};