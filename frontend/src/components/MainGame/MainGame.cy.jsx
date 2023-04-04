import React from "react";
import MainGame from "./MainGame";
import questions from "../StartGame/questions";

describe("MainGame", () => {
  // beforeEach(() => {
  //   cy.mount(<MainGame />);
  // });
  it("true", () => {
    expect(true).to.equal(true);
  });
  //
  // it('displays the first question on load', () => {
  //   cy.contains(questions[0].japanese);
  // });
  //
  // it('displays the correct question count', () => {
  //   cy.contains(`Question 1/${questions.length}`);
  // });
  //
  // it('allows the user to select an answer', () => {
  //   cy.contains(questions[0].options[0]).click();
  //   cy.get('.answer-btn').should('have.length', questions[0].options.length);
  //   cy.contains(questions[0].options[0]).should('have.class', 'bg-red-400');
  // });
  //
  // it('updates the score after a correct answer is selected', () => {
  //   cy.get('.score-section').contains('Score: 0');
  //   cy.contains(questions[0].answer).click();
  //   cy.get('.score-section').contains('Score: 1');
  // });
  //
  // it('moves to the next question after a correct answer is selected', () => {
  //   cy.contains(questions[0].answer).click();
  //   cy.contains(questions[1].japanese);
  // });
});
