'use strict'
import {Api} from './api'

export class indexApi extends Api{
	//新增查询接口
	addHelloApi = "/file-server/listFiles";

	//删除接口
    deleteHelloApi = "/file-server/delete";

    //修改接口
    UpdateHelloApi = "/file-server/delete";

    //查询文件接口
    queryHelloApi = "/user-service/user/list";
    
  
    /**
	 *分页查询文件列表
	*/
	getListByPage(url,param){
	   return super.get(url + '?currentPage='+param.currentPage+'&pageSize='+param.pageSize + '&name=' + param.name);
	}

}
