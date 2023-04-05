import { addCoins } from "../../src/redux-store/user/userSlice";
import { useDispatch } from "react-redux";
describe("Styling", () => {
  afterEach(() => {
    cy.dropCollection("users", { failSilently: true }).then((res) => {
      cy.log(res); // prints 'Collection dropped'
    });
  });

  it("renders shop and doesn't let user buy clothes if they don't have enough coins", () => {
    cy.signup("test@test.com", "password");
    cy.wait(1000);
    cy.get('[data-test="shop"]').click();
    cy.get('[data-test="previewButton0"]').should("exist");
    cy.get('[data-test="previewButton1"]').should("exist");
    cy.get('[data-test="previewButton2"]').should("exist");
    cy.get('[data-test="previewButton3"]').should("exist");
    cy.get('[data-test="purchaseButton0"]').click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Not enough of coins");
    });
  });

  it("renders shop and lets user buy clothes if they have enough coins", () => {
    cy.signup("test@test.com", "password");
    cy.wait(1000);
    cy.get('[data-test="shop"]').click();
    const requestBody = {
      email: "test@test.com",
      wordsLearnt: [["hello", "hello"]],
      character: {
        attributes: {
          xp: 0,
          level: 1,
          wordsKnown: 0,
          coins: 1000,
        },
        inventory: [],
        currentOutfit: {
          body: "",
          hair: "",
          top: "",
          bottoms: "",
          shoes: "",
        },
      },
    };
    const token = window.localStorage.getItem("token");
    cy.request({
      method: "POST",
      url: "http://localhost:8000/game/update",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(requestBody),
    }).then((response) => {
      console.log(response);
    });
    cy.wait(5000);
    cy.get('[data-test="back-to-bedroom"').click();
    cy.get('[data-test="shop"').click();
    cy.get('[data-test="purchaseButton0"]').click();
    cy.get('[data-test="soldOutButton0"]').should("exist");
    // cy.get('[data-test=""').click();
  });
});
