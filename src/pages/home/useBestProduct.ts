import { useEffect, useState } from "react";
import { Product } from "../../interfaces/product";
import { getBestProducts } from "../../apiCall/auth";
import { useTypedSelector } from "../../store/store";

const useBestProduct = () => {
    const [bestProduct, setBestProduct] = useState<Product[]>([]);
    const wishList = useTypedSelector(state => state.wishList.Products)

    useEffect(() => {
        const products : Product[] =  bestProduct.map((item: Product) => {
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

        setBestProduct(products)
    }, [wishList])
    
    const fetchingBestProduct = async() => {
        try {
            const response = await getBestProducts();
            if(response) {
                const product = response?.data?.data.map((item: Product) => {
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
                setBestProduct(product)
            }
        } catch (error) {
            console.log("error", error)
        }
    }

    useEffect(() => {
        fetchingBestProduct()
    }, [])

    return {
        bestProduct
    }
}

export default useBestProduct;