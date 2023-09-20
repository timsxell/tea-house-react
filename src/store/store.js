import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import { itemsApi } from "./services/itemsApi";
import { oneItemApi } from "./services/oneItemApi";

import { cartSlice } from "./features/cart";
import { itemsSlice } from "./features/items";

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        items: itemsSlice.reducer,
        [itemsApi.reducerPath]: itemsApi.reducer,
        [oneItemApi.reducerPath]: oneItemApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            itemsApi.middleware,
            oneItemApi.middleware
        ]),
    devTools: true,
    // devTools: process.env.NODE_ENV !== "production",

})