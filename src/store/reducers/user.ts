import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUserState {
    id: string,
    email: string
}

const initialState: IUserState = {
    id: '',
    email: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IUserState>) => {
            state.id = action.payload.id
            state.email = action.payload.email
        }
    }
})

export const { setUser } = userSlice.actions;
export default userSlice.reducer;