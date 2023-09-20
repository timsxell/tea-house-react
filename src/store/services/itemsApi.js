import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from './serverConstants';

export const itemsApi = createApi({
    reducerPath: 'itemsApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getItems: builder.query({
            query: ({ category, subcategory, subsubcategory }) => {
                let url = !category
                    ? `items`
                    : !subcategory
                        ? `items?cat=${category}`
                        : !subsubcategory
                            ? `items?cat=${category}&sub=${subcategory}`
                            : `items?cat=${category}&sub=${subcategory}&subsub=${subsubcategory}`
                return url;
            }
        })
    })
})

export const { useGetItemsQuery, usePrefetch } = itemsApi;



