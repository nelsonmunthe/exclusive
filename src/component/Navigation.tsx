import ListMenu from "./ListMenu"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import { NavLink } from "react-router-dom";

const MainNavigation = () => {
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    const onHandleMenu = () => {
        setOpenMenu(prev => !prev)
    }

    return(
        <div 
            className="bg-[#FFFFFF] mb-4 lg:px-[100px] flex items-center justify-end p-2 gap-x-2 b-4 border border-b-gray-300 relative sm:sticky top-0 left-100 right-0 lg:right-100"
        >
            <ListMenu />
            <div className={`${openMenu ? 'block' : 'hidden'} flex flex-col items-center flex-1`}>
                <NavLink to={"/"} className="hover:text-red-400 hover:underline font-semibold"> Home </NavLink>
                <NavLink to={"/about"} className="hover:text-red-400 hover:underline font-semibold"> About </NavLink>
                <NavLink to={"/contact"} className="hover:text-red-400 hover:underline font-semibold"> Contact </NavLink>
            </div>
            <div className="sm:hidden p-1 flex items-center">
                { 
                    openMenu ?  
                        <CloseIcon onClick={onHandleMenu} className="hover:cursor-pointer block absolute right-0 top-0"/> : 
                        <MenuIcon  onClick={onHandleMenu} className="hover:cursor-pointer block absolute right-0 top-0"/>
                }
               
            </div>
 
        </div>
    )
}

export default MainNavigation