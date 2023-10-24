import { createSlice } from "@reduxjs/toolkit";

// Initial state from local storage, if available
const storedUser = JSON.parse(localStorage.getItem("user"));

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: storedUser || null,
  },
  reducers: {
    setUser: (state, action) => {
      const user = action.payload;
      state.user = user;

      // Save user data to localStorage
      localStorage.setItem("user", JSON.stringify(user));
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});

export const { setUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;

export const getUser = (state) => state.auth.user;
