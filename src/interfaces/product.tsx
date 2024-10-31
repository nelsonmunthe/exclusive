export type Product = {
    id : number
    name : string
    description : string
    category: number
    image_Url: string
    rating: number
    price: number
    discount: number
    total: number
    flash_sell: boolean
    wishList: boolean
    images: string[]
}

export type NewProduct = {
    name : string
    description : string
    category_id: number
    rating: number
    price: number
    discount: number
    total: number
    flash_sell: boolean
    wishList: boolean
    images: string
}

export type ProductField = {
    fieldName: string,
    required: boolean,
    value: string | number,
    fieldType: string | number,
    error: boolean
}

export type ProductDetail = {
    id : number
    name : string
    description : string
    category_id: number
    rating: number
    price: number
    discount: number
    total: number
    flash_sell: boolean
    wishList: boolean
    images: string[]
}