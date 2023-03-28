import { configureStore } from "@reduxjs/toolkit";
import cartRuducer from "./cart/cartSlice";
import gameModalRudcer from './game-modal/gameModalSlice'

export const store = configureStore({
  reducer: {
    cart: cartRuducer,
    modalMenu: gameModalRudcer
  },
});
