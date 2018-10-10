@RequestMapping("/addDefaultCar_action")
@ResponseBody
public ResponseMap addDefaultCarAction(@RequestBody List<AddDefultCarEntity> carInfoJson){
    ResponseMap resp = new ResponseMap();

    try {
        boolean flag = slService.addDefultCar(carInfoJson);
        if(flag){
            resp.setFlag(1);
            resp.setMessage("操作成功！");
            resp.setLogContent("智能装车 已成功添加默认出车辆信息");
            resp.setType(LogTypeEnum.TypeAdd.getValue());
        }
        else{
            resp.setFlag(2);
            resp.setMessage("默认车辆添加失败！");
        }
    } catch (Exception e) {
        resp.setFlag(0);
        resp.setE(e);
    }
    return resp;
}

---------------------
作者：for_reak 
来源：CSDN 
原文：https://blog.csdn.net/sinat_20522337/article/details/79792970?utm_source=copy 
版权声明：本文为博主原创文章，转载请附上博文链接！
