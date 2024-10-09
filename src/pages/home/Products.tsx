import { Typography } from "@mui/material"
import BarSign from "../../component/BarSign"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Products = () => {
    return(
        <div className="flex flex-col px-[100px] mb-6 gap-y-2">
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
        </div>
    )
}

export default Products