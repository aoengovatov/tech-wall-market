import { createSlice } from "@reduxjs/toolkit";

const initialBasket = [];

const basketSlice = createSlice({
    name: "basket",
    initialState: initialBasket,
    reducers: {
        setBasketList: (state, action) => (state = action.payload),
        setBasketProductCount: (state, action) => {
            state.map((item) => {
                if (item.product._id === action.payload.id) {
                    item.count = action.payload.count;
                }
            });
        },
        deleteBasketProduct: (state, action) =>
            state.filter((item) => item.product._id !== action.payload),
        deleteAllBasketProducts: () => initialBasket,
    },
    selectors: {
        getBasketProducts: (state) => state,
    },
});

export default basketSlice.reducer;
export const {
    setBasketList,
    setBasketProductCount,
    deleteBasketProduct,
    deleteAllBasketProducts,
} = basketSlice.actions;
export const { getBasketProducts } = basketSlice.selectors;
