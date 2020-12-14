describe("Home page", () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it("header should contain GMDB, Home, Login, and Search", () => {
        cy.get('.navBar').should('contain', 'GMDB')
        cy.get('.navBar').should('contain', 'Home')
        cy.get('.navBar').should('contain', 'Login')
        cy.get('.navBar').should('contain', 'Search')
      })

      it("should see a list of movies by their poster image", () =>{
          cy.get('div[class="main-page"]').find('img').should('be.visible');
      })

      it("should see image sizes to be 225pxWidth by 350pxHeight", () => {
          cy.get('div[class="main-page"]').get('img').invoke('height').should('eq', 350)
          cy.get('div[class="main-page"]').get('img').invoke('width').should('eq', 225)
      })

  })

  