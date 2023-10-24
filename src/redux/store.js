import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import menuReducer from "./features/menuItemsSlice";
import cartReducer from "./features/cartSlice";
import addressReducer from "./features/addressSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    menu: menuReducer,
    cart: cartReducer,
    address: addressReducer,
  },
});
