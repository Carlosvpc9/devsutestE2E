
class ProductsPage {

    elements = {
        addCartBtn: () =>  cy.get('.col-sm-12 > .btn'),
        productName: () => cy.get('#tbodyid > h2'),
        productPrice: () => cy.get('.price-container')
    }

    addToCart(){
       this.elements.addCartBtn().click();

    }

}

export default new ProductsPage();