import { Button, Typography } from "@mui/material";
import Footer from "../component/Footer";
import { useNavigate } from "react-router-dom";

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
                <Button  
                    sx={{bgcolor: "#DB4444", color : "white", textTransform: 'none'}}
                    onClick={onHandleBack}
                >
                    Back to home page
                </Button>
            </div>
            <Footer />
        </main>

    )
};

export default ErrorPage