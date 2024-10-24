import { Button, Input, Typography } from "@mui/material"
import sideImage from "../../assets/images/slide.jpg"
import useLogin from "./useLogin";
import { NavLink } from "react-router-dom";

const Login = () => {

    const { 
        onSubmitLogin,
        onChangeUsername,
        onChangePassword 
    }  = useLogin()

    return(
        <div className="flex flex-col justify-center items-center my-10 gap-y-4 sm:flex-row  lg:px-[100px]">
            <div className="flex justify-center items-center w-[250px] md:w-[60%]">
                <img src={sideImage} alt="side image" className="object-fill "/>
            </div>
            <div className="flex flex-col sm:flex  px-8 w-full sm:pl-20 flex-1 justify-center gap-y-2 sm:gap-y-4 sm:pb-4">
                <h1 className="text-2xl font-light">Log in to Exclusive</h1>
                <p>Enter your details below</p>
                <input 
                    placeholder="Username" 
                    type="text" 
                    className="border-b border-b-gray-200 pl-1 pr-4 py-1 hover:border-b-gray-400"
                    onChange={(event) => onChangeUsername(event.target.value)}
                />
                <input 
                    placeholder="Password" 
                    type="password" 
                    className="border-b border-b-gray-200 pl-1 pr-4 py-1 hover:border-b-gray-400"
                    onChange={(event) => onChangePassword(event.target.value)}
                />
                <div className="flex justify-between items-center">
                    <button
                        onClick={onSubmitLogin}
                        className="bg-[#DB4444] text-white py-2 px-4 rounded-md text-sm"
                    >
                         Log In
                    </button>
                    <NavLink 
                        to={'/reset-password'}
                        className="text-[#DB4444] hover:underline"
                    >
                        Forget Password?
                    </NavLink>
                </div>
               
            </div>
        </div>
    )
}

export default Login