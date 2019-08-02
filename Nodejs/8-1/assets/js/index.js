$(function(){
    $('#tbody').on('click','a:last-child',function(){
        if(!confirm('请问确认删除吗？')) return;

        // 获取id
        let id = $(this).attr('data-id');
        // 储存当前this
        let _this = this;

        // 请求ajax
        $.ajax({
            type: "get",
            url: "http://127.0.0.1:9090/deleteHerrById",
            data: {id},
            // dataType: "dataType",
            success: function (res) {
                if(res.code === 200){
                    alert(res.msg);
                    $(_this).parents('tr').remove();

                };
            },
        });
    });


});