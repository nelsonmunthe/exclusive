import FlashSale from "./flashSale";
import Slider from "./slider";

const HomePage = () => {
    return(
        <div className="flex flex-col">
            <Slider />
            <FlashSale />
        </div>
    )
};

export default HomePage