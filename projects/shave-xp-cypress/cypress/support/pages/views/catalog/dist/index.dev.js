"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CatalogPage =
/*#__PURE__*/
function () {
  function CatalogPage() {
    _classCallCheck(this, CatalogPage);
  }

  _createClass(CatalogPage, [{
    key: "selectService",
    value: function selectService(name) {
      cy.contains('.catalog-item h3', name).should('be.visible').click();
    }
  }, {
    key: "confirmOrder",
    value: function confirmOrder() {
      cy.get('.swal2-confirm').click();
    }
  }, {
    key: "hasShaver",
    value: function hasShaver(name) {
      cy.get('figcaption h3').should('be.visible').should('have.text', name);
    }
  }, {
    key: "hasTitle",
    value: function hasTitle(title) {
      cy.get('.swal2-title').should('be.visible').should('have.text', title);
    }
  }]);

  return CatalogPage;
}();

var _default = new CatalogPage();

exports["default"] = _default;
//# sourceMappingURL=index.dev.js.map
