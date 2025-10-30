/// <reference types='cypress' />

describe('Caso de teste 6: Formulário de contato', () => {
  /*
    3. Clique no botão 'Contact Us'
    4. Verifique se 'GET IN TOUCH' está visível
    5. Digite nome, e-mail, assunto e mensagem
    6. Carregue um arquivo
    7. Clique no botão 'Submit'
    8. Clique no botão 'OK' na janela de alerta
    9. Verifique se a mensagem 'Success! Your details have been submitted successfully.' está visível
   10. Clique no botão 'Home' e verifique se você foi direcionado para a página inicial
  */

  it('placeholder - passos descritos no comentário', () => {
    home.acessarPaginaInicial()
    home.verificarSliderVisivel()
  })
})
