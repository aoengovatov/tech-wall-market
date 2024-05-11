import { createSlice } from "@reduxjs/toolkit";

const initialPopularProducts = [];

const popularProductSlice = createSlice({
    name: "popular",
    initialState: initialPopularProducts,
    reducers: {
        setPopularProductList: (state, action) => (state = action.payload),
    },
    selectors: {
        getPopularProductList: (state) => state,
    },
});

export default popularProductSlice.reducer;
export const { setPopularProductList } = popularProductSlice.actions;
export const { getPopularProductList } = popularProductSlice.selectors;
