import { createSlice } from "@reduxjs/toolkit";

export const itemsSlice = createSlice({
    name: 'items',
    initialState: [],
    reducers: {
        addItems: (state, {payload}) => {

            
                state.items = [...payload];
            
            // state = JSON.parse(JSON.stringify(payload))
        }
    }
})