var carInfoArr = [];
var modelArray = _get_grid_select_model("#grid");

if(modelArray===undefined||modelArray.length===0){
    GysAlert({content:"当前未选择任何车辆！"});
    return false;
}
for(var i=0;i<modelArray.length;i++){
    var carInfo={};
    carInfo.carName=modelArray[i].carName;
    carInfo.carModel = modelArray[i].carModel;
    carInfo.id = modelArray[i].id;
    carInfo.num = modelArray[i].defultNum;
    carInfoArr.push(carInfo);
}

//执行Ajax请求进行添加默认选择车型值
$.ajax({
    type: "post",
    url:ctxPath+"/sl/addDefaultCar_action",
    data:JSON.stringify(carInfoArr),
    contentType: "application/json;charset=utf-8",
    dataType: "json",
    success: function (data) {
        if (data.flag === 1) {
            kenWindowClose(true);
            var callback = eval("window.parent.LoadData1");
            callback("操作成功！");
        }
        else {
            GysAlert({
                content: data.message
            });
        }
    },
    error: function (e) {
        alertConsole(e);
    }
});
