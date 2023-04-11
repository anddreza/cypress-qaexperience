"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SharedSteps =
/*#__PURE__*/
function () {
  function SharedSteps() {
    _classCallCheck(this, SharedSteps);
  }

  _createClass(SharedSteps, [{
    key: "noticeErrorShouldBe",
    value: function noticeErrorShouldBe(message) {
      cy.get('.notice-container').should('be.visible').find('.error p').should('have.text', message);
    }
  }, {
    key: "noticeSucessShouldBe",
    value: function noticeSucessShouldBe(message) {
      cy.get('.notice-container').should('be.visible').find('.sucess p').should('have.text', message);
    }
  }, {
    key: "alertShouldBe",
    value: function alertShouldBe(message) {
      cy.get('.alert-error').should('be.visible').should('have.text', message);
    }
  }]);

  return SharedSteps;
}();

var _default = new SharedSteps();

exports["default"] = _default;
//# sourceMappingURL=index.dev.js.map
