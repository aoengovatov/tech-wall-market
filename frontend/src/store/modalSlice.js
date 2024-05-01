import { createSlice } from "@reduxjs/toolkit";

const initialModal = {
    isOpen: false,
    text: "",
    onConfirn: () => {},
};

const modalSlice = createSlice({
    name: "modal",
    initialState: initialModal,
    reducers: {
        setOpenModal: (state, action) => (state = action.payload),
        setCloseModal: () => initialModal,
    },
    selectors: {
        getModal: (state) => state,
    },
});

export default modalSlice.reducer;
export const { setOpenModal, setCloseModal } = modalSlice.actions;
export const { getModal } = modalSlice.selectors;
