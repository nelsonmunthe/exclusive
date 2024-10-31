import { useState } from "react";
import { products } from "../../apiCall/product";
import { Pagination } from "../../interfaces/common";
import { ProductDetail } from "../../interfaces/product";


const useProduct = () => {
    const [paginate, setPaginate] = useState<Pagination>({page: 0, perPage: 10})
    const [product, setProduct] = useState<ProductDetail[]>([])

    const createProduct = (
        id: number, 
        name: string, 
        description: string,
        category_id: number,
        rating: number,
        price: number,
        discount: number,
        total: number,
        flash_sell: boolean,
        wishList: boolean,
        images: string[]
        ) : ProductDetail => {
        return {
            id,
            name,
            description,
            category_id,
            rating,
            price,
            discount,
            total,
            flash_sell,
            wishList,
            images
        }
    }

    const getProducts = async() => {
        try {
            const response = await products(paginate);
            if(response){
                const products = response.data.data.map((item: ProductDetail) => {
                    // const images : string[] = JSON.parse(item.images)
                    return createProduct(
                        item.id,
                        item.name,
                        item.description,
                        item.category_id,
                        item.rating,
                        item.price,
                        item.discount,
                        item.total,
                        item.flash_sell,
                        item.wishList,
                        item.images
                    )
                })

                setProduct(products)
            }
        } catch (error) {
            
        }
    }

    return{
        product
    }
}

export default useProduct;