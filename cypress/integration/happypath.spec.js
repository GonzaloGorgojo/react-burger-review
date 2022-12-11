/// <reference types="Cypress" />

describe("Testing Happy Path", () => {
  before(() => {
    cy.visit("/");
  });

  it("Visibility of all home elements", () => {
    cy.get("#navbar").should("be.visible");
    cy.get("img").should("be.visible");
    cy.get("#containerHome").should("be.visible");
    cy.get(".container").should("be.visible");
  });
});
