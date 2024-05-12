import { createSlice } from "@reduxjs/toolkit";

const initialFavorite = [];

const favoriteSlice = createSlice({
    name: "favorite",
    initialState: initialFavorite,
    reducers: {
        setFavoriteList: (state, action) => (state = action.payload),
        deleteFavoriteProduct: (state, action) =>
            state.filter((item) => item.product._id !== action.payload),
        resetFavoriteProducts: () => initialFavorite,
    },
    selectors: {
        getFavoriteProducts: (state) => state,
    },
});

export default favoriteSlice.reducer;
export const { setFavoriteList, deleteFavoriteProduct, resetFavoriteProducts } =
    favoriteSlice.actions;
export const { getFavoriteProducts } = favoriteSlice.selectors;
