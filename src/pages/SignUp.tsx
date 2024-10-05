import { Button, Input, Typography } from "@mui/material"
import sideImage from "../assets/images/slide.jpg"
import Google from "../assets/images/Icon-Google.png"

const SignUp = () => {
    return(
        <div className="flex px-[100px] mt-8 mb-10">
            <div className="w-[60%]">
                <img src={sideImage} alt="side image" className="object-fill "/>
            </div>
            <div className="flex  flex-col  pl-20 w-[40%] justify-center gap-y-4 pb-4">
                <Typography fontSize={20} variant="h1"  sx={{color: "#000000", fontWeight: 500}}>Create an account</Typography>
                <Typography fontSize={14}>Enter your details below</Typography>
                <Input placeholder="Name" type="text"/>
                <Input placeholder="Email Address" type="Email"/>
                <Input placeholder="Phone Number" type="text"/>
                <Input placeholder="Password" type="Password"/>
                <Button sx={{bgcolor: "#DB4444", color : "white", textTransform: 'none'}} >
                    Create Account
                </Button>
                <div className="flex items-center justify-center gap-x-2 border border-[#7D8184] p-1 rounded-sm">
                    <img src={Google}  alt="google"/>
                    <Typography fontSize={12} sx={{color: "7D8184"}}>Sign up with Google</Typography>
                </div>
                <div className="flex items-center justify-center gap-x-2">
                    <Typography fontSize={12} sx={{color: "7D8184"}}>Already have account?</Typography>
                    <Typography fontSize={12} sx={{color: "7D8184"}}>Log in</Typography>
                </div>
            </div>
        </div>
    )
}

export default SignUp