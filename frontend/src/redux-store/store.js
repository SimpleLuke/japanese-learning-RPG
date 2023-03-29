import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import sceneReducer from "./scene/sceneSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    scene: sceneReducer,
  },
});
