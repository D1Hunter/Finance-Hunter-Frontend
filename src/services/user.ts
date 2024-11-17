import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const API_URL = 'http://localhost:8080'

export const mainApi = createApi({
    reducerPath:'mainApi',
    tagTypes:['Login'],
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: () => ({}),
})

export interface ILogin {
    email: string;
    password: string;
}

export const authAPI = mainApi.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation<{ user:{id:string,email:string},token: string }, ILogin>({
            query: (dto) => ({
                url: '/auth/login',
                method: 'POST',
                body: dto,
                credentials: "include"
            }),
        })
    })
})

export const {useLoginMutation} = authAPI