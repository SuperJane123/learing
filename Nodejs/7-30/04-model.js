
// 引入模块
const fs = require('fs');

// 描写不同的处理数据方法
let model = {

    // 读取数据的方法
    readFile(callback){
        fs.readFile('./data.json','utf-8',(err,data)=>{
            if(err) console.log(err);
            let arr = JSON.parse(data);
            callback(arr);
        });
    },




    // 写入数据的方法

    writeFile(arr){
        let content = JSON.stringify(arr)
        fs.writeFile('./data.json',content,(err)=>{
            if(err) console.log(err);
        });
    },


    // 求最大值的方法
    getMaxId(callback){
        this.readFile((arr)=>{
            let id = arr[0].id;
            for(let i = 1; i < arr.length;i++){
                if(arr[i].id > id){
                    id = arr[i].id;
                };
            };
            callback(id);
        });
    }

};


module.exports = model;