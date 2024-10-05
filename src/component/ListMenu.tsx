import { NavLink } from "react-router-dom"

const ListMenu = () => {
    return(
        <nav className="flex justify-between items-center gap-x-12 text-[#7D8184] text-sm">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/sign-up">Sign Up</NavLink>
        </nav>
    )
}

export default ListMenu