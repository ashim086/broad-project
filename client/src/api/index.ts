import axios from 'axios'
import Cookies from 'js-cookie'

const PUBLIC_URL = process.env.NEXT_PUBLIC_API

const token = Cookies.get("access_token")

console.log("token", token)

const apiInstance = axios.create({

    baseURL: PUBLIC_URL,


    headers: {
        Authorization: `Bearer ${token}`
    }

})


export default apiInstance