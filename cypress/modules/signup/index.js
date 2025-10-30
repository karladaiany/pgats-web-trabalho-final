class Signup {
    elements = {
        tituloMrInput: () => cy.get('input#id_gender1'),
        tituloMrsInput: () => cy.get('input#id_gender2'),
        fullNameInput: () => cy.get('input[data-qa="name"]'),
        emailInput: () => cy.get('input[data-qa="email"]'),
        passwordInput: () => cy.get('input[data-qa="password"]'),
        dateOfBirthDaySelect: () => cy.get('select[data-qa="days"]'),
        dateOfBirthMonthSelect: () => cy.get('select[data-qa="months"]'),
        dateOfBirthYearSelect: () => cy.get('select[data-qa="years"]'),
        newsletterCheckbox: () => cy.get('input#newsletter'),
        offersCheckbox: () => cy.get('input#optin'),
        firstNameInput: () => cy.get('input[data-qa="first_name"]'),
        lastNameInput: () => cy.get('input[data-qa="last_name"]'),
        companyInput: () => cy.get('input[data-qa="company"]'),
        address1Input: () => cy.get('input[data-qa="address"]'),
        address2Input: () => cy.get('input[data-qa="address2"]'),
        countrySelect: () => cy.get('select[data-qa="country"]'),
        stateInput: () => cy.get('input[data-qa="state"]'),
        cityInput: () => cy.get('input[data-qa="city"]'),
        zipCodeInput: () => cy.get('input[data-qa="zipcode"]'),
        mobileNumberInput: () => cy.get('input[data-qa="mobile_number"]'),
        createAccountButton: () => cy.get('button[data-qa="create-account"]'),
        continueButton: () => cy.get('a[data-qa="continue-button"]')
    }

    // Ações
    preencherFormularioCadastro(dados) {
        if (dados.titulo === 'Mr') {
            this.elements.tituloMrInput().check()
        } else if (dados.titulo === 'Mrs') {
            this.elements.tituloMrsInput().check()
        }
        this.elements.passwordInput().type(dados.senha)
        this.elements.dateOfBirthDaySelect().select(dados.diaNascimento)
        this.elements.dateOfBirthMonthSelect().select(dados.mesNascimento)
        this.elements.dateOfBirthYearSelect().select(dados.anoNascimento)
        this.elements.firstNameInput().type(dados.nome)
        this.elements.lastNameInput().type(dados.sobrenome)
        this.elements.companyInput().type(dados.empresa)
        this.elements.address1Input().type(dados.endereco1)
        this.elements.address2Input().type(dados.endereco2)
        this.elements.countrySelect().select(dados.pais)
        this.elements.stateInput().type(dados.estado)
        this.elements.cityInput().type(dados.cidade)
        this.elements.zipCodeInput().type(dados.cep)
        this.elements.mobileNumberInput().type(dados.numeroCelular)
    }

    marcarCheckboxNewsletter() {
        this.elements.newsletterCheckbox().check()
    }
    
    marcarCheckboxOffers() {
        this.elements.offersCheckbox().check()
    }

    clicarBotaoCreateAccount() {
        this.elements.createAccountButton().click() 
    }

    clicarBotaoContinue() {
        this.elements.continueButton().click()
    }

    // Validações
    verificarMensagemDoFormulario() {
        cy.contains('Enter Account Information').should('be.visible')
    }

    verificarMensagemContaCriada() {
        cy.contains('b', 'Account Created!').should('be.visible')
    }
}

export default new Signup()