import icon1 from "../../assets/images/Group 2.png"
import icon2 from "../../assets/images/Group 10.png"
import useProduct from "./useProduct"
import UploadBar from "../../component/UploadBar"
import { Category } from "../../interfaces/category"

const Product = () => {
    const { 
        images,
        onRemoveImage,
        uploadImageProduct,
        onCreateProduct,
        product,
        onChangeDataProduct,
        categories,
     } = useProduct()

    return(
        <div  className="grid grid-cols-1 sm:grid-cols-2 p-2">
            <div className="flex flex-col border border-gray-300 rounded-lg m-2 gap-2 drop-shadow-md">
                <div className="flex gap-2 items-center justify-between p-1">
                    <div className="flex justify-center items-center border border-gray-300 p-2 rounded-full">
                        <img src={icon1} alt="icon" className="h-6 w-6"/>
                    </div>
                    <div className="flex flex-col">
                        <h4 className="font-semibold">Upload files</h4>
                        <p className="text-gray-500 text-sm">Select and upload the files oof your choice</p>
                    </div>
                    <div className="flex justify-end items-end">
                        <img src={icon2} alt="icon-2" className="hover:cursor-pointer h-4 w-4"/>
                    </div>
                </div>
                <p className="border border-gray-300"></p>
                <div className="border-dashed border-2 rounded-md border-gray-300 flex flex-col justify-center items-center m-4 gap-2 py-8 px-4">
                    <img src={icon1} alt="icon"/>
                    <p className="font-semibold text-sm">Choose a file or drag & drop it here</p>
                    <p className="text-gray-500 text-sm">JPEG and PNG up to 50MB</p>
                    <div className="flex items-center justify-center">
                        <input  
                            type="file" 
                            className="text-sm items-center w-24 mt-2"
                            onChange={(event) => uploadImageProduct(event)}
                        />
                    </div>
                   
                </div>
                {
                    images.map((item, index) => {
                        return <UploadBar  
                            key={index}
                            Upload={item}
                            onRemoveImage={onRemoveImage}
                            uploadImageProduct={uploadImageProduct}
                        />
                    })
                }
            </div>
            <form 
                className="flex flex-col m-2 gap-2 border border-gray-300 rounded-lg p-2 drop-shadow-md"
                onSubmit={(event) => {
                    event.preventDefault()
                    onCreateProduct()
                }}
            >
               <div className="flex flex-col gap-y-1">
                    <label htmlFor="Product Name" className="text-[11px]">Product Name</label>
                    <input 
                        placeholder="Product Name"
                        className="text-sm px-2 py-1 border-b border-b-gray-300 bg-gray-50 rounded-sm"
                        required
                        type="text"
                        value={product.name}
                        onChange={event => onChangeDataProduct('name', event, 'string')}
                    />
               </div>
               <div className="flex flex-col gap-y-1">
                    <label htmlFor="Description" className="text-[11px]">Description</label>
                    <input 
                        placeholder="Description"
                        className="text-sm px-2 py-1 border-b border-b-gray-300 bg-gray-50 rounded-sm"
                        required
                        type="text"
                        value={product.description}
                        onChange={event => onChangeDataProduct('description', event, 'string')}
                    />
               </div>

               <div className="flex flex-col gap-y-1">
                    <label htmlFor="Category" className="text-[11px]">Category</label>
                    <select 
                        name="categories" 
                        id="categories" 
                        className="text-sm px-2 py-1 border-b border-b-gray-300 bg-gray-50 rounded-sm"
                        onChange={(event) => onChangeDataProduct('category_id', event, 'number')}
                    >
                        {categories.map((item: Category) => {
                            return <option 
                                key={item.id}
                                value={item.id}
                            >
                                {item.name}
                            </option>
                        })}
                        
                    </select>
               </div>

               <div className="flex flex-col gap-y-1">
                    <label htmlFor="Rating" className="text-[11px]">Rating</label>
                    <input 
                        placeholder="Rating"
                        className="text-sm px-2 py-1 border-b border-b-gray-300 bg-gray-50 rounded-sm"
                        required
                        type="number"
                        min={0}
                        max={50}
                        value={product.rating}
                        disabled
                    />
               </div>

               <div className="flex flex-col gap-y-1">
                    <label htmlFor="Price" className="text-[11px]">Price</label>
                    <input 
                        placeholder="Price"
                        className="text-sm px-2 py-1 border-b border-b-gray-300 bg-gray-50 rounded-sm"
                        required
                        type="number"
                        min={0}
                        value={product.price}
                        onChange={event => onChangeDataProduct('price', event, 'number')}
                    />
               </div>

               <div className="flex flex-col gap-y-1">
                    <label htmlFor="Discount" className="text-[11px]">Discount</label>
                    <input 
                        placeholder="Discount"
                        className="text-sm px-2 py-1 border-b border-b-gray-300 bg-gray-50 rounded-sm"
                        required
                        type="number"
                        min={0}
                        value={product.discount}
                        onChange={event => onChangeDataProduct('discount', event, 'number')}
                    />
               </div>

               <div className="flex flex-col gap-y-1">
                    <label htmlFor="Quantity" className="text-[11px]">Quantity</label>
                    <input 
                        placeholder="Quantity"
                        className="text-sm px-2 py-1 border-b border-b-gray-300 bg-gray-50 rounded-sm"
                        required
                        type="number"
                        min={0}
                        value={product.total}
                        onChange={event => onChangeDataProduct('total', event, 'number')}
                    />
               </div>
                
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-[#DB4444] px-3 py-1 rounded-md text-white text-sm md:text-lg"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Product;