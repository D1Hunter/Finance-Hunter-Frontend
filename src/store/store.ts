import { configureStore } from "@reduxjs/toolkit";
import currentUser from "./reducers/user";
import { mainApi } from "../services/user";

export const store = configureStore({
    reducer: {
        currentUser,
        [mainApi.reducerPath]:mainApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(mainApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch