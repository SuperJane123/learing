// @这个模块负责处理不同的请求


// 引入模块区域
const model = require('./04.model');



// 1.处理英雄首页
function indexHtml(req,res){
    // 读取数据找model
    model.indexHtml(arr=>{
        res.render('index',{arr});
    });
};



// 2.处理添加英雄首页
function addHtml(req,res){
    res.render('add');
};




// 3.处理新增英雄数据
function addNewHero(req,res){
    // console.log(req.body)
    // 新增数据找model
    model.addNewHero(req.body,result=>{
        let response = {
            code: 503,
            msg: "新增失败！"
        };
        if(result.affectedRows === 1){
            response.code = 200,
            response.msg = "新增成功!"
        };
        res.send(response);
    });
};



// 4.处理删除英雄数据
function deleteHerrById(req,res){
    // 获取id
    let id = req.query.id
    // 读取数据找model
    model.deleteHerrById(id,result=>{
        let response = {
            code : 503,
            msg : "请求失败！"
        };
        if(result.affectedRows === 1){
            response.code = 200;
            response.msg = "删除成功！"
        };
        res.send(response);
    });
};



// 5.处理英雄修改编辑页面
function editHtml(req,res){
    // 获取id
    let id = req.query.id;
    model.getHeroMsg(id,result=>{
     // 调用引擎渲染页面
    // res.render('edit',result);
    // res.render('edit',{result});

    res.render('edit',result);
    

    });
};



function editHeroById(req,res){
    // 获取数据
    // let data = req.body;
    // 读取数据找model
    model.editHeroById(req.query.id,req.body,result=>{
        let response = {
            code: 503,
            msg: "修改失败，请重试！"
        };
        if(result.affectedRows === 1){
            response.code = 200;
            response.msg = "修改成功！"
        };

        res.send(response);
    });
}












module.exports = {
    indexHtml,addHtml,addNewHero,deleteHerrById,editHtml,editHeroById
}