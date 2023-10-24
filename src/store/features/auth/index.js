import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "@/store/services/authApi";

const initialState = {
    isAuth: false,
    accessToken: '',
    refreshToken: '',
    user: {
        id: '',
        email: '',
        role: '',
        isActivated: '',
    },
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // setCredentials: (state, { payload: {user, accessToken, refreshToken} }) => {
        //     state.user = user;
        //     state.accessToken = accessToken;
        //     state.refreshToken = refreshToken;
        //     state.isAuth = true;
        // },
        logout: () => initialState,
        updateAccessToken: (state, { payload }) => {
            state.accessToken = payload.accessToken;
            state.user.role = payload.user.role;
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            authApi.endpoints.login.matchFulfilled,
            (state, {payload}) => {
                state.isAuth = true;
                state.user = payload.user;
                state.accessToken = payload.accessToken;
                state.refreshToken = payload.refreshToken;
            }
        )
    }
})

export const {logout, updateAccessToken} = authSlice.actions