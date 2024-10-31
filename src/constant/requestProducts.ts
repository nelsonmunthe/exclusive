import {AxiosRequestConfig} from "axios";
import { Pagination } from "../interfaces/common";

export const Categories: AxiosRequestConfig = {
    method: 'GET',
    url: 'category/all'
}

export const Flash_Sales: AxiosRequestConfig = {
    method: 'GET',
    url: 'product/flash-sell'
}

export const Best_Product: AxiosRequestConfig = {
    method: 'GET',
    url: 'product/best-product?bestMonth=true'
}

export const UPLOAD: AxiosRequestConfig = {
    method: 'POST',
    url: 'product/upload'
}

export const CREATE_PRODUCT: AxiosRequestConfig = {
    method: 'POST',
    url: 'product/create'
}

export const PRODUCT_DETAIL = (productId: number) : AxiosRequestConfig =>  (
    {
        method: "get",
        url: `product/detail/${productId}`
    }
)

export const PRODUCTS = (paginate: Pagination) : AxiosRequestConfig => (
    {
        method: "get",
        url: `product?page=${paginate.page}&perPage=${paginate.perPage}`
    }
)
