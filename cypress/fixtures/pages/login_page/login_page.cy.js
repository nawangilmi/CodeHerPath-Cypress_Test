import login from "../../elements/login_elements.js";

export class LoginPage {
  navigateLoginPage() {
    const urlSauceDemo = Cypress.env('base_url');
    cy.log(urlSauceDemo);
    cy.visit(urlSauceDemo);
  }

  fillUsername(dataEmail) {
    const validateEmail = cy.get(login.fieldUsername).as('fieldEmail');
    validateEmail.type(dataEmail);
  }

  fillPassword(dataPassword) {
    const validatePassword = cy.get(login.fieldPassword).as('fieldPassword');
    validatePassword.type(dataPassword);
  }

  clickLogin() {
    const buttonLogin = cy.get(login.btnLogin).as('buttonLogin');
    buttonLogin.click();
  }

  validateLoginUnsuccess(){
    const alertUser = cy.get(login.alertErrorLogin).as('alertUser');
    alertUser.should('be.visible');
  }

  validateLoginSuccess() {
    cy.url().should('eq', `${Cypress.env('base_url')}inventory.html`);
  }
}