import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { BASE_URL } from './serverConstants'

export const oneItemApi = createApi({
    reducerPath: 'oneItemApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getOneItem: builder.query({
            query: (itemId) => `item?itemId=${itemId}`
        })
    })
})

export const { useGetOneItemQuery } = oneItemApi;