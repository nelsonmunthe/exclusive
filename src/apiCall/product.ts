import axiosInstance from "../utils/axiosInstance";
import { 
    Best_Product, 
    CREATE_PRODUCT, 
    Flash_Sales, 
    PRODUCT_DETAIL, 
    UPLOAD,
    PRODUCTS
 } from "../constant/requestProducts";
import { NewProduct } from "../interfaces/product";
import { Pagination } from "../interfaces/common";
const { REACT_APP_API_HOST } = process.env;

export const getFlashSales = async() => {
    try {
        return await axiosInstance({
            baseURL: REACT_APP_API_HOST,
            ...Flash_Sales
        })
    } catch (error) {
        throw(error)
    }
}

export const getBestProducts = async () => {
    try {
        return await axiosInstance({
            baseURL: REACT_APP_API_HOST,
            ...Best_Product
        })
    } catch (error) {
        throw(error)
    }
}

export const upload = async (form : FormData) => {
    try {
        return await axiosInstance({
            baseURL: REACT_APP_API_HOST,
            ...UPLOAD,
            headers: {
                "Content-Type": `multipart/form-data`,
            },
            data: form
        })
    } catch (error) {
        throw(error)
    }
}

export const createProduct = async (product : NewProduct) => {
    try {
        return await axiosInstance({
            baseURL: REACT_APP_API_HOST,
            ...CREATE_PRODUCT,
            data: product
        })
    } catch (error) {
        throw(error)
    }
}

export const productDetail =  async (productId : number) => {
    try {
        return await axiosInstance({
            baseURL: REACT_APP_API_HOST,
            ...PRODUCT_DETAIL(productId)
        })
    } catch (error) {
        throw(error)
    }
}

export const products =  async (paginate: Pagination) => {
    try {
        return await axiosInstance({
            baseURL: REACT_APP_API_HOST,
            ...PRODUCTS(paginate)
        })
    } catch (error) {
        throw(error)
    }
}