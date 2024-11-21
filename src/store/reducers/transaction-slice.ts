import { createSlice } from "@reduxjs/toolkit";
import { ITransaction } from "../../interfaces/transaction.interface";

interface TransactionState {
    transactions: ITransaction[];
    loading: boolean;
    error: string | null;
}

const initialState: TransactionState = {
    transactions: [],
    loading: false,
    error: null,
};

export const transactionSlice = createSlice({
    name: 'transaction',
    initialState,
    reducers: {},
});

export default transactionSlice.reducer;