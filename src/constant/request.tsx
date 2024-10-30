import {AxiosRequestConfig} from "axios";

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
    url: 'product/best-product'
}

export const UPLOAD: AxiosRequestConfig = {
    method: 'POST',
    url: 'product/upload'
}

export const CREATE_PRODUCT: AxiosRequestConfig = {
    method: 'POST',
    url: 'product/create'
}