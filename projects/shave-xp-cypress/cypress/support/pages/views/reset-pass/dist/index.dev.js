"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ResetPassPage =
/*#__PURE__*/
function () {
  function ResetPassPage() {
    _classCallCheck(this, ResetPassPage);
  }

  _createClass(ResetPassPage, [{
    key: "go",
    value: function go() {
      cy.visit('/reset-password?token=' + token);
      cy.get('form h1').should('have.text', 'Resetar senha');
    }
  }, {
    key: "submit",
    value: function submit(pass, confirmPass) {
      cy.get('input[placeholder="Nova senha"]').type(newPass);
      cy.get('input[placeholder="Confirmação de senha"]').type(confirmPass);
      cy.contains('button', 'Alterar senha').click();
    }
  }, {
    key: "noticeShouldBe",
    value: function noticeShouldBe(expectedText) {
      cy.get('.notice p', {
        timeout: 10000
      }).should('be.visible').should('have.text', expectedText);
    }
  }]);

  return ResetPassPage;
}();

var _default = new ResetPassPage();

exports["default"] = _default;
//# sourceMappingURL=index.dev.js.map
