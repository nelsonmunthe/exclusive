import { useEffect, useState } from "react"
import { Upload } from "../../interfaces/common"
import { createProduct, getCategories, upload } from "../../apiCall/auth"
import { NewProduct } from "../../interfaces/product"
import { useNavigate } from "react-router-dom"
import { enqueueSnackbar } from "notistack"
import { Category } from "../../interfaces/category"

const useProduct = () => {
    const navigate = useNavigate()
    const [images, setImages] = useState<Upload[]>([])
    const [categories, setCategories] = useState<Category[]>([])

    const [product, setProduct] = useState<NewProduct>({
        name: "",
        description: "",
        category_id: 0,
        rating: 0,
        price: 0,
        discount: 0,
        total: 0,
        flash_sell: false,
        wishList: false,
        images: ""
    })

    const createCagetory = (id: number, name: string, description: string):Category =>{
        return {
            id,
            name,
            description
        }
    }

    const fetchCategories = async () => {
        try {
            const response = await getCategories()
            if(response){
                const categories = response.data.data.map((item:Category) => {
                    return createCagetory(item.id, item.name, item.description)
                })
                setCategories(categories)
            }
        } catch (error) {
            enqueueSnackbar("Get categories Failed", {variant: "error"})
        }
    }

    useEffect(() => {
        fetchCategories()
    }, [])

    const onRemoveImage = (fileName: string) => {
        const updateProducts = images.filter((item) => {
            if(fileName !== item.fileName) return item
        })
        setImages(updateProducts)
    }

    const uploadImageProduct = async (event: React.ChangeEvent<HTMLInputElement>) => {
        try {
            const file = event.target.files
            if(!file) return

            let formData = new FormData();

            const image : Upload = {
                isUploading: true,
                totalSize: file[0].size,
                currentSize: file[0].size,
                fileName: file[0].name,
                url: ""
            }

            setImages(prev => {
                return [
                    ...prev, 
                    image
                ]
            })

            formData.append('image', file[0])
            const response =  await upload(formData)
            
            if(response){

                setImages(prev => {
                    const images = prev.map(item => {
                        if(item.fileName === image.fileName) {
                            const fileName = response.data.data.split('/')[2];
                            item.isUploading = false;
                            item.fileName = fileName;
                            item.url = response.data.data
                            return item
                        } else {
                            return item
                        }
                    })
                    return images
                })
            }
            
            
        } catch (error) {
            console.log(error)
        }
    }

    const onCreateProduct = async () => {
        try {
            const data:NewProduct = {
                ...product,
                images : JSON.stringify(images.map(item => item.url))
            }
            
            const response = await createProduct(data);
            if(response) {
                enqueueSnackbar("Create Product Suceeded", {variant: "success"})
                navigate('/')
            }

        } catch (error) {
            enqueueSnackbar("Create Product Failed", {variant: "error"})
        }
    }

    const onChangeDataProduct = (
            field: string, 
            event : React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
            dataType: 'string' | 'number'
    ) => {
        
        setProduct(prev => {
            return{
                ...prev,
                [field]: dataType === 'number' ? Number(event.target.value) : event.target.value
            }
        })
    }

    return {
        images,
        onRemoveImage,
        uploadImageProduct,
        onCreateProduct,
        product,
        onChangeDataProduct,
        categories
    }
}

export default useProduct