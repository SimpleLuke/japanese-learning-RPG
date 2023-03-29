import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import gameModalReducer from './game-modal/gameModalSlice'
import sceneReducer from "./scene/sceneSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modalMenu: gameModalReducer,
    scene: sceneReducer
  },
});
