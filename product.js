layui.config({
	base : "js/"
}).use(['form','layer','jquery','layedit','laydate','element'],function(){
	var form = layui.form(),
		layer = parent.layer === undefined ? layui.layer : parent.layer,
		laypage = layui.laypage,
		layedit = layui.layedit,
		laydate = layui.laydate,
    	element = layui.element;
		$ = layui.jquery;


    ///product/product/findProductById
    ///product/expenses/find
    ///product/equipment/findEquipment
    ///product/model/find
    ///product/gift/findByName

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
        url: serverPath + "/product/product/findProductBase",
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

    $.ajax({
        type: "post",
        url: serverPath + "/product/expenses/find",
        data: JSON.stringify(findProductBase),
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function(res){
            expensesData = res.result.records;
            //var productData = res.result;
            expensesList(expensesData);
        },
        error: function (e) {
            alertConsole(e);
        }
    })

    $.ajax({
        type: "post",
        url: serverPath + "/product/equipment/findEquipment",
        data: JSON.stringify(findProductBase),
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function(res){
            equipmentData = res.result.records;
            //var productData = res.result;
            equipmentList(equipmentData);
        },
        error: function (e) {
            alertConsole(e);
        }
    })

    $.ajax({
        type: "post",
        url: serverPath + "/product/gift/findByName",
        data: JSON.stringify(findProductBase),
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function(res){
            giftData = res.result.records;
            //var productData = res.result;
            giftList(giftData);
        },
        error: function (e) {
            alertConsole(e);
        }
    })

    function productList(data){

        var dataHtml = '';
        for(var i=0;i<data.length;i++){
            dataHtml += '<input name="product" value="'
                + data[i].id
                + '" title="'
                + data[i].name
                + '"type="radio">';
        }
        $(".product_content").html(dataHtml);
        form.render();
    }

    function expensesList(data){

        var dataHtml = '';
        for(var i=0;i<data.length;i++){
            dataHtml += '<input name="expenses" value="'
                + data[i].id
                + '" title="'
                + data[i].name
                + '"type="radio">';
        }
        $(".expenses_content").html(dataHtml);
        form.render();
    }

    function equipmentList(data){

        var dataHtml = '';
        for(var i=0;i<data.length;i++){
            dataHtml += '<input name="equipment" value="'
                + data[i].id
                + '" title="'
                + data[i].name
                + '"type="checkbox">';
        }
        $(".equipment_content").html(dataHtml);
        form.render();
    }

    function giftList(data){

        var dataHtml = '';
        for(var i=0;i<data.length;i++){
            dataHtml += '<input name="gift" value="'
                + data[i].id
                + '" title="'
                + data[i].name
                + '"type="checkbox">';
        }
        $(".gift_content").html(dataHtml);
        form.render();
    }

    //提交个人资料
    form.on("submit(addProduct)",function(data){
        var index = layer.msg('提交中，请稍候',{icon: 16,time:false,shade:0.8});
        //将填写的用户信息存到session以便下次调取
        var checkboxEquipment = [];
        $.each($('input:checkbox[name="equipment"]:checked'),function(){
            checkboxEquipment.push($(this).val());

        })
        var checkboxGift = [];
        $.each($('input:checkbox[name="gift"]:checked'),function(){
            checkboxGift.push($(this).val());

        })
        var key,productInfoJson = '';
        productInfoJson = {
            'product' : $("input[name='product']:checked").val(),
            'expenses' : $("input[name='expenses']:checked").val(),
            'equipment' : checkboxEquipment,
            'gift' : checkboxGift
        };

        /*for(key in data.field){
            if(key.indexOf("like") != -1){
                userInfoHtml[key] = "on";
            }
        }*/
        alert(JSON.stringify(productInfoJson));
        window.sessionStorage.setItem("productInfoJson",JSON.stringify(productInfoJson));

        /*$.ajax({
            type: "post",
            url: "http://localhost:8080/broadband/customer/customerMessage/add",
            data: JSON.stringify(userInfoHtml),
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            success: function (data) {
                /!*if (data.flag === 1) {
                    kenWindowClose(true);
                    var callback = eval("window.parent.LoadData1");
                    callback("操作成功！");
                }
                else {
                    GysAlert({
                        content: data.message
                    });
                }*!/

                setTimeout(function(){
                    layer.close(index);
                    layer.msg("提交成功！");
                },2000);
            },
            error: function (e) {
                alertConsole(e);
            }
        });*/

        setTimeout(function(){
            layer.close(index);
            layer.msg("提交成功！");
        },1000);
        return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
    })
	
})
