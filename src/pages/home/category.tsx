import { Typography } from "@mui/material"
import BarSign from "../../component/BarSign"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import WatchOutlinedIcon from '@mui/icons-material/WatchOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import HeadsetOutlinedIcon from '@mui/icons-material/HeadsetOutlined';
import Gaming from '@mui/icons-material/SportsEsportsOutlined';

const Category = () => {
    const categories = [
        {name : "Phones", icon : <PhoneAndroidOutlinedIcon style={{color: "#7D8184"}} fontSize="large"/>},
        {name : "Computers", icon : <ComputerOutlinedIcon style={{color: "#7D8184"}} fontSize="large" />},
        {name : "SmartWatch", icon : <WatchOutlinedIcon style={{color: "#7D8184"}} fontSize="large" />},
        {name : "Camera", icon : <CameraAltOutlinedIcon  style={{color: "#7D8184"}} fontSize="large"/>},
        {name : "HeadPhones", icon : <HeadsetOutlinedIcon  style={{color: "#7D8184"}} fontSize="large" />},
        {name : "Gaming", icon : <Gaming style={{color: "#7D8184"}} fontSize="large" />}
    ];

    return(
        <div className="flex flex-col gap-2 p-2">
            <BarSign description="Categories" />
            <div className="flex justify-between items-center">
                <h6 className="font-semibold text-sm">Browse By Category</h6>
                <div className="flex gap-x-2">
                    <div className="bg-[#F5F5F5] flex items-center justify-center hover:cursor-pointer rounded-xl w-[30px] h-[30px]"> 
                        <ArrowBackIcon sx={{fontSize: 20}} />
                    </div>
                    <div className="bg-[#F5F5F5] flex items-center justify-center hover:cursor-pointer rounded-xl w-[30px] h-[30px]"> 
                        <ArrowForwardIcon sx={{fontSize: 20}} />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {
                    categories.map(item => {
                        return(
                            <div 
                                key={item.name}
                                className="flex flex-col justify-center items-center border border-[#7D8184] p-2 gap-y-2"
                            >
                                {item.icon}
                                <Typography fontSize={10} sx={{color: "#7D8184"}}>{item.name}</Typography>
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
    )
}

export default Category