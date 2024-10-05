import { useState } from "react";
import { login } from "../../apiCall/auth"

const useLogin = () => {
    const [userLogin, setUserLogin] = useState<{username: string, password : string}>({username: "", password: ""});


    const onSubmitLogin = async () => {
        try {
            const response = await login(userLogin.username, userLogin.password);
            if(response){
                const token = response?.data?.data?.token;
                localStorage.setItem("accessToken", token)
            }
        } catch (error) {
            console.log('error', error)
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