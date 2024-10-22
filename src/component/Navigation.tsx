import { Typography } from "@mui/material"
import ListMenu from "./ListMenu"
import UserProfile from "./UserProfile"

const MainNavigation = () => {
    return(
        <div className="bg-[#FFFFFF] lg:px-[100px] flex items-center justify-between p-2 gap-x-2">
            <Typography variant="h6" sx={{color: "black", }} fontSize={20}>
                Exclusive
            </Typography>
            <ListMenu />
            <UserProfile />
        </div>
    )
}

export default MainNavigation