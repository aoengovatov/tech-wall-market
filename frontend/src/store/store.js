import { configureStore } from "@reduxjs/toolkit";
import userReducers from "./userSlice";
import categoryReducers from "./categorySlice";
import modalReducers from "./modalSlice";
import searchProductReducers from "./searchProductSlice";

export const store = configureStore({
    reducer: {
        user: userReducers,
        category: categoryReducers,
        modal: modalReducers,
        searchProduct: searchProductReducers,
    },
    devTools: true,
});
