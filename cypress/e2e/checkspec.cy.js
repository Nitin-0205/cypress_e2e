describe('template spec', () => {

  beforeEach('Exception Handling', () => {

    cy.on('uncaught:exception', (err) => {

      console.log('Exception handling', err);
      return false;

    });

    cy.visit('https://erp.atriina.com/login');

  });

  it('Login in ERP for checkin', () => {

    cy.get('#login_email').type(Cypress.env('USERNAME'));
    cy.get('#login_password').type(Cypress.env('PASSWORD'));
    cy.get('[type="submit"]').contains('Login').click();
    cy.get('#navbar-search').type('Employee Check');
    cy.get('#awesomplete_list_1').children().first().click();
    cy.get('[data-label="Add Employee Checkin"]').click();
    // cy.get('.input-with-feedback.form-control.bold[data-fieldname="employee"]')
    //   .type(Cypress.env('EMP_ID'));
    // cy.get('select[data-fieldtype="Select"]').select('IN');
    cy.get('select[data-fieldtype="Select"][data-fieldname="log_type"]').select('IN');
    cy.wait(1000);
    cy.get('[data-label="Save"]').click();
    cy.wait(1000);
  });
})
