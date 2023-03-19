"use strict";

var _ = _interopRequireDefault(require("???"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('login', function () {
  context('quando submeto o formulário', function () {
    it('deve logar com sucesso', function () {
      var user = {
        name: 'Andressa',
        email: 'andressa@icloud.com',
        password: 'pwd123'
      };

      _["default"].submit(user.email, user.password);

      cy.get('.logged-user div a').should('be.visible').should('have.text', 'Olá, ' + user.name);
    });
    it('não deve logar com senha incorreta', function () {
      var user = {
        name: 'Andressa',
        email: 'andressa@icloud.com',
        password: 'abc123'
      };
      cy.visit('http://localhost:3000');
      cy.get('input[placeholder$=email]').type(user.email);
      cy.get('input[placeholder*=senha]').type(user.password); ////button[text()="Entrar"]

      cy.contains('button', 'Entrar').click();
      var message = 'Ocorreu um erro ao fazer login, verifique suas credenciais';
      cy.get('.notice-container').should('be.visible').find('.error p').should('have.text', message);
    });
    it('não deve logar com email não cadastrado', function () {
      var user = {
        name: 'Andressa',
        email: 'andre@404.com',
        password: 'abc123'
      };
      cy.visit('http://localhost:3000');
      cy.get('input[placeholder$=email]').type(user.email);
      cy.get('input[placeholder*=senha]').type(user.password); ////button[text()="Entrar"]

      cy.contains('button', 'Entrar').click();
      var message = 'Ocorreu um erro ao fazer login, verifique suas credenciais';
      cy.get('.notice-container').should('be.visible').find('.error p').should('have.text', message);
    });
  });
});
//# sourceMappingURL=login.cy.dev.js.map
