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
        updateCategory: (state, action) => {
            state.map((category) => {
                if (category.id === action.payload.id) {
                    const { name, imageUrl, color } = action.payload;
                    category.name = name;
                    category.imageUrl = imageUrl;
                    category.color = color;
                    return;
                }
            });
        },
        deleteCategory: (state, action) => state.filter((category) => category.id !== action.payload),
    },
    selectors: {
        getCategory: (state) => state,
    },
});

export default categorySlice.reducer;
export const { setCategoryList, addCategory, deleteCategory, updateCategory } =
    categorySlice.actions;
export const { getCategory } = categorySlice.selectors;
