import { useEffect, useState } from "react";
import { getFlashSales } from "../../apiCall/auth";
import { Product } from "../../interfaces/product";

const useFlashSale = () => {
    const [flashSales, setFlashSales] = useState<Product[]>([])
    
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