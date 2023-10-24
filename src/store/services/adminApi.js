import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from './serverConstants';
import { Mutex } from 'async-mutex'

import { logout, updateAccessToken } from '../features/auth'
import { headers } from '../../../next.config';

//https://redux-toolkit.js.org/rtk-query/usage/customizing-queries#preventing-multiple-unauthorized-errors
//https://redux-toolkit.js.org/rtk-query/api/fetchBaseQuery#setting-default-headers-on-requests

// create a new mutex
const mutex = new Mutex();
const baseQuery = fetchBaseQuery({ 
    baseUrl: BASE_URL, 
    credentials: 'include',
    prepareHeaders: (headers, {getState}) => {
        const accessToken = getState().auth.accessToken;
        if(accessToken){
            headers.set('authorization', `Bearer ${accessToken}`);
        }
        return headers
    }
});

const baseQueryWithReauth = async (args, api, extraOptions) => {

    // wait until the mutex is available without locking it
    await mutex.waitForUnlock()
    let result = await baseQuery(args, api, extraOptions)
    if (result.error && result.error.status === 401) {

        // checking whether the mutex is locked
        if (!mutex.isLocked()) {
            const release = await mutex.acquire()
            try {
                const refreshResult = await baseQuery(
                    'user/refresh',
                    api,
                    extraOptions
                )
                if (refreshResult.data) {
                    // api.dispatch(tokenReceived(refreshResult.data))
                    api.dispatch(updateAccessToken(refreshResult.data));
                    // retry the initial query
                    result = await baseQuery(args, api, extraOptions);
                } else {
                    api.dispatch(logout());
                }
            } finally {
                // release must be called once the mutex should be released again.
                release()
            }
        } else {
            // wait until the mutex is available without locking it
            await mutex.waitForUnlock()
            result = await baseQuery(args, api, extraOptions)
        }
    }
    return result
}

export const adminApi = createApi({
    reducerPath: 'adminApi',
    baseQuery: baseQueryWithReauth,

    endpoints: (builder) => ({
        createItem: builder.mutation({
            query: (body) => ({
                url: `item/create`,
                method: 'POST',
                body,
            })
        }),
    })
})

export const {useCreateItemMutation} = adminApi

