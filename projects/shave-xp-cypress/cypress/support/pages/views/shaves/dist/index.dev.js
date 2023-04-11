"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _header = _interopRequireDefault(require("../../components/header"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ShaversPage =
/*#__PURE__*/
function () {
  //noticeShouldBe(message) {
  //	cy.get('.notice-container')
  //		.should('be.visible')
  //		.find('.error p')
  //		.should('have.text', message)
  // Isso foi para class Header dentro da pasta header
  //}

  /*userShouldBeLoggedIn(name){
  	cy.get('.logged-user div a)
  		.should('be.visible')
  		.should('have.text', 'Olá, ' + name)
  } */
  function ShaversPage() {
    _classCallCheck(this, ShaversPage);

    // uma função que é ativado automaticamente quando chamado a classe
    this.header = _header["default"]; // criando um objeto chamado header dentro da página Shavers
    // this é para criar um objeto dentro da classe, quando chamar shaverspage vai catalogar o cabeçalho e vai me dar automaticamente 
  }

  _createClass(ShaversPage, [{
    key: "selectShaver",
    value: function selectShaver(name) {
      cy.contains('figcaption h3', name).should('be.visible').click();
    }
  }]);

  return ShaversPage;
}();

var _default = new ShaversPage(); // importanto usar para exportar 


exports["default"] = _default;
//# sourceMappingURL=index.dev.js.map
