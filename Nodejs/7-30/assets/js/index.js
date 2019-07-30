$(function(){
    // 由于页面结构是动态生成的，所以要用事件委托来做
    $('#tbody').on('click','a:last-child',function(){
        //console.log(123) //获取元素成功

        // 交互常识：非空判断
        if(!confirm('请问确认删除吗？')){
            return;
        }
        // 获取ID
        let id = $(this).attr('data-id');
        let _this = this;
        // 请求ajax
        $.ajax({
            type: "get",
            url: "http://127.0.0.1:8080/deleteHeroById",
            data: {id},
            // dataType: "dataType",
            success: function (res) {
                console.log(res)//获取删除成功
                if(res.code === 200){
                    alert(res.msg);
                    $(_this).parents('tr').remove();
                }
            }
        });

    });

});