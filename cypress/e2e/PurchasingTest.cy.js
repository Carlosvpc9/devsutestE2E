import CartPage from "../page-objects/CartPage";
import HomePage from "../page-objects/HomePage";
import ProductsPage from "../page-objects/ProductsPage";



describe('purchasing flow', () => {

  before(() => {  
      HomePage.visit('www.demoblaze.com');
  });

  it('purchasing flow succesfully', () => {
    HomePage.firstProduct();
    ProductsPage.addToCart();
    HomePage.goToHome();
    HomePage.secondProduct();
    ProductsPage.addToCart();
    CartPage.goToCart();
    CartPage.placeOrder();
    cy.wait(1000);
    cy.fixture('TestData').then((data) => {
      CartPage.fillForm(data.dataPurchaseForm);  
    });
    CartPage.confirm();
  })




})