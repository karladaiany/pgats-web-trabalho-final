/// <reference types='cypress' />

describe('Caso de teste 10: Verificar inscrição na página inicial', () => {
  /*
    3. Role até a seção 'SUBSCRIPTION' na página inicial
    4. Verifique se o texto/entrada de 'SUBSCRIPTION' está visível
    5. Insira um e-mail válido e submeta a subscrição (se aplicável)
    6. Verifique se a mensagem de sucesso 'You have been successfully subscribed!' está visível
  */

  it('placeholder - passos descritos no comentário', () => {
    home.acessarPaginaInicial()
    home.verificarSliderVisivel()
  })
})
