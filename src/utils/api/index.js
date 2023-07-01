import axios from "axios";

import nProgress from 'nprogress';
import 'nprogress/nprogress.css'

const request = axios.create({
    baseURL: 'http://localhost:80'
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