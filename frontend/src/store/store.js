import { configureStore } from "@reduxjs/toolkit";
import userReducers from "./userSlice";
import categoryReducers from "./categorySlice";
import modalReducers from "./modalSlice";
import catalogReducers from "./catalogSlice";

export const store = configureStore({
    reducer: {
        user: userReducers,
        category: categoryReducers,
        modal: modalReducers,
        catalog: catalogReducers,
    },
    devTools: true,
});
