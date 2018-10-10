# ReadMe
参数是一个个列出来的但是springBoot支持后台接受entity但是用上面的配置会报出415 参数不支持需要改动：前台：在ajax中添加contentType: "application/json;charset=utf-8",将data中的对象转换成json格式：JSON.stringify({projectId: 1,mouldsNo:"nihao",buildId:1,floor:1,prodName:"asdf",page:1,pageSize:1}),后台：在controller的参数中添加RequestBody@RequestMapping(value = "/getProdInfoBySearch")
@ResponseBody
public ResponseMap getProdInfoBySearch(@RequestBody SearchInfo searchInfo){在SearchInfo接受参数entity中，将所有参数改为包装类型。///////////////////////////////////////////////////////////////////////////////////////////////////////////////前台传递对象数组到后台，controller直接接受List<对象>作为入参的例子：

---------------------
作者：for_reak 
来源：CSDN 
原文：https://blog.csdn.net/sinat_20522337/article/details/79792970?utm_source=copy 
版权声明：本文为博主原创文章，转载请附上博文链接！
