import { LoginPage } from "../../../fixtures/pages/login_page/login_page.cy.js"
import { ProductPage } from "../../../fixtures/pages/login_page/product_page.cy.js"

let loginPage = new LoginPage()
let productPage = new ProductPage()

before(() => {
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
});


describe('Product Page', { testIsolation: false }, () => {
    it('Add Product to Cart', () => {
        productPage.clickAddtoCart();
        cy.wait(3000);
        productPage.validateAddtoCartSuccess();
    });
});