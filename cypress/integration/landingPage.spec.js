/// <reference types="cypress" />

describe("Landing page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should redirect to /users", () => {
    cy.location("pathname").should("equal", "/users");
  });
});
