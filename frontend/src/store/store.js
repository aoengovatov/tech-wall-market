import { configureStore } from "@reduxjs/toolkit";
import userReducers from "./userSlice";
import categoryReducers from "./categorySlice";
import modalReducers from "./modalSlice";
import catalogReducers from "./catalogSlice";
import basketReducers from "./basketSlice";
import favoriteReducers from "./favoriteSlice";
import popularProductReducers from "./popularProductSlice";

export const store = configureStore({
    reducer: {
        user: userReducers,
        category: categoryReducers,
        modal: modalReducers,
        catalog: catalogReducers,
        basket: basketReducers,
        favorite: favoriteReducers,
        popular: popularProductReducers,
    },
    devTools: true,
});
