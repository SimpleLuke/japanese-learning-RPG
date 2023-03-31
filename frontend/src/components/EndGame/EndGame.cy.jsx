import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import sceneReducer from "../../redux-store/scene/sceneSlice";
import gameReducer from "../../redux-store/game/gameSlice"
import userReducer from "../../redux-store/user/userSlice";

import EndGame from "./EndGame.component";

describe("EndGame component", () => {
  let store;
  beforeEach(() => {
    store = configureStore({
      reducer: { scene: sceneReducer, game: gameReducer, user: userReducer },
      preloadedState: {
        scene: {
          currentScene: "END_GAME",
        },
      },
    });
  });

  it("currentScene is equal to LOGIN", () => {
    cy.mount(
      <Provider store={store}>
        <EndGame />
      </Provider>
    );
    expect(store.getState().scene.currentScene).to.equal("END_GAME");
  });

  it("renders endGame screen", () => {
    cy.mount(
      <Provider store={store}>
        <EndGame />
      </Provider>
    );
    cy.getTest("score").should("exist");
    cy.getTest("coins").should("exist");
    cy.getTest("words-studied").should("exist");
    cy.getTest("XP").should("exist");
    cy.getTest("endGameInstructions").should("exist");
  });
});