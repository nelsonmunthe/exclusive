import BestProduct from "./BestProduct";
import Music from "./Music";
import Products from "./Products";
import Category from "./category";
import FlashSale from "./flashSale";
import Slider from "./slider";

const HomePage = () => {
    return(
        <div className="flex flex-col">
            <Slider />
            <FlashSale />
            <Category />
            <BestProduct />
            <Music />
            <Products />
        </div>
    )
};

export default HomePage