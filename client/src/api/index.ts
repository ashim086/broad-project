import axios from 'axios'


const PUBLIC_URL = process.env.NEXT_PUBLIC_API

const apiInstance = axios.create({

    baseURL: PUBLIC_URL,
    headers: {
        Authorization: 'Bearer '
    }

})


export default apiInstance