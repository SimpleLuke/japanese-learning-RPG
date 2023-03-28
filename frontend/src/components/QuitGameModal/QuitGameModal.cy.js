import QuitGameModal from "./QuitGameModal"
// import { mount } from 'cypress-react-unit-test';
import React from 'react';

describe('QuitGameModal', () => {
  it('exists', () => {
    cy.mount(<QuitGameModal />)
    cy.get('[data-cy="transitionRoot"]').should('exist');
    cy.get('[data-cy="dialog"]').should('be.visible');
  })
})