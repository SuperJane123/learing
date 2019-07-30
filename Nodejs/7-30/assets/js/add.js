$(function(){
    $('#sub').on('click',function(){
        if($('input[type=text]').val().trim().length === 0){
            alert('请输入用户名！');
        };
        // 获取数据
        let data = $('#myform').serialize();
        // 请求ajax
        $.ajax({
            type: "post",
            url: "http://127.0.0.1:8080/addNewHero",
            data,
            // dataType: "dataType",
            success: function (res) {
                // console.log(res);
                if(res.code === 200){
                    alert('新增成功');
                };
            }
        });
        
    });
    

});