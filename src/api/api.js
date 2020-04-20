/**
 * 基础API对象
 */
'use strict'
import vue from '@/config/axios'

export class Api{
  /**
   * post调用
   * @param url
   * @param data
   */
  post(url,data){
    return vue.$axios({
      url: url,
      method: 'post',
      data:data
    })
  }

 /**
  * get调用
  * @param url
  */
 get(url){
   return vue.$axios({
     url: url,
     method: 'get'
   })
 }

}
