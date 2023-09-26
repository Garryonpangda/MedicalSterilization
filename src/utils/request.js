import axios from "axios";
import { Message } from 'element-ui';
import nProgress from 'nprogress';
import 'nprogress/nprogress.css'
import router from 'vue-router'; // 导入 Vue Router 实例
// axios.defaults.withCredentials = true
const request = axios.create({
    // baseURL: 'http://101.34.248.186:8088/api',
    // baseURL: 'http://101.34.248.186:8085',
    baseURL: 'http://localhost:8085',
    // credentials: true,
    withCredentials: true,
})

request.interceptors.request.use((config) => {
    nProgress.start()
    return config;
}, e => Promise.reject(e))

request.interceptors.response.use((res) => {
    nProgress.done()
    return res.data
}, e => Promise.reject(e))

request.interceptors.response.use(function(response) {
    if (response.code == 403) {
        Message.error("该账号已在别处登录");
        router.push('/login');
    }


    return response
})

export default request