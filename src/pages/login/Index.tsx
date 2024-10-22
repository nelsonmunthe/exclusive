import { Button, Input, Typography } from "@mui/material"
import sideImage from "../../assets/images/slide.jpg"
import useLogin from "./useLogin";

const Login = () => {

    const { 
        onSubmitLogin,
        onChangeUsername,
        onChangePassword 
    }  = useLogin()

    return(
        <div className="flex flex-col justify-center items-center sm:flex-row py-2 lg:px-[100px]">
            <div className="flex justify-center items-center w-[250px] md:w-[60%]">
                <img src={sideImage} alt="side image" className="object-fill "/>
            </div>
            <div className="flex flex-col sm:flex  px-8 w-full sm:pl-20 flex-1 justify-center gap-y-2 sm:gap-y-4 sm:pb-4">
                <Typography fontSize={20} variant="h1"  sx={{color: "#000000", fontWeight: 500}}>Log in to Exclusive</Typography>
                <Typography fontSize={14}>Enter your details below</Typography>
                <Input placeholder="Username" type="text" onChange={(event) => onChangeUsername(event.target.value)}/>
                <Input placeholder="Password" type="Password" onChange={(event) => onChangePassword(event.target.value)}/>
                <div className="flex justify-between items-center">
                    <Button 
                        onClick={onSubmitLogin}
                        sx={{bgcolor: "#DB4444", color : "white", textTransform: 'none'}} 
                    >
                        Log In
                    </Button>
                    <Typography sx={{color: "#DB4444"}}>
                        Forget Password?
                    </Typography>
                </div>
               
            </div>
        </div>
    )
}

export default Login