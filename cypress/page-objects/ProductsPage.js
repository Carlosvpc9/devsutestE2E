
class ProductsPage {

    addToCart(){
        cy.get('.col-sm-12 > .btn').click();
    }

}

export default new ProductsPage();