import { useEffect, useState } from "react"
import { getCategories } from "../../apiCall/common"
import { Category } from "../../interfaces/category"

const useSlider = () => {
    const [categories, setCategories] = useState<Category[]>([])

    const getAllCategories = async () => {
        try {
            const response = await getCategories();
            if(response){
                setCategories(response?.data?.data)
            }
        } catch (error) {
            console.log('error', error)
        }
    }

    useEffect(() => {
        getAllCategories()
    }, [])

    return {
        categories
    }
}

export default useSlider