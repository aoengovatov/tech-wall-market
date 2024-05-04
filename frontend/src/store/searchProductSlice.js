import { createSlice } from "@reduxjs/toolkit";

const initialSearch = {
    categoryName: "",
    searchPhrase: "",
    sortPrice: "1",
    page: 1,
};

const searchProductSlice = createSlice({
    name: "searchProduct",
    initialState: initialSearch,
    reducers: {
        setCategoryName: (state, action) => {
            state.categoryName = action.payload;
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
        getCategoryName: (state) => state.categoryName,
        getSearchPhrase: (state) => state.searchPhrase,
        getSortPrice: (state) => state.sortPrice,
        getPage: (state) => state.page,
    },
});

export default searchProductSlice.reducer;
export const { setCategoryName, setSearchPhrase, setSortPrice, setPage } =
    searchProductSlice.actions;
export const { getSearch, getCategoryName, getSearchPhrase, getSortPrice, getPage } =
    searchProductSlice.selectors;
