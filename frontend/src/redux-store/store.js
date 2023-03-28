import { configureStore } from "@reduxjs/toolkit";
import cartRuducer from "./cart/cartSlice";
import sceneReducer from "./scene/sceneSlice";

export const store = configureStore({
  reducer: {
    cart: cartRuducer,
    scene: sceneReducer,
  },
});
