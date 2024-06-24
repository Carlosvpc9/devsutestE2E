class HomePage {

    visit(){
        cy.visit('www.demoblaze.com')
    }

    goToHome(){
        cy.get('#nava').click();
    }

    firstProduct(){
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click();
    }

    secondProduct(){
        cy.get(':nth-child(2) > .card > .card-block > .card-title > .hrefch').click();  
    } 

    
}


export default new HomePage();