import { useState } from "react";
import { login } from "../../apiCall/auth"
import { useNavigate } from "react-router-dom";
import { useSnackbar } from 'notistack'

const useLogin = () => {
    const [userLogin, setUserLogin] = useState<{username: string, password : string}>({username: "", password: ""});
    const navigate = useNavigate()
    const { enqueueSnackbar } = useSnackbar()

    const onSubmitLogin = async () => {
        try {
            const response = await login(userLogin.username, userLogin.password);
            if(response){
                const token = response?.data?.data?.token;
                localStorage.setItem("accessToken", token)
                enqueueSnackbar('Login Succeeded', {variant: 'success'})
                navigate('/')
            }
        } catch (error) {
            enqueueSnackbar('Login Failed', {variant: 'error'})
        }
    }

    const onChangeUsername = (username: string) => {
        setUserLogin(prev => {
            return {
                ...prev,
                username
            }
        })
    }

    const onChangePassword = (password : string) => {
        setUserLogin(prev => {
            return {
                ...prev,
                password
            }
        })
    }

    return {
        onSubmitLogin,
        onChangeUsername,
        onChangePassword
    }

}

export default useLogin