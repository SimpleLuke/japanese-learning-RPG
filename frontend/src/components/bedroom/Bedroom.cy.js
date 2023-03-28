import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import sceneReducer from "../../redux-store/scene/sceneSlice";
import userReducer from "../../redux-store/user/userSlice";
import Bedroom from "./Bedroom.component";

describe("Bedroom component", () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: { scene: sceneReducer, user: userReducer },
      preloadedState: {
        scene: {
          currentScene: "BEDROOM",
        },
        user: {
          email: "test@gmail.com",
          character: {
            attributes: {
              xp: 100,
              level: 10,
              wordsKnown: 20,
            },
          },
        },
      },
    });
  });

  it("currentScene is equal to BEDROOM", () => {
    cy.mount(
      <Provider store={store}>
        <Bedroom />
      </Provider>
    );
    expect(store.getState().scene.currentScene).to.equal("BEDROOM");
  });

  it("renders stat bar", () => {
    cy.mount(
      <Provider store={store}>
        <Bedroom />
      </Provider>
    );

    cy.getTest("email").should("contain.text", "test@gmail.com");
    cy.getTest("level").should("contain.text", "Level: 10");
    cy.getTest("exp").should("contain.text", "Exp: 100");
    cy.getTest("words").should("contain.text", "Words: 20");
  });

  it("renders a button which navigate to GAME_START scene", () => {
    cy.mount(
      <Provider store={store}>
        <Bedroom />
      </Provider>
    );

    cy.getTest("study-desk").should("contain.text", "Study desk");
  });
});
