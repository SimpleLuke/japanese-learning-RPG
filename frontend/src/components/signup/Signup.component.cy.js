import React from "react";
import Signup from "./Signup.component";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import sceneReducer from "../../redux-store/scene/sceneSlice";
import userReducer from "../../redux-store/user/userSlice";

describe("Signup component", () => {
  let store;
  beforeEach(() => {
    store = configureStore({
      reducer: { scene: sceneReducer },
      preloadedState: {
        scene: {
          currentScene: "SIGNUP",
        },
      },
    });
  });

  it("currentScene is equal to SIGNUP", () => {
    cy.mount(
      <Provider store={store}>
        <Signup />
      </Provider>
    );
    expect(store.getState().scene.currentScene).to.equal("SIGNUP");
  });

  it("renders signup form", () => {
    cy.mount(
      <Provider store={store}>
        <Signup />
      </Provider>
    );
    cy.getTest("passwordSignupInput").should("exist");
    cy.getTest("emailSignupInput").should("exist");
    cy.getTest("backToMenuButton").should("exist");
    cy.getTest("SignupForm").should("exist");
  });
});
