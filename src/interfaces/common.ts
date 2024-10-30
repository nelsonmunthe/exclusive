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
