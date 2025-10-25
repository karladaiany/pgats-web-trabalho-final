## Visão rápida do repositório

Este repositório contém testes end-to-end com Cypress para a aplicação alvo. A estrutura principal relacionada a testes está em `cypress/` e a configuração do Cypress em `cypress.config.js`.

Arquivos-chave:
- `package.json` — dependências de dev (ex.: `cypress` em devDependencies) e scripts atualmente mínimos.
- `cypress.config.js` — configuração central do runner e hooks de Node.
- `cypress/e2e/` — testes (ex.: `registrar-usuario.cy.js`).
- `cypress/fixtures/` — dados de teste reutilizáveis.
- `cypress/support/commands.js` — comandos personalizados do Cypress.

## Objetivo para o agente
- Entender que a maior parte do trabalho aqui são testes E2E com Cypress (JS/CommonJS).
- Fazer mudanças seguras em testes existentes e adicionar novos testes mantendo o padrão de pastas e nomes (`*.cy.js` em `cypress/e2e`).

## Comandos de execução (essenciais)
- Use npx para garantir o Cypress local: `npx cypress open` (GUI) ou `npx cypress run` (headless).
- Executar um spec específico (exemplo encontrado):

```
npx cypress run --spec "cypress/e2e/registrar-usuario.cy.js"
```

Observação: `package.json` não define scripts de teste; o agente pode propor adicionar scripts como `"cypress:open": "cypress open"` ou `"cypress:run": "cypress run"` em PRs separados.

## Convenções e padrões detectados

### Estrutura de Testes
- Use o padrão AAA (Arrange-Act-Assert) para organizar os testes:
  ```javascript
  it('should do something', () => {
    // Arrange - preparação do cenário
    const input = 'test@email.com'
    
    // Act - execução da ação
    cy.get('[data-testid=email-input]')
      .type(input)
    
    // Assert - verificação do resultado
    cy.get('[data-testid=error-message]')
      .should('not.exist')
  })
  ```

### Seletores e Modularização
- SEMPRE use seletores específicos e únicos, em ordem de preferência:
  1. `data-testid` (melhor opção): `[data-testid=submit-button]`
  2. `id`: `#login-form`
  3. Atributos específicos: `[name=email]`
  4. Classes apenas quando necessário e específicas: `.login-error-message`

**O mapeamento dos elementos deve estar obrigatoriamente no arquivo `index.js` do respectivo módulo** (exemplo: `cypress/modules/login/index.js`). O arquivo de teste deve conter apenas as funções de cada ação e os asserts para validação, nunca o mapeamento dos elementos ou mapeamentos harded-code.

Exemplo:
```javascript
// cypress/modules/login/index.js
class Login {
  elements = {
    emailInput: () => cy.get('[data-testid=email-input]'),
    submitButton: () => cy.get('[data-testid=submit-button]')
  }

  fillLoginForm(email, password) {
    this.elements.emailInput().type(email)
    this.elements.submitButton().click()
  }
}

export default new Login()
```

// cypress/e2e/login.cy.js
import login from '../modules/login'

it('deve logar com sucesso', () => {
  login.fillLoginForm('usuario@email.com', 'senha123')
  cy.get('[data-testid=login-success]').should('be.visible')
})

### Convenções de Código OBRIGATÓRIAS
- SEMPRE use aspas simples (') para strings
- NUNCA use ponto e vírgula (;) no final das instruções
- Use camelCase: `loginPage.js`, `fillLoginForm()`
- Use PascalCase para classes: `Login`, `CadastroUsuario`
- Crie `index.js` dentro de `cypress/modules/[modulo]`
- Aplique quebras de linha nas ações do cy:
  ```javascript
  cy.get('[data-testid=email]')
    .type('test@email.com')
    .should('have.value', 'test@email.com')
  ```
- Use indentação de 2 espaços

### Outros Padrões
- Test files usam sintaxe Jest/Mocha-like (`describe`/`it`)
- Inclua referência de tipos: `/// <reference types="cypress" />`
- Use fixtures para dados repetidos
- Comandos reutilizáveis em `cypress/support/commands.js`

## Integrações e dependências externas
- Dependência principal: `cypress` (ver `package.json` — versão usada: ^13.7.3).
- Não há configurações CI discoverable no repositório (ex.: GitHub Actions). Se for adicionar CI, inclua passos para instalar dependências (`npm ci`) e rodar `npx cypress run`.

## Padrões de mudança e segurança para o agente
- Não altere configuração global sem justificar (por exemplo `cypress.config.js`) — prefira abrir PR com descrição clara do porquê.
- Ao atualizar testes, mantenha o estilo CommonJS (require/module.exports) presente em `cypress.config.js`.
- Se for necessário adicionar novas dependências, atualizar `package.json` e incluir um `npm ci`/`npm install` passo no PR descrição.

## Exemplos concretos do repositório
- Test encontrado: `cypress/e2e/registrar-usuario.cy.js` — contém passos comentados (em português) e atualmente faz apenas `cy.visit('https://example.cypress.io')`.
- Arquivo de configuração: `cypress.config.js` — função `setupNodeEvents(on, config)` presente, sem listeners configurados (ponto natural para instrumentação/relatórios).

## Sugerido para PRs do agente (checklist mínimo)
- [ ] Executar localmente `npx cypress open` e/ou `npx cypress run --spec "cypress/e2e/<file>.cy.js"` ao modificar testes.
- [ ] Descrever claramente mudanças em `cypress.config.js` quando presentes.
- [ ] Se adicionar scripts npm, documentar-os no README ou no texto do PR.

## Onde procurar mais contexto
- Inspecionar `cypress/support/commands.js` para comandos disponíveis.
- Ver `cypress/fixtures/` para exemplos de dados.
- Ver `package.json` para versão de `cypress` e outras dependências.

--
Se algo importante ficou ausente ou você quer que eu incorpore convenções de estilo (lint, scripts npm, ou CI) no arquivo, diga o foco e eu atualizo o documento ou proponho changesets/PRs.
