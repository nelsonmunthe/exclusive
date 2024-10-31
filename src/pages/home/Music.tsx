import MusicImage from "../../assets/images/music.png"
import CustomButton from "../../component/CustomButton";

const Music = () => {

    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 bg-black p-8 mb-6 rounded-sm items-center gap-2">
            <div className="flex flex-1 flex-col gap-y-4 justify-center">
                <p className="text-[#00FF66] text-2xl sm:text-2lg  lg:text-4xl">Categories</p>
                <p className="text-white text-sm sm:text-lg">Enhance Your Music Experience</p>
                <div className="flex gap-x-1 md:gap-x-2">
                    <div className="bg-white flex flex-col justify-center items-center rounded-full w-[35px] h-[35px] p-1 md:p-7">
                        <p className="text-[7px] md:text-[12px] md:font-semibold"><small>23</small></p>
                        <p className="text-[7px] md:text-[12px] md:font-semibold"><small>Hours</small></p>
                    </div>
                    <div className="bg-white flex flex-col justify-center items-center rounded-full w-[35px] h-[35px] p-1 md:p-7">
                        <p className="text-[7px] md:text-[12px] md:font-semibold"><small>05</small></p>
                        <p className="text-[7px] md:text-[12px] md:font-semibold"><small>Days</small></p>
                    </div>
                    <div className="bg-white flex flex-col justify-center items-center rounded-full w-[35px] h-[35px] p-1 md:p-7">
                        <p className="text-[7px] md:text-[12px] md:font-semibold"><small>59</small></p>
                        <p className="text-[7px] md:text-[12px] md:font-semibold"><small>Minutes</small></p>
                    </div>
                    <div className="bg-white flex flex-col justify-center items-center rounded-full w-[35px] h-[35px] p-1 md:p-7">
                        <p className="text-[7px] md:text-[12px] md:font-semibold"><small>35</small></p>
                        <p className="text-[7px] md:text-[12px] md:font-semibold"><small>Seconds</small></p>
                    </div>
                </div>
                <div>
                    <CustomButton 
                        style="g-[#00FF66] text-sm text-white py-1 px-2 rounded-md block"
                        description="Buy Now"
                    />
                </div>
            </div>
            <div className="flex-1">
                <img src={MusicImage} alt="music"  className="object-fill "/>
            </div>
        </div>
    )
}

export default Music;