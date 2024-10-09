import { useEffect, useState } from "react";
import { Product } from "../../interfaces/product";
import { getBestProducts } from "../../apiCall/auth";

const useBestProduct = () => {
    const [bestProduct, setBestProduct] = useState<Product[]>([]);

    const fetchingBestProduct = async() => {
        try {
            const response = await getBestProducts();
            if(response) {
                setBestProduct(response.data.data)
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