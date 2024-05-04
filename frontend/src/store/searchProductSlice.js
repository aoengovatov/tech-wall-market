import { createSlice } from "@reduxjs/toolkit";

const initialSearch = {
    categoryName: "",
    searchPhrase: "",
    sortPrice: true,
};

const searchProductSlice = createSlice({
    name: "searchProduct",
    initialState: initialSearch,
    reducers: {
        setCategoryName: (state, action) => (state.categoryName = action.payload),
        setSearchPhrase: (state, action) => (state.searchPhrase = action.payload),
        setSortPrice: (state, action) => (state.sortPrice = action.payload),
    },
    selectors: {
        getSearch: (state) => state,
        getCategoryName: (state) => state.categoryName,
        getSearchPhrase: (state) => state.searchPhrase,
        getSortPrice: (state) => state.sortPrice,
    },
});

export default searchProductSlice.reducer;
export const { setCategoryName, setSearchPhrase, setSortPrice } =
    searchProductSlice.actions;
export const { getSearch, getCategoryName, getSearchPhrase, getSortPrice } =
    searchProductSlice.selectors;
