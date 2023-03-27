"use strict";

var express = require('express');

var app = express();
app.use(express.json());

var _require = require('./db'),
    deleteUser = _require.deleteUser;

app.get('/welcome', function (req, res) {
  res.json({
    message: 'Olá'
  });
});
app["delete"]('/user/:email', function _callee(req, res) {
  var email;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          email = req.params.email;
          _context.next = 3;
          return regeneratorRuntime.awrap(deleteUser(email));

        case 3:
          res.status(204).end();

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
});
app.post('/user', function _callee2(req, res) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
        case "end":
          return _context2.stop();
      }
    }
  });
});
app.listen(5000);
//# sourceMappingURL=app.dev.js.map
