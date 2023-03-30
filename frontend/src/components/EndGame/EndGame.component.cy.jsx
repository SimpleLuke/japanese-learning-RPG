import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import sceneReducer from "../../redux-store/scene/sceneSlice";
import EndGame from "./EndGame.component";
// import { setCurrentScore } from "../../redux-store/game/gameSlice";

describe("StartMenu component", () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: { scene: sceneReducer },
      preloadedState: {
        scene: {
          currentScene: "END_GAME",
        },
      },
    });
  });

  xit("currentScene is equal to START_MENU", () => {
    cy.mount(
      <Provider store={store}>
        <EndGame />
      </Provider>
    );
    cy.getTest("score").should("exist");
  });
});
