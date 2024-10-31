import image1 from "../../assets/images/image 57.png"
import image2 from "../../assets/images/image 58.png"
import image3 from "../../assets/images/image 59.png"
import image4 from "../../assets/images/image 61.png"
import image5 from "../../assets/images/image 63.png"
import start1 from "../../assets/images/start.png"
import start2 from "../../assets/images/Vector start 2.png"
import iconHeart from "../../assets/images/iconHeart.png"
import iconReturn from "../../assets/images/iconReturn.png"
import iconCar from "../../assets/images/iconCar.png"
import { useEffect, useState } from "react"
import useProductDetail from "./useProductDetai"

const ProductDetail = () => {
    const {
        product
    } = useProductDetail()

    const [currentImage, setCurrentImage] = useState<string | null>(null)

    const onChangeImage = (index: number) => {
        setCurrentImage(product.images[index])
    }

    useEffect(() => {
        setCurrentImage(product.images[0])
    }, [product])

    return(
        <div className="grid grid-cols-1 md:grid-cols-6 p-2 gap-y-6 my-4">
            <div className="flex justify-between gap-1 md:flex-col items-center">
                {
                    product.images.map((item, index) => {
                        return <img 
                            key={index}
                            src={`http://localhost:8888${item}`} 
                            alt="" 
                            className="w-12 md:w-28 object-contain bg-gray-200 rounded-md hover:cursor-pointer"
                            onClick={(event) => onChangeImage(index)}
                        />
                    })
                }
            </div>
            <div className="flex justify-center items-center md:col-span-3">
                <img src={`http://localhost:8888${currentImage}`} alt="" className="object-fill md:w-[300px]"/>
            </div>
            <div className="flex flex-col justify-center gap-y-2 md:col-span-2">
                <h3 className="font-semibold">Havic HV G-92 Gamepad</h3>
                <div className="flex gap-x-1">
                    <div className="flex gap-x-1">
                        <img src={start1}/>
                        <img src={start1}/>
                        <img src={start1}/>
                        <img src={start1}/>
                        <img src={start2}/>
                    </div>
                    <p className="text-sm text-gray-400">(150 Reviews)</p>
                    <p className="text-sm text-gray-400">|</p>
                    <p className="text-sm text-green-400">In Stock</p>
                </div>
                <p className="text-lg font-semibold">$192.00</p>
                <p className="text-sm">PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
                <p className="border border-gray-300"></p>
                <div className="flex gap-x-1">
                    <label htmlFor="Colours">Colours:</label>
                    <div className="bg-black rounded-full flex items-center justify-center p-1">
                        <div className="rounded-full bg-blue-400 p-2"></div>
                    </div>
                    <div className="bg-black rounded-full flex items-center justify-center p-1">
                        <div className="rounded-full bg-red-400 p-2"></div>
                    </div>
                </div>
                <div className="flex items-center gap-x-2">
                    <label htmlFor="Size">Size:</label> 
                    <div className="flex items-center gap-x-1">
                        <p className="text-sm border border-gray-200 w-6 text-center">XS</p>
                        <p className="text-sm border border-gray-200 w-6 text-center">S</p>
                        <p className="text-sm border border-gray-200 w-6 text-center">M</p>
                        <p className="text-sm border border-gray-200 w-6 text-center">L</p>
                        <p className="text-sm border border-gray-200 w-6 text-center">XL</p>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex gap-x-4 items-center">
                        <div className="flex items-center">
                            <p className="py-1 px-3 border-y  border-y-gray-400 border-l border-l-gray-400 hover:cursor-pointer">-</p>
                            <p className="py-1 px-6 border border-gray-400">2</p>
                            <p className="py-1 px-3 bg-[#DB4444] text-white text-xl rounded-tr-md rounded-br-md hover:cursor-pointer">+</p>
                        </div>
                        <button
                            className="bg-[#DB4444] text-white text-sm py-2 px-4 rounded-md"
                        >
                            Buy Now
                        </button>
                    </div>
                    <div className="flex justify-center items-center border border-gray-400 p-2 rounded-md hover:cursor-pointer">
                        <img src={iconHeart} alt="wish-list"/>
                    </div>
                </div>
                <div className="border border-gray-300 flex flex-col py-2 rounded-md">
                    <div className="flex px-2">
                        <img src={iconCar}/>
                        <div className="flex flex-col gap-x-2">
                            <h5 className="text-sm font-semibold">Free Delivery</h5>
                            <p className="text-sm">Enter your postal code for Delivery Availability</p>
                        </div>
                    </div>
                    <p className="border border-gray-300 my-4"></p>
                    <div className="flex px-2">
                        <img src={iconReturn}/>
                        <div className="flex flex-col gap-x-2">
                            <h5 className="text-sm font-semibold">Return Delivery</h5>
                            <p className="text-sm">Free 30 Days Delivery Returns. Details</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail