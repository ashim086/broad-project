import axios from 'axios'
import Cookies from 'js-cookie'

const PUBLIC_URL = process.env.NEXT_PUBLIC_API

const token = Cookies.get("access_token")



const apiInstance = axios.create({

    baseURL: PUBLIC_URL,

})

// Add a request interceptor
apiInstance.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers.Authorization = `BEARER token`
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});



export default apiInstance