import { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import Path from "../../component/Path";

const Account = () => {
    const [menu, setMenu] = useState({mainMenu: "account", subMenu: "profile"})
    const location =  useLocation();
    console.log(location.pathname)
    const onChangeMenu = (mainMenu: string, subMenu: string) => {
        setMenu(prev => {
            return{
                ...prev,
                mainMenu, 
                subMenu
            }
        })
    }
    
    return(
        <div className="flex flex-col gap-2 p-2 my-2">
            <div className="flex justify-between items-center mb-6">
                <Path />
                <div className="flex gap-x-1">
                    <p className="text-md">Welcome! </p>
                    <p className="text-md text-red-500 font-semibold">Md Rimel</p>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <div className="flex flex-col sm:col-span-1">
                    <div className="flex flex-col gap-2">
                        <label 
                            htmlFor="Manage My Account" 
                            className="font-semibold text-md hover:cursor-pointer"
                            onClick={() => onChangeMenu('account', '')}
                        >
                            Manage My Account
                        </label>
                        <div className={`ml-10 flex flex-col gap-y-1 ${menu.mainMenu === 'account' ? 'none' : 'hidden'}`}>
                            <NavLink 
                                to={'/account/profile'} 
                                className="text-sm text-gray-500"
                                style={({ isActive }) => {
                                    return isActive ? { color: "#DB4444", } : {};
                                }}
                            >
                                My Profile
                            </NavLink>
                            <NavLink 
                                to={'/account/address'} 
                                className="text-sm text-gray-500"
                                style={({ isActive }) => {
                                    return isActive ? { color: "#DB4444", } : {};
                                }}
                            >
                                Address Book
                            </NavLink>
                            <NavLink 
                                to={'/account/payment'} 
                                className="text-sm text-gray-500"
                                style={({ isActive }) => {
                                    return isActive ? { color: "#DB4444", } : {};
                                }}
                            >
                                My Payment Options
                            </NavLink>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label 
                            htmlFor="My Orders" 
                            className="font-semibold text-md hover:cursor-pointer"
                            onClick={() => onChangeMenu('transaction', '')}
                        >
                            My Orders
                        </label>
                        <div className={`ml-10 flex flex-col gap-y-1 ${menu.mainMenu === 'transaction' ? 'none' : 'hidden'}`}>
                            <NavLink 
                                to={'/account/return'} 
                                className="text-sm text-gray-500"
                                style={({ isActive }) => {
                                    return isActive ? { color: "#DB4444", } : {};
                                }}
                            >
                                My Returns
                            </NavLink>
                            <NavLink 
                                to={'/account/cancellation'} 
                                className="text-sm text-gray-500"
                                style={({ isActive }) => {
                                    return isActive ? { color: "#DB4444", } : {};
                                }}
                            >
                                My Cancellations
                            </NavLink>
                        </div>
                    </div>
                    <NavLink to={'/account/wishList'} className="font-semibold text-md">My Wishlist</NavLink>
                </div>
                <div className="col-span-2 mb-4">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Account;