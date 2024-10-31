import { useEffect, useState } from "react";
import { getFlashSales } from "../../apiCall/product";
import { ProductDetail } from "../../interfaces/product";
import { useTypedSelector } from "../../store/store";

const useFlashSale = () => {
    const [flashSales, setFlashSales] = useState<ProductDetail[]>([])
    const wishList = useTypedSelector(state => state.wishList.products);

    useEffect(() => {
        const products : ProductDetail[] =  flashSales.map((item: ProductDetail) => {
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
                const product = response?.data?.data.map((item: ProductDetail) => {
                    item.images = JSON.parse(item.images)
                    const isWishList = wishList.find(wishListItem => wishListItem.id === item.id);
                    if(isWishList) {
                        return {
                            ...item,
                            wishList: true
                        }
                    } else {
                        return{
                            ...item,
                            wishList: false
                        }
                    }
                })
                setFlashSales(product)
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