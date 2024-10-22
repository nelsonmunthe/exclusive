import { NavLink } from "react-router-dom"
const accessToken = localStorage.getItem('accessToken');

const ListMenu = () => {
    return(
        <nav className="flex justify-between items-center gap-x-2 lg:gap-x-8 text-[#7D8184] text-sm">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/about">About</NavLink>
            {!accessToken && <NavLink to="/login">Login</NavLink>} 
            
        </nav>
    )
}

export default ListMenu