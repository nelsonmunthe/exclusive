import icon1 from "../../assets/images/Group 2.png"
import icon2 from "../../assets/images/Group 10.png"
import useProduct from "./useProduct"
import UploadBar from "../../component/UploadBar"
import { Category } from "../../interfaces/category"
import CustomInput from "../../component/CustomInput"
import CustomButton from "../../component/CustomButton"

const Product = () => {
    const { 
        images,
        onRemoveImage,
        uploadImageProduct,
        onCreateProduct,
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
                className="flex flex-col m-2 gap-2 border border-gray-300 rounded-lg p-2 "
                onSubmit={(event) => onCreateProduct(event)}
            >
                <CustomInput 
                    type= "text"
                    required={true}
                    labelText= "Product Name"
                    name= "name"
                    disable={false}
                />

                <CustomInput 
                    type= "text"
                    required={true}
                    labelText= "Description"
                    name= "description"
                    disable={false}
                />
            
               <div className="flex flex-col gap-y-1">
                    <div className="mx-1 flex">
                        <label htmlFor="Category" className="text-[11px]">Category</label>
                        <label htmlFor="Category" className="text-red-600">*</label>
                    </div>
                    <select 
                        name="category_id"
                        required 
                        id="categories" 
                        className="text-sm p-1 border-b border-b-gray-300 bg-white rounded-sm"
                    >
                        {categories.map((item: Category) => {
                            return <option 
                                key={item.id}
                                value={item.id}
                                className="bg-white"
                            >
                                {item.name}
                            </option>
                        })}
                        
                    </select>
               </div>

               <CustomInput 
                    type= "number"
                    required={true}
                    labelText= "Rating"
                    name= "rating"
                    disable={true}
                    min={0}
                    max={50}
                />

                <CustomInput 
                    type= "number"
                    required={true}
                    labelText= "Price"
                    name= "price"
                    disable={false}
                    min={0}
                />

                <CustomInput 
                    type= "number"
                    required={true}
                    labelText= "Discount"
                    name= "discount"
                    disable={false}
                    min={0}
                />

                <CustomInput 
                    type= "number"
                    required={true}
                    labelText= "Quantity"
                    name= "total"
                    disable={false}
                    min={0}
                />
                
                <div className="flex justify-end my-2">
                    <CustomButton 
                        style="bg-[#DB4444] px-3 py-1 rounded-md text-white text-sm md:text-md"
                        type="submit"
                        description="Submit"
                    />
                </div>
            </form>
        </div>
    )
}

export default Product;