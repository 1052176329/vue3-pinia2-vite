import axios from "axios";
import router from "../router";

const request = axios.create({
    baseURL: import.meta.env.BASE_URL,
    timeout: 2000
})
// 拦截器
request.interceptors.request.use(config => {
    // console.log(config),
    const token = localStorage.getItem('token') || ''
    if (token) {
        config.headers!['Authorization'] = token
    }
    return token
})
// 响应拦截器
request.interceptors.response.use(req =>{
    console.log(req)
    const { code, msg} = req.data
    // 如果不成功
    if (code !== '200') {
        return Promise.reject(msg)
    }
    // 如果 401 返回登录
    if (code === '401') {
        router.push({name: 'Login'})
        return Promise.reject(msg)
    }
    Promise.resolve(msg)
})
export default request