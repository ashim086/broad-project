import { IProduct } from "@/interface/product.interface"
import apiInstance from "."

export const addProduct = async (data: IProduct) => {

    try {

        const reponse = await apiInstance.post('/product', data)
        return reponse?.data

    } catch (error: any) {

        throw error?.response?.data
    }
}

export const products = async () => {

    try {

        const response = await apiInstance.get('/product')
        return response?.data

    } catch (error: any) {

        throw error?.response?.data

    }
}

export const getProductById = async (id: string) => {
    try {
        const response = await apiInstance.get(`/product/${id}`)
        return response.data
    } catch (error: any) {
        throw new error.response.data
    }
}



export const getlatestproducts = async () => {

    try {

        const response = await apiInstance.get('/product/latest')
        return response?.data

    } catch (error: any) {

        throw error?.response?.data

    }
}
export const getMostbuyproducts = async () => {

    try {

        const response = await apiInstance.get('/product/mostBuyed')
        return response?.data

    } catch (error: any) {

        throw error?.response?.data

    }
}
export const getMostlikedproducts = async () => {

    try {

        const response = await apiInstance.get('/product/mostBuyed')
        return response?.data

    } catch (error: any) {

        throw error?.response?.data

    }
}

export const delproduct = async (id: string) => {

    try {

        const response = await apiInstance.delete(`/product/${id}`)
        return response?.data

    } catch (error: any) {

        throw error?.response?.data

    }
}