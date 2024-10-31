import axiosInstance from "../utils/axiosInstance";
import { 
    Categories, 
 } from "../constant/requestProducts";

 const { REACT_APP_API_HOST } = process.env;

export const getCategories = async() => {
    try {
        return await axiosInstance({
            baseURL: REACT_APP_API_HOST,
            ...Categories
        })
    } catch (error) {
        throw(error)
    }
}
