import { NavLink } from "react-router-dom"
const accessToken = localStorage.getItem('accessToken');

const ListMenu = () => {
    return(
        <nav className=" hidden sm:flex justify-between items-center gap-x-2 lg:gap-x-8 text-[#7D8184] text-sm p-2">
            {!accessToken && <NavLink to="/login" className="hover:text-red-400 hover:underline font-semibold">Login</NavLink>} 
            <NavLink to="/" className="hover:text-red-400 hover:underline font-semibold">Home</NavLink>
            <NavLink to="/contact" className="hover:text-red-400 hover:underline font-semibold">Contact</NavLink>
            <NavLink to="/about" className="hover:text-red-400 hover:underline font-semibold">About</NavLink> 
        </nav>
    )
}

export default ListMenu