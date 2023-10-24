import { BASE_URL } from "./serverConstants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}user/`, credentials: 'include' }),
    
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (credentials) => ({
                url: 'register',
                method: 'POST',
                body: credentials,
            })
        }),
        login: builder.mutation({
            query: (credentials) => ({
                url: 'login',
                method: 'POST',
                body: credentials,
            })
        }),
        logout: builder.mutation({
            query: () => ({
                url: 'logout',
                method: 'POST',
            })
        })
    })
})

export const {useRegisterMutation, useLoginMutation, useLogoutMutation} = authApi