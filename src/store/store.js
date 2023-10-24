import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import { itemsApi } from "./services/itemsApi";
import { oneItemApi } from "./services/oneItemApi";
import { authApi } from "./services/authApi";
import { adminApi } from "./services/adminApi";

import { cartSlice } from "./features/cart";
import { authSlice } from "./features/auth";

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        auth: authSlice.reducer,
        [itemsApi.reducerPath]: itemsApi.reducer,
        [oneItemApi.reducerPath]: oneItemApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [adminApi.reducerPath]: adminApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            itemsApi.middleware,
            oneItemApi.middleware,
            authApi.middleware,
            adminApi.middleware,
        ]),
    devTools: true,
    // devTools: process.env.NODE_ENV !== "production",

})