describe("Game component", () => {
  afterEach(() => {
    cy.dropCollection("users", { failSilently: true }).then((res) => {
      cy.log(res); // prints 'Collection dropped'
    });
  });

  it("renders initial stats and updates after game", () => {
    cy.signup("test@test.com", "password");
    cy.wait(1000);
    cy.get('[data-test="email"]').should("contain.text", "test@test.com");
    cy.get('[data-test="level"]').should("contain.text", "Level: 1");
    cy.get('[data-test="exp"]').should("contain.text", "Exp: 0");
    cy.get('[data-test="words"]').should("contain.text", "Words: 0");
    cy.get('[data-test="coin"]').should("contain.text", "Coins: 0");
    cy.get('[data-test="study-desk"]').click();
    cy.get('[data-test="start-game"]').click();
    cy.get('[data-test="answer1"]').click();
    cy.wait(1000);
    cy.get('[data-test="answer1"]').click();
    cy.wait(1000);
    cy.get('[data-test="answer1"]').click();
    cy.wait(1000);
    cy.get('[data-test="answer1"]').click();
    cy.wait(1000);
    cy.get('[data-test="answer1"]').click();
    cy.wait(1000);
    cy.get('[data-test="answer1"]').click();
    cy.wait(1000);
    cy.get('[data-test="answer1"]').click();
    cy.wait(1000);
    cy.get('[data-test="answer1"]').click();
    cy.wait(1000);
    cy.get('[data-test="answer1"]').click();
    cy.wait(1000);
    cy.get('[data-test="answer1"]').click();
    cy.get('[data-test="score"]').should("exist");
    cy.get('[data-test="coins"]').should("exist");
    cy.get('[data-test="coins"]').should("exist");
    cy.get('[data-test="coins"]')
      .invoke("text")
      .then((text) => {
        const coins = parseInt(text.match(/\d+/)[0]);
        expect(coins).to.be.greaterThan(9);
      });
    cy.get('[data-test="backToBedroom"]').click();
    cy.get('[data-test="coin"]')
      .invoke("text")
      .then((text) => {
        const coins = parseInt(text.match(/\d+/)[0]);
        expect(coins).to.be.greaterThan(9);
      });

    cy.get('[data-test="statModal"]').click();
    cy.get('[data-test="coin"]')
      .invoke("text")
      .then((text) => {
        const coins = parseInt(text.match(/\d+/)[0]);
        expect(coins).to.be.greaterThan(9);
      });
  });
});
