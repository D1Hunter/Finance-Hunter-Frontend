import { createSlice } from "@reduxjs/toolkit";
import { ICategory } from "../../interfaces/category.interface";

interface CategoryState {
    categories: ICategory[];
    loading: boolean;
    error: string | null;
}

const initialState: CategoryState = {
    categories: [],
    loading: false,
    error: null,
};

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {}
});

export default categorySlice.reducer;