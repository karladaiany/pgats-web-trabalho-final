/// <reference types='cypress' />

describe('Caso de teste 15: Realizar pedido: Registrar antes de finalizar a compra', () => {
  /*
    3. Clique no botão 'Signup / Login'
    4. Prrencha todos os detalhes na inscrição e crie uma conta
    5. Marque  'ACCOUNT CREATED!' e clique em 'Continue'
    6. Verifique se 'Logged in as username' está visível na parte superior
    7. Adicione produtos ao carrinho
    8. Clique no botão 'Cart'
    9. Verifique se a página do carrinha é exibida
    10. Clique em 'Proceed To Checkout'
    11. Verifique 'Address Details and Review Your Order'
    12. Insira a descrição na área de texto do comentário e clique em 'Place Order'
    13. Insira os detalhes do pagamento: Nome no cartão, Número do cartão, CVC, Data de validade
    14. Clique no botão 'Pay and Confirm Order'
    15. Verifique se a mensagem de sucesso 'Your order has been placed successfully!' está visível
    16. Clique no botão 'Delete Account'
    17. Verifique se 'ACCOUNT DELETED!' está visível e clique no botão 'Continue'
  */

  it('placeholder - passos descritos no comentário', () => {
    home.acessarPaginaInicial()
    home.verificarSliderVisivel()
  })
})
