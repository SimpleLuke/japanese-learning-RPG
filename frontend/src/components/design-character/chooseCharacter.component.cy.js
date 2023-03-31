import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import sceneReducer from "../../redux-store/scene/sceneSlice";
import userReducer from "../../redux-store/user/userSlice";
import CharacterDesign from "./chooseCharacter.component";
import CharacterComponent from "./character.component";

describe("CharacterDesign component", () => {
  let store;

  const data = {
    body: "body",
    hair: "gentlemanHair-blond",
    top: "tshirt-gray",
    bottoms: "pants-blue",
    shoes: "shoes-navy"
  };

  beforeEach(() => {
    store = configureStore({
      reducer: { scene: sceneReducer, user: userReducer },
      preloadedState: {
        scene: {
          currentScene: "CHARACTER",
        },
        user: {
          email: "test@gmail.com",
        },
      },
    });
  });

  it('checks scene is CHARACTER', () => {
    cy.mount(
      <Provider store={store}>
        <CharacterDesign />
      </Provider>
    );
    expect(store.getState().scene.currentScene).to.equal("CHARACTER");
  })

  it('checks elements are rendered', () => {
    cy.mount(
      <Provider store={store}>
        <CharacterDesign />
      </Provider>
    );
    cy.getTest("page-title").should("contain.text", "Select your character");
    cy.getTest("character-body").should('exist');
    cy.getTest("character-body").should('have.length', 3);
    cy.getTest("char-button").should('have.length', 3);
  })

  it('checks styling is correctly rendered', () => {
    cy.mount(
      <Provider store={store}>
        <CharacterDesign />
      </Provider>
    );
    cy.mount(<CharacterComponent data={data} />);
    cy.get("[data-test=character-body]").should("have.class", data.body);
    cy.get("[data-test=character-hair]").should("have.class", data.hair);
    cy.get("[data-test=character-top]").should("have.class", data.top);
    cy.get("[data-test=character-bottoms]").should("have.class", data.bottoms);
    cy.get("[data-test=character-shoes]").should("have.class", data.shoes);
  })
})