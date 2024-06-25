import CartPage from "../page-objects/CartPage";
import HomePage from "../page-objects/HomePage";
import ProductsPage from "../page-objects/ProductsPage";



describe('purchasing flow', () => {

  before(() => {
    HomePage.visit('www.demoblaze.com');
  });

  let firstProductName = null;
  let secondProductName = null;

  it('purchasing flow succesfully', () => {
    let products = {};

    HomePage.elements.firstProduct().invoke('text').then((texto) => firstProductName = texto);
    HomePage.selectFirstProduct();
    ProductsPage.addToCart();
    HomePage.goToHome();
    HomePage.elements.secondProduct().invoke('text').then((texto) => secondProductName = texto);
    HomePage.selectSecondProduct();
    ProductsPage.addToCart();
    CartPage.goToCart();
    CartPage.elements.cartList1().invoke('text').then((texto) => expect(texto).to.equal(firstProductName));
    CartPage.elements.cartList2().invoke('text').then((texto) => expect(texto).to.equal(secondProductName));
    CartPage.placeOrder();
    cy.wait(1000);
    cy.fixture('TestData').then((data) => {
      CartPage.fillForm(data.dataPurchaseForm);
    });
    CartPage.confirm();
  })




})