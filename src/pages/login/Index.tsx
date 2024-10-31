import sideImage from "../../assets/images/slide.jpg"
import useLogin from "./useLogin";
import { NavLink } from "react-router-dom";
import CustomInput from "../../component/CustomInput";
import CustomButton from "../../component/CustomButton";

const Login = () => {

    const { 
        onSubmitLogin
    }  = useLogin()

    return(
        <form 
            id="form-login"
            className="flex flex-col justify-center items-center my-10 gap-y-4 sm:flex-row"
            onSubmit={(event) => {
                event.preventDefault();
                onSubmitLogin(event)
            }}
        >
            <div className="flex justify-center items-center w-[250px] md:w-[60%]">
                <img src={sideImage} alt="side image" className="object-fill "/>
            </div>
            <div className="flex flex-col sm:flex  px-8 w-full sm:pl-20 flex-1 justify-center gap-y-2 sm:gap-y-4 sm:pb-4">
                <h1 className="text-2xl font-light">Log in to Exclusive</h1>
                <p>Enter your details below</p>
                <CustomInput 
                    name="username"
                    type="text"
                    required={true}
                    labelText="Username"
                    disable={false}
                />
                 <CustomInput 
                    name="password"
                    type="password"
                    required={true}
                    labelText="Password"
                    disable={false}
                />
                <div className="flex justify-between items-center">
                    <CustomButton 
                        style="bg-[#DB4444] text-white py-2 px-4 rounded-md text-sm"
                        type="submit"
                        description="Log In"
                    />
                    <NavLink 
                        to={'/reset-password'}
                        className="text-[#DB4444] hover:underline"
                    >
                        Forget Password?
                    </NavLink>
                </div>
               
            </div>
        </form>
    )
}

export default Login