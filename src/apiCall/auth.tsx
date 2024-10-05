import { Login } from "../constant/authRequests";
import axiosInstance from "../utils/axiosInstance";

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