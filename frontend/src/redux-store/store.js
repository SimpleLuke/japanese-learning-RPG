import { configureStore } from "@reduxjs/toolkit";
import cartRuducer from "./cart/cartSlice";
import sceneReducer from "./scene/sceneSlice";
import userReducer from "./user/userSlice";

export const store = configureStore({
  reducer: {
    cart: cartRuducer,
    scene: sceneReducer,
    user: userReducer,
  },
});
