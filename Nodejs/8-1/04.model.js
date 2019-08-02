// @这个模块负责读取数据
// 引入mysql
const mysql = require('mysql');

// 创建一个连接
const conn = mysql.createConnection({
    host : '127.0.0.1',
    port : 3306,
    user : "root",
    password : "root",
    database : "gz35"
});




// 1.处理英雄首页
function indexHtml(callback){
    // 创建一个sql语言
    let sql = `SELECT * FROM hero where isDelete = 0`;
    conn.query(sql,(err,result)=>{
        if(err) console.log(err);
        callback(result) //取得全部英雄的数据(数组)
    });
};




// 2.处理新增英雄写入mysql
function addNewHero(data,callback){
    // 创建一个sql语言
    let sql = `INSERT INTO hero set \`name\` = '${data.name}',\`img\`='${data.img}',\`gender\` = '${data.gender}'`;
    // 执行sql命令
    conn.query(sql,(err,result)=>{
        if(err) console.log(err);
        callback(result);
    });
};




// 3.处理删除英雄数据
function deleteHerrById(id,callback){
    // 创建一个sql语句
   // let sql = `DELETE FROM hero WHERE id = ${id}`;  删除数据
   let sql = `UPDATE hero set isDelete = 1 WHERE id = ${id}`

    // 执行sql命令
    conn.query(sql,(err,result)=>{
        if(err) console.log(err);
            callback(result);
    })
};




// 4.处理英雄修改编辑页面
function getHeroMsg(id,callback){
    // 创建一个sql语句
    let sql = `SELECT * FROM hero where id = ${id}`;
    // 执行sql命令
    conn.query(sql,(err,result)=>{
        if(err) console.log(err);
        callback(result[0]);
    });
};




// 5.处理修改编辑英雄数据
function editHeroById(id,data,callback){
    // 创建一个sql命令
    let sql = `UPDATE hero set \`name\` = '${data.name}',\`img\`= '${data.img}',\`gender\`='${data.gender}' WHERE id = ${id}`;
    
    // 执行sql命令
    conn.query(sql,(err,result)=>{
        if(err) console.log(err);
        callback(result)
    });
    
}





// 曝光区域
module.exports = {
    indexHtml,addNewHero,deleteHerrById,getHeroMsg,editHeroById
}