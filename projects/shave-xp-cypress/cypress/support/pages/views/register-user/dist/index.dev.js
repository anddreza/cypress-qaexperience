"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _shared = _interopRequireDefault(require("../shared"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RegisterUserPage =
/*#__PURE__*/
function () {
  function RegisterUserPage() {
    _classCallCheck(this, RegisterUserPage);

    this.shared = _shared["default"];
  }

  _createClass(RegisterUserPage, [{
    key: "go",
    value: function go() {
      cy.visit('/signup');
      cy.get('form h1').should('have.text', 'Faça seu cadastro');
    }
  }, {
    key: "submit",
    value: function submit() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var email = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var password = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      this.go();
      cy.get('imput[placeholder="Nome completo]').as('name');
      cy.get('input[placeholder="Seu melhor email"]').as('email');
      cy.get('input[placeholder="Sua senha secreta"]').as('password');

      if (name) {
        cy.get('@name').type(name);
      }

      if (email) {
        cy.get('@email').type(email);
      }

      if (password) {
        cy.get('@password').type(password);
      }

      cy.contains('button', 'Cadastrar').click();
    }
  }, {
    key: "requiredFields",
    value: function requiredFields(nameMessage, emailMessage, passwordMessage) {
      cy.get('.alert-error').should('have.length', 3).and(function ($small) {
        expect($small.get(0).textContent).to.equal(nameMessage);
        expect($small.get(0).textContent).to.equal(emailMessage);
        expect($small.get(1).textContent).to.equal(passwordMessage);
      });
    }
  }]);

  return RegisterUserPage;
}();

var _default = new RegisterUserPage();

exports["default"] = _default;
//# sourceMappingURL=index.dev.js.map
