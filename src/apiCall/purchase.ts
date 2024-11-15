import { CREATE_PURCHASE } from "../constant/purchase"
import { ProductWishList } from "../interfaces/product";
import axiosInstance from "../utils/axiosInstance"
const { REACT_APP_API_HOST } = process.env;

export const createPurchase = async(purchase: ProductWishList[], totalPrice: number) => {
    try {
        return await axiosInstance({
            baseURL: REACT_APP_API_HOST,
            ...CREATE_PURCHASE,
            data: {
                purchase,
                totalPrice
            }
        })
    } catch (error) {
        throw(error)
    }
}