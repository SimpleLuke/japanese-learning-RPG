import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "../../redux-store/game-modal/gameModalSlice";
import gameReducer from "../../redux-store/game/gameSlice";
import QuitGameModal from "./QuitGameModal";
import MainGame from "../MainGame/MainGame";

describe("QuitGameModal component", () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: { modalMenu: modalReducer },
      preloadedState: {
        modalMenu: {
          quitMenuOpen: true,
        },
      },
    });
  });

  it("renders", () => {
    cy.mount(
      <Provider store={store}>
        <QuitGameModal />
      </Provider>
    );
    cy.getTest("modal-title").should("exist");
  });
});
