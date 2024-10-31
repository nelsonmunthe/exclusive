import useCart from "./useCart";
import CustomButton from "../../component/CustomButton";

const Cart = () => {
    const { 
        products,
        totalPrice,
        onChangeNumberProduct
     } = useCart();
    
    return(
        <div className="flex flex-col my-10 gap-y-4 p-2">
            <div className="flex justify-between items-center px-1  border border-gray-200  md:px-4 py-2">
                <p className="flex-1 text-sm font-semibold">Product</p>
                <p className="flex-1 text-sm font-semibold">Price</p>
                <p className="flex-1 text-sm font-semibold">Quantity</p>
                <p className="flex-1 text-sm font-semibold">Subtotal</p>
            </div>
            {products.length >= 1 && products.map(item => {
                return (
                    <div className="flex justify-between items-center px-1 border border-gray-200 md:px-4 py-2">
                        <div className="flex justify-start items-center gap-x-2 flex-1 text-sm font-semibold">
                            <img src={`http://localhost:8888${item.images[0]}`} alt="will_smith" className="h-10"/>
                            <p className="text-sm text-gray-500">{item.name}</p>
                        </div>
                        <p className="text-sm text-gray-500 flex-1">${item.price}</p>
                        <div className="flex justify-start flex-1">
                            <input 
                                type="number" 
                                value={item.quantity} 
                                className="w-14 border border-gray-200 p-1 text-sm"
                                onChange={(event) => onChangeNumberProduct(item.id, event)}
                                min={0}
                            />
                        </div>
                        <p className="text-sm text-gray-500 flex-1">${item.totalPrice}</p>
                    </div>
                )
            })}
            { products.length === 0 && (
                <div className="flex justify-center items-center py-4">
                    <p className="text-gray-500 font-semibold text-lg">You don't have Wish List product</p>
                </div>
            )

            }           
            <div className="flex justify-between ">
                <CustomButton 
                    style="text-sm border border-gray-600 rounded-md px-4 py-2"
                    description="Return To Shop"
                />

                <CustomButton 
                    style="text-sm border border-gray-600 rounded-md px-4 py-2"
                    description="Update Cart"
                />

            </div>
            <div className="grid grid-cols-1 gap-x-2 md:grid-cols-2 gap-y-2 mt-4">
                <div>
                    <div className="flex gap-x-2 justify-between lg:justify-start w-full">
                        <input  type="text" placeholder="Coupon Code" className="border border-gray-200 text-sm px-4 py-2 rounded-md"/>
                        <CustomButton 
                            style="bg-[#DB4444] py-2 px-3 rounded-md text-white text-sm"
                            description="Apply Coupon"
                        />
                    </div>
                </div>
                <form className="flex flex-col border border-gray-600 rounded-md px-2 py-3 gap-y-2">
                    <p className="text-md">Cart Total</p>
                    <div className="flex justify-between">
                        <p className="text-sm text-gray-600">Subtotal:</p>
                        <p className="text-sm text-gray-600">${totalPrice}</p>
                    </div>
                    <p className="border border-gray-200"></p>
                    <div className="flex justify-between">
                        <p className="text-sm text-gray-600">Shipping:</p>
                        <p className="text-sm text-gray-600">Free</p>
                    </div>
                    <p className="border border-gray-200"></p>
                    <div className="flex justify-between">
                        <p className="text-sm text-gray-600">Total:</p>
                        <p className="text-sm text-gray-600">${totalPrice}</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <CustomButton 
                            type="submit"
                            style="bg-[#DB4444] py-2 px-3 rounded-md text-white text-sm"
                            description="Procees to checkout"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Cart;