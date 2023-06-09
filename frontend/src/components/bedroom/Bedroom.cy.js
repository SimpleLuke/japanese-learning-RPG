import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import sceneReducer from "../../redux-store/scene/sceneSlice";
import userReducer from "../../redux-store/user/userSlice";
import statModalReducer from "../../redux-store/stat-modal/statModalSlice";
import Bedroom from "./Bedroom.component";
import musicPlayerReducer from "../../redux-store/music/musicSlice";

describe("Bedroom component", () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        scene: sceneReducer,
        user: userReducer,
        statModal: statModalReducer,
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
            currentOutfit: {
              body: "body",
              hair: "gentlemanHair-blond",
              top: "tshirt-gray",
              bottoms: "pants-blue",
              shoes: "shoes-navy",
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

  //These tests below should now use mocking because the way we update the stat bar has changed from Slice to db get request

  xit("renders stat bar", () => {
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

  xit("renders a button which navigate to GAME_START scene", () => {
    cy.mount(
      <Provider store={store}>
        <Bedroom />
      </Provider>
    );

    cy.getTest("study-desk").should("contain.text", "Desk");
  });
});
