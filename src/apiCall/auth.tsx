import { Login, SignUp } from "../constant/authRequests";
import axiosInstance from "../utils/axiosInstance";
import { UserSignUp } from "../interfaces/user"
import { 
    Best_Product, 
    CREATE_PRODUCT, 
    Categories, 
    Flash_Sales, 
    PRODUCT_DETAIL, 
    UPLOAD,
    PRODUCTS
 } from "../constant/requestProducts";
import { NewProduct } from "../interfaces/product";
import { Pagination } from "../interfaces/common";

export const login = async (username: string, password: string) => {
    try {
        return await axiosInstance({
            baseURL: "http://localhost:8888/",
            ...Login,
            data: {
                username : username,
                password : password
            }
        })
    } catch (error) {
        throw(error)
    }
}

export const signUp = async(user : UserSignUp) => {
    try {
        return await axiosInstance({
            baseURL: "http://localhost:8888/",
            ...SignUp,
            data: user
        })
    } catch (error) {
        throw(error)
    }
}

export const getCategories = async() => {
    try {
        return await axiosInstance({
            baseURL: "http://localhost:8888/",
            ...Categories
        })
    } catch (error) {
        throw(error)
    }
}

export const getFlashSales = async() => {
    try {
        return await axiosInstance({
            baseURL: "http://localhost:8888/",
            ...Flash_Sales
        })
    } catch (error) {
        throw(error)
    }
}

export const getBestProducts = async () => {
    try {
        return await axiosInstance({
            baseURL: "http://localhost:8888/",
            ...Best_Product
        })
    } catch (error) {
        throw(error)
    }
}

export const upload = async (form : FormData) => {
    try {
        return await axiosInstance({
            baseURL: "http://localhost:8888/",
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
            baseURL: "http://localhost:8888/",
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
            baseURL: "http://localhost:8888/",
            ...PRODUCT_DETAIL(productId)
        })
    } catch (error) {
        throw(error)
    }
}

export const products =  async (paginate: Pagination) => {
    try {
        return await axiosInstance({
            baseURL: "http://localhost:8888/",
            ...PRODUCTS(paginate)
        })
    } catch (error) {
        throw(error)
    }
}