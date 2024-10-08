import { Outlet } from "react-router-dom";
import Header from "../component/Header";
import MainNavigation from "../component/Navigation";
import { Divider } from "@mui/material";
import Footer from "../component/Footer";

const RootLayout = () => {
    return (
        <main className="flex flex-col w-screen h-screen">
            <Header />
            <MainNavigation />
            <Outlet />
            <Footer />
        </main>
    )
};


export default RootLayout