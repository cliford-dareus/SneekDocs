import { createSlice } from "@reduxjs/toolkit";

const info = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo")!)
  : "";

const initialState = {
  userName: info.userName,
  userId: info.userId,
  token: info.token,
  isLogin: info.isLogin,
};

console.log(initialState);

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setUser: (state, action) => {
      {
        (state.userName = action.payload.name),
          (state.userId = action.payload.userId),
          (state.token = action.payload.token),
          (state.isLogin = true);
      }

      localStorage.setItem("userInfo", JSON.stringify(state));
    },
  },
});

export const { setUser } = globalSlice.actions;
export default globalSlice.reducer;
