import { CREATE_PURCHASE } from "../constant/purchase"
import { purchase } from "../interfaces/Purchase";
import axiosInstance from "../utils/axiosInstance"
const { REACT_APP_API_HOST } = process.env;

export const createPurchase = async(purchase_line: purchase[], total_price: number) => {
    try {
        return await axiosInstance({
            baseURL: REACT_APP_API_HOST,
            ...CREATE_PURCHASE,
            data: {
                purchase_line,
                total_price
            }
        })
    } catch (error) {
        throw(error)
    }
}