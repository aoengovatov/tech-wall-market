import { createSlice } from "@reduxjs/toolkit";

const initialFavorite = [];

const favoriteSlice = createSlice({
    name: "favorite",
    initialState: initialFavorite,
    reducers: {
        setFavoriteList: (state, action) => (state = action.payload),
        setFavoriteProductCount: (state, action) => {
            state.map((product) => {
                if (product._id === action.payload.id) {
                    product.count = action.payload.count;
                }
            });
        },
        deleteFavoriteProduct: (state, action) =>
            state.filter((product) => product._id !== action.payload),
    },
    selectors: {
        getFavoriteProducts: (state) => state,
    },
});

export default favoriteSlice.reducer;
export const { setFavoriteList, setFavoriteProductCoun, deleteFavoriteProduct } =
    favoriteSlice.actions;
export const { getFavoriteProducts } = favoriteSlice.selectors;
