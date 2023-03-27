"use strict";

var _require = require('pg'),
    Pool = _require.Pool;

var dbConfig = {
  host: 'babar.db.elephantsql.com',
  user: 'knwprhil',
  password: 'LszmKao6wNjC76J2K5NXow-7DlTX40zG',
  database: 'knwprhil',
  port: 5432
};
var pool = new Pool('dbConfig');

function deleteUser(email) {
  return regeneratorRuntime.async(function deleteUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(pool.query('DELETE FROM users WHERE email = $1', [email]));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
}

function insertUser(user) {
  return regeneratorRuntime.async(function insertUser$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
        case "end":
          return _context2.stop();
      }
    }
  });
}

module.exports = {
  deleteUser: deleteUser,
  insertUser: insertUser
};
//# sourceMappingURL=db.dev.js.map
