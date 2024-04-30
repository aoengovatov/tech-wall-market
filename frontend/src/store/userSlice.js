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
        reset: () => initialUser,
    },
    selectors: {
        getUser: (state) => state,
        getUserRole: (state) => state.roleId,
    },
});

export default userSlice.reducer;
export const { setUser, reset } = userSlice.actions;
export const { getUser, getUserRole } = userSlice.selectors;
