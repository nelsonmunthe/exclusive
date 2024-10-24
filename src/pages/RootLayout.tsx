import { Outlet } from "react-router-dom";
import MainNavigation from "../component/Navigation";
import { Divider } from "@mui/material";
import Footer from "../component/Footer";

const RootLayout = () => {
    return (
        <main className="flex flex-col h-lvh">
            <MainNavigation />
            <div className="flex-1 lg:mx-[100px]">
                <Outlet />
            </div>
            <Footer />
        </main>
    )
};


export default RootLayout