$(function(){
    // 给新增注册点击事件
    $('#sub').on('click',function(){
        if($('input[type=text]').val().trim().length === 0){
            alert('请输入用户名');return
        };

        // 获取数据
        let data = $('#myform').serialize();
        //console.log(data) 获取数据成功
        // 请求ajax 
        $.ajax({
            type: "post",
            url: " http://127.0.0.1:9090/addNewHero",
            data,
            // dataType: "dataType",
            success: function (res) {
                // console.log(res)
                if(res.code === 200){
                    alert(res.msg);
                    location.href = '/index';
                }
            }
        });
        
    
    });
});