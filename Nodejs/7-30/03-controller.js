// 引入模块
const model = require('./04-model');

// 描写不同请求的方法
let controller = {

    // 处理英雄首页
    getIndexHtml(req,res){
        // 读取数据找model模块
        model.readFile((arr)=>{
            res.render('index',{arr});
        });
    },



    // 处理增加英雄页面
    getAddHtml(req,res){
        // 直接使用ejs渲染页面
        res.render('add');
    },



    // 处理删除英雄接口
    deleteHeroById(req,res){
        console.log(req.query);
        // 读取数据找model
        // 获取id，express里面已经把get请求带回来的数据处理了，直接通过req.query可以直接获取
        let id = req.query.id
        model.readFile((arr)=>{
            let isExit = arr.findIndex(e=>{
                return e.id == id;
            });
            isExit!=-1 ? arr.splice(isExit,1) : 0;
            // arr.splice(index,1);
            // 写入数据
            model.writeFile(arr);
            // console.log(arr)
            res.send({code : 200,msg:'删除成功！'})
        });

    },



    // 处理新增英雄接口
    addNewHero(req,res){
        console.log(req.body);
        // 读取数据
        model.readFile((arr)=>{
            // 获取最大值
            model.getMaxId((maxId)=>{
                req.body.id = maxId + 1;
                arr.push(req.body);
                // 把数据写进去
                model.writeFile(arr);
                res.send({code : 200,msg:'新增成功'})
            });
        });

    }

};




module.exports = controller;