import { ITransaction } from "../interfaces/transaction.interface";
import mainApi from "./main.api";

const enchancedApi = mainApi.enhanceEndpoints({
    addTagTypes: ["Transaction"]
})

export const transactionAPI = enchancedApi.injectEndpoints({
    endpoints: (build) => ({
        getTransactions: build.query<ITransaction[], null>({
            query: () => ({
                url:`/transaction/all`,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }),
        }),
    })
})