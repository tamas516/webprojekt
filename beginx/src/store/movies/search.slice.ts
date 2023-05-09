import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface SearchParamsState {
    search: string;
};

const initialState: SearchParamsState = {
    search: "",
};

export const SearchParamsSlice = createSlice({
    name: "searchParams",
    initialState,
    reducers: {
        setSearchText: (state: SearchParamsState, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
    },
});

export const { setSearchText } = SearchParamsSlice.actions;
export const selectSearchText = (state: RootState) => state.searchParams.search;
export const searchReducer = SearchParamsSlice.reducer;
export const searchPath = SearchParamsSlice.name;