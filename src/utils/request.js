import axios from "axios";

import nProgress from 'nprogress';
import 'nprogress/nprogress.css'

// axios.defaults.withCredentials = true
const request = axios.create({
    baseURL: 'http://101.34.248.186:8085',
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

export default request