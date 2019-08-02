
// @这个模块负责接收不同的请求

// 引入模块区域
const express = require('express');
const router = express.Router();
const controller = require('./03.controlloer');

// 1.处理英雄首页
router.get('/index',(req,res)=>{
    // 处理方法找controller
    controller.indexHtml(req,res)
});



// 2.处理添加英雄页面
router.get('/add',(req,res)=>{
    // 处理方法找controller
    controller.addHtml(req,res)
});





// 3.处理英雄新增数据，约定的api是addNewHero
router.post('/addNewHero',(req,res)=>{
    // 处理方法找controller
    controller.addNewHero(req,res);

});




// 4.处理删除英雄数据，约定好的api接口是deleteHeroById
router.get('/deleteHerrById',(req,res)=>{
        // 处理方法找controller
        controller.deleteHerrById(req,res)

});



// 5.处理修改编辑页面，
router.get('/edit',(req,res)=>{
    // 处理方法找controller
    controller.editHtml(req,res);

});




// 5.处理修改英雄数据信息
router.post('/editHeroById',(req,res)=>{
        // 处理方法找controller
        controller.editHeroById(req,res);

});





// 曝光router
module.exports = router
