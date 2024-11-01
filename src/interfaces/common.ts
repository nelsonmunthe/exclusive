export type Upload = {
    isUploading: boolean
    totalSize: number
    currentSize: number
    fileName: string,
    url: string
}

export type UploadProps = {
    Upload : Upload
    onRemoveImage: (fileName: string) => void
    uploadImageProduct : (event: React.ChangeEvent<HTMLInputElement>) => void
    
}

export type Pagination = {
    page : number
    perPage : number
    total: number
}

export type CustomInputProps = {
    type: 'text' | 'number' | "password" | "email" | "radio"
    required: boolean
    labelText: string
    name: string
    max?: number
    min?: number
    disable: boolean
}

export type CustomButtonProps = {
    type? : "submit"
    description: string
    style: string
    onHandleClick?: () => void
}

export type ChangeWishListProps = {
    productId: number
    quantity:  number
}