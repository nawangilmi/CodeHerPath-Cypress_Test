import { LoginPage } from "../../../fixtures/pages/login_page/login_page.cy.js"

let loginPage = new LoginPage()

beforeEach(() => {
    loginPage.navigateLoginPage();
});

describe('Login Page', { testIsolation: false }, () => {
    it('Login with valid username and password', () => {
        loginPage.fillUsername(Cypress.env('saucelab_username'));
        loginPage.fillPassword(Cypress.env('saucelab_password'));
        loginPage.clickLogin();
        cy.wait(3000);
        loginPage.validateLoginSuccess();
    });

    it('Login with invalid username and password', () => {
        loginPage.fillUsername(Cypress.env('saucelab_invalid_username'));
        loginPage.fillPassword(Cypress.env('saucelab_password'));
        loginPage.clickLogin();
        cy.wait(3000);
        loginPage.validateLoginUnsuccess();
    });

    it('Login with locked out username and password', () => {
        loginPage.fillUsername(Cypress.env('saucelab_lockedout_username'));
        loginPage.fillPassword(Cypress.env('saucelab_password'));
        loginPage.clickLogin();
        cy.wait(3000);
        loginPage.validateLoginUnsuccess();
    });

    it('Login with problem username and password', () => {
        loginPage.fillUsername(Cypress.env('saucelab_problem_username'));
        loginPage.fillPassword(Cypress.env('saucelab_password'));
        loginPage.clickLogin();
        cy.wait(3000);
        loginPage.validateLoginSuccess();
    });

    it('Login with glitch username and password', () => {
        loginPage.fillUsername(Cypress.env('saucelab_glitch_username'));
        loginPage.fillPassword(Cypress.env('saucelab_password'));
        loginPage.clickLogin();
        cy.wait(8000);
        loginPage.validateLoginSuccess();
    });

    it('Login with error username and password', () => {
        loginPage.fillUsername(Cypress.env('saucelab_error_username'));
        loginPage.fillPassword(Cypress.env('saucelab_password'));
        loginPage.clickLogin();
        cy.wait(8000);
        loginPage.validateLoginSuccess();
    });

    it('Login with visual username and password', () => {
        loginPage.fillUsername(Cypress.env('saucelab_visual_username'));
        loginPage.fillPassword(Cypress.env('saucelab_password'));
        loginPage.clickLogin();
        cy.wait(8000);
        loginPage.validateLoginSuccess();
    });

});
