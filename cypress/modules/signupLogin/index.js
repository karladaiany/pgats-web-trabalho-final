class SignupLogin {
  elements = {
    // Login to your account
    loginEmailInput: () => cy.get('input[data-qa="login-email"]'),
    loginPasswordInput: () => cy.get('input[data-qa="login-password"]'),
    loginButton: () => cy.get('button[data-qa="login-button"]'),
    
    // New User Signup!
    signupNameInput: () => cy.get('input[data-qa="signup-name"]'),
    signupEmailInput: () => cy.get('input[data-qa="signup-email"]'),
    signupButton: () => cy.get('button[data-qa="signup-button"]'),
  }

  // Ações
  preencherSignup(nome, email) {
    this.elements.signupNameInput().type(nome)
    this.elements.signupEmailInput().type(email)
  }

  clicarBotaoSignup() {
    this.elements.signupButton().click()
  }

  preencherLogin(email, senha) {
    this.elements.loginEmailInput().type(email)
    this.elements.loginPasswordInput().type(senha)
  }

  clicarBotaoLogin() {
    this.elements.loginButton().click()
  }

  // Validações
  verificarNewUserSignupVisivel() {
    cy.contains('New User Signup!').should('be.visible')
  }}

export default new SignupLogin()