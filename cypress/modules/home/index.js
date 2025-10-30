class Home {
    elements = {
        homeButton: () => cy.get('a[href="/"]'),
        productsButton: () => cy.get('a[href="/products"]'),
        cartButton: () => cy.get('a[href="/view_cart"]'),
        signupLoginButton: () => cy.get('a[href="/login"]'),
        contactUsButton: () => cy.get('a[href="/contact_us"]'),
        deleteAccountButton: () => cy.get('a[href="/delete_account"]'),
        slider: () => cy.get('#slider-carousel')
    }

    // Ações
    acessarPaginaInicial() {
        cy.visit('/')
    }

    clicarBotaoHome() {
        this.elements.homeButton().click()
    }

    clicarBotaoProducts() {
        this.elements.productsButton().click()
    }

    clicarBotaoCart() {
        this.elements.cartButton().click()
    }

    clicarBotaoSignupLogin() {
        this.elements.signupLoginButton().click()
    }

    clicarBotaoContactUs() {
        this.elements.contactUsButton().click()
    }

    clicarBotaoDeleteAccount() {
        this.elements.deleteAccountButton().click()
    }

    // Validações
    verificarSliderVisivel() {
        this.elements.slider().should('be.visible')
    }

    verificarLoggedInAsUsernameVisivel(username) {
        cy.contains(`Logged in as ${username}`).should('be.visible')
    }

    verificarMensagemAccountDeletedVisivel() {
        cy.contains('b', 'Account Deleted!').should('be.visible')
    }
}

export default new Home()