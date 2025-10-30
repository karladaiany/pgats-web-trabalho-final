/// <reference types="cypress" />

import home from '../modules/home/index.js'
import signupLogin from '../modules/signupLogin/index.js'
import signup from '../modules/signup/index.js'
import { geradorDeDados } from '../support/helpers.js'

describe('Caso de teste 1: Registrar usuário', () => {

  it('Registrar um usuário com sucesso', () => {
  
    const dados = geradorDeDados()

    home.acessarPaginaInicial()
    home.verificarSliderVisivel()

    home.clicarBotaoSignupLogin()
    signupLogin.verificarNewUserSignupVisivel()

    signupLogin.preencherSignup(dados.nomeCompleto, dados.email)
    signupLogin.clicarBotaoSignup()
    signup.verificarMensagemDoFormulario()

    signup.preencherFormularioCadastro({
      titulo: dados.titulo,
      senha: dados.senha,
      diaNascimento: dados.diaNascimento,
      mesNascimento: dados.mesNascimento,
      anoNascimento: dados.anoNascimento,
      nome: dados.nome,
      sobrenome: dados.sobrenome,
      empresa: dados.empresa,
      endereco1: dados.endereco1,
      endereco2: dados.endereco2,
      pais: dados.pais,
      estado: dados.estado,
      cidade: dados.cidade,
      cep: dados.cep,
      numeroCelular: dados.numeroCelular
    })

    signup.marcarCheckboxNewsletter()
    signup.marcarCheckboxOffers()

    signup.clicarBotaoCreateAccount()
    signup.verificarMensagemContaCriada()

    signup.clicarBotaoContinue()
    home.verificarLoggedInAsUsernameVisivel(dados.nomeCompleto)

    home.clicarBotaoDeleteAccount()
    home.verificarMensagemAccountDeletedVisivel()
  })
})