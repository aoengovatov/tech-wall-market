import { createSlice } from "@reduxjs/toolkit";

const initialBasket = [];

const basketSlice = createSlice({
    name: "basket",
    initialState: initialBasket,
    reducers: {
        setBasketList: (state, action) => (state = action.payload),
        setBasketProductCount: (state, action) => {
            state.map((product) => {
                if (product._id === action.payload.id) {
                    product.count = action.payload.count;
                }
            });
        },
        deleteBasketProduct: (state, action) =>
            state.filter((product) => product._id !== action.payload),
    },
    selectors: {
        getBasketProducts: (state) => state,
    },
});

export default basketSlice.reducer;
export const { setBasketList, setBasketProductCoun, deleteBasketProduct } =
    basketSlice.actions;
export const { getBasketProducts } = basketSlice.selectors;
