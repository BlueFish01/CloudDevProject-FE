describe('Homepage test', () => {
  before(() => {
    cy.clearCookies();
    cy.visit("/login")
    cy.fixture('login.json').then((loginData) => {
      cy.login(loginData.email, loginData.password)
    });
    cy.url().should('include', '/homepage');
  })

  beforeEach(() => {
    cy.viewport(1980, 1080);
  })

  it('Homepage should work', () => {
    //homepage show blog card
    cy.visit('/homepage')
    cy.url().should('include', '/homepage');
    cy.wait(5000);
    cy.get('[data-testid="blog-card"]').should('be.visible');

    // //homepage show blog detail
    cy.get('[data-testid="blog-card"]').first().click();
    cy.wait(5000);
    cy.url().should('include', '/detail');
    cy.go('back');

    //homepage show blog editor
    cy.get('[data-testid="open-blog-editor-button"]').should('be.visible').click();

    cy.get("input[name='topic']").type("test title")
    cy.get("textarea[name='description']").type("test description")
    cy.get("input[type='file']").invoke("show").selectFile("cypress/fixtures/picture.jpg");
    cy.get('[data-testid="code-block-button"]').click();
    cy.get('pre').type("<h1>test code block form cypress</h1>");

    cy.reload();
    cy.wait(3000);

    cy.get('[data-testid="blog-card"]').should('be.visible');
    cy.visit('/profile');
    cy.url().should('include', '/profile');
    cy.get('[data-testid="logout-button"]').click();
    cy.get('[data-testid="confirm-button"]').click();
    cy.url().should('include', '/login');
  })
})