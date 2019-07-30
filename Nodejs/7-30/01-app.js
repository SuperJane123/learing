// 这个模块负责开服务器，读取静态数据，设置模板引擎，注册中间介
// 引入express模块
const express = require('express');
// 引入router路由
const router = require('./02-router');
const bodyParser = require('body-parser');


// 创建app服务器
const app = express();
// 给服务器绑定端口和ip
app.listen(8080,()=>{
    console.log('server is running on http://127.0.0.1:8080');
});

// 处理静态文件
app.use('/assets',express.static('assets'));

app.use(bodyParser.urlencoded({extended:false}))

// 设置默认模板引擎
app.set('view engine','ejs')

// 这里找router来分配方法
app.use(router);
