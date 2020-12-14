describe("Home page", () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it("header contains a heading", () => {
        cy.get('h1').should('Hello')
      })
  })