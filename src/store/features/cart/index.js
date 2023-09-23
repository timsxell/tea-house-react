import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {},
    // {
    //     123: {
    //         item: {},
    //         amount: 300,
    //         price: 23.5
    //     }
    // }
    reducers: {
        //payload - это айдишка товара, чей счетчик меняется
        // increment: (state, {payload}) => {
        //     state[payload] = state[payload] 
        //                      ? state[payload] + 1
        //                      : 1;
        // },
        addItem: (state, { payload }) => {
            state[payload.item.id] = {
                'item': payload.item,
                amount: payload.amount,
                priceForAmount: payload.priceForAmount
            }
        },
        removeItem: (state, { payload }) => {
            const { [payload]: removedItem, ...updatedCart } = state;
            return updatedCart;
        },
    }
});