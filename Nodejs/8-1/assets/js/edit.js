$(function(){
    $('#sub').on('click',function(){
        if($('#name').val().trim().length === 0){
            alert('请输入用户名！');return;
        };

        // 获取数据
        let data = $('#form').serialize();
        
        // 请求ajax
        $.ajax({
            type: "post",
            url: "http://127.0.0.1:9090/editHeroById",
            data,
            // dataType: "dataType",
            success: function (res) {
                if(res.code === 200){
                    alert(res.msg);
                    location.href = '/index';
                };
            },
        });
    });
});