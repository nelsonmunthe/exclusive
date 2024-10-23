import { Typography } from "@mui/material";
import slider_1 from "../../assets/images/slider_1.webp"
import slider_2 from "../../assets/images/slider_2.webp"
import useSlider from "./useSlider";

const Slider = () => {
    const { categories } =  useSlider()
    return(
        <div className="flex my-4 text-[#7D8184] border-t-2 pb-6">
            <div className="flex flex-col gap-y-2 border-r-2  border-r-[#dbddde] pr-8 mr-8 pt-6">
                {categories.map((item, index) => {
                    return <Typography fontSize={12}  key={index} className="hover:cursor-pointer">{item?.name}</Typography>
                })}
            </div>
            <div className="flex items-center justify-center flex-1 pt-6">
                <img src={slider_1} alt="slider_1" className="object-cover rounded-lg w-full"/>
            </div>
        </div>
    )
};

export default Slider