import { Button, Typography } from "@mui/material";
import BarSign from "../../component/BarSign";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ProductCard from "../../component/productCard";
import useFlashSale from "./useFlashSale";

const FlashSale = () => {
    const { flashSales } = useFlashSale()
    const product  = {
        "id": 4,
        "name": "S-Series Comfort Chair ",
        "description": "S-Series Comfort Chair ",
        "category": 4,
        "image_Url": "/static/chair.png",
        "rating": 8.8,
        "price": 400,
        "discount": 25,
        "total": 100,
        "flash_sell": true
    }
    return(
        <div className=" flex flex-col justify-start my-2 p-2 gap-2">
            <div className="fle flex-col justify-start my-2">
                <BarSign  description="Today’s"/>
                <div className="flex gap-x-2 mt-2 w-full justify-between">
                   <div className="flex gap-x-1 md:gap-x-2">
                        <p className="font-semibold text-sm">Flash Sales</p>
                        <div className="flex gap-x-1 items-center " >
                            <div className="fle flex-col">
                                <p className="text-sm">Days</p>
                                <p className="text-sm"><strong>03</strong></p>
                            </div>
                            <p className="text-[#E07575] text-sm"><small>:</small></p>
                            <div className="fle flex-col">
                                <p className="text-sm">Hours</p>
                                <p className="text-sm"><strong>23</strong></p>
                            </div>
                            <p className="text-[#E07575] text-sm"><small>:</small></p>
                            <div className="fle flex-col">
                                <p className="text-sm">Minutes</p>
                                <p className="text-sm"><strong>19</strong></p>
                            </div>
                            <p className="text-[#E07575] text-sm"><small>:</small></p>
                            <div className="fle flex-col">
                                <p className="text-sm">Seconds</p>
                                <p className="text-sm"><strong>56</strong></p>
                            </div>
                        </div>
                   </div>
                    <div className="flex gap-x-1">
                        <div className="bg-[#F5F5F5] flex items-center justify-center hover:cursor-pointer rounded-xl w-[30px] h-[30px]"> 
                            <ArrowBackIcon sx={{fontSize: 20}}  className="text-sm"/>
                        </div>
                        <div className="bg-[#F5F5F5] flex items-center justify-center hover:cursor-pointer rounded-xl w-[30px] h-[30px]"> 
                            <ArrowForwardIcon sx={{fontSize: 20}} className="text-sm"/>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {
                    flashSales.map((item, index) => {
                        return <ProductCard  product={item} key={item.id}/>
                    })
                }
                
            </div>
            <div className="flex justify-center items-center">
                <button
                    className="flex bg-[#DB4444] py-1 px-2 rounded-sm text-white"
                >
                    View All Products
                </button>
            </div>
        </div>
    )
}

export default FlashSale;