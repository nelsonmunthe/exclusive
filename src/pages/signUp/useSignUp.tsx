import { useState } from "react";
import { UserSignUp } from "../../interfaces/user";
import { signUp } from "../../apiCall/auth";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const useSignUp = () => {
    const [user, setUser] = useState<UserSignUp>({username: "", password: "", email: "", address: "", name: "", phone_number: ""})
    const navigate =  useNavigate()
    const { enqueueSnackbar } = useSnackbar()

    const onHandleCreateUser = async () => {
        try {
            const response =  await signUp(user);

            if(response){
                enqueueSnackbar('Sign Up Succeeded', {variant: 'success'})
                navigate('/login')
            }
        } catch (error) {
            enqueueSnackbar('Sign Up Failed', {variant: 'error'})
        }
    }

    const onChangeUser = (type: string, value: string) => {
        setUser(prev => {
            return{
                ...prev,
                [type]: value
            }
        })
    }

    return {
        user,
        onHandleCreateUser,
        onChangeUser
    }
};

export default useSignUp