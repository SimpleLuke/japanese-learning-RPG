import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import modalRuducer from "../../redux-store/game-modal/gameModalSlice";
import QuitGameModal from "./QuitGameModal";
import App from "../../App";
describe("QuitGameModal component", () => {
  let store;
  beforeEach(() => {
    store = configureStore({ reducer: { modalMenu: modalRuducer } });
  });
  it("exists", () => {
    cy.mount(
      <Provider store={store}>
        <App />
      </Provider>
    );

    cy.getTest("modal-title").should("not.exist");
    cy.getTest("modal-btn").click();
    cy.getTest("modal-title").should("exist");
    cy.getTest("modal-close-btn").click();
    cy.getTest("modal-title").should("not.exist");
  });
});
