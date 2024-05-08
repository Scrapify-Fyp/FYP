import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log("data from the redux", action.payload);
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
      console.log("use after logout: ", state);
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
