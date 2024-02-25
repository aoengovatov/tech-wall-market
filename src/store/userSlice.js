import { createSlice } from "@reduxjs/toolkit";

const initialUser = {
    name: "none",
    surname: "none",
    login: "none",
    role: "guest",
};

const userSlice = createSlice({
    name: "user",
    initialState: initialUser,
    redusers: {
        setUser: (state, action) => (state = action.payload),
    },
    selectors: {
        getUser: (state) => state,
    },
});

export default userSlice.reducer;
export const { setUser } = userSlice.reducer;
export const { getUser } = userSlice.actions;
