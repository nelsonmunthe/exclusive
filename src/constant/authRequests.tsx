import {AxiosRequestConfig} from "axios";

export const Login: AxiosRequestConfig = {
    method: 'post',
    url: 'user/login'
}

export const SignUp: AxiosRequestConfig = {
    method: 'post',
    url: 'user/create'
}