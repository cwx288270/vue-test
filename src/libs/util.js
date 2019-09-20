import axios from 'axios';
import env from '../config/env';
import qs from 'qs';
let util = {

};
util.title = function(title) {
    title = title ? title + ' - Home' : 'tpy project';
    window.document.title = title;
};

const ajaxUrl = env === 'development' ?
    'http://localhost:8080' :
    env === 'production' ?
    'https://www.url.com' :
    'https://debug.url.com';

util.ajax = axios.create({
    baseURL: ajaxUrl,
    timeout: 30000,
    headers: {//请求头
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
    }
});
// util.post = function (url, data) {
//     return util.ajax({
//         url,//请求地址，会加上配置的前缀地址
//         method: 'post',//请求类型
//         data:qs.stringify(data,{ arrayFormat: "repeat" })//这里用qs处理数据，数组转成不带下标
//     })
//     .then(response => {//成功
//         console.log(response);
//         return response;
//     })
//     .catch(error => {//失败
//         console.log(error);
//         return error;
//     });
// }


axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? '/' : ''
axios.defaults.withCredentials = true

// 增加该 Header，让服务端的 isAjax 判断正确
axios.defaults.headers = { 'X-Requested-With': 'XMLHttpRequest', 'Content-Type': 'application/json' }

// 5s 超时
axios.defaults.timeout = 5 * 1000

const axiosPromiseWrapper = (action, url, data) => { return Promise.resolve(axios[action](url, data)) }

export const queryResult = (params) => axiosPromiseWrapper('post', '/test/zabbix-tp/zabbix/summary', params)


export default util;