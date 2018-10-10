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
