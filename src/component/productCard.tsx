import { Typography } from "@mui/material"
import { Product } from "../interfaces/product"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import star from "../assets/images/start.png"
import useWisthList from "../pages/hooks/useWisthList";

type ProductProps = {
    product : Product
}

const ProductCard = ({ product} : ProductProps) => {
   const { onHandleWishList } = useWisthList();

    const rating = Math.ceil(product.rating / 2)
    let stars : any[] = [];
    
    for(let i = 1; i <= rating; i++){
        stars.push(<img src={star.toString()} />)
    }

    return(
        <div className="flex flex-col gap-x-1 w-full">
            <div className="bg-[#F5F5F5] flex flex-col rounded-md p-2 gap-y-2 h-[230px]">
                <div className="flex justify-between">
                    <div className="bg-[#DB4444] w-[60px] rounded-sm flex items-center justify-center ">
                        <Typography fontSize={12} sx={{color: "white"}}>-{product.discount}%</Typography>
                    </div>
                    <div className={`flex items-center justify-center bg-white rounded-2xl p-1"`}>
                        <FavoriteBorderIcon  
                            sx={{color: `${product.wishList ? "#DB4444" : "black"}`}} 
                            className="hover:cursor-pointer"
                            onClick={() => {
                                onHandleWishList(product)
                            }}
                        />
                    </div>
                </div>
                <div className="flex justify-between">
                   <div className="flex-1 flex justify-center items-center">
                        <img  src={`http://localhost:8888${product.image_Url}`} alt={product.description}/>
                   </div>
                    <div className="flex bg-white items-start justify-center rounded-2xl p-1 max-h-8 object-fill">
                        <RemoveRedEyeOutlinedIcon   className="hover:cursor-pointer"/>
                    </div>
                </div>

            </div>
            <div className="flex flex-col">
                <Typography fontSize={12}>{product.description}</Typography>
                <div className="flex gap-x-2">
                    <Typography style={{color: "#DB4444"}} fontSize={10}>${product.price - (product.discount*product.price/100)}</Typography>
                    <Typography style={{color: "#7D8184"}} fontSize={10} className="line-through">${product.price}</Typography>
                </div>
                <div className="flex justify-start items-center">
                  {stars}
                  <Typography fontSize={10} className="ml-4">{product.rating.toFixed(2)}</Typography>
                </div>
                
            </div>

        </div>
    )
}

export default ProductCard;