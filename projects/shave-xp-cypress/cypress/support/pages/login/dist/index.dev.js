"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Loginpage =
/*#__PURE__*/
function () {
  function Loginpage() {
    _classCallCheck(this, Loginpage);
  }

  _createClass(Loginpage, [{
    key: "submit",
    value: function submit(email, password) {
      cy.visit('http://localhost:3000');
      cy.get('input[placeholder$=email]').type(user.email);
      cy.get('input[placeholder*=senha]').type(user.password);
      cy.contains('button', 'Entrar').click();
    }
  }]);

  return Loginpage;
}();
//# sourceMappingURL=index.dev.js.map
