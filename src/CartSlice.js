import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice ({
    name: 'cart',
    initialState: [],
    redurcers:{
        addItem: (state, action) => {

        }
    }
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;