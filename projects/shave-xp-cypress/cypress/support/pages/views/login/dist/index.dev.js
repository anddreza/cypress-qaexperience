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

// ṔascalCase - padrão oficial para criar classes em JS
var Loginpage =
/*#__PURE__*/
function () {
  // 	Aqui temos PageObject, temos aqui o encapsulamento
  function Loginpage() {
    _classCallCheck(this, Loginpage);

    this.alertError = '.alert-error';
    this.shared = _shared["default"];
  } // submit email = null, password = null


  _createClass(Loginpage, [{
    key: "submit",
    value: function submit() {
      var email = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var password = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      // função submit e com todos os steps para clicar no botão de 'Entrar'
      cy.visit('/');
      cy.get('input[placeholder$=email]').as('email');
      cy.get('input[placeholder*=senha]').as('password');

      if (email) {
        cy.get('@email').type(email); // agora que tenho o as('@email')
      }

      if (password) {
        cy.get('@password').type(password); // agora que tenho o as('@password)
      } //cy.get('input[placeholder$=email]').type(email)
      //cy.get('input[placeholder*=senha]').type(password)


      cy.contains('button', 'Entrar').click();
    }
  }, {
    key: "requiredFields",
    value: function requiredFields(emailMessage, passwordMessage) {
      cy.get(this.alertError).should('have.length', 2).and(function ($small) {
        // o $ é porque está buscando um elemento HTML 
        expect($small.get(0).textContent).to.equal(emailMessage);
        expect($small.get(1).textContent).to.equal(passwordMessage);
      });
    }
  }]);

  return Loginpage;
}();

var _default = new Loginpage(); // new é a palavra reservada que ativa a classe, e o objeto que importar já pode usa-la 


exports["default"] = _default;
//# sourceMappingURL=index.dev.js.map
