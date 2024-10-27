import { useEffect, useState } from "react";
import { getFlashSales } from "../../apiCall/auth";
import { Product } from "../../interfaces/product";
import { useTypedSelector } from "../../store/store";

const useFlashSale = () => {
    const [flashSales, setFlashSales] = useState<Product[]>([])
    const wishList = useTypedSelector(state => state.wishList.Products);

    useEffect(() => {
        const products : Product[] =  flashSales.map((item: Product) => {
            const isWishList = wishList.find(wishListItem => wishListItem.id === item.id);
            if(isWishList) {
                return {
                    ...item,
                    wishList: true
                }
            }  else {
                return {
                    ...item,
                    wishList: false
                }
            }
        })

        setFlashSales(products)
    }, [wishList])
    
    const getAllFlashSales = async () => {
        try {
            const response =  await getFlashSales();
            if(response){
                setFlashSales(response.data.data)
            }
        } catch (error) {
            
        }
    }

    useEffect(() => {
        getAllFlashSales();
    }, [])

    return {
        flashSales
    }

};

export default useFlashSale;