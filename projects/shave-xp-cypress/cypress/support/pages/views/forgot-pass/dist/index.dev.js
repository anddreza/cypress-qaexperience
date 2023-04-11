"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ForgotPassPage =
/*#__PURE__*/
function () {
  function ForgotPassPage() {
    _classCallCheck(this, ForgotPassPage);
  }

  _createClass(ForgotPassPage, [{
    key: "go",
    // função que vai acessar a pagina
    value: function go() {
      cy.visit('/forgot-password'); // checkpoint para garantir que estamos indo para o lugar certo 

      cy.get('form h1').should('have.text', 'Recuperar senha');
    } // submete o formulario de solicitação de troca de senha

  }, {
    key: "submit",
    value: function submit(email) {
      cy.get('input[placeholder$=mail]').type(email);
      cy.contains('button', 'Recuperar').click();
    }
  }, {
    key: "noticeShouldBe",
    value: function noticeShouldBe(expectedText) {
      cy.get('.notice p', {
        timeout: 10000
      }).should('be.visible').should('have.text', expectedText);
    }
  }]);

  return ForgotPassPage;
}();

var _default = new ForgotPassPage();

exports["default"] = _default;
//# sourceMappingURL=index.dev.js.map
