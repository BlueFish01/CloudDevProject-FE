describe('login logic test', () => {
  beforeEach(() => {
    cy.viewport(1980, 1080);
  })
  it('check unauthenticated user', () => {
    cy.clearCookies();
    cy.visit('/homepage');
    cy.url().should('include', '/login');
  })

  // it('should login fail', () => {
  //   cy.visit('/login');
  //   cy.fixture('login.json').then((loginData) => {
  //     cy.login(loginData.email, 'wrong password')
  //   });
  //   cy.get('h2').contains(/Wrong password or email !/i);
  //   cy.get('[data-testid="confirm-button"]').click();
  //   cy.url().should('include', '/login');
  // });

  it.only('should login success', () => {
    cy.visit('/login');
    cy.fixture('login.json').then((loginData) => {
      cy.login(loginData.email, loginData.password)
    });
    cy.url().should('include', '/homepage');
    cy.visit('/profile');
    cy.url().should('include', '/profile');
    cy.get('[data-testid="logout-button"]').click();
    cy.get('[data-testid="confirm-button"]').click();
    cy.url().should('include', '/login');
  })

})
