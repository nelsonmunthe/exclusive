import { Login, SignUp } from "../constant/authRequests";
import axiosInstance from "../utils/axiosInstance";
import { UserSignUp } from "../interfaces/user"

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