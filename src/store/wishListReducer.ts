// Part 1
import { Product } from "../interfaces/product" 

import { createSlice, PayloadAction } from "@reduxjs/toolkit"

// Part 2
export interface IssueInitialState {
    Products: Product[]
}
const initialState: IssueInitialState = {
    Products: []
}

// Part 3
export const wisthListSlice = createSlice({
    name: 'productWishList',
    initialState,
    reducers: {
        AddWishList: (state, action: PayloadAction<Product>) => {
            state.Products = [...state.Products, action.payload]
        },
        removeWishList: (state, action: PayloadAction<Product>) => {
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
