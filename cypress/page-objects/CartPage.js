
class CartPage {

    elements = {
        cartBtn: () => cy.get('#cartur'),
        placeOrderBtn: () => cy.get('.col-lg-1 > .btn'),
        nameField: () => cy.get('#name'),
        countryField: () => cy.get('#country'),
        cityField: () => cy.get('#city'),
        cardField: () => cy.get('#card'),
        monthField: () => cy.get('#month'),
        yearField: () => cy.get('#year'),
        purchaseBtn: () => cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'),
        confirmBtn: () => cy.get('body > div.sweet-alert.showSweetAlert.visible > div.sa-button-container > div > button'),
        cartList1: () => cy.get('#tbodyid > :nth-child(2) > :nth-child(2)'),
        cartList2: () =>cy.get('#tbodyid > :nth-child(1) > :nth-child(2)')
    }



    goToCart() {
        this.elements.cartBtn().click();
    }

    placeOrder() {
        this.elements.placeOrderBtn().click();

    }

    fillForm(data) {
        this.elements.nameField().type(data.name);
        this.elements.countryField().type(data.country);
        this.elements.cityField().type(data.city);
        this.elements.cardField().type(data.card);
        this.elements.monthField().type(data.month);
        this.elements.yearField().type(data.year);
        this.elements.purchaseBtn().should('be.visible');
        this.elements.purchaseBtn().click();
    }

    confirm() {
        cy.contains('Thank you for your purchase!');
        this.elements.confirmBtn().should('be.visible').click();
    }
}

export default new CartPage();