describe("Visual Capturing Suite", () => {
  it("Logging into Orange Hrm", () => {
    cy.visit("www.google.com");
    cy.get('[value="Google Search"]').hideElement();
    cy.compareSnapshot("home-page");
  });
});
