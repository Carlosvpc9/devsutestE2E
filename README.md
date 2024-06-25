TEST AUTOMATION EXCERSISES DEVSU

****************************
PurchasingTest.cy.js
****************************
The file test is related with the first excersise for e2e test using www.demoblaze.com, the steps to automate were:

1. Vist home page
2. Add two products to the cart
3. View the cart
4. Place the order filling the order form
5. Finish the purchase flow.

****************************
api.cy.js
****************************
The file test is related with the first excersise for API test using www.demoblaze.com, the steps to automate were:

1. Create a user
2. Try to create an existing user
3. Login wit a correct user and password
4. Login with a wrong user and password


********************************************
Steps to run the test and generate report:
********************************************
1. Clone the repository
2. install node dependences with "npm install"
3. To Run all the test (PurchasingTest and API user test) and generate report use "npx cypress run --e2e"

note: To run one test of them specify the file, example:

    npx cypress run --e2e --spec "cypress/e2e/api.cy.js"

