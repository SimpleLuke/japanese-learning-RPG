import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import sceneReducer from "../../redux-store/scene/sceneSlice";
import StartGame from "./StartGame.component";


describe("StartGame", () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: { scene: sceneReducer},
      preloadedState: {
        scene: {
          currentScene: "START_GAME",
        },
      },
    });
  });

  it("back to bedroom button exists", () => {
    cy.mount(
      <Provider store={store}>
        <StartGame />
      </Provider>
    );
    cy.getTest("start-game").should("exist");
  });

  it("back to bedroom button exists", () => {
    cy.mount(
      <Provider store={store}>
        <StartGame />
      </Provider>
    );
    cy.getTest("back-to-bedroom").should("exist");
  });
});
