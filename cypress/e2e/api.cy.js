describe('user API test demoblaze', () => {

    const usernameR = `user_${Math.random().toString(36).substring(7)}`; // Cracion de usuario aleatorio
    const passwordR = Math.random().toString(36).substring(7); //Creacion de contraseña aleatoria

    it('Nuevo Usuario', () => {

        cy.fixture('apiData').then((data) => {
            cy.request({
                method: 'POST',
                url: data.endpoints.signUp,
                body: { username: usernameR, password: passwordR }
            })
                .then((response) => {
                    expect(response.status).to.eq(200);


                });
        });
    });

    it('crear usuario existente', () => {

        cy.fixture('apiData').then((data) => {
            cy.request({
                method: 'POST',
                url: data.endpoints.signUp,
                body: { username: usernameR, password: passwordR }
            })
                .then((response) => {
                    cy.log(response)
                    expect(response.status).to.eq(200);
                    expect(response.body.errorMessage).to.eq('This user already exist.');
                });
        });
    });

    it('login usuario y password correcto', () => {

        cy.fixture('apiData').then((data) => {
            cy.request({
                method: 'POST',
                url: data.endpoints.signIn,
                body: { username: usernameR, password: passwordR }
            })
                .then((response) => {
                    cy.log(response)
                    expect(response.status).to.eq(200);
                    expect(response.body).to.contain('Auth_token')
                });
        });
    });

    it('login usuario y password incorrecto', () => {

        cy.fixture('apiData').then((data) => {
            cy.request({
                method: 'POST',
                url: data.endpoints.signIn,
                body: { username: usernameR + "*", password: passwordR + "*" }
            })
                .then((response) => {
                    cy.log(response)
                    expect(response.status).to.eq(200);
                    expect(response.body.errorMessage).to.eq('User does not exist.');
                });
        });
    });


});