import { Login, SignUp } from "../constant/authRequests";
import axiosInstance from "../utils/axiosInstance";
import { UserSignUp } from "../interfaces/user"
const { REACT_APP_API_HOST } = process.env;

export const login = async (username: string, password: string) => {
    try {
        return await axiosInstance({
            baseURL: REACT_APP_API_HOST,
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
            baseURL: REACT_APP_API_HOST,
            ...SignUp,
            data: user
        })
    } catch (error) {
        throw(error)
    }
}