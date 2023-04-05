describe("Signing up", () => {
  it("with valid details redirects to select character screen, cutscene and then bedroom", () => {
    cy.visit("/");
    cy.wait(7000);
    cy.get('[data-test="signup-btn"]').click();
    cy.get('[data-test="emailSignupInput"]').type("test@test.com");
    cy.get('[data-test="passwordSignupInput"]').type("test");
    cy.get('[data-test="signUpSubmitButton"]').click();
    cy.get('[data-test="page-title"]').should("be.visible");
    cy.get('[data-test="char-button1"]').click();
    cy.wait(500);
    cy.get('[data-test="study-desk"]').should("be.visible");
    cy.get('[data-test="study-desk"]').click();
    cy.get('[data-test="email"]').should("be.visible");
    cy.get('[data-test="wardrobe"]').should("be.visible");
    cy.get('[data-test="shop"]').should("exist");
    cy.dropCollection("users", { failSilently: true }).then((res) => {
      cy.log(res); // prints 'Collection dropped'
    });
  });

  it("with invalid email, rejects signup", () => {
    cy.visit("/");
    cy.wait(7000);
    cy.get('[data-test="signup-btn"]').click();
    cy.get('[data-test="emailSignupInput"]').type("testtest.com");
    cy.get('[data-test="passwordSignupInput"]').type("test");
    cy.get('[data-test="signUpSubmitButton"]').click();
    cy.get('[data-test="Sign-up-title"]').should("exist");
  });

  it("with missing password, rejects signup", () => {
    cy.visit("/");
    cy.wait(7000);
    cy.get('[data-test="signup-btn"]').click();
    cy.get('[data-test="emailSignupInput"]').type("testtest.com");
    cy.get('[data-test="signUpSubmitButton"]').click();
    cy.get('[data-test="Sign-up-title"]').should("exist");
  });
});
