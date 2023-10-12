import React from "react";
import Login from "./Login.component";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import sceneReducer from "../../redux-store/scene/sceneSlice";

describe("Login component", () => {
  let store;
  beforeEach(() => {
    store = configureStore({
      reducer: { scene: sceneReducer },
      preloadedState: {
        scene: {
          currentScene: "LOGIN",
        },
      },
    });
  });

  it("currentScene is equal to LOGIN", () => {
    cy.mount(
      <Provider store={store}>
        <Login />
      </Provider>
    );
    expect(store.getState().scene.currentScene).to.equal("LOGIN");
  });

  it("renders login form", () => {
    cy.mount(
      <Provider store={store}>
        <Login />
      </Provider>
    );
    cy.getTest("loginForm").should("exist");
    cy.getTest("passwordInput").should("exist");
    cy.getTest("emailInput").should("exist");
  });

  it("fills the form and submits successfully", () => {
    cy.mount(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    cy.intercept("POST", "http://localhost:8000/tokens", {
      statusCode: 201,
      body: { token: "abc123", userData: { name: "John" } },
    }).as("loginRequest");

    cy.getTest("emailInput").type("test@test.com");
    cy.getTest("passwordInput").type("password123");
    cy.getTest("loginForm").submit();

    cy.wait("@loginRequest").then((interception) => {
      expect(interception.response.body.token).to.equal("abc123");
    });
  });

  it("fills the form and fails to login with incorrect credentials", () => {
    cy.mount(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    cy.intercept("POST", "http://localhost:8000/tokens", {
      statusCode: 401,
      body: { error: "Incorrect email or password" },
    }).as("loginRequest");

    cy.getTest("emailInput").type("invalid@test.com");
    cy.getTest("passwordInput").type("incorrectpassword");
    cy.getTest("loginForm").submit();

    cy.wait("@loginRequest").then((interception) => {
      expect(interception.response.statusCode).to.equal(401);
      expect(interception.response.body.error).to.equal(
        "Incorrect email or password"
      );
    });
  });
});
