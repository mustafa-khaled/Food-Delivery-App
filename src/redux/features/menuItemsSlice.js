import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../firebase";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const getAllMenuItems = createAsyncThunk("menuItems/fetch", async () => {
  try {
    const querySnapshot = await getDocs(collection(firestore, "menu items"));
    const items = querySnapshot.docs.map((doc) => doc.data());
    return items;
  } catch (error) {
    throw Error("Error fetching menu items: " + error.message);
  }
});

const menuItemsSlice = createSlice({
  name: "menuItems",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllMenuItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllMenuItems.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getAllMenuItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default menuItemsSlice.reducer;
