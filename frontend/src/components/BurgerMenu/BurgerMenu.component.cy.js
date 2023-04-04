import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import sceneReducer from "../../redux-store/scene/sceneSlice";
import userReducer from "../../redux-store/user/userSlice";
import musicPlayerReducer from "../../redux-store/music/musicSlice";
import BurgerMenu from "./BurgerMenu.component";

describe("Bedroom component", () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        scene: sceneReducer,
        user: userReducer,
        musicPlayer: musicPlayerReducer,
      },
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

  it("Burger Menu should exist", () => {
    cy.mount(
      <Provider store={store}>
        <BurgerMenu />
      </Provider>
    );
    cy.getTest("options").should("exist");
  });

  it("clicks on burger menu and logout / music toggle buttons appear", () => {
    cy.mount(
      <Provider store={store}>
        <BurgerMenu />
      </Provider>
    );
    cy.get('[data-test="options"]').click();
    cy.getTest("logout").should("exist");
    cy.getTest("musicToggle").should("exist");
  });

  it("music plays by default", () => {
    cy.mount(
      <Provider store={store}>
        <BurgerMenu />
      </Provider>
    );
    expect(store.getState().musicPlayer.toggle).to.equal(false);
  });
});
