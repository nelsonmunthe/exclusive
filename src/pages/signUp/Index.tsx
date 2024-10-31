import sideImage from "../../assets/images/slide.jpg"
import Google from "../../assets/images/Icon-Google.png"
import useSignUp from "./useSignUp"
import CustomInput from "../../component/CustomInput"
import CustomButton from "../../component/CustomButton"

const SignUp = () => {
    const {
        onHandleCreateUser
    } = useSignUp()

    return(
        <form 
            className="flex flex-col justify-center items-center sm:flex-row py-2"
            onSubmit={(event) => {
                onHandleCreateUser(event)
            }}
        >
            <div className="flex justify-center items-center w-[250px] md:w-[60%]">
                <img src={sideImage} alt="side image" className="object-fill "/>
            </div>
            <div className="flex flex-col sm:flex  px-8 w-full sm:pl-20 flex-1 justify-center gap-y-1 sm:gap-y-4 sm:pb-4">
                <h1 className="font-semibold text-lg">Create an account</h1>
                <p >Enter your details below</p>
                <CustomInput 
                    type="text"
                    required
                    disable={false}
                    name="name"
                    labelText="Name"
                />
                <CustomInput 
                    type="text"
                    required
                    disable={false}
                    name="username"
                    labelText="Username"
                />
                 <CustomInput 
                    type="email"
                    required
                    disable={false}
                    name="email"
                    labelText="Email"
                />
                <CustomInput 
                    type="text"
                    required
                    disable={false}
                    name="phone_number"
                    labelText="Phone number"
                />
                <CustomInput 
                    type="password"
                    required
                    disable={false}
                    name="password"
                    labelText="Password"
                />
                <CustomInput 
                    type="text"
                    required
                    disable={false}
                    name="address"
                    labelText="Address"
                />
                <CustomButton 
                    style="text-white bg-[#DB4444] rounded-md py-1"
                    type="submit"
                    description="Create Account"
                />

                <div className="flex items-center justify-center gap-x-2 border border-[#7D8184] p-1 hover:cursor-pointer rounded-md">
                    <img src={Google}  alt="google"/>
                    <p className="text-[#7D8184]">Sign up with Google</p>
                </div>
                <div className="flex items-center justify-center gap-x-2">
                    <p className="text-[#7D8184] hover:cursor-pointer">Already have account? </p>
                    <p className="text-[#7D8184] hover:cursor-pointer">Log in </p>
                </div>
            </div>
        </form>
    )
}

export default SignUp