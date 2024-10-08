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
        <div className="px-[100px] flex flex-col justify-start mb-4">
            <div className="fle flex-col justify-start">
                <BarSign  description="Today’s"/>
                <div className="flex gap-x-2 mt-2 w-full justify-between">
                   <div className="flex">
                        <Typography fontSize={20} sx={{fontWeight: 500}}>Flash Sales</Typography>
                        <div className="flex gap-x-2 ml-10" >
                            <div className="fle flex-col">
                                <Typography fontSize={14}>Days</Typography>
                                <Typography fontSize={16} sx={{fontWeight: 700}}>03</Typography>
                            </div>
                            <div className="flex items-center justify-center">
                                <Typography sx={{color: "#E07575"}}>:</Typography>
                            </div>
                            <div className="fle flex-col">
                                <Typography fontSize={14}>Hours</Typography>
                                <Typography fontSize={16} sx={{fontWeight: 700}}>23</Typography>
                            </div>
                            <div className="flex items-center justify-center">
                                <Typography sx={{color: "#E07575"}}>:</Typography>
                            </div>
                            <div className="fle flex-col">
                                <Typography fontSize={14}>Minutes</Typography>
                                <Typography fontSize={16} sx={{fontWeight: 700}}>19</Typography>
                            </div>
                            <div className="flex items-center justify-center">
                                <Typography sx={{color: "#E07575"}}>:</Typography>
                            </div>
                            <div className="fle flex-col">
                                <Typography fontSize={14}>Seconds</Typography>
                                <Typography fontSize={16} sx={{fontWeight: 700}}>56</Typography>
                            </div>
                        </div>
                   </div>
                    <div className="flex gap-x-2">
                        <div className="bg-[#F5F5F5] flex items-center justify-center hover:cursor-pointer rounded-xl w-[30px] h-[30px]"> 
                            <ArrowBackIcon sx={{fontSize: 20}} />
                        </div>
                        <div className="bg-[#F5F5F5] flex items-center justify-center hover:cursor-pointer rounded-xl w-[30px] h-[30px]"> 
                            <ArrowForwardIcon sx={{fontSize: 20}} />
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="flex justify-between gap-x-4">
                {
                    flashSales.map(item => {
                        return <ProductCard  product={item}/>
                    })
                }
                
            </div>
            <div className="flex justify-center items-center">
                <Button
                      sx={{bgcolor: "#DB4444", color : "white", textTransform: 'none', marginTop: "10px"}} 
                >
                    View All Products
                </Button>
            </div>
        </div>
    )
}

export default FlashSale;