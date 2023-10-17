import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || null,
  },
  reducers: {
    setUser: (state, action) => {
      const user = action.payload;
      state.user = user;

      // Save user data to localStorage
      localStorage.setItem("user", JSON.stringify(user));
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
