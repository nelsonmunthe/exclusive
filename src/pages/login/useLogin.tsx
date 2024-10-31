import { login } from "../../apiCall/auth"
import { useNavigate } from "react-router-dom";
import { useSnackbar } from 'notistack'

const useLogin = () => {
    const navigate = useNavigate()
    const { enqueueSnackbar } = useSnackbar()

    const onSubmitLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        try {
            event.preventDefault();
            const form = new FormData(event.currentTarget)
            const username = form.get("username") as string;
            const password = form.get("password") as string;

            const response = await login(username, password);
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


    return {
        onSubmitLogin
    }

}

export default useLogin