import BarSign from "../../component/BarSign"
import useBestProduct from "./useBestProduct"
import ProductCard from "../../component/productCard"

const BestProduct = () => {
   const { bestProduct } = useBestProduct()

    return(
        <div className="flex flex-col p-2 my-2 gap-2">
            <BarSign description="This Month" />
            <div className="flex items-center justify-between">
                <h6 className="font-semibold text-sm">Best Selling Products</h6>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {
                    bestProduct.map((item, index) => {
                        return <ProductCard product={item}  key={index}/>
                    })
                }
            </div>
        </div>
    )
}

export default BestProduct