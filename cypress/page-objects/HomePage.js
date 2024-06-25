class HomePage {

    elements = {
        homeButton: () => cy.get('#nava'),
        firstProduct: () => cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch'),
        secondProduct: () => cy.get(':nth-child(2) > .card > .card-block > .card-title > .hrefch')
        
    }


    visit(url) {
        cy.visit(url);
    }

    selectFirstProduct() {
        this.elements.firstProduct().click();
    }
    selectSecondProduct() {
        this.elements.secondProduct().click();
    }
    goToHome() {
        this.elements.homeButton().click();
    }

}


export default new HomePage();