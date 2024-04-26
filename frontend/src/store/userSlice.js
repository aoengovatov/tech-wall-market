import { createSlice } from "@reduxjs/toolkit";

const initialUser = {
    name: "",
    surname: "",
    login: "",
    role: "",
};

const userSlice = createSlice({
    name: "user",
    initialState: initialUser,
    reducer: {
        setUser: (state, action) => (state = action.payload),
    },
    selectors: {
        getUser: (state) => state,
    },
});

export default userSlice.reducer;
export const { setUser } = userSlice.reducer;
export const { getUser } = userSlice.selectors;
