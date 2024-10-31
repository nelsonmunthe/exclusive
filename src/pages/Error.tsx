import { Typography } from "@mui/material";
import Footer from "../component/Footer";
import { useNavigate } from "react-router-dom";
import CustomButton from "../component/CustomButton";

const ErrorPage = () => {
    const navigate = useNavigate()

    const onHandleBack = () => {
        navigate(-1)
    }

    return(
        <main className="flex flex-col h-lvh">
            <div className="flex flex-1 flex-col justify-center items-center gap-y-4 mb-4">
                <Typography fontSize={40} style={{fontWeight: 700}}>
                    404 Not Found
                </Typography>
                <Typography>Your visited page not found. You may go home page.</Typography>
                <CustomButton 
                    style="bg-[#DB4444] text-white"
                    description="Back to home page"
                    onHandleClick={onHandleBack}
                />
            </div>
            <Footer />
        </main>

    )
};

export default ErrorPage