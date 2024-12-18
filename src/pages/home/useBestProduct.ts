import { useEffect, useState } from "react";
import { ProductDetail } from "../../interfaces/product";
import { getBestProducts } from "../../apiCall/product";
import { useTypedSelector } from "../../store/store";

const useBestProduct = () => {
    const [bestProduct, setBestProduct] = useState<ProductDetail[]>([]);
    const wishList = useTypedSelector(state => state.wishList.products)

    useEffect(() => {
        const products : ProductDetail[] =  bestProduct.map((item: ProductDetail) => {
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