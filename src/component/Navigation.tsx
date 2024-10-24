import { Typography } from "@mui/material"
import ListMenu from "./ListMenu"
import UserProfile from "./UserProfile"

const MainNavigation = () => {
    return(
        <div 
            className="bg-[#FFFFFF] lg:px-[100px] flex items-center justify-between p-2 gap-x-2 b-4 border border-b-gray-300 sticky top-0"
        >
            <h1 className="text-2xl font-semibold leading-none tracking-tight text-gray-900 md:text-3xl dark:text-white">Exclusive</h1>
            <ListMenu />
        </div>
    )
}

export default MainNavigation