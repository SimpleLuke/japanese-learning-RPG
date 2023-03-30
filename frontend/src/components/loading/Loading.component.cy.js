import Loading from "./Loading.component";

describe("Loading component", () => {
  it("redners", () => {
    cy.mount(<Loading />);
    cy.getTest("loading-bg").should("exist");
  });
});
