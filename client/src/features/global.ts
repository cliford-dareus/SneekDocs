import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const initialState = {
    userName: '',
    userId: ''
}

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.userName = action.payload.userName
        }
    }
});

export const { setUser } = globalSlice.actions;
export default globalSlice.reducer;