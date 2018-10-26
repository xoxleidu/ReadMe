# ReadMe

 [116.719955,39.528677],
                [116.718882,39.528594],
                [116.717122,39.528379],
                [116.715427,39.528114],
                [116.714075,39.527999],
                [116.714118,39.527204],
                [116.714247,39.526343],
                [116.714354,39.52545],
                [116.714397,39.52492],
               [116.713217,39.52487],
               [116.712166,39.524688]


https://github.com/zyktojo/AmapSmoothMarker.git
https://github.com/zuley/vue-gaode.git
https://github.com/xoxleidu/vue-amap.git

参数是一个个列出来的,
但是springBoot支持后台接受entity ,
但是用上面的配置会报出415 ,
参数不支持需要改动：
前台：在ajax中添加

contentType: "application/json;charset=utf-8",

将data中的对象转换成json格式：

JSON.stringify({projectId: 1,mouldsNo:"nihao",buildId:1,floor:1,prodName:"asdf",page:1,pageSize:1}),

后台：
在controller的参数中添加RequestBody

@RequestMapping(value = "/getProdInfoBySearch")
@ResponseBody
public ResponseMap getProdInfoBySearch(@RequestBody SearchInfo searchInfo){

  //在SearchInfo接受参数entity中，将所有参数改为包装类型。       
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //前台传递对象数组到后台，controller直接接受List<对象>作为入参的例子：
}

---------------------

