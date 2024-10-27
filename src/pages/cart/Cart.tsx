import { Typography } from "@mui/material";
import will_smith from "../../assets/images/will_smith.png"
import useCart from "./useCart";

const Cart = () => {
    const { wishList } = useCart();
    
    return(
        <div className="flex flex-col my-10 gap-y-4 p-2">
            <div className="flex justify-between items-center px-1  border border-gray-200  md:px-4 py-2">
                <p className="flex-1">Product</p>
                <p className="flex-1">Price</p>
                <p className="flex-1">Quantity</p>
                <p className="flex-1">Subtotal</p>
            </div>
            {
                wishList.map(item => {
                    return (
                        <div className="flex justify-between items-center px-1 border border-gray-200 md:px-4 py-2">
                            <div className="flex justify-start items-center gap-x-2 flex-1">
                                <img src={`http://localhost:8888${item.image_Url}`} alt="will_smith" className="h-10"/>
                                <p className="text-sm text-gray-500">{item.name}</p>
                            </div>
                            <p className="text-sm text-gray-500 flex-1">$${item.price}</p>
                            <div className="flex justify-start flex-1">
                                <input type="number" value={650} className="w-14 border border-gray-200 p-1 text-sm"/>
                            </div>
                            <p className="text-sm text-gray-500 flex-1">$${item.total}</p>
                        </div>
                    )
                })
            }

           
            <div className="flex justify-between ">
                <button
                    className="text-sm border border-gray-600 rounded-md px-4 py-2"
                >
                    Return To Shop
                </button>
                <button
                    className="text-sm border border-gray-600 rounded-md px-4 py-2"
                >
                    Update Cart
                </button>
            </div>
            <div className="grid grid-cols-1 gap-x-2 md:grid-cols-2 gap-y-2 mt-4">
                <div>
                    <div className="flex gap-x-2 justify-between lg:justify-start w-full">
                        <input  type="text" placeholder="Coupon Code" className="border border-gray-200 text-sm px-4 py-2 rounded-md"/>
                        <button
                            className="bg-[#DB4444] py-2 px-3 rounded-md text-white text-sm"
                        >
                            Apply Coupon
                        </button>
                    </div>
                </div>
                <div className="flex flex-col border border-gray-600 rounded-md px-2 py-3 gap-y-2">
                    <p className="text-md">Cart Total</p>
                    <div className="flex justify-between">
                        <p className="text-sm text-gray-600">Subtotal:</p>
                        <p className="text-sm text-gray-600">$1750</p>
                    </div>
                    <p className="border border-gray-200"></p>
                    <div className="flex justify-between">
                        <p className="text-sm text-gray-600">Shipping:</p>
                        <p className="text-sm text-gray-600">Free</p>
                    </div>
                    <p className="border border-gray-200"></p>
                    <div className="flex justify-between">
                        <p className="text-sm text-gray-600">Total:</p>
                        <p className="text-sm text-gray-600">$1750</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <button
                            className="bg-[#DB4444] py-2 px-3 rounded-md text-white text-sm"
                        >
                            Procees to checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;