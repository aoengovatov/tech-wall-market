import { createSlice } from "@reduxjs/toolkit";

const initialCategory = [];

const categorySlice = createSlice({
    name: "category",
    initialState: initialCategory,
    reducers: {
        setCategoryList: (state, action) => (state = action.payload),
        addCategory: (state, action) => {
            state.push(action.payload);
        },
        deliteCategory: (state, id) => state.filter((category) => category.id !== id),
    },
    selectors: {
        getCategory: (state) => state,
    },
});

export default categorySlice.reducer;
export const { setCategoryList, addCategory, deliteCategory } = categorySlice.actions;
export const { getCategory } = categorySlice.selectors;
