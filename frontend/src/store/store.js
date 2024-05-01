import { configureStore } from "@reduxjs/toolkit";
import userReducers from "./userSlice";
import categoryReducers from "./categorySlice";
import modalReducers from "./modalSlice";

export const store = configureStore({
    reducer: {
        user: userReducers,
        category: categoryReducers,
        modal: modalReducers,
    },
    devTools: true,
});
