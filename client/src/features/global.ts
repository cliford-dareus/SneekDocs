import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const info = localStorage.getItem("userInfo")? JSON.parse(localStorage.getItem("userInfo")!): '';


const initialState = {
    userName: info.name,
    userId: info.userId,
    token: info.token
};

console.log(initialState)

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setUser: (state, action) => {
            console.log(action)
            { state.userName = action.payload.name, state.userId= action.payload.userId, state.token = action.payload.token }
            localStorage.setItem('userInfo', JSON.stringify(state));
        }
    }
});

export const { setUser } = globalSlice.actions;
export default globalSlice.reducer;