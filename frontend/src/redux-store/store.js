import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import gameModalReducer from './game-modal/gameModalSlice'
import sceneReducer from "./scene/sceneSlice";
import gameReducer from "./game/gameSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modalMenu: gameModalReducer,
    scene: sceneReducer,
    game: gameReducer,
  },
});
