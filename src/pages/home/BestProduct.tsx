import { Button, Typography } from "@mui/material"
import BarSign from "../../component/BarSign"
import { useState } from "react"
import { Product } from "../../interfaces/product"
import useBestProduct from "./useBestProduct"
import ProductCard from "../../component/productCard"

const BestProduct = () => {
   const { bestProduct } = useBestProduct()


    return(
        <div className="flex flex-col px-[100px] mb-6 gap-y-2">
            <BarSign description="This Month" />
            <div className="flex items-center justify-between">
                <Typography fontSize={18} style={{color: 'black', fontWeight: 500}}>Best Selling Products</Typography>
                <Button
                    sx={{bgcolor: "#DB4444", color : "white", textTransform: 'none', marginTop: "10px"}} 
                >View All</Button>
            </div>
            <div className="flex justify-between gap-x-4">
                {
                    bestProduct.map(item => {
                        return <ProductCard product={item}/>
                    })
                }
            </div>
        </div>
    )
}

export default BestProduct