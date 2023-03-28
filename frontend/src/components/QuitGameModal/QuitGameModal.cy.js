import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import modalRuducer from "../../redux-store/game-modal/gameModalSlice";
import QuitGameModal from "./QuitGameModal";

describe("QuitGameModal component", () => {
  let store;

  beforeEach(() => {
    store = configureStore({ reducer: { modalMenu: modalRuducer } });
  });

  it("exists", () => {
    cy.mount(
      <Provider store={store}>
        <QuitGameModal />
      </Provider>
    );

    // cy.get('[data-test="transitionRoot"]').should('exist');
    cy.getTest('transitionRoot').should('exist');
    // cy.get('[data-test="dialog"]').should('be.visible');
  })
});

//   it("renders login buttons", () => {
//     cy.mount(
//       <Provider store={store}>
//         <StartMenu />
//       </Provider>
//     );

//     cy.getTest("login-btn").should("exist");
//   });

//   it("renders signup buttons", () => {
//     cy.mount(
//       <Provider store={store}>
//         <StartMenu />
//       </Provider>
//     );

//     cy.getTest("signup-btn").should("exist");
//   });
// });






// import React from "react";
// import { Provider } from "react-redux";
// import { configureStore } from "@reduxjs/toolkit";
// import sceneRuducer from "../../redux-store/scene/sceneSlice";
// import StartMenu from "./StartMenu.component";

// describe("StartMenu component", () => {
//   let store;

//   beforeEach(() => {
//     store = configureStore({ reducer: { scene: sceneRuducer } });
//   });

//   it("currentScene is eual to START_MENU", () => {
//     cy.mount(
//       <Provider store={store}>
//         <StartMenu />
//       </Provider>
//     );
//     expect(store.getState().scene.currentScene).to.equal("START_MENU");
//   });

//   it("renders login buttons", () => {
//     cy.mount(
//       <Provider store={store}>
//         <StartMenu />
//       </Provider>
//     );

//     cy.getTest("login-btn").should("exist");
//   });

//   it("renders signup buttons", () => {
//     cy.mount(
//       <Provider store={store}>
//         <StartMenu />
//       </Provider>
//     );

//     cy.getTest("signup-btn").should("exist");
//   });
// });
