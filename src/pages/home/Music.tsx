import { Button, Typography } from "@mui/material";
import MusicImage from "../../assets/images/music.png"

const Music = () => {

    return(
        <div className="flex mx-[100px] bg-black p-8 mb-6 rounded-sm items-center justify-between">
            <div className="flex flex-1 flex-col gap-y-4">
                <Typography style={{color: "#00FF66"}} fontSize={14}>Categories</Typography>
               <div className="flex flex-col">
                    <Typography style={{color: "white"}} fontSize={40}>Enhance Your Music Experience</Typography>
               </div>
                <div className="flex gap-x-1">
                    <div className="bg-white flex flex-col justify-center items-center rounded-2xl w-[35px] h-[35px] px-1">
                        <Typography fontSize={8}>23</Typography>
                        <Typography fontSize={8}>Hours</Typography>
                    </div>
                    <div className="bg-white flex flex-col justify-center items-center rounded-2xl w-[35px] h-[35px] px-1">
                        <Typography fontSize={8}>05</Typography>
                        <Typography fontSize={8}>Days</Typography>
                    </div>
                    <div className="bg-white flex flex-col justify-center items-center rounded-2xl w-[35px] h-[35px] px-1">
                        <Typography fontSize={8}>59</Typography>
                        <Typography fontSize={8}>Minutes</Typography>
                    </div>
                    <div className="bg-white flex flex-col justify-center items-center rounded-2xl w-[35px] h-[35px] px-1">
                        <Typography fontSize={8}>35</Typography>
                        <Typography fontSize={8}>Seconds</Typography>
                    </div>
                </div>
                <Button style={{background: "#00FF66", color: "white", textTransform: "none", width: '80px'}}>Buy Now</Button>
            </div>
            <div className="flex-1">
                <img src={MusicImage} alt="music"  className="object-fill "/>
            </div>

        </div>
    )
}

export default Music;