import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {},
    removeFromCart: (state, action) => {},
    clearAllCartItems: (state, action) => {},
  },
});

export default cartSlice.reducer;
