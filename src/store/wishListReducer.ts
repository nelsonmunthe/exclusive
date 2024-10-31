import { ChangeWishListProps } from "../interfaces/common"
import { ProductWishList, ProductDetail } from "../interfaces/product" 
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
export interface IssueInitialState {
    products: ProductWishList[],
    totalPrice: number
}

const initialState: IssueInitialState = {
    products: [],
    totalPrice: 0
}

export const wisthListSlice = createSlice({
    name: 'productWishList',
    initialState,
    reducers: {
        AddWishList: (state, action: PayloadAction<ProductDetail>) => {
            const newProcut :ProductWishList = {
                ...action.payload,
                quantity: 1,
                totalPrice: 1 * action.payload.price
            }
            state.products = [...state.products, newProcut]
            state.totalPrice = state.totalPrice + newProcut.totalPrice
        },
        removeWishList: (state, action: PayloadAction<ProductDetail>) => {
            const wishList = [...state.products]
            const updateWishList = wishList.filter(item => {
                if(item.id !== action.payload.id) {
                    state.totalPrice = state.totalPrice - item.totalPrice
                    return item
                }
            })
            state.products = updateWishList
        },
        onChangeProductQuantity: (state, action: PayloadAction<ChangeWishListProps>) => {
            const wishList = [...state.products]
            if(Number(action.payload.quantity) === 0) {
                const updateWishList = wishList.filter((item: ProductWishList) => {
                    if(item.id === action.payload.productId) {
                        state.totalPrice = state.totalPrice - item.totalPrice
                    } else {
                        return item
                    }
                })
                state.products = updateWishList 
                return
            }

            const updateWishList = wishList.map((item: ProductWishList) => {
                 if(item.id === action.payload.productId) {
                    if(action.payload.quantity > item.quantity) {
                        const newPrice:number = action.payload.quantity * item.price;
                        const oldPrice:number = item.quantity * item.price;
                        state.totalPrice = state.totalPrice + (newPrice - oldPrice)
                        return {
                            ...item,
                            quantity : action.payload.quantity,
                            totalPrice : action.payload.quantity * item.price
                        }
                    } else {
                        const newPrice:number = action.payload.quantity * item.price;
                        const oldPrice:number = item.quantity * item.price;
                        state.totalPrice = state.totalPrice + (oldPrice - newPrice)
                        return {
                            ...item,
                            quantity : action.payload.quantity,
                            totalPrice : action.payload.quantity * item.price
                        }
                    }
                    
                } else {
                    return item
                }
            })
            state.products = updateWishList
        },
    }
})


export const { 
    AddWishList, 
    removeWishList,
    onChangeProductQuantity
} = wisthListSlice.actions

export default wisthListSlice.reducer
