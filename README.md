# 项目说明

基于 Knex + Socket.io + Express 开发的 TypeScript 项目，服务于[聊天室前端项目](https://github.com/shiramashiro/gadget-chatroom)。

# 目录说明

目录有 apis、database、models、server、socket：

1. apis 负责专门开发接口，直接与前端进行交互的入口。
2. database 专门负责与数据库相关的，apis 的每一个接口对应着 database 里的一个函数。每一个函数调用 knex 访问数据库。
3. models 专门负责数据模型。
4. server 是 express 相关配置。
5. socket 是与前端实时通信的套接字程序。

![](./docs/structure.jpg)

# 数据库 SQL

数据库的 SQL 存放在 docs/sql 目录下，需要启动的自取，把表格数据插入到 MYSQL 中。连接数据库的配置需要在 src/database/config 更改。
