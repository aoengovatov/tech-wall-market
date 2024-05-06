import { createSlice } from "@reduxjs/toolkit";

const initialSearch = {
    categoryId: "",
    searchPhrase: "",
    priceSort: false,
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
        setPriceSort: (state, action) => {
            state.priceSort = action.payload;
        },
        setPage: (state, action) => {
            state.page = action.payload;
        },
    },
    selectors: {
        getSearch: (state) => state,
        getCategoryId: (state) => state.categoryId,
        getSearchPhrase: (state) => state.searchPhrase,
        getPriceSort: (state) => state.priceSort,
        getPage: (state) => state.page,
    },
});

export default catalogSlice.reducer;
export const { setCategoryId, setSearchPhrase, setPriceSort, setPage } =
    catalogSlice.actions;
export const { getSearch, getCategoryId, getSearchPhrase, getPriceSort, getPage } =
    catalogSlice.selectors;
