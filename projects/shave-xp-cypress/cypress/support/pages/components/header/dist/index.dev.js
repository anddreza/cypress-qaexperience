"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Header =
/*#__PURE__*/
function () {
  function Header() {
    _classCallCheck(this, Header);
  }

  _createClass(Header, [{
    key: "userShouldBeLoggedIn",
    value: function userShouldBeLoggedIn(name) {
      // split é uma função do JS para separar scripts
      var firstName = name.split(' ')[0];
      cy.get('.logged-user div a').should('be.visible').should('have.text', 'Olá, ' + firstName);
    }
  }]);

  return Header;
}();

var _default = new Header();

exports["default"] = _default;
//# sourceMappingURL=index.dev.js.map
