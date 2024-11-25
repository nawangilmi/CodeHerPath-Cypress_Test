import product from "../../elements/product_elements.js";

export class ProductPage {
    navigateProductPage() {
        const urlProductSauceDemo = Cypress.env('base_url') + '/inventory.html';
        cy.log(urlProductSauceDemo);
        cy.visit(urlProductSauceDemo);
      }

    clickAddtoCart() {
        const buttonAddtoCart= cy.xpath(product.btnAddtoCart).as('buttonAddtoCart');
        buttonAddtoCart.click();
    }


    validateAddtoCartSuccess() {
        const urlCartSauceDemo = Cypress.env('cart_url');
        cy.visit(urlCartSauceDemo)
        cy.wait(3000);
        cy.xpath(product.cartItem).should('be.visible');
      }
}