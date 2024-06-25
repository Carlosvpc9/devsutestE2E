
class CartPage {
    
    goToCart(){
        cy.get('#cartur').click();
    }

    placeOrder(){
        cy.get('.col-lg-1 > .btn').click();

    }

    fillForm(data) {
        cy.get('#name').type(data.name);
        cy.get('#country').type(data.country);
        cy.get('#city').type(data.city);
        cy.get('#card').type(data.card);
        cy.get('#month').type(data.month);
        cy.get('#year').type(data.year);
        cy.contains('Purchase');
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    }

    confirm(){
        cy.contains('Thank you for your purchase!');
        cy.get('body > div.sweet-alert.showSweetAlert.visible > div.sa-button-container > div > button')
        .should('be.visible')
        .click();
    }
}

export default new CartPage();