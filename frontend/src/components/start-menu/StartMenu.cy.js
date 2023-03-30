import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import sceneReducer from "../../redux-store/scene/sceneSlice";
import StartMenu from "./StartMenu.component";

describe("StartMenu component", () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: { scene: sceneReducer },
      preloadedState: {
        scene: {
          currentScene: "START_MENU",
        },
      },
    });
  });

  it("currentScene is equal to START_MENU", () => {
    cy.mount(
      <Provider store={store}>
        <StartMenu />
      </Provider>
    );
    expect(store.getState().scene.currentScene).to.equal("START_MENU");
  });

  it("renders login buttons", () => {
    cy.mount(
      <Provider store={store}>
        <StartMenu />
      </Provider>
    );

    cy.getTest("login-btn").should("exist");
  });

  it("renders signup buttons", () => {
    cy.mount(
      <Provider store={store}>
        <StartMenu />
      </Provider>
    );

    cy.getTest("signup-btn").should("exist");
  });
});
