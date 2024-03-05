describe("Visual Capturing Suite", () => {
  it("Logging into Orange Hrm", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get('[name="username"]');
    cy.get('[name="password"]');
    cy.compareSnapshot("home-page");
  });
});
