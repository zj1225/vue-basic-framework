/*
* axios定义
* */
import Vue from 'vue';
import axios from 'axios';
import { Message } from 'element-ui';

//是否允许携带cookie，特么就是个坑，不能为true，为true会报 'Access-Control-Allow-Origin'的值不能为‘*’
axios.defaults.withCredentials = false; 
axios.defaults.baseURL = '/api';  //代理规则+/api
axios.defaults.timeout = 5000;

//#####################环境###################
let sENV = '';

const Domain = {
  ajaxPort : {
    dev : 'http://192.168.1.203:8080',
    prod : 'http://192.168.1.203:8080'
  }
};
const vueConfig = require('../../config') // 获取配置


//打包环境
if (process.env.NODE_ENV === 'production') {
  // npm run build / npm run build -- prod
  sENV = 'prod';
  axios.defaults.baseURL = '';

} 
//开发环境
else if (process.env.NODE_ENV === 'development') {
  sENV = 'dev';
}

console.log('NODE_ENV' , process.env.NODE_ENV)

axios.defaults.baseURL  = Domain.ajaxPort[sENV] + axios.defaults.baseURL;


// axios添加一个请求拦截器
axios.interceptors.request.use(
    config => {
      console.log('请求拦截：',config);
      return config;
    }, 
    error => {
        return Promise.reject(error);
    }
);

 


// axios添加一个响应拦截器
axios.interceptors.response.use(
    response => {
      console.log('响应拦截：',response);
      if(!response.data.ret){
        return false;
      }
      return response;
    }, 
    error => {
      return Promise.reject(error);
    }
);



Vue.$axios = axios;

/**
 * 获取下载链接头
 * @param  {[type]} url [description]
 * @return {[type]} http://xx.xx.xx/url  [description]
 */
Vue.$getDownloadHeadLink = (url) =>{
  //开发环境,拿到代理ipa地址
  if(process.env.NODE_ENV == 'development'){
    let api = vueConfig.dev.proxyTable['/api'].target;//代理地址
    url = api + url;
  }else{
    //正式环境 ipa地址：Domain.ajaxPort[sENV]
    url = Domain.ajaxPort[sENV] + url;
  }
  return url;
}


export default Vue