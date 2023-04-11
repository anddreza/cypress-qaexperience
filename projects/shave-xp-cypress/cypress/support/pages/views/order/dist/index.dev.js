"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var OrderPage =
/*#__PURE__*/
function () {
  function OrderPage() {
    _classCallCheck(this, OrderPage);
  }

  _createClass(OrderPage, [{
    key: "hasOrder",
    value: function hasOrder() {
      cy.get('h1').should('be.visible').should('have.text', 'PEDIDO RECEBIDO');
      cy.get('p').should('be.visible').should('have.text', 'Agora e só aguardar para ser atendido(a)!');
    }
  }]);

  return OrderPage;
}();

var _default = new OrderPage();

exports["default"] = _default;
//# sourceMappingURL=index.dev.js.map
