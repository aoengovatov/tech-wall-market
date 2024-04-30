import { configureStore } from "@reduxjs/toolkit";
import userReducers from "./userSlice";
import categoryRedusers from "./categorySlice";

export const store = configureStore({
    reducer: {
        user: userReducers,
        category: categoryRedusers,
    },
    devTools: true,
});
