import { useEffect, useState } from "react";
import { products } from "../../apiCall/product";
import { Pagination } from "../../interfaces/common";
import { ProductDetail } from "../../interfaces/product";
import usePagination from "../../hooks/usePagination";

const useProduct = () => {
    const{
        paginate,
        isFirstPage, 
        isLastPage,
        setPaginate
    } = usePagination()

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

    const getProducts = async(paginate: Pagination) => {
        try {
            const response = await products(paginate);
            if(response){
               
                const products = response.data.data.data.map((item: ProductDetail) => {
                    const images : string[] = JSON.parse(item.images)
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
                        images
                    )
                })
                setProduct(products)
                setPaginate(prev => {
                    return{
                        ...prev,
                        total: response?.data?.data?.total
                    }
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    const onHandleNextPage = async () => {
        if(isLastPage) return
        setPaginate(prev => {
            return{
                ...prev,
                page : prev.page + 1
            }
        })
        await getProducts({page: paginate.page + 1, perPage: paginate.perPage, total:paginate.total})
    }

    const onHandlePrevPage = async () => {
        if(isFirstPage) return
        setPaginate(prev => {
            return{
                ...prev,
                page : prev.page - 1
            }
        })
        await getProducts({page: paginate.page - 1, perPage: paginate.perPage, total:paginate.total})
    }
    

    useEffect(() => {
        getProducts(paginate)
    }, [])

    return{
        product,
        isFirstPage,
        isLastPage,
        onHandleNextPage,
        onHandlePrevPage
    }
}

export default useProduct;