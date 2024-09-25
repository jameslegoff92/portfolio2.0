it('should navigate to the home page', () => {
  cy.visit('http://localhost:3000/about');
  cy.wait(500);  // Optionally wait for the page to fully load (you can also wait for specific elements)
  cy.get('#logo-canvas').click();
  cy.url().should('include', '/');
});

// it('should navigate to the about page', () => {
//   cy.visit('http://localhost:3000');
//   cy.get('a[href="/about"]').click();
//   cy.url().should('include', '/about');
// });

// it('should navigate to the projects page', () => {
//   cy.visit('http://localhost:3000');
//   cy.get('a[href="/projects"]').click();
//   cy.url().should('include', '/projects');
// });
// it('should navigate to the about contact page', () => {
//   cy.visit('http://localhost:3000');
//   cy.get('a[href="/contact"]').click();
//   cy.url().should('include', '/contact');
// });