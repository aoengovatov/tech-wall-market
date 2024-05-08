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
            state.filter((product) => product._id !== action.payload),
    },
    selectors: {
        getBasketProducts: (state) => state,
    },
});

export default basketSlice.reducer;
export const { setBasketList, setBasketProductCount, deleteBasketProduct } =
    basketSlice.actions;
export const { getBasketProducts } = basketSlice.selectors;
