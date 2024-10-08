import { Typography } from "@mui/material"
import ListMenu from "./ListMenu"
import UserProfile from "./UserProfile"

const MainNavigation = () => {
    return(
        <div className="bg-[#FFFFFF] px-[100px] flex items-center justify-between pt-[20px] pb-[5px] gap-x-6">
            <Typography variant="h6" sx={{color: "black", }} fontSize={20}>
                Exclusive
            </Typography>
            <ListMenu />
            <UserProfile />
        </div>
    )
}

export default MainNavigation