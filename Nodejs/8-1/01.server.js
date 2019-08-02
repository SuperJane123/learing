
// 这个模块负责的事情：1.开启服务器
                    // 2.注册中间介
                    // 3.处理静态资源1
                    // 4.设置模板引擎


// 开始搭建服务器
// 引入模块
const express = require('express');
const app = express();
const router = require('./02.router');
const bodyParser = require('body-parser');
app.listen(9090,()=>{
    console.log('server is running on http://127.0.0.1:9090');
});

// 处理静态资源
app.use('/assets',express.static('assets'));

// 注册bodyParser
app.use(bodyParser.urlencoded({extended:false}));



// 设置模板引擎
app.set('view engine', 'ejs');



// 判断不同的请求交给router吧
app.use(router)
