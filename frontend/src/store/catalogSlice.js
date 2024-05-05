import { createSlice } from "@reduxjs/toolkit";

const initialSearch = {
    categoryId: "",
    searchPhrase: "",
    sortPrice: "1",
    page: 1,
};

const catalogSlice = createSlice({
    name: "catalog",
    initialState: initialSearch,
    reducers: {
        setCategoryId: (state, action) => {
            state.categoryId = action.payload;
        },
        setSearchPhrase: (state, action) => {
            state.searchPhrase = action.payload;
        },
        setSortPrice: (state, action) => {
            state.sortPrice = action.payload;
        },
        setPage: (state, action) => {
            state.page = action.payload;
        },
    },
    selectors: {
        getSearch: (state) => state,
        getCategoryId: (state) => state.categoryId,
        getSearchPhrase: (state) => state.searchPhrase,
        getSortPrice: (state) => state.sortPrice,
        getPage: (state) => state.page,
    },
});

export default catalogSlice.reducer;
export const { setCategoryId, setSearchPhrase, setSortPrice, setPage } =
    catalogSlice.actions;
export const { getSearch, getCategoryId, getSearchPhrase, getSortPrice, getPage } =
    catalogSlice.selectors;
