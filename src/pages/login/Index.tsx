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
        <div className="flex px-[100px] mt-8 mb-10">
            <div className="w-[60%]">
                <img src={sideImage} alt="side image" className="object-fill "/>
            </div>
            <div className="flex  flex-col  pl-20 w-[40%] justify-center gap-y-4 pb-4">
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