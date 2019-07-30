// 这个模块负责收集数据请求
// express里有一个专门的router对象

// 引入模块
const express = require('express');
const router = express.Router();
const controller = require('./03-controller');


// 处理英雄首页
router.get('/index',(req,res)=>{
    // 这里找controller拿方法
    controller.getIndexHtml(req,res);
});


// 处理增加英雄首页

router.get('/add',(req,res)=>{
    // 方法找controller
    controller.getAddHtml(req,res);
});



// 处理删除英雄API接口,约定好接口是deleteHeroById
router.get('/deleteHeroById',(req,res)=>{
    // 方法找controller
    controller.deleteHeroById(req,res);
});



// 处理新增英雄API接口,约定好接口是/addNewHero
router.post('/addNewHero',(req,res)=>{
    // 方法找controller
    controller.addNewHero(req,res);

});




module.exports = router;