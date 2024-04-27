import { createSlice } from "@reduxjs/toolkit";
import { ROLE } from "../constants";

const initialUser = {
    id: null,
    name: "",
    surname: "",
    login: "",
    roleId: ROLE.GUEST,
    registedAt: "",
};

const userSlice = createSlice({
    name: "user",
    initialState: initialUser,
    reducers: {
        setUser: (state, action) => (state = action.payload),
    },
    selectors: {
        getUser: (state) => state,
        getUserRole: (state) => state.roleId,
    },
});

export default userSlice.reducer;
export const { setUser } = userSlice.actions;
export const { getUser, getUserRole } = userSlice.selectors;
