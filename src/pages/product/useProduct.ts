import { useEffect, useState } from "react"
import { Upload } from "../../interfaces/common"
import { createProduct, upload } from "../../apiCall/product"
import { NewProduct } from "../../interfaces/product"
import { useNavigate } from "react-router-dom"
import { enqueueSnackbar } from "notistack"
import { Category } from "../../interfaces/category"
import { getCategories } from "../../apiCall/common"

const useProduct = () => {
    const navigate = useNavigate()
    const [images, setImages] = useState<Upload[]>([])
    const [categories, setCategories] = useState<Category[]>([])

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
            const { size, name} = file[0]
            const image : Upload = {
                isUploading: true,
                totalSize: size,
                currentSize: size,
                fileName: name,
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

    const onCreateProduct = async (event: React.FormEvent<HTMLFormElement>) => {
        try {
            event.preventDefault()
            const form = new FormData(event.currentTarget)

            const data:NewProduct = {
                name: form.get("name") as string,
                description: form.get('description') as string,
                category_id: Number(form.get('category_id') as string),
                rating: Number(form.get('rating') as string),
                price: Number(form.get('price') as string),
                discount: Number(form.get('discount') as string),
                total: Number(form.get('total') as string),
                flash_sell: false,
                wishList: false,
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

    return {
        images,
        onRemoveImage,
        uploadImageProduct,
        onCreateProduct,
        categories
    }
}

export default useProduct