import will_smith from "../../assets/images/will_smith.png"
import Visa from "../../assets/images/Visa.png"
import CardVisa from "../../assets/images/image 32.png"
import Mastercard from "../../assets/images/Mastercard.png"
import Nagad from "../../assets/images/Nagad.png"

const Billing = () => {
    return(
       <div className="flex flex-col my-4 sm:my-8 p-2 lg:mx-20">
            <h4 className="font-semibold text-lg">Billing Details</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 lg:gap-20">
                <div className="flex flex-col gap-y-2">
                    <div className="flex flex-col">
                        <div className="flex">
                            <label htmlFor="First Name" className="text-sm text-gray-600">First Name</label>
                            <label htmlFor="required" className="text-red-600">*</label>
                        </div>
                        <input 
                            required
                            className="bg-gray-100 rounded-sm p-1"
                        />

                    </div>
                    <div className="flex flex-col">
                        <div className="flex">
                            <label htmlFor="Company Name" className="text-sm text-gray-600">Company Name</label>
                            <label htmlFor="required" className="text-red-600">*</label>
                        </div>
                        <input 
                            required
                            className="bg-gray-100 rounded-sm p-1"
                        />

                    </div>
                    <div className="flex flex-col">
                        <div className="flex">
                            <label htmlFor="Streed Address" className="text-sm text-gray-600">Streed Address</label>
                            <label htmlFor="required" className="text-red-600">*</label>
                        </div>
                        <input 
                            required
                            className="bg-gray-100 rounded-sm p-1"
                        />

                    </div>
                    <div className="flex flex-col">
                        <div className="flex">
                            <label htmlFor="Apartment, floor, etc. (optional)" className="text-sm text-gray-600">Apartment, floor, etc. (optional)</label>
                        </div>
                        <input 
                            className="bg-gray-100 rounded-sm p-1"
                        />

                    </div>
                    <div className="flex flex-col">
                        <div className="flex">
                            <label htmlFor="Town/City" className="text-sm text-gray-600">Town/Cit*</label>
                            <label htmlFor="required" className="text-red-600">*</label>
                        </div>
                        <input 
                            required
                            className="bg-gray-100 rounded-sm p-1"
                        />

                    </div>
                    <div className="flex flex-col">
                        <div className="flex">
                            <label htmlFor="Phone Number" className="text-sm text-gray-600">Phone Number</label>
                            <label htmlFor="required" className="text-red-600">*</label>
                        </div>
                        <input 
                            required
                            className="bg-gray-100 rounded-sm p-1"
                        />

                    </div>
                    <div className="flex flex-col">
                        <div className="flex">
                            <label htmlFor="Email Address" className="text-sm text-gray-600">Email Address</label>
                            <label htmlFor="required" className="text-red-600">*</label>
                        </div>
                        <input 
                            required
                            className="bg-gray-100 rounded-sm p-1"
                        />

                    </div>
                </div>
                <div className="flex flex-col gap-y-2">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-x-2 items-center">
                            <img src={will_smith} className="h-10"/>
                            <p className="text-sm text-gray-700">LCD Monitor</p>
                        </div>
                        <p className="text-sm text-gray-700">$650</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-x-2 items-center">
                            <img src={will_smith} className="h-10"/>
                            <p className="text-sm text-gray-700">LCD Monitor</p>
                        </div>
                        <p className="text-sm text-gray-700">$650</p>
                    </div>
                    <div className="flex justify-between">
                        <label htmlFor="Subtotal" className="text-sm text-gray-700">Subtotal:</label>
                        <p className="text-sm text-gray-700">$1750</p>
                    </div>
                    <p className="border border-gray-300"></p>
                    <div className="flex justify-between">
                        <label htmlFor="Shipping" className="text-sm text-gray-700">Shipping:</label>
                        <p className="text-sm text-gray-700">Free</p>
                    </div>
                    <p className="border border-gray-300"></p>
                    <div className="flex justify-between">
                        <label htmlFor="Total" className="text-sm text-gray-700">Total:</label>
                        <p className="text-sm text-gray-700">$1750</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-x-2">
                            <input  type="radio"/>
                            <label htmlFor="Bank" className="text-sm text-gray-700">Bank</label>
                        </div>
                        <div className="flex gap-x-1">
                            <img src={CardVisa} alt="" />
                            <img src={Visa} alt="" />
                            <img src={Mastercard} alt="" />
                            <img src={Nagad} alt="" />
                        </div>
                    </div>
                    <div className="flex justify-start items-center gap-x-2">
                        <input type="radio" /> 
                        <label htmlFor="Cash on delivery" className="text-sm text-gray-700">Cash on delivery</label>
                    </div>
                    <div className="flex justify-between gap-x-2">
                        <input 
                            type="text" 
                            placeholder="Coupon Code"
                            className="border border-gray-400 p-1 rounded-sm w-[50%]"
                        />
                        <button
                            className="text-white py-1 px-2 bg-[#DB4444] rounded-md text-sm flex-1"
                        >
                            Apply Coupon
                        </button>
                    </div>
                    <button
                        className="text-white py-1 px-2 bg-[#DB4444] rounded-md text-sm mt-2"
                    >
                        Place Order
                    </button>
                </div>
            </div>
       </div>
    )
}

export default Billing;