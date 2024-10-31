import { UserSignUp } from "../../interfaces/user";
import { signUp } from "../../apiCall/auth";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const useSignUp = () => {
    const navigate =  useNavigate()
    const { enqueueSnackbar } = useSnackbar()

    const onHandleCreateUser = async (event: React.FormEvent<HTMLFormElement>) => {
        try {
            event.preventDefault();
            const form = new FormData(event.currentTarget);
            const dataUser: UserSignUp = {
                username : form.get("username") as string,
                password: form.get("password") as string,
                email: form.get("email") as string,
                address: form.get("address") as string,
                name: form.get("name") as string,
                phone_number: form.get("phone_number") as string
            }
            const response =  await signUp(dataUser);

            if(response){
                enqueueSnackbar('Sign Up Succeeded', {variant: 'success'})
                navigate('/login')
            }
        } catch (error) {
            enqueueSnackbar('Sign Up Failed', {variant: 'error'})
        }
    }

    return {
        onHandleCreateUser,
    }
};

export default useSignUp