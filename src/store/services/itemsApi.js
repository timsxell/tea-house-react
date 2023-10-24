import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from './serverConstants';

export const itemsApi = createApi({
    reducerPath: 'itemsApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getItems: builder.query({
            query: ({ categories, limit, page }) => `item/items?limit=${limit || 99}&page=${page || 1}${categories ? `&category=${categories}`: ''}`
        }),
    })
})
export const { useGetItemsQuery, usePrefetch, useCreateItemMutation } = itemsApi;



