import icon2 from "../assets/images/Group 10.png"
import icon3 from "../assets/images/Group 6.png"
import icon4 from "../assets/images/Group 7.png"
import icon5 from "../assets/images/Frame 9.png"
import { UploadProps } from "../interfaces/common"

const UploadBar = ({ Upload, onRemoveImage } : UploadProps) => {
    
    return(
        <div className="flex flex-col  items-center rounded-md bg-[#EEF1F7]  gap-1 mx-4 mb-2 p-2">
            <div className="flex justify-between w-full">
                <div className="flex gap-x-2">
                    <img src={icon3} alt="icon-3" className="w-10 object-fill"/>
                    <div className="flex flex-col">
                        <h6 className="font-semibold text-sm">{Upload.fileName}</h6>
                        <div className="flex gap-x-1">
                            <p className="text-sm text-gray-400">{Upload.currentSize} KB</p>
                            <p className="text-sm text-gray-400">of</p>
                            <p className="text-sm text-gray-400">{Upload.totalSize} KB</p>
                            { Upload.isUploading ? 
                                (
                                <div className="flex gap-x-1 items-center">
                                    <img  src={icon4} className="h-4"/>
                                    <p className="text-sm">Uploading...</p>
                                </div>
                                ) 
                            :   (
                                <div className="flex gap-x-1 items-center">
                                    <img  src={icon5} className="h-4"/>
                                    <p className="text-sm">Completed</p>
                                </div>
                                )
                            }
                            
                        </div>
                    </div>
                </div>
                <div className="flex items-start justify-end">
                    <img 
                        src={icon2} 
                        className="h-4 hover:cursor-pointer"
                        onClick={() => onRemoveImage(Upload.fileName)}
                    />
                </div>
            </div>
        </div>
    )
}

export default UploadBar