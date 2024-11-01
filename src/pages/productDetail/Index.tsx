import start1 from "../../assets/images/start.png"
import start2 from "../../assets/images/Vector start 2.png"
import iconReturn from "../../assets/images/iconReturn.png"
import iconCar from "../../assets/images/iconCar.png"
import useProductDetail from "./useProductDetai"
import CustomButton from "../../component/CustomButton"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const ProductDetail = () => {
    const {
        product, 
        currentImage,
        onChangeImage,
        onAddProductQuantity,
        onRemoveProductQuantity,
        isWisthList,
        onNavigateToCartPage
    } = useProductDetail()
   
    return(
        <div className="grid grid-cols-1 md:grid-cols-6 p-2 gap-y-6 my-4">
            <div className="flex justify-between gap-1 md:flex-col items-center overflow-auto max-h-[500px]">
                {
                    product.images.map((item:any, index:number) => {
                        return <img 
                            key={index}
                            src={`http://localhost:8888${item}`} 
                            alt="" 
                            className="w-12 md:w-28 object-contain bg-gray-200 rounded-md hover:cursor-pointer"
                            onClick={() => onChangeImage(index)}
                        />
                    })
                }
            </div>
            <div className="flex justify-center items-center md:col-span-3 w-full">
                <img src={`http://localhost:8888${currentImage}`} alt="" className="object-cover  rounded-lg"/>
            </div>
            <div className="flex flex-col justify-center gap-y-2 md:col-span-2">
                <h3 className="font-semibold">{product.name}</h3>
                <div className="flex gap-x-1">
                    <div className="flex gap-x-1">
                        <img src={start1}/>
                        <img src={start1}/>
                        <img src={start1}/>
                        <img src={start1}/>
                        <img src={start2}/>
                    </div>
                    <p className="text-sm text-gray-400">({product.rating} Reviews)</p>
                    <p className="text-sm text-gray-400">|</p>
                    <p 
                        className={`text-sm ${product.total > 0 ? "text-green-400" : "text-red-400"}`}
                    >
                        {product.total > 0 ? "In Stock" : "Out of Stock"}
                    </p>
                </div>
                <p className="text-lg font-semibold">${product.price}</p>
                <p className="text-sm">{product.description}</p>
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
                            <p 
                                className="py-1 px-3 border-y  border-y-gray-400 border-l border-l-gray-400 hover:cursor-pointer"
                                onClick={() => onRemoveProductQuantity(product.quantity)}
                            >
                                -
                            </p>
                            <p className="py-1 px-6 border border-gray-400">{product.quantity}</p>
                            <p 
                                className="py-1 px-3 bg-[#DB4444] text-white text-xl rounded-tr-md rounded-br-md hover:cursor-pointer"
                                onClick={() => onAddProductQuantity(product.quantity)}
                            >
                                +
                            </p>
                        </div>
                        <CustomButton 
                            style="bg-[#DB4444] text-white text-sm py-2 px-4 rounded-md"
                            description="Buy Now"
                            onHandleClick={onNavigateToCartPage}
                        />
                    </div>
                    <div className="flex justify-center items-center border border-gray-400 p-1 rounded-md hover:cursor-pointer">
                        <FavoriteBorderIcon  className={`${isWisthList ? "text-[#DB4444]" : ""}`}/>
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