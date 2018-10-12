function OpenFrame(data) {
        var productInfoJson = data;
        layer.open({
            type: 2,
            skin: 'layui-layer-lan',
            title: '选择人员',
            fix: false,
            shadeClose: false,
            maxmin: true,
            id:'productConfirm',
            move: false,
            closeBtn:2,
            //以下代码为打开窗口添加按钮
            /* btn: ['确定', '取消'],
            btnAlign: 'c',
            yes: function(index, layero){
              /* //layer.closeAll();//关闭所有弹出层
              //var parentWin = layero.find('iframe')[0];
              var parentWin = layer.getChildFrame('body', index);
              alert(parentWin);
              parentWin.contentWindow.doOk();
              //layer.close(index);//这块是点击确定关闭这个弹出层
            }, */
            area: ['750px', '450px'],
            content: "page/product/productConfirm.html",
            success: function(layero, index){
                var body = layer.getChildFrame('body', index);
                var iframeWin = window[layero.find('iframe')[0]['name']]; //得到iframe页的窗口对象，执行iframe页的方法：iframeWin.method();
                console.log(body.html()) //得到iframe页的body内容
                body.find("input[name='productInfo']").val(JSON.stringify(productInfoJson))
            }
        });
    }
    
    
    #######################
    layui.config({
    base : "js/"
}).use(['form','layer','jquery','table'],function(){
    var form = layui.form(),
        layer = parent.layer === undefined ? layui.layer : parent.layer,
        table = layui.table,
    $ = layui.jquery;


    var productInfo = $("input[name='productInfo']").val();


    for(var i=0;i<productInfo.length;i++){
        dataHtml += '<input name="expenses" value="'
            + data[i].id
            + '" title="'
            + data[i].name
            + '"type="radio">';
    }
    //页面初始化
    var serverPath = "http://localhost:8080/broadband";
    var productData ="";
    var expensesData = "";
    var equipmentData = "";
    var equipmentModelData = "";
    var giftData = "";

    var findProductBase = {
        "currentPage": 1,
        "pageSize": 50
    };

    $.ajax({
        type: "post",
        url: serverPath + "/product/product/findProductById",
        data: JSON.stringify(findProductBase),
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function(res){
            productData = res.result.records;
            //var productData = res.result;
            productList(productData);
        },
        error: function (e) {
            alertConsole(e);
        }
    })



})
