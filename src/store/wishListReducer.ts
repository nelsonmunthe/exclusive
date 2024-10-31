// Part 1
import { Product, ProductDetail } from "../interfaces/product" 

import { createSlice, PayloadAction } from "@reduxjs/toolkit"

// Part 2
export interface IssueInitialState {
    Products: ProductDetail[]
}
const initialState: IssueInitialState = {
    Products: []
}

// Part 3
export const wisthListSlice = createSlice({
    name: 'productWishList',
    initialState,
    reducers: {
        AddWishList: (state, action: PayloadAction<ProductDetail>) => {
            state.Products = [...state.Products, action.payload]
        },
        removeWishList: (state, action: PayloadAction<ProductDetail>) => {
            const wishList = [...state.Products]
            const updateWishList = wishList.filter(item => {
                if(item.id !== action.payload.id) {
                    return item
                }
            })
            state.Products = updateWishList
        },
    }
})

// Part 4
export const { AddWishList, removeWishList } = wisthListSlice.actions
export default wisthListSlice.reducer
