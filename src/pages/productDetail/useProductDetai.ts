import { useParams } from "react-router-dom"
import { productDetail } from "../../apiCall/auth"
import { useEffect, useState } from "react"
import { Product, ProductDetail } from "../../interfaces/product";

const useProductDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState<ProductDetail>({
        id: 0,
        name: '',
        description: '',
        category_id: 0,
        rating: 0,
        price: 0,
        discount: 0,
        total: 0,
        flash_sell: false,
        wishList: false,
        images: [],
    })

    const getProductDetail = async () => {
        try {
            const response = await productDetail(Number(productId))
            if(response){
                response.data.data.images= JSON.parse(response.data.data.images)
                // JSON.parse(images)
                const product:ProductDetail = response.data.data;
                setProduct(product)
            }
        } catch (error) {
            
        }
    }

    useEffect(() => {
        getProductDetail()
    }, [])

    return{
        product
    }
}

export default useProductDetail