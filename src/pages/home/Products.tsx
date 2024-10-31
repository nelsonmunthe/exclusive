import { Typography } from "@mui/material"
import BarSign from "../../component/BarSign"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import useBestProduct from "./useBestProduct";
import ProductCard from "../../component/productCard";
import useProduct from "./useProdcuts";

const Products = () => {
    const { 
        product
    } = useProduct()

    const {
        bestProduct,
    } = useBestProduct();

    return(
        <div className="flex flex-col gap-2 my-4">
            <BarSign description="Our Products"/>
            <div className="flex justify-between items-center">
                <Typography fontSize={18} style={{color: 'black', fontWeight: 500}}>Explore Our Products</Typography>
                <div className="flex gap-x-2">
                    <div className="bg-[#F5F5F5] flex items-center justify-center hover:cursor-pointer rounded-xl w-[30px] h-[30px]"> 
                        <ArrowBackIcon sx={{fontSize: 20}} />
                    </div>
                    <div className="bg-[#F5F5F5] flex items-center justify-center hover:cursor-pointer rounded-xl w-[30px] h-[30px]"> 
                        <ArrowForwardIcon sx={{fontSize: 20}} />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {
                    product.map((item, index) => {
                        return <ProductCard  product={item} key={index}/>
                    })
                }
            </div>
        </div>
    )
}

export default Products