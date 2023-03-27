import { configureStore } from "@reduxjs/toolkit";
import cartRuducer from "./cart/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartRuducer,
  },
});
